import React from "react";
import { ArrowDown } from "lucide-react";

const LOGO_URL = "/images/logo.webp";
const HERO_IMAGE = "/images/24b54621a_20240629_102308.webp";

export default function HeroSection() {
  const scrollToServices = () => {
    const el = document.querySelector("#leistungen");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.querySelector("#kontakt");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-8 lg:px-16 py-16 text-center">
      <div className="flex flex-col items-center max-w-3xl">
        <img
          src={LOGO_URL}
          alt="SJ Hausmeisterservice Logo"
          width={560}
          height={560}
          fetchpriority="high"
          className="w-full max-w-[560px] h-auto mb-10" />

        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">
          
          Hausmeisterservice
        </p>

        <h1 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] text-primary mb-3">
          
          Ihr Hausmeisterservice in
          <br />
          <span className="text-primary">Ismaning, München und Umgebung.</span>
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-3">
          
          Gartenpflege, Objektbetreuung, kleinere Reparaturen und
          Instandhaltungsarbeiten – persönlich, kompetent und zuverlässig.
        </p>

        <p className="font-heading text-sm tracking-wide text-accent uppercase mb-10">
          
          Ihr Zuhause in besten Händen
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          
          <button
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground px-8 py-4 font-heading font-semibold text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors duration-300">
            
            Kostenlose Anfrage
          </button>
          <button
            onClick={scrollToServices}
            className="border border-foreground/20 text-foreground px-8 py-4 font-heading font-semibold text-sm tracking-wider uppercase hover:bg-foreground/5 transition-colors duration-300">
            
            Leistungen ansehen
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex items-center gap-3 mt-20">
          <ArrowDown className="w-4 h-4 text-muted-foreground animate-bounce" />
          <span className="font-mono text-xs text-muted-foreground tracking-wider">NACH UNTEN SCROLLEN</span>
        </div>
      </div>
    </section>);

}