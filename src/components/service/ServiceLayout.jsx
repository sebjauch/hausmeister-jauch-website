import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

const LOGO_URL = "/images/744b80371_ChatGPTImage10Juni202615_54_43.png";

/**
 * Gemeinsames Layout für alle Leistungs-Unterseiten.
 * Props:
 *  - metaTitle: Suffix für den <title>
 *  - metaDescription: Meta-Description (lokales SEO)
 *  - path: Canonical-Pfad (z.B. "/leistungen/gartenarbeiten")
 *  - eyebrow: kleines Label über der Überschrift
 *  - title: Hauptüberschrift (H1)
 *  - lead: Einleitungstext
 *  - heroImage: Bild-URL
 *  - children: individuelle Inhaltsblöcke der Seite
 */
export default function ServiceLayout({
  metaTitle,
  metaDescription,
  path,
  eyebrow,
  title,
  lead,
  heroImage,
  heroContain = false,
  children,
}) {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            ZURÜCK ZUR STARTSEITE
          </a>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground block mb-3">
                {eyebrow}
              </span>
              <h1 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-6 leading-[1.15]">
                {title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                {lead}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative h-72 lg:h-96 overflow-hidden"
            >
              <img
                src={heroImage}
                alt={title}
                className={`w-full h-full ${heroContain ? "object-contain" : "object-cover"}`}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Individueller Inhalt */}
      <div className="max-w-3xl mx-auto px-6 lg:px-10 pb-20 lg:pb-28 space-y-10">
        {children}
      </div>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-24 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
            Jetzt unverbindliches Angebot anfordern
          </h2>
          <p className="text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Wir beraten Sie persönlich und erstellen Ihnen ein faires Angebot –
            schnell, transparent und unkompliziert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+491746403178"
              className="inline-flex items-center justify-center gap-3 bg-background text-foreground px-8 py-4 font-heading font-semibold text-sm tracking-wider uppercase hover:bg-background/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              0174 640 31 78
            </a>
            <a
              href="/#kontakt"
              className="inline-flex items-center justify-center gap-3 border border-primary-foreground/40 text-primary-foreground px-8 py-4 font-heading font-semibold text-sm tracking-wider uppercase hover:bg-primary-foreground/10 transition-colors"
            >
              Anfrage stellen
            </a>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-primary-foreground/70">
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Einsatzgebiet München Nord & Umgebung
            </span>
            <a href="mailto:info@hausmeister-jauch.de" className="inline-flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Mail className="w-4 h-4" /> info@hausmeister-jauch.de
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}