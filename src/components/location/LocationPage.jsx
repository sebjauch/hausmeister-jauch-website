import React from "react";
import { Check, ArrowRight } from "lucide-react";
import ServiceLayout from "@/components/service/ServiceLayout";

const SERVICES = [
  {
    title: "Gartenarbeiten",
    text: "Hecke schneiden, Rasen mähen, Grünschnitt, Unkraut und Laub.",
    href: "/leistungen/gartenarbeiten",
  },
  {
    title: "Außenbereich & Pflege",
    text: "Terrassen, Regenrinnen, Wege und Einfahrten, Objektkontrolle.",
    href: "/leistungen/aussenbereich-pflege",
  },
  {
    title: "Reparaturen & Montage",
    text: "Kleinere Reparaturen, Instandhaltung und Montagearbeiten.",
    href: "/leistungen/reparaturen-montage",
  },
  {
    title: "Holzarbeiten & Außenbau",
    text: "Terrassen aus Holz, Zäune, Sichtschutz und Balkonverkleidungen.",
    href: "/leistungen/holzarbeiten-aussenbau",
  },
];

const STEPS = [
  "Sie rufen an, schreiben per WhatsApp oder nutzen das Kontaktformular – gerne mit Fotos.",
  "Bei größeren Arbeiten schauen wir uns das Objekt vor Ort an.",
  "Sie erhalten ein transparentes, unverbindliches Angebot.",
  "Wir erledigen die Arbeiten zum vereinbarten Termin und hinterlassen alles ordentlich.",
];

/**
 * Gemeinsames Gerüst für Ortsseiten (z. B. /hausmeister-ismaning).
 * Ortsspezifische Texte kommen als children, Vorteile und Fragen als Props.
 */
export default function LocationPage({ place, title, lead, heroImage, advantages, faqs, children }) {
  return (
    <ServiceLayout eyebrow={`EINSATZGEBIET ${place.toUpperCase()}`} title={title} lead={lead} heroImage={heroImage}>
      {children}

      <h2 className="font-heading text-2xl font-bold text-primary">Unsere Leistungen in {place}</h2>
      <div className="grid sm:grid-cols-2 gap-4 not-prose">
        {SERVICES.map((s) => (
          <a
            key={s.href}
            href={s.href}
            className="group block border border-border bg-card p-5 hover:border-primary/40 transition-colors"
          >
            <span className="font-heading text-lg font-bold text-primary flex items-center justify-between gap-2">
              {s.title}
              <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="block mt-2 text-sm text-muted-foreground">{s.text}</span>
          </a>
        ))}
      </div>

      <h2 className="font-heading text-2xl font-bold text-primary">Warum Kunden in {place} uns beauftragen</h2>
      <ul className="space-y-3">
        {advantages.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="font-heading text-2xl font-bold text-primary">So läuft Ihr Auftrag ab</h2>
      <ol className="space-y-3">
        {STEPS.map((step, i) => (
          <li key={step} className="flex items-start gap-4">
            <span className="w-7 h-7 shrink-0 bg-primary text-primary-foreground font-mono text-xs flex items-center justify-center">
              {i + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      <h2 className="font-heading text-2xl font-bold text-primary">Häufige Fragen aus {place}</h2>
      <div className="border-t border-border">
        {faqs.map((f) => (
          <details key={f.question} className="group border-b border-border">
            <summary className="cursor-pointer list-none py-4 font-heading font-semibold text-foreground flex items-center justify-between gap-4">
              {f.question}
              <span className="text-muted-foreground group-open:rotate-45 transition-transform text-xl leading-none">+</span>
            </summary>
            <p className="pb-4 text-muted-foreground leading-relaxed">{f.answer}</p>
          </details>
        ))}
      </div>
    </ServiceLayout>
  );
}

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
