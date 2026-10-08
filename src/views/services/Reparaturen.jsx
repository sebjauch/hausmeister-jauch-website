import React from "react";
import { Check } from "lucide-react";
import ServiceLayout from "@/components/service/ServiceLayout";

const HERO = "/images/7c00859b0_20240917_160555.jpg";

const ITEMS = [
  "Kleinere Reparaturen",
  "Instandhaltungsmaßnahmen",
  "Montagearbeiten",
  "Sichtschutz",
];

export default function Reparaturen() {
  return (
    <ServiceLayout
      path="/leistungen/reparaturen-montage"
      metaTitle="Reparaturen & Montage in München Nord"
      metaDescription="Kleinreparaturen, Instandhaltung und Montagearbeiten in München Nord & Ismaning. Hausmeisterservice Sebastian Jauch repariert zuverlässig und schnell – für Privat- und Objektkunden. Unverbindliches Angebot anfordern."
      eyebrow="LEISTUNG"
      title="Reparaturen & Montage in München Nord"
      lead="Kleine Schäden, große Wirkung: Wir reparieren und montieren zuverlässig rund ums Haus – schnell, sauber und mit dem nötigen handwerklichen Geschick."
      heroImage={HERO}
    >
      <p>
        Nicht jede Reparatur erfordert sofort einen großen Handwerksbetrieb.
        Viele kleinere Schäden lassen sich vom <strong>Hausmeisterservice Sebastian Jauch</strong> schnell
        und kostengünstig beheben. Für Privat- und Objektkunden in <strong>München Nord</strong>,
        Ismaning, Garching, Unterföhring und Umgebung sind wir Ihr erster
        Ansprechpartner, wenn es um Instandhaltung, Montage und kleinere
        Reparaturen geht.
      </p>

      <h2 className="font-heading text-2xl font-bold text-primary">Unsere Reparatur- und Montageleistungen</h2>
      <ul className="space-y-3">
        {ITEMS.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="font-heading text-2xl font-bold text-primary">Kleinere Reparaturen im Raum München Nord</h2>
      <p>
        Ob ein lockerer Griff, ein klemmendes Fenster, ein defekter Verschluss
        oder kleinere Schäden an Fassade und Außenbereich – wir beheben
        typische Kleinreparaturen fachgerecht. So vermeiden Sie Folgeschäden
        und sparen sich den Aufwand einer separaten Handwerkerbeauftragung.
      </p>

      <h2 className="font-heading text-2xl font-bold text-primary">Instandhaltungsmaßnahmen</h2>
      <p>
        Vorsorge statt Reparatur: Wir übernehmen regelmäßige
        Instandhaltungsmaßnahmen an Wohn- und Geschäftsobjekten. Dazu gehören
        Kontrollgänge, die Behebung kleinerer Mängel und die Dokumentation
        des Zustands. So bleibt Ihr Objekt langfristig wertstabil.
      </p>

      <h2 className="font-heading text-2xl font-bold text-primary">Montagearbeiten und Sichtschutz</h2>
      <p>
        Wir montieren für Sie Sichtschutz, kleinere Anbauten und Bauteile im
        Außenbereich. Sauber, maßgerecht und nach Absprache. Auch der Aufbau
        von Sichtschutzelementen gehört zu unseren Aufgaben – passend zu
        Ihrem Grundstück und Ihren Wünschen.
      </p>

      <h2 className="font-heading text-2xl font-bold text-primary">Persönlich und zuverlässig</h2>
      <p>
        Wir arbeiten ohne unnötigen Aufwand und ohne versteckte Kosten. Sie
        sprechen direkt mit uns, erhalten ein klares Angebot und einen
        verlässlichen Termin. Melden Sie sich an – wir schauen uns Ihr
        Anliegen an und unterbreiten Ihnen ein faires Angebot.
      </p>
    </ServiceLayout>
  );
}