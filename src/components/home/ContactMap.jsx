import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const MAP_SRC =
  "https://maps.google.com/maps?q=Zacherlstr.%2012,%2085737%20Ismaning&t=&z=14&ie=UTF8&iwloc=B&output=embed";

const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Zacherlstr.+12,+85737+Ismaning";

export default function ContactMap() {
  // Google Maps lädt erst nach Klick, vorher fließen keine Daten an Google.
  const [showMap, setShowMap] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-12"
    >
      <span className="font-mono text-xs tracking-wider text-muted-foreground block mb-3">
        EINSATZGEBIET
      </span>
      <div className="relative w-full h-56 lg:h-64 border border-border overflow-hidden group">
        {showMap ? (
          <iframe
            src={MAP_SRC}
            className="w-full h-full transition-all duration-700"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Standort auf Google Maps"
          />
        ) : (
          <div className="w-full h-full bg-secondary flex flex-col items-center justify-center gap-3 px-6 text-center">
            <MapPin className="w-6 h-6 text-primary" />
            <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
              Beim Laden der Karte werden Daten an Google übertragen.
              Mehr dazu in der <a href="/datenschutz" className="underline">Datenschutzerklärung</a>.
            </p>
            <button
              type="button"
              onClick={() => setShowMap(true)}
              className="font-mono text-[10px] tracking-wider bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90 transition-colors"
            >
              KARTE LADEN
            </button>
          </div>
        )}
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 bg-background/95 px-3 py-1.5 font-mono text-[10px] tracking-wider text-foreground border border-border hover:bg-background transition-colors"
        >
          IN GOOGLE MAPS ÖFFNEN
        </a>
      </div>
    </motion.div>
  );
}