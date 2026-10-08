import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Check } from "lucide-react";

const JOBS = [
  {
    id: "hausmeister",
    title: "Hausmeister (m/w/d)",
    type: "Vollzeit / Teilzeit",
    location: "Ismaning & München Nord",
    summary:
      "Als Hausmeister sorgen Sie für den reibungslosen Ablauf rund um unsere Kundenobjekte – von der Gartenpflege über Reinigungsarbeiten bis hin zu kleinen Reparaturen.",
    tasks: [
      "Regelmäßige Betreuung von Wohn- und Geschäftsobjekten",
      "Garten- und Außenflächenpflege",
      "Kleinere Instandhaltungs- und Reparaturarbeiten",
      "Objektkontrolle und Schadensmeldung",
    ],
    profile: [
      "Zuverlässige, selbstständige Arbeitsweise",
      "Handwerkliches Geschick und Sorgfalt",
      "Führerschein Klasse B",
      "Wohnort im Raum München Nord von Vorteil",
    ],
  },
  {
    id: "fahrer-winterraumdienst",
    title: "Fahrer für Winterräumdienst (m/w/d)",
    type: "Saison / Teilzeit",
    location: "Ismaning & Umgebung",
    summary:
      "Im Winterhalbjahr sorgen Sie dafür, dass Wege, Einfahrten und Stellflächen unserer Kunden schnee- und eisfrei gehalten werden – sicher und termintreu.",
    tasks: [
      "Räumen und Streuen von Wegen und Einfahrten",
      "Einsatz bei Schnee- und Eisglätte nach Wetterlage",
      "Frühe Einsatzzeiten und Bereitschaft an Wochenenden",
      "Pflege der eingesetzten Geräte und Fahrzeuge",
    ],
    profile: [
      "Zuverlässigkeit und Pünktlichkeit auch bei frühen Einsatzzeiten",
      "Körperliche Belastbarkeit",
      "Führerschein Klasse B",
      "Wohnort im Raum München Nord von Vorteil",
    ],
  },
  {
    id: "bodenleger",
    title: "Bodenleger (m/w/d)",
    type: "Vollzeit / Projektbasis",
    location: "München Nord & Umgebung",
    summary:
      "Sie verlegen Bodenbeläge fachgerecht und sorgfältig – von Laminat und Parkett über PVC bis hin zu Fliesen. Qualität und saubere Arbeit stehen dabei an erster Stelle.",
    tasks: [
      "Fachgerechte Verlegung von Bodenbelägen aller Art",
      "Untergrundvorbereitung und Ausgleichsmaßnahmen",
      "Schnitt- und Anpassungsarbeiten",
      "Reinigung und Übergabe der fertigen Flächen",
    ],
    profile: [
      "Abgeschlossene Ausbildung als Bodenleger oder vergleichbar",
      "Berufserfahrung in der Bodenverlegung",
      "Sauberes, präzises Arbeiten",
      "Eigenes Werkzeug von Vorteil",
    ],
  },
  {
    id: "minijob-allroundhandwerker",
    title: "Minijob Allroundhandwerker (m/w/d)",
    type: "Minijob / Flexibel",
    location: "Ismaning & München Nord",
    summary:
      "Sie unterstützen unser Team bei den vielfältigen Aufgaben rund um Haus und Garten – flexibel nach Absprache und je nach Auftragslage.",
    tasks: [
      "Mithilfe bei Garten- und Außenarbeiten",
      "Kleinere Reparaturen und Montagearbeiten",
      "Reinigungs- und Pflegearbeiten",
      "Unterstützung bei Holzarbeiten",
    ],
    profile: [
      "Handwerkliches Geschick und praktische Erfahrung",
      "Flexibilität bei Einsatzzeiten und Aufgaben",
      "Zuverlässigkeit und Teamgeist",
      "Führerschein von Vorteil",
    ],
  },
  {
    id: "reinigungskraft",
    title: "Reinigungskraft (m/w/d)",
    type: "Teilzeit / Minijob",
    location: "Ismaning & München Nord",
    summary:
      "Als Reinigungskraft sorgen Sie für Sauberkeit und Ordnung in Wohn- und Geschäftsobjekten unserer Kunden – zuverlässig, gründlich und mit Blick fürs Detail.",
    tasks: [
      "Unterhalts- und Endreinigung von Wohn- und Geschäftsobjekten",
      "Treppenhaus- und Gemeinschaftsflächenreinigung",
      "Sanitär- und Fensterreinigung",
      "Einsatz nach Absprache flexibel nach Auftragslage",
    ],
    profile: [
      "Zuverlässige, selbstständige Arbeitsweise",
      "Sorgfalt und Sauberkeitsanspruch",
      "Erfahrung im Reinigungsbereich von Vorteil",
      "Wohnort im Raum München Nord von Vorteil",
    ],
  },
  {
    id: "gartenbauer",
    title: "Gartenbauer / Gärtner (m/w/d)",
    type: "Vollzeit / Teilzeit",
    location: "München Nord & Umgebung",
    summary:
      "Als Gartenbauer gestalten und pflegen Sie Gärten und Außenanlagen unserer Kunden – von der Bepflanzung über den Rasen bis zum Heckenschnitt.",
    tasks: [
      "Pflege und Neuanlage von Gärten und Außenanlagen",
      "Heckenschnitt, Baumschnitt und Rasenpflege",
      "Bepflanzung und Saisonbepflanzung",
      "Unkrautentfernung und Bodenpflege",
    ],
    profile: [
      "Abgeschlossene Ausbildung als Gärtner oder vergleichbar",
      "Berufserfahrung in der Gartenpflege",
      "Pflanzenkenntnisse und handwerkliches Geschick",
      "Führerschein Klasse B",
    ],
  },
];

export default function JobListings() {
  return (
    <section id="stellenangebote" className="py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 lg:mb-24">
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground block mb-3">
            KARRIERE
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-6">
            Offene Stellen
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Wir suchen motivierte Menschen, die mit Leib und Seele anpacken. Wenn
            Sie Lust auf abwechslungsreiche Arbeit in einem familiären Team
            haben, freuen wir uns auf Ihre Bewerbung.
          </p>
        </div>

        {/* Job cards */}
        <div className="space-y-6">
          {JOBS.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group border border-border bg-card hover:border-primary/40 transition-all duration-500 overflow-hidden"
            >
              <div className="p-6 lg:p-8">
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-10">
                  {/* Left: title + meta */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-heading text-xl lg:text-2xl font-bold text-primary">
                        {job.title}
                      </h3>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <Clock className="w-4 h-4" /> {job.type}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> {job.location}
                      </p>
                    </div>
                  </div>

                  {/* Middle: summary + tasks */}
                  <div className="lg:col-span-2">
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      {job.summary}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <span className="font-mono text-xs tracking-wider text-muted-foreground block mb-3">
                          IHRE AUFGABEN
                        </span>
                        <ul className="space-y-2">
                          {job.tasks.map((task) => (
                            <li key={task} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="font-mono text-xs tracking-wider text-muted-foreground block mb-3">
                          IHRE PROFIL
                        </span>
                        <ul className="space-y-2">
                          {job.profile.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6">
                      <a
                        href="#bewerbung"
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById("bewerbung");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-primary uppercase hover:gap-3 transition-all"
                      >
                        JETZT BEWERBEN
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}