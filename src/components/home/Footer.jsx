import React, { useState } from "react";
import { ArrowUp, X, MapPin, Facebook, Instagram, Star } from "lucide-react";

export const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
import DatenschutzModal from "@/components/home/DatenschutzModal";
import { CookieSettingsModal } from "@/components/home/CookieBanner";
import { saveConsent } from "@/lib/consent";
import { GOOGLE_PROFILE, GOOGLE_REVIEW } from "@/data/site";


const LOGO_URL = "/images/logo-klein.webp";

function ImpressumModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[70] bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-6" onClick={onClose}>
      <div
        className="bg-background max-w-xl w-full max-h-[80vh] overflow-y-auto p-8 lg:p-10 relative"
        onClick={(e) => e.stopPropagation()}>
        
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X className="w-5 h-5" />
        </button>
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground block mb-4">IMPRESSUM</span>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Impressum</h2>
        <p className="text-sm text-muted-foreground mb-8">Angaben gemäß § 5 DDG</p>

        <div className="space-y-6 text-sm text-foreground/80 leading-relaxed">
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
        </div>

      </div>
    </div>
  );
}

export default function Footer() {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  const persistCookieChoice = (choice) => {
    saveConsent(choice);
    setShowCookieSettings(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Brand */}
            <div>
              <img
              loading="lazy"
              decoding="async"
                src={LOGO_URL}
                alt="SJ Hausmeisterservice Logo"
                className="w-44 mb-6"
              />
              <p className="text-background/60 text-sm leading-relaxed max-w-xs">
                Professioneller Hausmeisterservice für Gartenpflege und
                Reparaturen in Ismaning, München und Umgebung.
              </p>
            </div>

            {/* Services */}
            <div>
              <span className="font-mono text-xs tracking-[0.3em] text-background/40 block mb-6">
                LEISTUNGEN
              </span>
              <ul className="space-y-3 text-background/70 text-sm">
                <li><a href="/leistungen/gartenarbeiten" className="hover:text-background transition-colors">Hecke schneiden</a></li>
                <li><a href="/leistungen/gartenarbeiten" className="hover:text-background transition-colors">Rasen mähen</a></li>
                <li><a href="/leistungen/gartenarbeiten" className="hover:text-background transition-colors">Unkrautentfernung</a></li>
                <li><a href="/leistungen/gartenarbeiten" className="hover:text-background transition-colors">Bepflanzungen</a></li>
                <li><a href="/leistungen/gartenarbeiten" className="hover:text-background transition-colors">Laub entfernen</a></li>
                <li><a href="/leistungen/aussenbereich-pflege" className="hover:text-background transition-colors">Terrassenreinigung</a></li>
                <li><a href="/leistungen/aussenbereich-pflege" className="hover:text-background transition-colors">Regenrinnen reinigen</a></li>
                <li><a href="/leistungen/aussenbereich-pflege" className="hover:text-background transition-colors">Leuchtmittelaustausch</a></li>
                <li><a href="/leistungen/aussenbereich-pflege" className="hover:text-background transition-colors">Objektkontrolle</a></li>
                <li><a href="/leistungen/holzarbeiten-aussenbau" className="hover:text-background transition-colors">Holzarbeiten & Außenbau</a></li>
                <li><a href="/leistungen/reparaturen-montage" className="hover:text-background transition-colors">Kleinere Reparaturen</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <span className="font-mono text-xs tracking-[0.3em] text-background/40 block mb-6">
                KONTAKT
              </span>
              <div className="space-y-3 text-background/70 text-sm">
                <p>Sebastian Jauch</p>
                <p className="flex items-center gap-2">
                  Zacherlstr. 12, 85737 Ismaning
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Zacherlstr.+12,+85737+Ismaning"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/40 hover:text-background transition-colors inline-flex"
                    aria-label="Auf Google Maps anzeigen"
                    title="Auf Google Maps anzeigen"
                  >
                    <MapPin className="w-4 h-4" />
                  </a>
                </p>
                <a href="tel:+491746403178" className="block hover:text-background transition-colors">0174 640 31 78</a>
                <a href="mailto:info@hausmeister-jauch.de" className="block hover:text-background transition-colors break-all">info@hausmeister-jauch.de</a>
                <p className="pt-2">
                  Hausmeister in{" "}
                  <a href="/hausmeister-ismaning" className="underline underline-offset-4 hover:text-background transition-colors">Ismaning</a>
                  {" · "}
                  <a href="/hausmeister-unterfoehring" className="underline underline-offset-4 hover:text-background transition-colors">Unterföhring</a>
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-background/40 tracking-wider">PERSÖNLICH</span>
                <span className="w-4 h-px bg-background/20" />
                <span className="font-mono text-xs text-background/40 tracking-wider">KOMPETENT</span>
                <span className="w-4 h-px bg-background/20" />
                <span className="font-mono text-xs text-background/40 tracking-wider">ZUVERLÄSSIG</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href="https://www.facebook.com/profile.php?id=61593692862061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#1877F2] text-white hover:bg-[#1877F2]/85 transition-colors"
                  aria-label="Facebook-Seite von Hausmeisterservice Sebastian Jauch"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.instagram.com/hausmeisterjauch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white hover:opacity-90 transition-opacity"
                  aria-label="Instagram-Profil von Hausmeisterservice Sebastian Jauch"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://wa.me/491746403178"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#25D366] text-white hover:bg-[#25D366]/85 transition-colors"
                  aria-label="WhatsApp von Hausmeisterservice Sebastian Jauch"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                </a>
              </div>

              <a
                href={GOOGLE_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Star className="w-4 h-4 fill-accent text-accent" />
                Bewertungen auf Google ansehen
              </a>
              <a
                href={GOOGLE_REVIEW}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-fit border border-accent/60 text-accent px-4 py-2 font-heading font-semibold text-xs tracking-wider uppercase hover:bg-accent hover:text-foreground transition-colors"
              >
                Bewertung schreiben
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-background/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 flex-wrap">
              <p className="font-mono text-xs text-background/30 tracking-wider">
                © {new Date().getFullYear()} HAUSMEISTERSERVICE SEBASTIAN JAUCH
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="/impressum"
                  onClick={(e) => { e.preventDefault(); setShowImpressum(true); }}
                  className="font-mono text-xs text-background/40 hover:text-background/70 transition-colors underline underline-offset-4"
                >
                  IMPRESSUM
                </a>
                <a
                  href="/datenschutz"
                  onClick={(e) => { e.preventDefault(); setShowDatenschutz(true); }}
                  className="font-mono text-xs text-background/40 hover:text-background/70 transition-colors underline underline-offset-4"
                >
                  DATENSCHUTZ
                </a>
                <button
                  onClick={() => setShowCookieSettings(true)}
                  className="font-mono text-xs text-background/40 hover:text-background/70 transition-colors underline underline-offset-4"
                >
                  COOKIE-EINSTELLUNGEN
                </button>
              </div>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-background/40 hover:text-background/70 transition-colors duration-300 group"
            >
              <span className="font-mono text-xs tracking-wider">NACH OBEN</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </footer>

      {showImpressum && <ImpressumModal onClose={() => setShowImpressum(false)} />}
      {showDatenschutz && <DatenschutzModal onClose={() => setShowDatenschutz(false)} />}
      {showCookieSettings && (
        <CookieSettingsModal
          onClose={() => setShowCookieSettings(false)}
          onSave={persistCookieChoice}
        />
      )}
    </>
  );
}