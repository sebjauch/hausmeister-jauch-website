import React from "react";
import { X } from "lucide-react";

function Section({ n, title, children }) {
  return (
    <div className="border-t border-border pt-6">
      <h3 className="font-heading font-semibold text-foreground mb-2">{n}. {title}</h3>
      {children}
    </div>
  );
}

export default function DatenschutzModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[70] bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-6" onClick={onClose}>
      <div
        className="bg-background max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 lg:p-10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X className="w-5 h-5" />
        </button>
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground block mb-4">DATENSCHUTZ</span>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Datenschutzerklärung</h2>

        <div className="space-y-6 text-sm text-foreground/80 leading-relaxed">
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
              Unsere Website wird bei einem Hosting-Dienstleister betrieben.
            </p>
            <p className="mb-3">
              Der Hostinganbieter verarbeitet personenbezogene Daten ausschließlich im Rahmen der Erbringung seiner Leistungen und auf Grundlage eines Auftragsverarbeitungsvertrages gemäß Art. 28 DSGVO.
            </p>
            <p>
              Server-Log-Dateien werden ausschließlich zur Sicherstellung des technischen Betriebs sowie zur Fehleranalyse gespeichert.
            </p>
          </Section>

          <Section n={4} title="Kontaktformular">
            <p className="mb-3">Wenn Sie uns über das Kontaktformular kontaktieren, werden folgende Daten verarbeitet:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Name</li>
              <li>Telefonnummer (falls angegeben)</li>
              <li>E-Mail-Adresse</li>
              <li>Nachricht</li>
            </ul>
            <p className="mb-3">Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.</p>
            <p className="mb-3">Eine Weitergabe an Dritte erfolgt nicht.</p>
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

          <Section n={5} title="Kontaktaufnahme per E-Mail oder Telefon">
            <p className="mb-3">
              Wenn Sie uns per E-Mail oder telefonisch kontaktieren, speichern wir Ihre Angaben ausschließlich zur Bearbeitung Ihres Anliegens.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </Section>

          <Section n={6} title="Cookies">
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

          <Section n={7} title="Consent-Management (Cookie-Banner)">
            <p className="mb-3">Zur Verwaltung Ihrer Einwilligungen verwenden wir ein Consent-Management-Tool.</p>
            <p className="mb-3">Dieses speichert Ihre Cookie-Auswahl, damit diese bei zukünftigen Besuchen berücksichtigt werden kann.</p>
            <p className="mb-2">Folgende Informationen können dabei gespeichert werden:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Einwilligungsstatus</li>
              <li>Zeitpunkt der Einwilligung</li>
              <li>Browserinformationen</li>
              <li>anonymisierte IP-Adresse</li>
            </ul>
          </Section>

          <Section n={8} title="Google Maps">
            <p className="mb-3">Unsere Website nutzt Google Maps zur Darstellung unseres Standortes.</p>
            <p className="mb-3">Google Maps wird ausschließlich nach Ihrer ausdrücklichen Einwilligung geladen.</p>
            <p className="mb-1">
              <span className="font-heading font-semibold text-foreground block mb-1">Anbieter:</span>
              Google Ireland Limited<br />
              Gordon House<br />
              Barrow Street<br />
              Dublin 4<br />
              Irland
            </p>
            <p className="mt-3 mb-3">
              Beim Laden der Karte können personenbezogene Daten (z.B. Ihre IP-Adresse) an Google übermittelt werden.
            </p>
            <p className="mb-3">Es kann dabei auch zu einer Übermittlung in die USA kommen.</p>
            <p className="mb-3">
              Weitere Informationen finden Sie unter:<br />
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a>
            </p>
            <p>
              <span className="font-heading font-semibold text-foreground block mb-1">Rechtsgrundlage</span>
              Art. 6 Abs. 1 lit. a DSGVO.
            </p>
          </Section>

          <Section n={9} title="SSL- bzw. TLS-Verschlüsselung">
            <p className="mb-3">Diese Website verwendet aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung.</p>
            <p className="mb-3">Dadurch werden übermittelte Daten verschlüsselt übertragen.</p>
            <p>Eine verschlüsselte Verbindung erkennen Sie am Schloss-Symbol Ihres Browsers.</p>
          </Section>

          <Section n={10} title="Speicherdauer">
            <p className="mb-3">
              Wir speichern personenbezogene Daten nur solange, wie dies zur Erfüllung der jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
            </p>
            <p>Nach Ablauf dieser Fristen werden die Daten gelöscht.</p>
          </Section>

          <Section n={11} title="Ihre Rechte">
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

          <Section n={12} title="Beschwerderecht">
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

          <Section n={13} title="Widerspruch gegen Werbe-E-Mails">
            <p className="mb-3">
              Der Nutzung der im Impressum veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung wird hiermit widersprochen.
            </p>
            <p>Im Falle unverlangter Zusendung von Werbung behalten wir uns rechtliche Schritte vor.</p>
          </Section>

          <Section n={14} title="Änderungen dieser Datenschutzerklärung">
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, sofern dies aufgrund gesetzlicher Änderungen oder technischer Weiterentwicklungen erforderlich wird.
            </p>
            <p className="mt-4 text-muted-foreground">Stand: Juli 2026</p>
          </Section>
        </div>
      </div>
    </div>
  );
}