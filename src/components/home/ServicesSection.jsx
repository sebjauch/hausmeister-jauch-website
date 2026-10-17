import React from "react";
import { Leaf, Droplets, Wrench, Hammer, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Gartenarbeiten",
    icon: Leaf,
    summary: "Hecke schneiden, Rasen mähen, Baumschnitt, Grünschnitt-Entsorgung",
    image: "/images/6a9b14516_schulhaus.webp",
    link: "/leistungen/gartenarbeiten",
  },
  {
    title: "Außenbereich & Pflege",
    icon: Droplets,
    summary: "Terrasse reinigen, Regenrinnen leeren, Wege kehren, Kontrollgänge",
    image: "/images/308d22519_20260601_113140.webp",
    link: "/leistungen/aussenbereich-pflege",
  },
  {
    title: "Reparaturen & Montage",
    icon: Wrench,
    summary: "Kleinere Reparaturen, Küchenmontage, Böden verlegen, Instandhaltung",
    image: "/images/69ad9eceb_20250129_114341.webp",
    link: "/leistungen/reparaturen-montage",
  },
  {
    title: "Holzarbeiten & Außenbau",
    icon: Hammer,
    summary: "Holzterrassen, Zäune und Sichtschutz, Balkonverkleidungen nach Maß",
    image: "/images/e5a6cf3b0_20210818_134337.webp",
    link: "/leistungen/holzarbeiten-aussenbau",
  },
];

export default function ServicesSection() {
  return (
    <section id="leistungen" className="py-16 lg:py-24 px-6 lg:px-10 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 lg:mb-14 max-w-2xl">
          <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-4">
            Meine Leistungen
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Für Privatkunden, Hausverwaltungen und Unternehmen – einmalig oder
            regelmäßig.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <a
                key={service.link}
                href={service.link}
                className="group flex sm:flex-col border border-border bg-card hover:border-primary/40 transition-colors duration-300 overflow-hidden">
                <div className="w-28 sm:w-full shrink-0 sm:h-44 lg:h-48 overflow-hidden">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 lg:p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-primary shrink-0 hidden sm:block" />
                    <h3 className="font-heading text-lg lg:text-xl font-bold text-primary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-1">
                    {service.summary}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
