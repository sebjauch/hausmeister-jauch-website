import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "Was bietet der Hausmeisterservice Sebastian Jauch an?",
    answer:
      "Der Hausmeisterservice Sebastian Jauch bietet zuverlässige Dienstleistungen rund um Haus, Grundstück und Außenanlagen. Unser Leistungsangebot umfasst insbesondere Gartenpflege, Objektbetreuung, kleinere Reparatur- und Instandhaltungsarbeiten sowie Holz- und Montagearbeiten. Wir übernehmen sowohl einzelne Aufträge als auch regelmäßige Arbeiten.",
  },
  {
    question: "In welchem Gebiet ist der Hausmeisterservice tätig?",
    answer:
      "Wir sind hauptsächlich in Ismaning, München Nord und der näheren Umgebung tätig. Unser Einsatzgebiet umfasst unter anderem Unterföhring, Garching bei München, Aschheim, Kirchheim bei München, Feldkirchen, Haar und weitere Orte im Münchner Umland. Sie sind sich nicht sicher, ob Ihr Standort in unserem Einsatzgebiet liegt? Fragen Sie uns einfach unverbindlich.",
  },
  {
    question: "Übernehmen Sie auch regelmäßige Gartenpflege?",
    answer:
      "Ja. Wir übernehmen sowohl einmalige Gartenarbeiten als auch regelmäßige Gartenpflege. Dazu gehören unter anderem Rasenmähen, Heckenschneiden, Strauchschnitt, Unkrautentfernung, Pflege von Außenanlagen sowie weitere saisonale Gartenarbeiten.",
  },
  {
    question: "Bieten Sie Heckenschnitt und Strauchschnitt an?",
    answer:
      "Ja. Wir übernehmen Heckenschnitt und Strauchschnitt für private Grundstücke, Mehrfamilienhäuser und andere Objekte. Auf Wunsch kümmern wir uns auch um die Aufnahme und Entsorgung des anfallenden Grünschnitts.",
  },
  {
    question: "Übernehmen Sie kleinere Reparaturen und Instandhaltungsarbeiten?",
    answer:
      "Ja. Wir führen kleinere Reparatur-, Montage- und Instandhaltungsarbeiten rund um Haus, Wohnung und Grundstück aus. Dazu gehören beispielsweise kleinere Arbeiten an Zäunen, Sichtschutz, Türen, Außenanlagen und anderen Bereichen des Gebäudes. Größere oder fachlich spezialisierte Arbeiten sollten durch einen entsprechenden Fachbetrieb ausgeführt werden.",
  },
  {
    question: "Betreuen Sie auch Mehrfamilienhäuser und Immobilien?",
    answer:
      "Ja. Wir übernehmen die regelmäßige Objektbetreuung von Immobilien und kümmern uns um anfallende Arbeiten rund um Gebäude und Außenanlagen. Unsere Leistungen können individuell auf Privatimmobilien, Mehrfamilienhäuser, Eigentümergemeinschaften, Hausverwaltungen und Gewerbeobjekte abgestimmt werden.",
  },
  {
    question: "Arbeiten Sie auch für Hausverwaltungen?",
    answer:
      "Ja. Hausverwaltungen und Eigentümer können uns mit der laufenden Betreuung von Immobilien und Außenanlagen beauftragen. Je nach Objekt können beispielsweise regelmäßige Kontrollen, Gartenpflege, kleinere Instandhaltungsarbeiten und Reparaturen übernommen werden.",
  },
  {
    question: "Kann ich Sie auch nur für eine einzelne Arbeit beauftragen?",
    answer:
      "Ja. Sie können unseren Hausmeisterservice sowohl für einzelne Arbeiten als auch für eine regelmäßige Betreuung beauftragen. Ob Heckenschnitt, Gartenpflege, eine kleinere Reparatur oder eine andere Arbeit rund um Haus und Grundstück – wir erstellen Ihnen gerne ein individuelles Angebot.",
  },
  {
    question: "Was kostet ein Hausmeisterservice?",
    answer:
      "Die Kosten richten sich nach Art und Umfang der Arbeiten, Größe des Objekts, Zeitaufwand, Zugänglichkeit und gegebenenfalls der benötigten Entsorgung. Deshalb erstellen wir ein individuelles und transparentes Angebot. Bei vielen Arbeiten können Sie uns vorab Fotos und eine kurze Beschreibung Ihres Vorhabens schicken.",
  },
  {
    question: "Wie kann ich ein unverbindliches Angebot erhalten?",
    answer:
      "Kontaktieren Sie uns telefonisch oder über unser Kontaktformular. Beschreiben Sie kurz, welche Arbeiten Sie benötigen. Bei Gartenarbeiten, Reparaturen oder anderen Projekten können Sie uns gerne Fotos zur Verfügung stellen. Anschließend besprechen wir die Details und erstellen Ihnen ein unverbindliches Angebot.",
  },
  {
    question: "Bieten Sie auch einmalige Gartenarbeiten an?",
    answer:
      "Ja. Neben regelmäßiger Gartenpflege übernehmen wir auch einmalige Gartenarbeiten. Dazu gehören beispielsweise Heckenschnitt, Strauchschnitt, Rasenpflege, Rückschnitt von Pflanzen sowie weitere Arbeiten zur Pflege und Gestaltung von Außenanlagen.",
  },
  {
    question: "Führen Sie auch Holzarbeiten aus?",
    answer:
      "Ja. Wir übernehmen kleinere Holz- und Montagearbeiten im Außenbereich, beispielsweise an Zäunen, Sichtschutz, Terrassen und anderen Außenanlagen. Gerne prüfen wir Ihr Vorhaben und besprechen mit Ihnen die passende Umsetzung.",
  },
  {
    question: "Kann ich vorab einen Besichtigungstermin vereinbaren?",
    answer:
      "Bei umfangreicheren Arbeiten oder einer regelmäßigen Objektbetreuung ist eine Besichtigung vor Ort sinnvoll. Dadurch können wir den Arbeitsaufwand und die örtlichen Gegebenheiten besser einschätzen und Ihnen ein möglichst genaues Angebot erstellen.",
  },
  {
    question: "Warum einen regionalen Hausmeisterservice beauftragen?",
    answer:
      "Ein regionaler Hausmeisterservice bietet kurze Wege und einen persönlichen Ansprechpartner. Gerade bei regelmäßiger Objektbetreuung, Gartenpflege und kleineren Instandhaltungsarbeiten ist eine zuverlässige Betreuung vor Ort besonders praktisch.",
  },
  {
    question: "Kann ich die Kosten für einen Hausmeisterservice steuerlich absetzen?",
    answer:
      "Ja, unter bestimmten Voraussetzungen können Sie die Kosten für haushaltsnahe Dienstleistungen steuerlich geltend machen. Zu den haushaltsnahen Dienstleistungen gehören beispielsweise Gartenpflege, Reinigung, Reparaturen und Wartungsarbeiten, die in oder rund um Ihre Wohnung erbracht werden. Sie können 20 % der Arbeitskosten (ohne Materialkosten), maximal 4.000 Euro pro Jahr, direkt von Ihrer Steuerschuld abziehen. Voraussetzung ist, dass die Rechnung per Überweisung bezahlt wird und die Arbeitskosten separat ausgewiesen sind. Bitte bewahren Sie die Rechnung und den Zahlungsbeleg für Ihre Steuererklärung auf. Für verbindliche Auskünfte empfehlen wir, einen Steuerberater oder das zuständige Finanzamt zu kontaktieren.",
  },
  {
    question: "Warum Hausmeisterservice Sebastian Jauch?",
    answer:
      "Wir stehen für persönliche Betreuung, zuverlässige Terminabsprachen und eine saubere Ausführung der vereinbarten Arbeiten. Als regionaler Hausmeisterservice sind wir Ihr persönlicher Ansprechpartner für Gartenpflege, Objektbetreuung sowie kleinere Reparatur- und Instandhaltungsarbeiten rund um Haus und Grundstück.",
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
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm lg:text-base text-muted-foreground leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
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