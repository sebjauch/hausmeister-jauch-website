// Cloudflare Pages Function: POST /api/contact
// Ersetzt die frühere Base44-Funktion "sendContactRequest".
// Verschickt Kontaktanfragen und Bewerbungen über Resend an info@hausmeister-jauch.de
// und schickt dem Absender eine Bestätigung.
// Benötigt die Umgebungsvariable RESEND_API_KEY (in Cloudflare als Secret hinterlegen).

const FROM = "Hausmeisterservice Jauch <kontakt@hausmeister-jauch.de>";
const TO = "info@hausmeister-jauch.de";
const MAX_TOTAL_BYTES = 30 * 1024 * 1024;

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

function toBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

async function sendMail(apiKey, payload) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(result?.message || "Resend-Fehler");
  }
  return result;
}

export async function onRequestPost({ request, env }) {
  try {
    const form = await request.formData();
    const field = (key) => (form.get(key) ?? "").toString().trim();

    const name = field("name");
    const phone = field("phone");
    const email = field("email");
    const service = field("service");
    const message = field("message");
    const isApplication = field("isApplication") === "true";
    const files = form.getAll("files").filter((f) => typeof f === "object" && f.size > 0);

    if (!name || !email || !message) {
      return json({ success: false, error: "Pflichtfelder fehlen." }, 400);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ success: false, error: "Ungültige E-Mail-Adresse." }, 400);
    }
    if (!env.RESEND_API_KEY) {
      return json({ success: false, error: "Resend API-Key ist nicht hinterlegt." }, 500);
    }

    const totalBytes = files.reduce((sum, f) => sum + f.size, 0);
    if (totalBytes > MAX_TOTAL_BYTES) {
      return json({ success: false, error: "Die Dateien sind zu groß." }, 413);
    }

    const attachments = [];
    const photoTags = [];
    const documentNames = [];
    for (const [i, file] of files.entries()) {
      const contentType = file.type || "application/octet-stream";
      const attachment = {
        filename: file.name || `datei-${i + 1}`,
        content: toBase64(await file.arrayBuffer()),
        content_type: contentType,
      };
      if (!isApplication && contentType.startsWith("image/")) {
        attachment.content_id = `photo${i}`;
        photoTags.push(
          `<img src="cid:photo${i}" alt="Foto ${photoTags.length + 1}" style="width:200px; height:150px; object-fit:cover; border:1px solid #e5e5e5;" />`,
        );
      } else {
        documentNames.push(escapeHtml(attachment.filename));
      }
      attachments.push(attachment);
    }

    const heading = isApplication ? "Neue Bewerbung über die Homepage" : "Neue Anfrage über die Homepage";
    const serviceLabel = isApplication ? "Gewünschte Stelle" : "Gewünschte Leistung";
    const row = (label, value, first = false) =>
      `<tr${first ? "" : ' style="border-top:1px solid #eee;"'}><td style="padding:10px 0; font-weight:bold; color:#0E2A4E; width:160px; vertical-align:top;">${label}:</td><td style="padding:10px 0;">${value}</td></tr>`;

    const html = `
      <html><body style="font-family: Arial, Helvetica, sans-serif; color:#1F1F1F; background:#F7F7F5; padding:24px;">
        <div style="max-width:600px; margin:0 auto; background:#FFFFFF; border:1px solid #e5e5e5; padding:32px;">
          <h2 style="color:#0E2A4E; margin-top:0;">${heading}</h2>
          <p style="font-size:15px;">Es ist eine neue ${isApplication ? "Bewerbung" : "Kontaktanfrage"} über das Formular auf der Homepage eingegangen.</p>
          <table style="width:100%; font-size:15px; border-collapse:collapse; margin:24px 0;">
            ${row("Name", escapeHtml(name), true)}
            ${row("Telefonnummer", escapeHtml(phone || "nicht angegeben"))}
            ${row("E-Mail-Adresse", escapeHtml(email))}
            ${row(serviceLabel, escapeHtml(service || "nicht angegeben"))}
          </table>
          <h3 style="color:#0E2A4E; margin-bottom:8px;">Nachricht</h3>
          <p style="font-size:15px; line-height:1.6; background:#F7F7F5; padding:16px; border-left:3px solid #B79A55; white-space:pre-wrap;">${escapeHtml(message)}</p>
          ${photoTags.length ? `<h3 style="color:#0E2A4E; margin-bottom:8px;">Angehängte Fotos</h3><p style="font-size:15px;">${photoTags.length} Foto(s), die Originale hängen an dieser Mail.</p><div>${photoTags.join(" ")}</div>` : ""}
          ${documentNames.length ? `<h3 style="color:#0E2A4E; margin-bottom:8px;">${isApplication ? "Bewerbungsunterlagen" : "Anhänge"}</h3><ul style="font-size:15px; line-height:1.8; padding-left:20px;">${documentNames.map((n) => `<li>${n}</li>`).join("")}</ul>` : ""}
          <p style="color:#999; font-size:12px; margin-top:32px; border-top:1px solid #eee; padding-top:16px;">Diese E-Mail wurde automatisch über das Kontaktformular auf hausmeister-jauch.de versendet.</p>
        </div>
      </body></html>`;

    await sendMail(env.RESEND_API_KEY, {
      from: FROM,
      to: TO,
      reply_to: email,
      subject: heading,
      html,
      ...(attachments.length ? { attachments } : {}),
    });

    const replyHeading = isApplication ? "Vielen Dank für Ihre Bewerbung!" : "Vielen Dank für Ihre Anfrage!";
    const replyBody = isApplication
      ? "vielen Dank für Ihre Bewerbung beim Hausmeisterservice Sebastian Jauch. Wir haben Ihre Unterlagen erhalten und melden uns schnellstmöglich bei Ihnen."
      : "vielen Dank für Ihre Anfrage beim Hausmeisterservice Sebastian Jauch. Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich bei Ihnen.";
    const replyClosing = isApplication
      ? "Bitte haben Sie etwas Geduld, sollten Sie unter den vielen Bewerbungen sein. Wir setzen uns auf jeden Fall persönlich mit Ihnen in Verbindung."
      : "Für dringende Anfragen erreichen Sie uns auch telefonisch unter 0174 640 31 78.";

    // Die Bestätigung ist nett, aber nicht entscheidend: ein Fehler hier bricht die Anfrage nicht ab.
    await sendMail(env.RESEND_API_KEY, {
      from: FROM,
      to: email,
      subject: isApplication
        ? "Ihre Bewerbung beim Hausmeisterservice Sebastian Jauch"
        : "Ihre Anfrage beim Hausmeisterservice Sebastian Jauch",
      html: `
        <html><body style="font-family: Arial, Helvetica, sans-serif; color:#1F1F1F; background:#F7F7F5; padding:24px;">
          <div style="max-width:600px; margin:0 auto; background:#FFFFFF; border:1px solid #e5e5e5; padding:32px;">
            <h2 style="color:#0E2A4E; margin-top:0;">${replyHeading}</h2>
            <p style="font-size:15px; line-height:1.6;">Hallo ${escapeHtml(name)},</p>
            <p style="font-size:15px; line-height:1.6;">${replyBody}</p>
            <p style="font-size:15px; line-height:1.6;">${replyClosing}</p>
            <p style="font-size:15px; line-height:1.6;">Mit freundlichen Grüßen<br/>Ihr Team vom Hausmeisterservice Sebastian Jauch</p>
            <p style="color:#999; font-size:12px; margin-top:32px; border-top:1px solid #eee; padding-top:16px;">Hausmeisterservice Sebastian Jauch · Zacherlstraße 12 · 85737 Ismaning · 0174 640 31 78 · info@hausmeister-jauch.de</p>
          </div>
        </body></html>`,
    }).catch((error) => console.log(`Bestätigungsmail fehlgeschlagen: ${error.message}`));

    return json({ success: true });
  } catch (error) {
    return json({ success: false, error: error?.message ?? "Unbekannter Fehler" }, 500);
  }
}
