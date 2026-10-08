# hausmeister-jauch.de

Website des Hausmeisterservice Sebastian Jauch. Gebaut mit [Astro](https://astro.build) und React, gehostet auf Cloudflare Pages.

## Lokal starten

```bash
npm install
npm run dev
```

## Aufbau

- `src/pages/` – eine Datei pro Adresse (Titel und Beschreibung für Google stehen hier)
- `src/views/` – Inhalt der Seiten (React)
- `src/components/` – Bausteine wie Navigation, Formulare, Galerie
- `src/data/site.js` – Firmendaten, Google-Analytics-ID, strukturierte Daten
- `public/images/` – Bilder
- `functions/api/contact.js` – Kontakt- und Bewerbungsformular (Cloudflare-Funktion, Versand über Resend)

## Cloudflare Pages

- Framework: Astro, Build-Befehl `npm run build`, Ausgabeordner `dist`
- Umgebungsvariable `RESEND_API_KEY` als Secret hinterlegen
