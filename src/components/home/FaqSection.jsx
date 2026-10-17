import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FAQS = [
  {
    question: "Was bietet der Hausmeisterservice Sebastian Jauch an?",
    answer:
      "Der Hausmeisterservice Sebastian Jauch bietet zuverlässige Dienstleistungen rund um Haus, Grundstück und Außenanlagen. Mein Leistungsangebot umfasst insbesondere Gartenpflege, Objektbetreuung, kleinere Reparatur- und Instandhaltungsarbeiten, Holzarbeiten sowie Montagearbeiten innen wie Küchenmontage und Bodenverlegung. Ich übernehme sowohl einzelne Aufträge als auch regelmäßige Arbeiten.",
  },
  {
    question: "In welchem Gebiet ist der Hausmeisterservice tätig?",
    answer:
      "Ich bin hauptsächlich in Ismaning, München Nord und der näheren Umgebung tätig. Mein Einsatzgebiet umfasst unter anderem Unterföhring, Garching bei München, Aschheim, Kirchheim bei München, Feldkirchen, Haar und weitere Orte im Münchner Umland. Sie sind sich nicht sicher, ob Ihr Standort in meinem Einsatzgebiet liegt? Fragen Sie mich einfach unverbindlich.",
  },
  {
    question: "Übernehmen Sie auch regelmäßige Gartenpflege?",
    answer:
      "Ja. Ich übernehme sowohl einmalige Gartenarbeiten als auch regelmäßige Gartenpflege. Dazu gehören unter anderem Rasenmähen, Heckenschneiden, Strauchschnitt, Unkrautentfernung, Pflege von Außenanlagen sowie weitere saisonale Gartenarbeiten.",
  },
  {
    question: "Bieten Sie Heckenschnitt und Strauchschnitt an?",
    answer:
      "Ja. Ich übernehme Heckenschnitt und Strauchschnitt für private Grundstücke, Mehrfamilienhäuser und andere Objekte. Auf Wunsch kümmere ich mich auch um die Aufnahme und Entsorgung des anfallenden Grünschnitts.",
  },
  {
    question: "Übernehmen Sie kleinere Reparaturen und Instandhaltungsarbeiten?",
    answer:
      "Ja. Ich führe kleinere Reparatur-, Montage- und Instandhaltungsarbeiten rund um Haus, Wohnung und Grundstück aus. Dazu gehören beispielsweise Arbeiten an Zäunen, Sichtschutz, Türen und Außenanlagen, aber auch Küchenmontage und Bodenverlegung. Größere oder fachlich spezialisierte Arbeiten sollten durch einen entsprechenden Fachbetrieb ausgeführt werden.",
  },
  {
    question: "Betreuen Sie auch Mehrfamilienhäuser und Immobilien?",
    answer:
      "Ja. Ich übernehme die regelmäßige Objektbetreuung von Immobilien und kümmere mich um anfallende Arbeiten rund um Gebäude und Außenanlagen. Meine Leistungen können individuell auf Privatimmobilien, Mehrfamilienhäuser, Eigentümergemeinschaften, Hausverwaltungen und Gewerbeobjekte abgestimmt werden.",
  },
  {
    question: "Arbeiten Sie auch für Hausverwaltungen?",
    answer:
      "Ja. Hausverwaltungen und Eigentümer können mich mit der laufenden Betreuung von Immobilien und Außenanlagen beauftragen. Je nach Objekt können beispielsweise regelmäßige Kontrollen, Gartenpflege, kleinere Instandhaltungsarbeiten und Reparaturen übernommen werden.",
  },
  {
    question: "Kann ich Sie auch nur für eine einzelne Arbeit beauftragen?",
    answer:
      "Ja. Sie können meinen Hausmeisterservice sowohl für einzelne Arbeiten als auch für eine regelmäßige Betreuung beauftragen. Ob Heckenschnitt, Gartenpflege, eine kleinere Reparatur oder eine andere Arbeit rund um Haus und Grundstück – ich erstelle Ihnen gerne ein individuelles Angebot.",
  },
  {
    question: "Was kostet ein Hausmeisterservice?",
    answer:
      "Die Kosten richten sich nach Art und Umfang der Arbeiten, Größe des Objekts, Zeitaufwand, Zugänglichkeit und gegebenenfalls der benötigten Entsorgung. Deshalb erstelle ich ein individuelles und transparentes Angebot. Bei vielen Arbeiten können Sie mir vorab Fotos und eine kurze Beschreibung Ihres Vorhabens schicken.",
  },
  {
    question: "Wie kann ich ein unverbindliches Angebot erhalten?",
    answer:
      "Rufen Sie mich an, schreiben Sie per WhatsApp oder nutzen Sie das Kontaktformular. Beschreiben Sie kurz, welche Arbeiten Sie benötigen. Bei Gartenarbeiten, Reparaturen oder anderen Projekten können Sie mir gerne Fotos schicken. Anschließend bespreche ich die Details mit Ihnen und erstelle Ihnen ein unverbindliches Angebot.",
  },
  {
    question: "Bieten Sie auch einmalige Gartenarbeiten an?",
    answer:
      "Ja. Neben regelmäßiger Gartenpflege übernehme ich auch einmalige Gartenarbeiten. Dazu gehören beispielsweise Heckenschnitt, Strauchschnitt, Rasenpflege, Rückschnitt von Pflanzen sowie weitere Arbeiten zur Pflege und Gestaltung von Außenanlagen.",
  },
  {
    question: "Führen Sie auch Holzarbeiten aus?",
    answer:
      "Ja. Ich übernehme Holz- und Montagearbeiten im Außenbereich, beispielsweise an Zäunen, Sichtschutz, Terrassen und anderen Außenanlagen. Gerne prüfe ich Ihr Vorhaben und bespreche mit Ihnen die passende Umsetzung.",
  },
  {
    question: "Kann ich vorab einen Besichtigungstermin vereinbaren?",
    answer:
      "Bei umfangreicheren Arbeiten oder einer regelmäßigen Objektbetreuung ist eine Besichtigung vor Ort sinnvoll. Dadurch kann ich den Arbeitsaufwand und die örtlichen Gegebenheiten besser einschätzen und Ihnen ein möglichst genaues Angebot erstellen.",
  },
  {
    question: "Warum einen regionalen Hausmeisterservice beauftragen?",
    answer:
      "Ein regionaler Hausmeisterservice bietet kurze Wege und einen persönlichen Ansprechpartner. Gerade bei regelmäßiger Objektbetreuung, Gartenpflege und kleineren Instandhaltungsarbeiten ist eine zuverlässige Betreuung vor Ort besonders praktisch.",
  },
  {
    question: "Kann ich die Kosten für einen Hausmeisterservice steuerlich absetzen?",
    answer:
      "Ja, unter bestimmten Voraussetzungen. Für Arbeiten in oder rund um Ihre Wohnung können Sie 20 % der Arbeitskosten (ohne Materialkosten) direkt von Ihrer Steuerschuld abziehen. Dabei gelten zwei getrennte Höchstbeträge: Für haushaltsnahe Dienstleistungen wie Gartenpflege, Rasenmähen oder Heckenschnitt sind es maximal 4.000 Euro pro Jahr. Für Handwerkerleistungen wie Reparaturen, Montage, Bodenverlegung oder Holzarbeiten sind es zusätzlich maximal 1.200 Euro pro Jahr. Voraussetzung ist, dass die Rechnung per Überweisung bezahlt wird und die Arbeitskosten separat ausgewiesen sind. Bitte bewahren Sie die Rechnung und den Zahlungsbeleg für Ihre Steuererklärung auf. Für verbindliche Auskünfte empfehle ich, einen Steuerberater oder das zuständige Finanzamt zu kontaktieren.",
  },
  {
    question: "Warum Hausmeisterservice Sebastian Jauch?",
    answer:
      "Ich stehe für persönliche Betreuung, zuverlässige Terminabsprachen und eine saubere Ausführung der vereinbarten Arbeiten. Als regionaler Hausmeisterservice bin ich Ihr persönlicher Ansprechpartner für Gartenpflege, Objektbetreuung sowie kleinere Reparatur- und Instandhaltungsarbeiten rund um Haus und Grundstück.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-base lg:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {item.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {/* Antwort steht immer im HTML (für Google), wird nur optisch zugeklappt */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm lg:text-base text-muted-foreground leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 lg:py-28 px-6 lg:px-10 bg-secondary/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground block mb-3">
            FAQ
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary">
            Häufig gestellte Fragen
          </h2>
        </div>

        <div className="border-t border-border">
          {FAQS.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}