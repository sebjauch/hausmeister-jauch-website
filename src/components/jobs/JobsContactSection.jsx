import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CheckCircle, Send, AlertCircle, Loader2, Paperclip, X, FileText } from "lucide-react";
import { sendForm } from "@/lib/sendForm";
import ContactMap from "@/components/home/ContactMap";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const MAX_TOTAL_SIZE = 25 * 1024 * 1024; // 25 MB
const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
  "image/webp",
];

const POSITIONS = [
  "Hausmeister (m/w/d)",
  "Fahrer für Winterräumdienst (m/w/d)",
  "Bodenleger (m/w/d)",
  "Minijob Allroundhandwerker (m/w/d)",
  "Gartenbauer / Gärtner (m/w/d)",
  "Reinigungskraft (m/w/d)",
  "Initiativbewerbung",
];

export default function JobsContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorDetail, setErrorDetail] = useState("");
  const [documents, setDocuments] = useState([]);
  const [uploadError, setUploadError] = useState("");

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", position: "", message: "" });
    setDocuments([]);
  };

  const handleDocumentSelect = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setUploadError("");
    const valid = [];
    let total = documents.reduce((sum, d) => sum + d.file.size, 0);
    for (const file of files) {
      if (file.size > MAX_FILE_SIZE) {
        setUploadError(`Die Datei „${file.name}" ist größer als 10 MB.`);
        continue;
      }
      if (!ACCEPTED_TYPES.includes(file.type)) {
        setUploadError(
          `Die Datei „${file.name}" hat ein nicht unterstütztes Format. Erlaubt: PDF, DOC, DOCX, JPG, PNG.`,
        );
        continue;
      }
      if (total + file.size > MAX_TOTAL_SIZE) {
        setUploadError("Alle Dateien zusammen dürfen höchstens 25 MB groß sein.");
        continue;
      }
      total += file.size;
      valid.push({ name: file.name, file });
    }
    setDocuments((prev) => [...prev, ...valid]);
    e.target.value = "";
  };

  const removeDocument = (idx) => {
    setDocuments((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await sendForm(
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.position || "Bewerbung",
          message: formData.message,
          isApplication: "true",
        },
        documents.map((d) => d.file),
      );
      setStatus("success");
      resetForm();
    } catch (err) {
      setErrorDetail(err?.message || "");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="bewerbung" className="py-24 lg:py-32 px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-primary">
              Vielen Dank für Ihre Bewerbung!
            </h3>
            <p className="text-muted-foreground text-lg">
              Ihre Unterlagen wurden erfolgreich versendet. Wir melden uns
              schnellstmöglich bei Ihnen.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="font-mono text-xs tracking-wider text-primary hover:text-primary/80 transition-colors mt-4 underline underline-offset-4"
            >
              WEITERE BEWERBUNG EINREICHEN
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="bewerbung" className="py-24 lg:py-32 px-6 lg:px-10 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground block mb-3">
              BEWERBUNG
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-6">
              Jetzt bewerben!
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-md">
              Sie haben Interesse an einer unserer Stellen oder möchten sich
              initiativ bei uns vorstellen? Schreiben Sie uns – wir freuen uns
              auf Ihre Bewerbung.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs text-muted-foreground tracking-wider w-20 shrink-0 pt-1">TEL</span>
                <a href="tel:+491746403178" className="text-foreground font-medium hover:text-primary transition-colors">0174 640 31 78</a>
              </div>
              <div className="border-t border-border" />
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs text-muted-foreground tracking-wider w-20 shrink-0 pt-1">EMAIL</span>
                <a href="mailto:info@hausmeister-jauch.de" className="text-foreground font-medium hover:text-primary transition-colors break-all">info@hausmeister-jauch.de</a>
              </div>
              <div className="border-t border-border" />
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs text-muted-foreground tracking-wider w-20 shrink-0 pt-1">ZEITEN</span>
                <p className="text-foreground font-medium">Montag – Freitag: 08:00 – 20:00 Uhr</p>
              </div>
            </div>

            <ContactMap />
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="font-mono text-xs tracking-wider text-muted-foreground">NAME</Label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ihr Name"
                    className="bg-transparent border-border focus:border-primary h-12 rounded-none font-body"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="font-mono text-xs tracking-wider text-muted-foreground">TELEFON</Label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Ihre Telefonnummer"
                    className="bg-transparent border-border focus:border-primary h-12 rounded-none font-body"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="font-mono text-xs tracking-wider text-muted-foreground">E-MAIL</Label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Ihre E-Mail-Adresse"
                  className="bg-transparent border-border focus:border-primary h-12 rounded-none font-body"
                />
              </div>

              <div className="space-y-2">
                <Label className="font-mono text-xs tracking-wider text-muted-foreground">STELLE</Label>
                <Select
                  value={formData.position}
                  onValueChange={(val) => setFormData({ ...formData, position: val })}
                >
                  <SelectTrigger className="bg-transparent border-border h-12 rounded-none font-body">
                    <SelectValue placeholder="Gewünschte Stelle auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    {POSITIONS.map((pos) => (
                      <SelectItem key={pos} value={pos}>{pos}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="font-mono text-xs tracking-wider text-muted-foreground">NACHRICHT</Label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Stellen Sie sich kurz vor oder beschreiben Sie Ihr Anliegen..."
                  rows={5}
                  className="bg-transparent border-border focus:border-primary rounded-none font-body resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label className="font-mono text-xs tracking-wider text-muted-foreground">
                  BEWERBUNGSUNTERLAGEN (OPTIONAL)
                </Label>
                <div className="border border-dashed border-border p-4">
                  {documents.length > 0 && (
                    <div className="flex flex-col gap-2 mb-3">
                      {documents.map((doc, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 border border-border bg-background px-3 py-2"
                        >
                          <FileText className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-sm text-foreground truncate flex-1">{doc.name}</span>
                          <button
                            type="button"
                            onClick={() => removeDocument(idx)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                            aria-label="Datei entfernen"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Paperclip className="w-4 h-4" />
                    Lebenslauf, Anschreiben etc. anhängen
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp"
                      multiple
                      onChange={handleDocumentSelect}
                      className="hidden"
                    />
                  </label>
                  <p className="text-xs text-muted-foreground/70 mt-2">
                    Erlaubt: PDF, DOC, DOCX, JPG, PNG · max. 10 MB pro Datei, 25 MB gesamt
                  </p>
                </div>
                {uploadError && (
                  <p className="text-sm text-destructive mt-1">{uploadError}</p>
                )}
              </div>

              {status === "error" && (
                <div className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive/30">
                  <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-destructive leading-relaxed">
                      Die Bewerbung konnte leider nicht versendet werden. Bitte
                      versuchen Sie es später erneut oder schreiben Sie direkt an
                      info@hausmeister-jauch.de.
                    </p>
                    {errorDetail && (
                      <p className="text-xs text-destructive/70 mt-1">Technischer Hinweis: {errorDetail}</p>
                    )}
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary text-primary-foreground px-8 py-4 font-heading font-semibold text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Wird gesendet…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Bewerbung absenden
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}