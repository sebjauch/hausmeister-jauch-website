import React from "react";
import LocationPage from "@/components/location/LocationPage";

const HERO = "/images/24b54621a_20240629_102308.webp";

export const FAQS = [
  {
    question: "Wie schnell können Sie in Ismaning vor Ort sein?",
    answer:
      "Unser Sitz ist in Ismaning, die Wege sind also kurz. Für eine Besichtigung oder kleinere Arbeiten finden wir in der Regel schnell einen Termin. Rufen Sie einfach an oder schreiben Sie uns per WhatsApp.",
  },
  {
    question: "Übernehmen Sie in Ismaning auch die regelmäßige Betreuung von Wohnanlagen?",
    answer:
      "Ja. In Ismaning betreuen wir mehrere Objekte dauerhaft. Für Eigentümer, Eigentümergemeinschaften und Hausverwaltungen übernehmen wir regelmäßige Gartenpflege, Objektkontrollen und kleinere Instandhaltungsarbeiten.",
  },
  {
    question: "Arbeiten Sie auch in Fischerhäuser?",
    answer:
      "Ja, wir sind in ganz Ismaning tätig, auch in Fischerhäuser, sowie in den Nachbargemeinden Unterföhring, Garching, Aschheim und im Münchner Norden.",
  },
  {
    question: "Kann ich auch nur einen einmaligen Heckenschnitt in Ismaning beauftragen?",
    answer:
      "Ja. Sie können uns für einzelne Arbeiten wie einen Heckenschnitt oder eine Reparatur beauftragen oder für eine regelmäßige Betreuung. Schicken Sie uns gerne vorab ein paar Fotos, dann erhalten Sie schnell ein Angebot.",
  },
];

export default function Ismaning() {
  return (
    <LocationPage
      place="Ismaning"
      title="Hausmeisterservice in Ismaning"
      lead="Gartenpflege, Objektbetreuung und Reparaturen direkt aus Ismaning: persönlich, zuverlässig und mit kurzen Wegen. Ihr fester Ansprechpartner für Haus, Garten und Grundstück."
      heroImage={HERO}
      advantages={[
        "Unser Sitz ist in Ismaning – kurze Anfahrt und schnelle Termine.",
        "In Ismaning betreuen wir bereits mehrere Objekte dauerhaft.",
        "Ein fester Ansprechpartner: Sie sprechen direkt mit Sebastian Jauch.",
        "Transparentes Angebot vorab, saubere Ausführung, ordentliche Übergabe.",
        "Für Privatkunden, Eigentümergemeinschaften, Hausverwaltungen und Gewerbe.",
      ]}
      faqs={FAQS}
    >
      <p>
        Der <strong>Hausmeisterservice Sebastian Jauch</strong> ist in <strong>Ismaning</strong> zu
        Hause. Von hier aus kümmern wir uns um Gärten, Grundstücke und Immobilien in der
        Gemeinde und im Münchner Norden. Weil wir vor Ort sind, können wir Arbeiten flexibel
        einplanen und sind auch für kurzfristige Anliegen schnell erreichbar.
      </p>
      <p>
        Ob Einfamilienhaus, Reihenhaus oder Wohnanlage: Wir übernehmen einzelne Aufträge wie
        einen Heckenschnitt oder eine Reparatur ebenso wie die regelmäßige Betreuung Ihres
        Objekts. In Ismaning betreuen wir bereits mehrere Objekte dauerhaft und wissen, worauf
        es Eigentümern und Hausverwaltungen ankommt: verlässliche Termine, saubere Arbeit und
        ein Ansprechpartner, der erreichbar ist.
      </p>
    </LocationPage>
  );
}
