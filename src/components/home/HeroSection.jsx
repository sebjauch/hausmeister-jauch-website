import React from "react";
import { Check, Phone } from "lucide-react";

const HERO_IMAGE = "/images/9be22a100_20230617_104423.webp";

const CHECKS = [
  "Fester Ansprechpartner",
  "Kostenloses Angebot",
  "Rechnung steuerlich absetzbar",
];

export default function HeroSection() {
  const scrollTo = (e, id) => {
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <p className="font-heading text-sm font-semibold text-accent mb-4">
            Hausmeisterservice Sebastian Jauch
          </p>

          <h1 className="font-heading text-3xl sm:text-4xl xl:text-5xl font-bold leading-[1.15] text-primary mb-5">
            Ihr Hausmeister in Ismaning, Unterföhring und München Nord
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
            Gartenpflege, Objektbetreuung, Reparaturen und Montage – zuverlässig
            erledigt von einem festen Ansprechpartner.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
            <a
              href="#kontakt"
              onClick={(e) => scrollTo(e, "#kontakt")}
              className="text-center bg-primary text-primary-foreground px-7 py-4 font-heading font-semibold text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors duration-300">
              Anfrage mit Fotos senden
            </a>
            <a
              href="tel:+491746403178"
              className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-7 py-4 font-heading font-semibold text-sm tracking-wider hover:bg-foreground/5 transition-colors duration-300">
              <Phone className="w-4 h-4" />
              0174 640 31 78
            </a>
          </div>

          <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2">
            {CHECKS.map((c) => (
              <li key={c} className="flex items-center gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-accent shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-64 sm:h-80 lg:h-[520px] overflow-hidden">
          <img
            src={HERO_IMAGE}
            alt="Heckenschnitt und Grünpflege durch Sebastian Jauch"
            width={1024}
            height={577}
            fetchpriority="high"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
