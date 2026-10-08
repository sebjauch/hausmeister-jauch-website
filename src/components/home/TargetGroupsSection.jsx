import React from "react";
import { motion } from "framer-motion";
import { Home, Building2, Briefcase } from "lucide-react";

const GROUPS = [
  {
    icon: Home,
    title: "Privatkunden",
    description:
      "Pflege und Instandhaltung von Haus, Garten und Grundstück. Wir kümmern uns um die kleinen und großen Aufgaben, damit Sie Ihre Freizeit genießen können.",
  },
  {
    icon: Building2,
    title: "Hausverwaltungen",
    description:
      "Zuverlässige Objektkontrollen und laufende Betreuung von Immobilien. Mit regelmäßigen Checks und Dokumentation behalten Sie den Zustand Ihrer Objekte im Blick.",
  },
  {
    icon: Briefcase,
    title: "Unternehmen",
    description:
      "Pflege und Instandhaltung von Außenbereichen und Grundstücken. Wir sorgen für ein gepflegtes Umfeld, das bei Kunden und Mitarbeitern gleichermaßen einen positiven Eindruck hinterlässt.",
  },
];

export default function TargetGroupsSection() {
  return (
    <section id="fuer-wen-wir-arbeiten" className="py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 lg:mb-20 max-w-2xl">
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground block mb-3">
            ZIELGRUPPEN
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-6">
            Für wen wir arbeiten
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Für Privatkunden, Hausverwaltungen &amp; Unternehmen – wir passen
            unsere Leistungen individuell an Ihre Bedürfnisse an.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {GROUPS.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="group border border-border bg-card hover:border-primary/40 transition-all duration-500 p-8 lg:p-10"
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <group.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl lg:text-2xl font-bold text-primary mb-3">
                {group.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {group.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}