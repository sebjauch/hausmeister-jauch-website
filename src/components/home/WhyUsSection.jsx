import React from "react";
import { motion } from "framer-motion";
import { User, CalendarCheck, Sparkles, Receipt, MapPin } from "lucide-react";

const REASONS = [
  {
    icon: User,
    title: "Persönlich",
    description: "Sie haben einen festen Ansprechpartner.",
  },
  {
    icon: CalendarCheck,
    title: "Zuverlässig",
    description:
      "Vereinbarte Termine und Arbeiten werden zuverlässig eingehalten.",
  },
  {
    icon: Sparkles,
    title: "Sauber",
    description: "Wir hinterlassen das Grundstück ordentlich.",
  },
  {
    icon: Receipt,
    title: "Transparent",
    description: "Sie erhalten vorab ein nachvollziehbares Angebot.",
  },
  {
    icon: MapPin,
    title: "Regional",
    description: "Kurze Wege im Raum München und Umgebung.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="warum-jauch" className="py-24 lg:py-32 px-6 lg:px-10 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 lg:mb-20 max-w-2xl">
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground block mb-3">
            UNSERE STÄRKEN
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-6">
            Warum Hausmeisterservice Sebastian Jauch?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fünf gute Gründe, warum Sie sich auf uns verlassen können.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {REASONS.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group border border-border bg-card hover:border-primary/40 transition-all duration-500 p-8 lg:p-10 flex items-start gap-5"
            >
              <div className="w-12 h-12 shrink-0 bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl lg:text-2xl font-bold text-primary mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}