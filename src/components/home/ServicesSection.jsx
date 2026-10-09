import React, { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Droplets, Wrench, Scissors, Home, Trash2, Hammer, ArrowRight } from "lucide-react";

const services = [
{
  id: "01",
  title: "Gartenarbeiten",
  icon: Leaf,
  description: "Ihr Garten in besten Händen — vom Frühjahr bis in den Herbst.",
  items: ["Hecke schneiden", "Rasen mähen", "Grünschnitt & Entsorgung", "Baumschnitt", "Unkrautentfernung", "Bepflanzungen", "Laub entfernen"],
  image: "/images/6a9b14516_schulhaus.webp",
  contain: true,
  link: "/leistungen/gartenarbeiten"
},
{
  id: "02",
  title: "Außenbereich & Pflege",
  icon: Droplets,
  description: "Rund ums Haus im Blick — professionell und zuverlässig.",
  items: ["Terrassenreinigung", "Regenrinnen leeren und reinigen", "Wege & Einfahrten", "Kehrarbeiten", "Leuchtmittelaustausch", "Objektkontrolle", "Drohnenservice"],
  image: "/images/308d22519_20260601_113140.webp",
  link: "/leistungen/aussenbereich-pflege"
},
{
  id: "03",
  title: "Reparaturen & Montage",
  icon: Wrench,
  description: "Kleine Schäden, große Wirkung — schnell und zuverlässig behoben.",
  items: ["Kleinere Reparaturen", "Instandhaltungsmaßnahmen", "Montagearbeiten", "Sichtschutz"],
  image: "/images/7c00859b0_20240917_160555.webp",
  link: "/leistungen/reparaturen-montage"
},
{
  id: "04",
  title: "Holzarbeiten & Außenbau",
  icon: Hammer,
  description: "Individuelle Lösungen aus Holz für Haus und Garten. Ob Terrassen, Zäune, Sichtschutzelemente oder Balkonverkleidungen – wir fertigen hochwertige Holzarbeiten nach Ihren Wünschen.",
  items: ["Terrassen aus Holz", "Zäune & Sichtschutz", "Balkonverkleidungen", "Maßarbeit nach Wunsch"],
  image: "/images/e5a6cf3b0_20210818_134337.webp",
  link: "/leistungen/holzarbeiten-aussenbau"
}];


export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section id="leistungen" className="relative py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-start justify-between mb-16 lg:mb-24">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground block mb-3">
              LEISTUNGEN
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-primary">
              Was wir anbieten
            </h2>
          </div>
          

          
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="group relative border border-border bg-card hover:border-primary/40 transition-all duration-500 overflow-hidden">
                
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
              loading="lazy"
              decoding="async"
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${service.contain ? "object-contain" : "object-cover"}`} />
                  
                  <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors duration-500" />
                  {/* Number badge */}
                  <span className="absolute top-4 right-4 font-mono text-xs text-white/60 tracking-wider bg-foreground/30 backdrop-blur-sm px-2 py-1">
                    {service.id}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl lg:text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Items */}
                  <ul className="space-y-2 mb-6">
                    {service.items.map((item) =>
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <span className="w-1 h-1 bg-primary rounded-full shrink-0" />
                        {item}
                      </li>
                    )}
                  </ul>

                  <a
                    href={service.link}
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-primary uppercase hover:gap-3 transition-all"
                  >
                    MEHR ERFAHREN
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}