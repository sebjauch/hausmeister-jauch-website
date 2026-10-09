import React from "react";
import { Check } from "lucide-react";
import ServiceLayout from "@/components/service/ServiceLayout";

const HERO = "/images/308d22519_20260601_113140.webp";

const ITEMS = [
  "Terrassenreinigung",
  "Regenrinnen leeren und reinigen",
  "Wege & Einfahrten",
  "Kehrarbeiten",
  "Leuchtmittelaustausch",
  "Objektkontrolle",
  "Drohnenservice",
];

export default function Aussenbereich() {
  return (
    <ServiceLayout
      path="/leistungen/aussenbereich-pflege"
      metaTitle="Außenbereich & Pflege in München Nord"
      metaDescription="Terrassenreinigung, Regenrinnen reinigen, Wege & Einfahrten pflegen, Leuchtmittelaustausch und Objektkontrolle in München Nord & Ismaning. Hausmeisterservice Sebastian Jauch – Ihr zuverlässiger Partner rund ums Haus."
      eyebrow="LEISTUNG"
      title="Außenbereich & Pflege rund ums Haus"
      lead="Sauber, sicher und gepflegt: Wir halten den Außenbereich Ihrer Immobilie in Schuss – von der Terrasse über die Regenrinne bis zum Leuchtmittelaustausch, in Ismaning und Umgebung."
      heroImage={HERO}
    >
      <p>
        Rund ums Haus gibt es zahlreiche kleine Aufgaben, die oft vernachlässigt
        werden, aber entscheidend für Werterhalt und Sicherheit sind. Der
        <strong> Hausmeisterservice Sebastian Jauch</strong> übernimmt die Pflege Ihres
        Außenbereichs für Wohn- und Geschäftsobjekte in <strong>München Nord</strong>, Ismaning,
        Garching, Unterföhring und Umgebung – zuverlässig und nach Absprache.
      </p>

      <h2 className="font-heading text-2xl font-bold text-primary">Unsere Leistungen für den Außenbereich</h2>
      <ul className="space-y-3">
        {ITEMS.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="font-heading text-2xl font-bold text-primary">Terrassenreinigung in München Nord</h2>
      <p>
        Algen, Moos und Schmutz machen Terrassen rutschig und unansehnlich. Wir
        reinigen Terrassen, Wege und Einfahrten gründlich und schonend zum
        Belag – für eine saubere, einladende Fläche, die wieder richtig zur
        Geltung kommt. Auf Wunsch übernehmen wir die Reinigung als
        wiederkehrende Maßnahme.
      </p>

      <h2 className="font-heading text-2xl font-bold text-primary">Regenrinnen leeren und reinigen</h2>
      <p>
        Verstopfte Regenrinnen sind eine häufige Ursache für Wasserschäden.
        Wir leeren und reinigen Ihre Dachrinnen im Raum München Nord, entfernen
        Laub, Moos und Ablagerungen und prüfen dabei den Zustand der Rinne.
        So bleibt das Wasser dort, wo es hingehört – in der Rinne und nicht an
        der Fassade.
      </p>

      <h2 className="font-heading text-2xl font-bold text-primary">Leuchtmittelaustausch und Objektkontrolle</h2>
      <p>
        Defekte Außenbeleuchtung beeinträchtigt Sicherheit und Optik. Wir
        tauschen Leuchtmittel an gut erreichbaren Stellen aus und halten Ihre
        Außenbereiche hell. Ergänzend übernehmen wir die regelmäßige
        Objektkontrolle für Wohnanlagen und Geschäftsobjekte – wir melden
        Schäden frühzeitig und beheben kleinere Mängel direkt.
      </p>

      <h2 className="font-heading text-2xl font-bold text-primary">Kehrarbeiten und Wegepflege</h2>
      <p>
        Saubere Wege und Einfahrten werten jedes Grundstück auf. Wir übernehmen
        Kehrarbeiten und die Pflege von Wegen, Höfen und Stellflächen –
        regelmäßig oder nach Bedarf. So empfängt Ihr Grundstück Gäste und
        Kunden stets in einem gepflegten Zustand.
      </p>

      <h2 className="font-heading text-2xl font-bold text-primary">Drohnenservice</h2>
      <p>
        Mit unserem Drohnenservice bieten wir Ihnen eine moderne und sichere
        Möglichkeit, Ihr Grundstück und Ihre Gebäude aus der Vogelperspektive
        zu inspizieren und zu dokumentieren. Ob für die private Übersicht oder
        für Objektbetreuer – wir liefern Ihnen präzise Bilder und Videos ohne
        Gerüste oder Leitern.
      </p>
      <ul className="space-y-3">
        <li className="flex items-start gap-3">
          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <span><strong>Grundstücksbegehung:</strong> Umfassende Luftaufnahmen Ihres gesamten Grundstücks zur Bestandsdokumentation und Übersicht.</span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <span><strong>Professionelle Luftaufnahmen:</strong> Hochwertige Fotos und Videos Ihrer Immobilie – ideal für Dokumentation, Verkauf oder Werbung.</span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <span><strong>Dachrinnenkontrolle per Drohne in München:</strong> Schonende und sichere Prüfung Ihrer Dachrinnen und Fassaden aus der Luft – ohne Risiko und ohne Gerüstaufwand.</span>
        </li>
      </ul>
    </ServiceLayout>
  );
}