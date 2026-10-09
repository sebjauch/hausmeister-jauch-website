# hausmeister-jauch.de

Website des Hausmeisterservice Sebastian Jauch. Gebaut mit [Astro](https://astro.build) und React, gehostet auf Cloudflare Workers.

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
- `originals/images/` – Originalbilder
- `public/images/` – verkleinerte Bilder für die Website (erzeugt mit `node scripts/optimize-images.mjs`)
- `functions/api/contact.js` – Kontakt- und Bewerbungsformular (Versand über Resend)
- `worker/index.js` + `wrangler.jsonc` – Cloudflare-Worker: leitet `/api/contact` an das Formular weiter, alles andere kommt aus `dist`

## Cloudflare

- Build-Befehl `npm run build`, Deploy-Befehl `npx wrangler deploy`
- Secret `RESEND_API_KEY` unter Worker → Settings → Variables and Secrets hinterlegen
