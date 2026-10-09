import React from "react";
import LocationPage from "@/components/location/LocationPage";

const HERO = "/images/9be22a100_20230617_104423.webp";

export const FAQS = [
  {
    question: "Wie weit ist die Anfahrt nach Unterföhring?",
    answer:
      "Unser Sitz ist im direkt angrenzenden Ismaning. Nach Unterföhring sind es nur wenige Minuten, deshalb können wir Termine flexibel einplanen.",
  },
  {
    question: "Betreuen Sie in Unterföhring auch Wohnanlagen und Gewerbeflächen?",
    answer:
      "Ja. Neben Privatkunden übernehmen wir für Eigentümergemeinschaften, Hausverwaltungen und Unternehmen die Pflege von Außenanlagen, Objektkontrollen und kleinere Instandhaltungsarbeiten – einmalig oder regelmäßig.",
  },
  {
    question: "Was kostet ein Hausmeisterservice in Unterföhring?",
    answer:
      "Das hängt von Art und Umfang der Arbeiten, der Größe des Objekts und der Entsorgung ab. Schicken Sie uns eine kurze Beschreibung und gerne ein paar Fotos, dann erhalten Sie ein transparentes, unverbindliches Angebot.",
  },
];

export default function Unterfoehring() {
  return (
    <LocationPage
      place="Unterföhring"
      title="Hausmeisterservice in Unterföhring"
      lead="Gartenpflege, Pflege von Außenanlagen und Reparaturen in Unterföhring – vom Nachbarort Ismaning aus schnell vor Ort. Persönlich, zuverlässig und mit festem Ansprechpartner."
      heroImage={HERO}
      advantages={[
        "Sitz im direkt angrenzenden Ismaning – nur wenige Minuten Anfahrt.",
        "Ein fester Ansprechpartner: Sie sprechen direkt mit Sebastian Jauch.",
        "Einzelne Aufträge oder regelmäßige Betreuung, ganz nach Bedarf.",
        "Transparentes Angebot vorab, saubere Ausführung, ordentliche Übergabe.",
        "Für Privatkunden, Eigentümergemeinschaften, Hausverwaltungen und Unternehmen.",
      ]}
      faqs={FAQS}
    >
      <p>
        <strong>Unterföhring</strong> grenzt direkt an Ismaning, wo der{" "}
        <strong>Hausmeisterservice Sebastian Jauch</strong> seinen Sitz hat. Dadurch sind wir in
        wenigen Minuten bei Ihnen und können Arbeiten flexibel einplanen – vom einmaligen
        Heckenschnitt bis zur regelmäßigen Pflege Ihres Grundstücks.
      </p>
      <p>
        In Unterföhring gibt es neben Einfamilien- und Reihenhäusern viele Wohnanlagen und
        Gewerbeflächen. Für Eigentümer, Hausverwaltungen und Unternehmen übernehmen wir die
        Pflege der Außenanlagen, Objektkontrollen und kleinere Reparaturen, damit Ihr Objekt
        dauerhaft gepflegt aussieht.
      </p>
    </LocationPage>
  );
}
