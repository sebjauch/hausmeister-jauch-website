import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppIcon } from "@/components/home/Footer";

const PHONE_HREF = "tel:+491746403178";
const PHONE_LABEL = "0174 640 31 78";
const WHATSAPP_HREF = "https://wa.me/491746403178";

const LOGO_URL = "/images/icon.webp";

const navLinks = [
{ label: "Über uns", href: "#ueber-mich" },
{ label: "Leistungen", href: "#leistungen" },
{ label: "Projekte", href: "#projekte" },
{ label: "Jobs", href: "/jobs" },
{ label: "Kontakt", href: "#kontakt" }];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Echte Links (für Google); auf der Startseite wird weich zum Abschnitt gescrollt.
  const linkHref = (href) => (href.startsWith("/") ? href : `/${href}`);

  const scrollToSection = (e, href) => {
    setMobileOpen(false);
    if (href.startsWith("/")) return;
    const el = document.querySelector(href);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goHome = (e) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ?
      "bg-background/90 backdrop-blur-md border-b border-border shadow-sm" :
      "bg-transparent"}`
      }>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        {/* Left logo / Home button */}
        <div className="flex-1 flex items-center">
          <a
            href="/"
            onClick={goHome}
            className="shrink-0"
            aria-label="Zur Startseite">
            
            <img
              src={LOGO_URL}
              alt="SJ Hausmeisterservice Logo"
              width={48}
              height={48}
              className="h-10 lg:h-12 w-auto transition-all duration-500"
            />
          </a>
        </div>

        {/* Mobile toggle (right on mobile) */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground">
          
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Right links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10 flex-1 justify-end">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={linkHref(link.href)}
            onClick={(e) => scrollToSection(e, link.href)}
            className="font-mono text-xs tracking-widest uppercase whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors duration-300">
            
              {link.label}
            </a>
          )}
          <a
            href={PHONE_HREF}
            className="hidden lg:inline-flex items-center gap-2 font-heading font-semibold text-sm text-primary hover:text-primary/80 transition-colors whitespace-nowrap">
            <Phone className="w-4 h-4" />
            {PHONE_LABEL}
          </a>
          <a
            href="/#kontakt"
            onClick={(e) => scrollToSection(e, "#kontakt")}
            className="whitespace-nowrap bg-primary text-primary-foreground px-5 py-2.5 text-xs font-heading font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors duration-300">
            
            Anfrage stellen
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-b border-border overflow-hidden">
          
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) =>
            <a
              key={link.href}
              href={linkHref(link.href)}
              onClick={(e) => scrollToSection(e, link.href)}
              className="font-mono text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground text-left transition-colors">
              
                  {link.label}
                </a>
            )}
              <a
              href="/#kontakt"
              onClick={(e) => scrollToSection(e, "#kontakt")}
              className="text-center bg-primary text-primary-foreground px-5 py-3 text-sm font-heading font-semibold tracking-wider uppercase mt-2">
              
                Anfrage stellen
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>

      {/* Mobil: feste Leiste zum Anrufen und Schreiben */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur-md shadow-[0_-2px_8px_rgba(0,0,0,0.06)]">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2 h-14 bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wider uppercase">
          <Phone className="w-4 h-4" />
          Anrufen
        </a>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 h-14 text-foreground font-heading font-semibold text-sm tracking-wider uppercase">
          <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
          WhatsApp
        </a>
      </div>
    </>);

}