import React from "react";
import { Check } from "lucide-react";
import ServiceLayout from "@/components/service/ServiceLayout";

const HERO = "/images/7c00859b0_20240917_160555.webp";

const ITEMS = [
  "Kleinere Reparaturen",
  "Instandhaltungsmaßnahmen",
  "Montagearbeiten innen und außen",
  "Küchenmontage",
  "Böden verlegen",
];

export default function Reparaturen() {
  return (
    <ServiceLayout
      path="/leistungen/reparaturen-montage"
      metaTitle="Reparaturen & Montage in München Nord"
      metaDescription="Kleinreparaturen, Instandhaltung, Küchenmontage, Bodenverlegung und Montagearbeiten in München Nord & Ismaning. Hausmeisterservice Sebastian Jauch repariert zuverlässig und schnell – für Privat- und Objektkunden. Unverbindliches Angebot anfordern."
      eyebrow="LEISTUNG"
      title="Reparaturen & Montage in München Nord"
      lead="Tür klemmt, Zaun wackelt, neue Küche oder neuer Boden: Ich repariere und montiere zuverlässig in und um Ihr Haus – sauber und mit dem nötigen handwerklichen Geschick."
      heroImage={HERO}
    >
      <p>
        Nicht jede Reparatur erfordert sofort einen großen Handwerksbetrieb.
        Viele kleinere Schäden lassen sich vom <strong>Hausmeisterservice Sebastian Jauch</strong> schnell
        und kostengünstig beheben. Für Privat- und Objektkunden in <strong>München Nord</strong>,
        Ismaning, Garching, Unterföhring und Umgebung bin ich Ihr erster
        Ansprechpartner, wenn es um Instandhaltung, Montage und kleinere
        Reparaturen geht.
      </p>

      <h2 className="font-heading text-2xl font-bold text-primary">Meine Reparatur- und Montageleistungen</h2>
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
        oder kleinere Schäden an Fassade und Außenbereich – ich behebe
        typische Kleinreparaturen fachgerecht. So vermeiden Sie Folgeschäden
        und sparen sich den Aufwand einer separaten Handwerkerbeauftragung.
      </p>

      <h2 className="font-heading text-2xl font-bold text-primary">Instandhaltungsmaßnahmen</h2>
      <p>
        Vorsorge statt Reparatur: Ich übernehme regelmäßige
        Instandhaltungsmaßnahmen an Wohn- und Geschäftsobjekten. Dazu gehören
        Kontrollgänge, die Behebung kleinerer Mängel und die Dokumentation
        des Zustands. So bleibt Ihr Objekt langfristig wertstabil.
      </p>

      <h2 className="font-heading text-2xl font-bold text-primary">Montagearbeiten innen und außen</h2>
      <p>
        Ich montiere für Sie Küchen, verlege Böden und übernehme kleinere
        Ausbauarbeiten im Haus. Draußen baue ich kleinere Anbauten und Bauteile
        auf. Sauber, maßgerecht und nach Absprache. Zäune und Sichtschutz aus
        Holz finden Sie unter <a href="/leistungen/holzarbeiten-aussenbau" className="text-primary underline underline-offset-4">Holzarbeiten &amp; Außenbau</a>.
      </p>

      <h2 className="font-heading text-2xl font-bold text-primary">Persönlich und zuverlässig</h2>
      <p>
        Ich arbeite ohne unnötigen Aufwand und ohne versteckte Kosten. Sie
        sprechen direkt mit mir, erhalten ein klares Angebot und einen
        verlässlichen Termin. Melden Sie sich – ich schaue mir Ihr
        Anliegen an und unterbreite Ihnen ein faires Angebot.
      </p>
    </ServiceLayout>
  );
}