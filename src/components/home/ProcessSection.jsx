import React from "react";
const STEPS = [
  {
    title: "Anfragen",
    text: "Rufen Sie an, schreiben Sie per WhatsApp oder nutzen Sie das Formular – gerne mit ein paar Fotos.",
  },
  {
    title: "Angebot erhalten",
    text: "Bei Bedarf schaue ich mir alles vor Ort an. Sie bekommen ein klares, unverbindliches Angebot.",
  },
  {
    title: "Erledigt",
    text: "Ich arbeite zum vereinbarten Termin, hinterlasse alles ordentlich und weise den Lohnanteil auf der Rechnung aus.",
  },
];

export default function ProcessSection() {
  return (
    <section id="ablauf" className="py-16 lg:py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-10 lg:mb-14">
          So läuft's ab
        </h2>
        <ol className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {STEPS.map((step, i) => (
            <li key={step.title} className="border border-border bg-card p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 bg-primary text-primary-foreground font-heading font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <h3 className="font-heading text-xl font-bold text-primary">{step.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
