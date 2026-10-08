// Schickt Kontakt- und Bewerbungsformulare an die Cloudflare-Funktion /api/contact.
// Fotos werden vorher im Browser verkleinert, damit große Handyfotos die Mail nicht sprengen.

const MAX_IMAGE_EDGE = 2000;

async function shrinkImage(file) {
  if (!file.type.startsWith("image/") || file.size < 1024 * 1024) return file;
  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MAX_IMAGE_EDGE / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    canvas.getContext("2d").drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.85));
    if (!blob || blob.size >= file.size) return file;
    const name = file.name.replace(/\.[^.]+$/, "") + ".jpg";
    return new File([blob], name, { type: "image/jpeg" });
  } catch {
    return file;
  }
}

export async function sendForm(fields, files = []) {
  const body = new FormData();
  for (const [key, value] of Object.entries(fields)) {
    body.append(key, value ?? "");
  }
  for (const file of files) {
    body.append("files", await shrinkImage(file));
  }

  const response = await fetch("/api/contact", { method: "POST", body });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || result.success === false) {
    throw new Error(result.error || "Versand fehlgeschlagen");
  }
  return result;
}
