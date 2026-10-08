import React from "react";
import LegalPageLayout from "@/components/LegalPageLayout";

export default function Impressum() {
  return (
    <LegalPageLayout
      metaTitle="Impressum"
      metaDescription="Impressum des Hausmeisterservice Sebastian Jauch gemäß § 5 DDG."
      path="/impressum"
      eyebrow="IMPRESSUM"
      title="Impressum"
    >
      <p className="text-muted-foreground mb-8">Angaben gemäß § 5 DDG</p>

      <div>
        <h3 className="font-heading font-semibold text-foreground mb-2">Hausmeisterservice Sebastian Jauch</h3>
        <p className="mb-2">
          Sebastian Jauch<br />
          Zacherlstraße 12<br />
          85737 Ismaning
        </p>
        <p>
          Telefon: <a href="tel:+491746403178" className="text-primary hover:underline">0174 640 31 78</a><br />
          E-Mail: <a href="mailto:info@hausmeister-jauch.de" className="text-primary hover:underline">info@hausmeister-jauch.de</a>
        </p>
      </div>

      <div className="border-t border-border pt-6">
        <h3 className="font-heading font-semibold text-foreground mb-2">Vertreten durch</h3>
        <p>Sebastian Jauch</p>
      </div>

      <div className="border-t border-border pt-6">
        <h3 className="font-heading font-semibold text-foreground mb-2">Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV</h3>
        <p>Sebastian Jauch<br />Zacherlstraße 12<br />85737 Ismaning</p>
      </div>

      <div className="border-t border-border pt-6">
        <h3 className="font-heading font-semibold text-foreground mb-2">Tätigkeitsbereich</h3>
        <p>Hausmeisterservice, Gartenpflege, Objektbetreuung sowie kleinere Instandhaltungs- und Reparaturarbeiten.</p>
      </div>

      <div className="border-t border-border pt-6">
        <h3 className="font-heading font-semibold text-foreground mb-2">Verbraucherstreitbeilegung</h3>
        <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      </div>

      <div className="border-t border-border pt-6">
        <h3 className="font-heading font-semibold text-foreground mb-2">Haftung für Inhalte</h3>
        <p className="mb-3">
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
        </p>
        <p className="mb-3">
          Nach den gesetzlichen Vorschriften sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese Inhalte unverzüglich entfernen.
        </p>
      </div>

      <div className="border-t border-border pt-6">
        <h3 className="font-heading font-semibold text-foreground mb-2">Haftung für Links</h3>
        <p className="mb-3">
          Unsere Website enthält Links zu externen Websites Dritter. Auf deren Inhalte haben wir keinen Einfluss und übernehmen deshalb keine Gewähr für deren Richtigkeit oder Rechtmäßigkeit.
        </p>
        <p className="mb-3">
          Für die Inhalte der verlinkten Seiten ist ausschließlich deren jeweiliger Betreiber verantwortlich.
        </p>
        <p>
          Bei Bekanntwerden von Rechtsverletzungen werden wir entsprechende Links unverzüglich entfernen.
        </p>
      </div>

      <div className="border-t border-border pt-6">
        <h3 className="font-heading font-semibold text-foreground mb-2">Urheberrecht</h3>
        <p className="mb-3">
          Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem deutschen Urheberrecht.
        </p>
        <p className="mb-3">
          Jede Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Rechteinhabers.
        </p>
        <p className="mb-3">
          Downloads und Kopien dieser Website sind ausschließlich für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit Inhalte nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet und entsprechend gekennzeichnet. Sollten Sie dennoch eine Urheberrechtsverletzung feststellen, bitten wir um einen entsprechenden Hinweis. Nach Bekanntwerden einer Rechtsverletzung werden wir die betreffenden Inhalte unverzüglich entfernen.
        </p>
      </div>
    </LegalPageLayout>
  );
}