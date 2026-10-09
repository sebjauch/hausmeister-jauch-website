import React from "react";
import { Check } from "lucide-react";
import ServiceLayout from "@/components/service/ServiceLayout";

const HERO = "/images/9a691572c_20230618_072631.webp";

const ITEMS = [
  "Terrassen aus Holz",
  "Zäune & Sichtschutz",
  "Balkonverkleidungen",
  "Maßarbeit nach Wunsch",
];

export default function Holzarbeiten() {
  return (
    <ServiceLayout
      path="/leistungen/holzarbeiten-aussenbau"
      metaTitle="Holzarbeiten & Außenbau in München Nord"
      metaDescription="Holzarbeiten in München Nord & Ismaning: Terrassen aus Holz, Zäune, Sichtschutz und Balkonverkleidungen nach Maß. Hausmeisterservice Sebastian Jauch fertigt individuell und hochwertig. Unverbindliches Angebot anfordern."
      eyebrow="LEISTUNG"
      title="Holzarbeiten & Außenbau in München Nord"
      lead="Individuelle Lösungen aus Holz für Haus und Garten: Terrassen, Zäune, Sichtschutz und Balkonverkleidungen – gefertigt nach Ihren Wünschen und mit Anspruch auf Langlebigkeit."
      heroImage={HERO}
    >
      <p>
        Holz ist ein naturverbundener, langlebiger Baustoff, der Haus und Garten
        aufwertet. Der <strong>Hausmeisterservice Sebastian Jauch</strong> fertigt Holzarbeiten
        für den Außenbereich individuell nach Maß – für Kunden in <strong>München Nord</strong>,
        Ismaning, Garching, Unterföhring, Hallbergmoos und Umgebung. Von der
        Terrasse über den Zaun bis zur Balkonverkleidung: Wir beraten Sie
        ehrlich und setzen Ihr Vorhaben sauber um.
      </p>

      <h2 className="font-heading text-2xl font-bold text-primary">Unsere Holzarbeiten im Überblick</h2>
      <ul className="space-y-3">
        {ITEMS.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="font-heading text-2xl font-bold text-primary">Terrassen aus Holz in München Nord</h2>
      <p>
        Eine Holzterrasse erweitert den Wohnraum nach draußen. Wir planen und
        bauen Terrassen aus Holz passend zu Ihrem Grundstück – inklusive
        Unterkonstruktion und Belag. Dabei achten wir auf witterungsbeständige
        Hölzer und eine saubere, dauerhafte Ausführung.
      </p>

      <h2 className="font-heading text-2xl font-bold text-primary">Zäune & Sichtschutz aus Holz</h2>
      <p>
        Ob klassischer Lattenzaun, Sichtschutz oder Raumtrenner – wir fertigen
        Zäune und Sichtschutzelemente nach Ihren Vorstellungen. So schaffen Sie
        Privatsphäre und setzen gleichzeitig stilvolle Akzente für Ihr
        Grundstück im nördlichen Münchner Umland.
      </p>

      <h2 className="font-heading text-2xl font-bold text-primary">Balkonverkleidungen</h2>
      <p>
        Eine hochwertige Balkonverkleidung schützt und verschönert zugleich.
        Wir verkleiden Balkone individuell nach Maß – passend zur Architektur
        Ihres Hauses und Ihren farblichen Wünschen. Sauber verarbeitet und
        langlebig, damit Sie lange Freude daran haben.
      </p>

      <h2 className="font-heading text-2xl font-bold text-primary">Maßarbeit nach Wunsch</h2>
      <p>
        Jedes Grundstück ist anders, jeder Kunde hat eigene Vorstellungen. Wir
        arbeiten daher grundsätzlich nach Maß: Sie beschreiben uns Ihr
        Vorhaben, wir beraten Sie zu Material und Umsetzung und fertigen das
        Ergebnis passgenau. Melden Sie sich an – wir freuen uns auf Ihr
        Projekt.
      </p>
    </ServiceLayout>
  );
}