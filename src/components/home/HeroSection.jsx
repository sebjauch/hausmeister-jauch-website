import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const LOGO_URL = "/images/744b80371_ChatGPTImage10Juni202615_54_43.png";
const HERO_IMAGE = "/images/24b54621a_20240629_102308.jpg";

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}>
          
          <img
            src={LOGO_URL}
            alt="SJ Hausmeisterservice Logo"
            className="w-full max-w-[560px] mb-10" />
          
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">
          
          Hausmeisterservice
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] text-primary mb-3">
          
          Ihr Hausmeisterservice in
          <br />
          <span className="text-primary">Ismaning, München und Umgebung.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-3">
          
          Gartenpflege, Objektbetreuung, kleinere Reparaturen und
          Instandhaltungsarbeiten – persönlich, kompetent und zuverlässig.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="font-heading text-sm tracking-wide text-accent uppercase mb-10">
          
          Ihr Zuhause in besten Händen
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4">
          
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
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="hidden lg:flex items-center gap-3 mt-20">
          
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}>
            
            <ArrowDown className="w-4 h-4 text-muted-foreground" />
          </motion.div>
          <span className="font-mono text-xs text-muted-foreground tracking-wider">NACH UNTEN SCROLLEN</span>
        </motion.div>
      </div>
    </section>);

}