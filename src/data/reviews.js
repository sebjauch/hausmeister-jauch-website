// Kundenbewertungen von Google und MyHammer, als fester Text übernommen
// (keine externen Widgets, daher keine zusätzlichen Cookies).
// Google: Note, Anzahl und Texte kommen automatisch über /api/reviews (worker/reviews.js);
// die Google-Einträge hier sind nur der Ersatz, falls der Abruf nicht klappt.
// MyHammer: die Anzahl wird wöchentlich automatisch anhand der Benachrichtigungs-Mails erhöht
// (Zeile mit MYHAMMER_COUNT nicht umbenennen). Neue MyHammer-Texte oben in REVIEWS eintragen.
// Namen nur als Vorname + Anfangsbuchstabe bzw. so, wie die Plattform sie zeigt.

import { GOOGLE_PROFILE, MYHAMMER_PROFILE } from "./site";

export const MYHAMMER_COUNT = 12;

export const REVIEW_SOURCES = [
  { name: "Google", rating: "5,0", count: 4, url: GOOGLE_PROFILE },
  { name: "MyHammer", rating: "5,0", count: MYHAMMER_COUNT, url: MYHAMMER_PROFILE },
];

export const REVIEWS = [
  {
    author: "Kunde aus Pliening",
    source: "MyHammer",
    date: "Oktober 2026",
    job: "Gartenpflege",
    text: "Herr Jauch war sehr freundlich und sehr zuverlässig. Er kam pünktlich zur verabredeten Zeit und arbeitete zügig und sehr sauber. Ich werde ihn auf jeden Fall bei Bedarf wieder kontaktieren.",
  },
  {
    author: "Cordula K.",
    source: "Google",
    date: "2026",
    job: null,
    text: "Unkompliziert, fachkundig, flott, ausdauernd, ideenreich mit gutem Equipment, super Pflanztipps.",
  },
  {
    author: "Tanja, München",
    source: "MyHammer",
    date: "August 2026",
    job: "Montage",
    text: "Absolut empfehlenswert! Sehr freundlich, pünktlich und kompetent. Die Arbeit wurde schnell, sauber und zu meiner vollsten Zufriedenheit erledigt. Jederzeit gerne wieder!",
  },
  {
    author: "Manfred A.",
    source: "Google",
    date: "2026",
    job: null,
    text: "Rasche Terminvereinbarung, sehr freundlicher Kontakt, schnelle und zuverlässige Arbeit, alles Top. Absolut empfehlenswert.",
  },
  {
    author: "Matthias V., München",
    source: "MyHammer",
    date: "August 2026",
    job: "Heckenschnitt",
    text: "Super freundlich und kompetent und pünktlich. Hat die Hecke zu unserer vollsten Zufriedenheit geschnitten und den Schnitt mitgenommen. Kann ich weiterempfehlen!",
  },
  {
    author: "Gerhard, München",
    source: "MyHammer",
    date: "August 2026",
    job: "Baumschnitt",
    text: "Kommunikation, Angebot, Preis-/Leistung, Pünktlichkeit: alles sehr zufriedenstellend. Hr. Jauch kann man auf jeden Fall nur weiterempfehlen!",
  },
];
