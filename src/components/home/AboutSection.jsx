import React from "react";
import { motion } from "framer-motion";

const IMAGE_URL = "/images/bd6105059_20220922_164459.jpg";

export default function AboutSection() {
  return (
    <section id="ueber-mich" className="py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={IMAGE_URL}
            alt="Sebastian Jauch bei der Arbeit"
            className="w-full h-[420px] lg:h-[520px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground block mb-3">
            ÜBER UNS
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-6">
            Hausmeisterservice Sebastian Jauch
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Mein Name ist Sebastian Jauch. Als selbstständiger Hausmeister unterstütze
            ich Privatkunden, Eigentümer und Hausverwaltungen bei der Pflege,
            Betreuung und Instandhaltung von Immobilien und Grundstücken.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Mir ist wichtig, dass Sie einen festen Ansprechpartner haben, Absprachen
            zuverlässig eingehalten werden und die Arbeiten sauber ausgeführt werden.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ob einmalige Gartenarbeit oder regelmäßige Objektbetreuung – ich bespreche
            Ihr Vorhaben persönlich mit Ihnen und erstelle Ihnen ein transparentes Angebot.
          </p>
        </motion.div>
      </div>
    </section>
  );
}