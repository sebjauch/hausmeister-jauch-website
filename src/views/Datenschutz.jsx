import React from "react";
import LegalPageLayout from "@/components/LegalPageLayout";

function Section({ n, title, children }) {
  return (
    <div className="border-t border-border pt-6">
      <h3 className="font-heading font-semibold text-foreground mb-2">{n}. {title}</h3>
      {children}
    </div>
  );
}

export default function Datenschutz() {
  return (
    <LegalPageLayout
      metaTitle="Datenschutz"
      metaDescription="Datenschutzerklärung des Hausmeisterservice Sebastian Jauch – Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO."
      path="/datenschutz"
      eyebrow="DATENSCHUTZ"
      title="Datenschutzerklärung"
    >
      <div>
        <p className="mb-3">
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO), sowie dieser Datenschutzerklärung.
        </p>
      </div>

      <Section n={1} title="Verantwortlicher">
        <p className="mb-2">Hausmeisterservice Sebastian Jauch</p>
        <p className="mb-3">
          Sebastian Jauch<br />
          Zacherlstraße 12<br />
          85737 Ismaning
        </p>
        <p>
          Telefon: <a href="tel:+491746403178" className="text-primary hover:underline">0174 640 31 78</a><br />
          E-Mail: <a href="mailto:info@hausmeister-jauch.de" className="text-primary hover:underline">info@hausmeister-jauch.de</a>
        </p>
      </Section>

      <Section n={2} title="Erhebung und Speicherung personenbezogener Daten">
        <p className="mb-3">
          Beim Besuch unserer Website werden automatisch Informationen durch Ihren Browser an den Server unserer Website übermittelt.
        </p>
        <p className="mb-2">Hierbei handelt es sich insbesondere um:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>IP-Adresse (gekürzt bzw. anonymisiert, soweit technisch möglich)</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Browsertyp und Browserversion</li>
          <li>Betriebssystem</li>
          <li>Referrer-URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>aufgerufene Seiten</li>
        </ul>
        <p className="mb-3">
          Diese Daten dienen ausschließlich der technischen Bereitstellung der Website sowie der Gewährleistung der Sicherheit und Stabilität.
        </p>
        <p>
          <span className="font-heading font-semibold text-foreground block mb-1">Rechtsgrundlage</span>
          Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
        </p>
      </Section>

      <Section n={3} title="Hosting">
        <p className="mb-3">
          Unsere Website wird bei Cloudflare gehostet. Anbieter ist die Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA.
        </p>
        <p className="mb-3">
          Beim Aufruf unserer Website verarbeitet Cloudflare die unter Ziffer 2 genannten Zugriffsdaten (insbesondere Ihre IP-Adresse), um die Website auszuliefern und vor Angriffen zu schützen. Cloudflare betreibt dafür ein weltweites Servernetz, eine Verarbeitung in den USA ist daher möglich.
        </p>
        <p className="mb-3">
          Wir haben mit Cloudflare einen Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO geschlossen. Cloudflare ist nach dem EU-US Data Privacy Framework zertifiziert. Zusätzlich gelten die Standardvertragsklauseln der EU-Kommission.
        </p>
        <p className="mb-3">
          Weitere Informationen finden Sie unter:<br />
          <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.cloudflare.com/privacypolicy/</a>
        </p>
        <p>
          <span className="font-heading font-semibold text-foreground block mb-1">Rechtsgrundlage</span>
          Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und zuverlässigen Bereitstellung unserer Website).
        </p>
      </Section>

      <Section n={4} title="Kontaktformular">
        <p className="mb-3">Wenn Sie uns über das Kontaktformular kontaktieren, werden folgende Daten verarbeitet:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Name</li>
          <li>Telefonnummer (falls angegeben)</li>
          <li>E-Mail-Adresse</li>
          <li>gewünschte Leistung</li>
          <li>Nachricht</li>
          <li>von Ihnen hochgeladene Fotos (falls angegeben)</li>
        </ul>
        <p className="mb-3">
          Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Ihre Anfrage wird uns per E-Mail zugestellt, und Sie erhalten eine automatische Eingangsbestätigung. Die Daten werden nicht auf der Website gespeichert.
        </p>
        <p className="mb-3">
          Für den Versand dieser E-Mails nutzen wir den Dienst Resend. Anbieter ist die Plus Five Five, Inc. (Resend), 2261 Market Street #5039, San Francisco, CA 94114, USA. Der Versand erfolgt über Server in der EU (Irland). Eine Übermittlung in die USA kann dennoch nicht ausgeschlossen werden. Mit Resend besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO auf Grundlage der Standardvertragsklauseln der EU-Kommission.
        </p>
        <p className="mb-3">
          Weitere Informationen finden Sie unter:<br />
          <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://resend.com/legal/privacy-policy</a>
        </p>
        <p className="mb-1">
          <span className="font-heading font-semibold text-foreground block mb-1">Rechtsgrundlage</span>
          Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)
        </p>
        <p className="mb-3">bzw.</p>
        <p className="mb-3">Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung Ihrer Anfrage).</p>
        <p>
          Die Daten werden gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen.
        </p>
      </Section>

      <Section n={5} title="Bewerbungen">
        <p className="mb-3">Wenn Sie sich über das Bewerbungsformular auf unserer Jobs-Seite bewerben, verarbeiten wir folgende Daten:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Name</li>
          <li>Telefonnummer (falls angegeben)</li>
          <li>E-Mail-Adresse</li>
          <li>gewünschte Stelle</li>
          <li>Ihre Nachricht</li>
          <li>von Ihnen hochgeladene Bewerbungsunterlagen</li>
        </ul>
        <p className="mb-3">
          Die Bewerbung wird uns, wie beim Kontaktformular, per E-Mail über den Dienst Resend zugestellt (siehe Ziffer 4). Wir verwenden Ihre Angaben ausschließlich für die Entscheidung über ein Beschäftigungsverhältnis.
        </p>
        <p className="mb-3">
          <span className="font-heading font-semibold text-foreground block mb-1">Rechtsgrundlage</span>
          Art. 6 Abs. 1 lit. b DSGVO in Verbindung mit § 26 BDSG (Anbahnung eines Beschäftigungsverhältnisses).
        </p>
        <p>
          Kommt kein Beschäftigungsverhältnis zustande, löschen wir Ihre Unterlagen spätestens sechs Monate nach Abschluss des Bewerbungsverfahrens, sofern Sie nicht einer längeren Speicherung zugestimmt haben.
        </p>
      </Section>

      <Section n={6} title="Kontaktaufnahme per E-Mail oder Telefon">
        <p className="mb-3">
          Wenn Sie uns per E-Mail oder telefonisch kontaktieren, speichern wir Ihre Angaben ausschließlich zur Bearbeitung Ihres Anliegens.
        </p>
        <p>
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </Section>

      <Section n={7} title="Cookies">
        <p className="mb-3">Unsere Website verwendet Cookies.</p>
        <p className="mb-3">Hierbei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.</p>
        <p className="mb-3">Einige Cookies sind technisch notwendig, um die Website bereitzustellen.</p>
        <p className="mb-3">Andere Cookies dienen statistischen oder funktionalen Zwecken und werden ausschließlich nach Ihrer ausdrücklichen Einwilligung gesetzt.</p>
        <p className="mb-3">Die Einwilligung erfolgt über unser Cookie-Consent-Tool.</p>
        <p className="mb-3">
          Sie können Ihre Einwilligung jederzeit über den Link „Cookie-Einstellungen" am Ende der Website widerrufen oder ändern.
        </p>
        <p className="mb-1">
          <span className="font-heading font-semibold text-foreground block mb-1">Rechtsgrundlagen</span>
          Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
        </p>
        <p>Art. 6 Abs. 1 lit. f DSGVO (technisch notwendige Cookies)</p>
      </Section>

      <Section n={8} title="Consent-Management (Cookie-Banner)">
        <p className="mb-3">
          Beim ersten Besuch fragen wir über ein Cookie-Banner, welchen Diensten Sie zustimmen. Ihre Auswahl und der Zeitpunkt der Auswahl werden im lokalen Speicher Ihres Browsers abgelegt, damit das Banner nicht bei jedem Besuch erneut erscheint. Diese Information wird nicht an uns oder an Dritte übertragen.
        </p>
        <p className="mb-3">
          Sie können Ihre Auswahl jederzeit über den Link „Cookie-Einstellungen" am Ende der Website ändern oder widerrufen.
        </p>
        <p>
          <span className="font-heading font-semibold text-foreground block mb-1">Rechtsgrundlage</span>
          Art. 6 Abs. 1 lit. c DSGVO in Verbindung mit § 25 Abs. 2 TDDDG (Speicherung ist für den Nachweis der Einwilligung erforderlich).
        </p>
      </Section>

      <Section n={9} title="Google Analytics">
        <p className="mb-3">
          Mit Ihrer Einwilligung nutzen wir Google Analytics 4, um die Nutzung unserer Website statistisch auszuwerten und unser Angebot zu verbessern.
        </p>
        <p className="mb-1">
          <span className="font-heading font-semibold text-foreground block mb-1">Anbieter:</span>
          Google Ireland Limited<br />
          Gordon House<br />
          Barrow Street<br />
          Dublin 4<br />
          Irland
        </p>
        <p className="mt-3 mb-3">
          Google Analytics wird erst geladen, wenn Sie im Cookie-Banner „Statistik" zustimmen. Dabei werden Cookies gesetzt und Informationen über Ihre Nutzung der Website (z.B. aufgerufene Seiten, Verweildauer, Gerät und ungefährer Standort) an Google übermittelt. IP-Adressen werden von Google Analytics 4 nicht gespeichert. Eine Übermittlung in die USA ist möglich. Google ist nach dem EU-US Data Privacy Framework zertifiziert.
        </p>
        <p className="mb-3">
          Sie können Ihre Einwilligung jederzeit über „Cookie-Einstellungen" am Ende der Website widerrufen.
        </p>
        <p className="mb-3">
          Weitere Informationen finden Sie unter:<br />
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a>
        </p>
        <p>
          <span className="font-heading font-semibold text-foreground block mb-1">Rechtsgrundlage</span>
          Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG (Einwilligung).
        </p>
      </Section>

      <Section n={10} title="Google Maps">
        <p className="mb-3">Unsere Website kann eine Karte von Google Maps anzeigen, um unseren Standort darzustellen.</p>
        <p className="mb-3">Die Karte wird erst geladen, wenn Sie auf „Karte laden" klicken. Vorher findet keine Verbindung zu Google statt.</p>
        <p className="mb-1">
          <span className="font-heading font-semibold text-foreground block mb-1">Anbieter:</span>
          Google Ireland Limited<br />
          Gordon House<br />
          Barrow Street<br />
          Dublin 4<br />
          Irland
        </p>
        <p className="mt-3 mb-3">
          Beim Laden der Karte werden personenbezogene Daten (z.B. Ihre IP-Adresse) an Google übermittelt.
        </p>
        <p className="mb-3">Es kann dabei auch zu einer Übermittlung in die USA kommen.</p>
        <p className="mb-3">
          Weitere Informationen finden Sie unter:<br />
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a>
        </p>
        <p>
          <span className="font-heading font-semibold text-foreground block mb-1">Rechtsgrundlage</span>
          Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch Klick auf „Karte laden").
        </p>
      </Section>

      <Section n={11} title="Schriftarten">
        <p>
          Die auf dieser Website verwendeten Schriftarten sind lokal auf unserem Server eingebunden. Beim Aufruf der Seite wird keine Verbindung zu Servern von Google oder anderen Schriftanbietern aufgebaut.
        </p>
      </Section>

      <Section n={12} title="SSL- bzw. TLS-Verschlüsselung">
        <p className="mb-3">Diese Website verwendet aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung.</p>
        <p className="mb-3">Dadurch werden übermittelte Daten verschlüsselt übertragen.</p>
        <p>Eine verschlüsselte Verbindung erkennen Sie am Schloss-Symbol Ihres Browsers.</p>
      </Section>

      <Section n={13} title="Speicherdauer">
        <p className="mb-3">
          Wir speichern personenbezogene Daten nur solange, wie dies zur Erfüllung der jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
        </p>
        <p>Nach Ablauf dieser Fristen werden die Daten gelöscht.</p>
      </Section>

      <Section n={14} title="Ihre Rechte">
        <p className="mb-3">Sie haben jederzeit das Recht auf</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Auskunft gemäß Art. 15 DSGVO</li>
          <li>Berichtigung gemäß Art. 16 DSGVO</li>
          <li>Löschung gemäß Art. 17 DSGVO</li>
          <li>Einschränkung der Verarbeitung gemäß Art. 18 DSGVO</li>
          <li>Datenübertragbarkeit gemäß Art. 20 DSGVO</li>
          <li>Widerspruch gemäß Art. 21 DSGVO</li>
          <li>Widerruf einer bereits erteilten Einwilligung mit Wirkung für die Zukunft.</li>
        </ul>
      </Section>

      <Section n={15} title="Beschwerderecht">
        <p className="mb-3">
          Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
        </p>
        <p className="mb-3">Die für Bayern zuständige Aufsichtsbehörde ist:</p>
        <p className="mb-3">
          Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
          Promenade 18<br />
          91522 Ansbach<br />
          Deutschland
        </p>
        <p>
          Telefon: +49 981 1800930<br />
          E-Mail: <a href="mailto:poststelle@lda.bayern.de" className="text-primary hover:underline">poststelle@lda.bayern.de</a>
        </p>
      </Section>

      <Section n={16} title="Widerspruch gegen Werbe-E-Mails">
        <p className="mb-3">
          Der Nutzung der im Impressum veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung wird hiermit widersprochen.
        </p>
        <p>Im Falle unverlangter Zusendung von Werbung behalten wir uns rechtliche Schritte vor.</p>
      </Section>

      <Section n={17} title="Änderungen dieser Datenschutzerklärung">
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, sofern dies aufgrund gesetzlicher Änderungen oder technischer Weiterentwicklungen erforderlich wird.
        </p>
        <p className="mt-4 text-muted-foreground">Stand: Oktober 2026</p>
      </Section>
    </LegalPageLayout>
  );
}