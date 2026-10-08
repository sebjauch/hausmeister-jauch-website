import React from "react";
import { Check } from "lucide-react";
import ServiceLayout from "@/components/service/ServiceLayout";

const HERO = "/images/6a9b14516_schulhaus.jpeg";

const ITEMS = [
  "Hecke schneiden",
  "Rasen mähen",
  "Grünschnitt & Entsorgung",
  "Baumschnitt",
  "Unkrautentfernung",
  "Bepflanzungen",
  "Laub entfernen",
  "Rasen neu anlegen",
];

export default function Gartenarbeiten() {
  return (
    <ServiceLayout
      path="/leistungen/gartenarbeiten"
      metaTitle="Gartenarbeiten & Gartenpflege in München Nord"
      metaDescription="Professionelle Gartenarbeiten in München Nord & Ismaning: Hecke schneiden, Rasen mähen, Baumschnitt, Unkrautentfernung und Bepflanzungen. Zuverlässiger Hausmeisterservice Sebastian Jauch – unverbindliches Angebot."
      eyebrow="LEISTUNG"
      title="Gartenarbeiten & Gartenpflege in München Nord"
      lead="Von der Hecke bis zum Rasen – wir pflegen Ihren Garten in München Nord und Umgebung fachgerecht, zuverlässig und mit Augenmaß. Damit Ihr Grün rund ums Jahr gesund und gepflegt bleibt."
      heroImage={HERO}
      heroContain
    >
      <p>
        Ein gepflegter Garten ist ein Stück Lebensqualität. Doch zwischen
        Beruf, Familie und Alltag bleibt oft wenig Zeit, um Hecke, Rasen und
        Beete regelmäßig zu versorgen. Der <strong>Hausmeisterservice Sebastian Jauch</strong> übernimmt
        die Gartenpflege für Privat- und Objektkunden in <strong>München Nord</strong>, Ismaning,
        Garching, Unterföhring, Hallbergmoos und den umliegenden Gemeinden –
        flexibel, gründlich und termintreu.
      </p>

      <h2 className="font-heading text-2xl font-bold text-primary">Unser Leistungsspektrum im Garten</h2>
      <ul className="space-y-3">
        {ITEMS.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="font-heading text-2xl font-bold text-primary">Hecke schneiden in München Nord</h2>
      <p>
        Ein fachgerechter Heckenschnitt hält Ihre Hecke dicht, gesund und in Form.
        Wir schneiden Hecken aller Art – vom Formschnitt bis zum
        Rückschnitt nach der Heu- und Brutzeit. Dabei entsorgen wir den
        Grünschnitt umweltgerecht, sodass Ihr Grundstück besenrein übergeben wird.
      </p>

      <h2 className="font-heading text-2xl font-bold text-primary">Rasen mähen und Rasenpflege</h2>
      <p>
        Regelmäßiges Mähen ist die Grundlage für einen dichten, grünen Rasen.
        Wir übernehmen die Rasenpflege im gesamten Raum München Nord – inklusive
        Vertikutieren, Düngen und Nachsäen, damit auch strapazierte Flächen
        sich wieder erholen. Auf Wunsch vereinbaren wir mit Ihnen einen
        wiederkehrenden Pflegeplan, der zu Ihrem Garten passt.
      </p>

      <h2 className="font-heading text-2xl font-bold text-primary">Bepflanzungen und Unkrautentfernung</h2>
      <p>
        Ob neue Beete, Heckenpflanzung oder Saisonbepflanzung – wir beraten Sie
        zu standortgerechten Pflanzen und setzen diese fachgerecht um. Auch die
        Unkrautentfernung auf Wegen, in Beeten und in Ritzen gehört zu unseren
        regelmäßigen Aufgaben, damit Ihr Garten ordentlich und pflegeleicht bleibt.
      </p>

      <h2 className="font-heading text-2xl font-bold text-primary">Ihr lokaler Partner für Gartenarbeiten</h2>
      <p>
        Als ortsansässiger Hausmeisterservice aus Ismaning kennen wir die
        Gegebenheiten im nördlichen Münchner Umland – von der Bodenbeschaffenheit
        bis zur typischen Vegetation. Kurze Wege, persönliche Absprache und
        verlässliche Termine sind für uns selbstverständlich. Fordern Sie ein
        unverbindliches Angebot für Ihre Gartenpflege an.
      </p>
    </ServiceLayout>
  );
}