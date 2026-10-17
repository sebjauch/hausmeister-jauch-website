import React from "react";
import { Check } from "lucide-react";

const IMAGE_URL = "/images/bd6105059_20220922_164459.webp";

const REASONS = [
  "Persönlich: Sie sprechen immer direkt mit mir.",
  "Zuverlässig: Vereinbarte Termine halte ich ein.",
  "Sauber: Ich hinterlasse alles ordentlich.",
  "Transparent: Sie erhalten vorab ein nachvollziehbares Angebot.",
  "Regional: Sitz in Ismaning, kurze Wege im Münchner Norden.",
];

export default function AboutSection() {
  return (
    <section id="ueber-mich" className="py-16 lg:py-24 px-6 lg:px-10 bg-secondary/40">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="relative">
          <img
            loading="lazy"
            decoding="async"
            src={IMAGE_URL}
            alt="Sebastian Jauch bei der Arbeit"
            className="w-full h-72 sm:h-96 lg:h-[520px] object-cover"
          />
        </div>

        <div>
          <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-6">
            Über mich
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Mein Name ist Sebastian Jauch. Als selbstständiger Hausmeister unterstütze
            ich Privatkunden, Eigentümer, Hausverwaltungen und Unternehmen bei der
            Pflege, Betreuung und Instandhaltung von Häusern, Wohnungen und Grundstücken.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Ob einmalige Gartenarbeit, eine neue Küche oder regelmäßige Objektbetreuung –
            ich bespreche Ihr Vorhaben persönlich mit Ihnen.
          </p>
          <ul className="space-y-3">
            {REASONS.map((r) => {
              const [label, text] = r.split(": ");
              return (
                <li key={label} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    <strong className="font-semibold">{label}:</strong> {text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
