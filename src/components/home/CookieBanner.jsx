import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck } from "lucide-react";

import { readConsent, saveConsent } from "@/lib/consent";

export function CookieSettingsModal({ onClose, onSave }) {
  const [prefs, setPrefs] = useState({
    notwendig: true,
    statistik: false,
    marketing: false,
  });

  const save = (choice) => {
    onSave(choice || prefs);
  };

  return (
    <div className="fixed inset-0 z-[80] bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6" onClick={onClose}>
      <div
        className="bg-background max-w-lg w-full max-h-[85vh] overflow-y-auto p-8 relative"
        onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X className="w-5 h-5" />
        </button>
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground block mb-3">
          COOKIE-EINSTELLUNGEN
        </span>
        <h2 className="font-heading text-2xl font-bold text-primary mb-6">
          Datenschutzeinstellungen
        </h2>

        <div className="space-y-5 text-sm">
          <div className="border border-border p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-heading font-semibold text-foreground">Notwendig</span>
              <span className="font-mono text-xs text-muted-foreground">IMMER AKTIV</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Diese Cookies sind erforderlich, damit Grundfunktionen wie Sicherheit
              und Sitzungsverwaltung funktionieren. Sie können nicht deaktiviert werden.
            </p>
          </div>

          <label className="block border border-border p-4 cursor-pointer hover:border-primary/30 transition-colors">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={prefs.statistik}
                onChange={(e) => setPrefs({ ...prefs, statistik: e.target.checked })}
                className="mt-1 accent-primary"
              />
              <div>
                <span className="font-heading font-semibold text-foreground block mb-1">Statistik</span>
                <p className="text-muted-foreground leading-relaxed">
                  Anonymisierte Daten helfen uns zu verstehen, wie Besucher mit
                  der Website interagieren, um Verbesserungen vorzunehmen.
                </p>
              </div>
            </div>
          </label>

          <label className="block border border-border p-4 cursor-pointer hover:border-primary/30 transition-colors">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={prefs.marketing}
                onChange={(e) => setPrefs({ ...prefs, marketing: e.target.checked })}
                className="mt-1 accent-primary"
              />
              <div>
                <span className="font-heading font-semibold text-foreground block mb-1">Marketing</span>
                <p className="text-muted-foreground leading-relaxed">
                  Diese Cookies werden verwendet, um Werbung relevanter für Sie
                  und Ihre Interessen zu gestalten.
                </p>
              </div>
            </div>
          </label>
        </div>

        <button
          onClick={() => save(prefs)}
          className="w-full mt-6 bg-primary text-primary-foreground py-3 font-heading font-semibold text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors">
          Auswahl bestätigen
        </button>
      </div>
    </div>
  );
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (!readConsent()) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const persist = (value) => {
    saveConsent(value);
    setVisible(false);
  };

  const acceptAll = () => persist({ notwendig: true, statistik: true, marketing: true });
  const acceptNecessary = () => persist({ notwendig: true, statistik: false, marketing: false });

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35 }}
            className="fixed bottom-14 md:bottom-0 inset-x-0 z-[70] px-4 pb-4 sm:px-6 sm:pb-6">
            <div className="max-w-5xl mx-auto bg-foreground text-background shadow-2xl border-t-2 border-accent">
              <div className="p-5 sm:p-7">
                <div className="flex flex-col lg:flex-row items-start gap-5">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-10 h-10 bg-accent/20 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h2 className="font-heading text-lg font-bold mb-1.5 text-background">
                        Cookies & Datenschutz
                      </h2>
                      <p className="text-background/70 text-sm leading-relaxed max-w-2xl">
                        Wir verwenden Cookies, um Ihnen das beste Erlebnis auf unserer
                        Website zu bieten. Notwendige Cookies sind für den Betrieb
                        erforderlich. Statistik- und Marketing-Cookies helfen uns,
                        unsere Services weiter zu verbessern.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                    <button
                      onClick={() => setShowSettings(true)}
                      className="font-heading font-semibold text-xs tracking-wider uppercase text-background/80 border border-background/30 px-5 py-3 hover:bg-background/10 transition-colors">
                      Einstellungen
                    </button>
                    <button
                      onClick={acceptNecessary}
                      className="font-heading font-semibold text-xs tracking-wider uppercase text-background border border-background/30 px-5 py-3 hover:bg-background/10 transition-colors">
                      Nur Notwendige
                    </button>
                    <button
                      onClick={acceptAll}
                      className="font-heading font-semibold text-xs tracking-wider uppercase bg-accent text-foreground px-5 py-3 hover:bg-accent/90 transition-colors">
                      Alle akzeptieren
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showSettings && (
        <CookieSettingsModal onClose={() => setShowSettings(false)} onSave={persist} />
      )}
    </>
  );
}