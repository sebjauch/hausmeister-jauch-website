import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CheckCircle, Send, AlertCircle, Loader2, Paperclip, X } from "lucide-react";
import { sendForm } from "@/lib/sendForm";
import ContactMap from "@/components/home/ContactMap";

const MAX_PHOTOS = 8;

const SERVICE_LABELS = {
  gartenarbeiten: "Gartenarbeiten",
  hecke: "Hecke schneiden",
  rasen: "Rasen mähen",
  terrasse: "Terrassenreinigung",
  regenrinnen: "Regenrinnen leeren und reinigen",
  leuchtmittel: "Leuchtmittelaustausch",
  holzarbeiten: "Holzarbeiten & Außenbau",
  reparaturen: "Kleinere Reparaturen",
  sonstiges: "Sonstiges",
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorDetail, setErrorDetail] = useState("");
  const [photos, setPhotos] = useState([]);

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setPhotos([]);
  };

  const handlePhotoSelect = (e) => {
    const files = Array.from(e.target.files || []).filter((file) =>
      file.type.startsWith("image/"),
    );
    setPhotos((prev) =>
      [
        ...prev,
        ...files.map((file) => ({
          name: file.name,
          file,
          url: URL.createObjectURL(file),
        })),
      ].slice(0, MAX_PHOTOS),
    );
    e.target.value = "";
  };

  const removePhoto = (idx) => {
    setPhotos((prev) => prev.filter((_, i) => i !== idx));
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
          service: SERVICE_LABELS[formData.service] || formData.service || "",
          message: formData.message,
        },
        photos.map((p) => p.file),
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
      <section id="kontakt" className="py-24 lg:py-32 px-6 lg:px-10">
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
              Vielen Dank!
            </h3>
            <p className="text-muted-foreground text-lg">
              Ihre Anfrage wurde erfolgreich versendet. Ich melde mich
              schnellstmöglich bei Ihnen.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="font-mono text-xs tracking-wider text-primary hover:text-primary/80 transition-colors mt-4 underline underline-offset-4"
            >
              WEITERE ANFRAGE STELLEN
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="kontakt" className="py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground block mb-3">
              KONTAKT
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-6">
              Kontaktieren Sie uns!
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-md">
              Beschreiben Sie uns Ihr Anliegen und wir erstellen Ihnen ein
              unverbindliches Angebot. Persönlich, schnell und unkompliziert.
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
          </div>

          {/* Right: Form */}
          <div>
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
                <Label className="font-mono text-xs tracking-wider text-muted-foreground">LEISTUNG</Label>
                <Select
                  value={formData.service}
                  onValueChange={(val) => setFormData({ ...formData, service: val })}
                >
                  <SelectTrigger className="bg-transparent border-border h-12 rounded-none font-body">
                    <SelectValue placeholder="Gewünschte Leistung auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gartenarbeiten">Gartenarbeiten</SelectItem>
                    <SelectItem value="hecke">Hecke schneiden</SelectItem>
                    <SelectItem value="rasen">Rasen mähen</SelectItem>
                    <SelectItem value="terrasse">Terrassenreinigung</SelectItem>
                    <SelectItem value="regenrinnen">Regenrinnen leeren und reinigen</SelectItem>
                    <SelectItem value="leuchtmittel">Leuchtmittelaustausch</SelectItem>
                    <SelectItem value="holzarbeiten">Holzarbeiten & Außenbau</SelectItem>
                    <SelectItem value="reparaturen">Kleinere Reparaturen</SelectItem>
                    <SelectItem value="sonstiges">Sonstiges</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="font-mono text-xs tracking-wider text-muted-foreground">NACHRICHT</Label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                  rows={5}
                  className="bg-transparent border-border focus:border-primary rounded-none font-body resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label className="font-mono text-xs tracking-wider text-muted-foreground">FOTOS (OPTIONAL)</Label>
                <div className="border border-dashed border-border p-4">
                  {photos.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-3">
                      {photos.map((photo, idx) => (
                        <div key={idx} className="relative w-16 h-16 border border-border overflow-hidden group">
                          <img src={photo.url} alt={photo.name} className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={() => removePhoto(idx)}
                            className="absolute top-0 right-0 bg-foreground/80 text-background p-0.5"
                            aria-label="Foto entfernen"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Paperclip className="w-4 h-4" />
                    {photos.length >= MAX_PHOTOS ? `Maximal ${MAX_PHOTOS} Fotos` : "Fotos auswählen"}
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handlePhotoSelect}
                      className="hidden"
                      disabled={photos.length >= MAX_PHOTOS}
                    />
                  </label>
                </div>
              </div>

              {status === "error" && (
                <div className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive/30">
                  <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-destructive leading-relaxed">
                      Die Anfrage konnte leider nicht versendet werden. Bitte
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
                    Anfrage absenden
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}