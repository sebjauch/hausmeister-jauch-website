import React from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

/**
 * Gemeinsames Layout für Impressum, Datenschutz und ähnliche Textseiten.
 * Props: metaTitle, metaDescription, path, eyebrow, title, children
 */
export default function LegalPageLayout({
  metaTitle,
  metaDescription,
  path,
  eyebrow,
  title,
  children,
}) {
  return (
    <>
      <Navbar />

      <section className="pt-32 lg:pt-40 pb-16 lg:pb-24 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            ZURÜCK ZUR STARTSEITE
          </a>

          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground block mb-3">
              {eyebrow}
            </span>
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-8">
              {title}
            </h1>

            <div className="space-y-6 text-sm text-foreground/80 leading-relaxed">
              {children}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}