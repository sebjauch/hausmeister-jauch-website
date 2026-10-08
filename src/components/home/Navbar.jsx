import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "/images/6bf64c176_websiteicon.png";

const navLinks = [
{ label: "Über uns", href: "#ueber-mich" },
{ label: "Leistungen", href: "#leistungen" },
{ label: "Projekte", href: "#projekte" },
{ label: "Jobs", href: "/jobs" },
{ label: "Kontakt", href: "#kontakt" }];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = (href) => {
    window.location.href = href;
  };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToSection = (href) => {
    setMobileOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Auf Unterseiten: zur Startseite navigieren und dort zum Abschnitt springen
      navigate(`/${href}`);
    }
  };

  const goHome = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ?
      "bg-background/90 backdrop-blur-md border-b border-border shadow-sm" :
      "bg-transparent"}`
      }>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        {/* Left logo / Home button */}
        <div className="flex-1 flex items-center">
          <button
            onClick={goHome}
            className="shrink-0"
            aria-label="Zur Startseite">
            
            <img
              src={LOGO_URL}
              alt="SJ Hausmeisterservice Logo"
              className="h-10 lg:h-12 w-auto transition-all duration-500"
            />
          </button>
        </div>

        {/* Mobile toggle (right on mobile) */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground">
          
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Right links */}
        <div className="hidden md:flex items-center gap-10 flex-1 justify-end">
          {navLinks.map((link) =>
          <button
            key={link.href}
            onClick={() => scrollToSection(link.href)}
            className="font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
            
              {link.label}
            </button>
          )}
          <button
            onClick={() => scrollToSection("#kontakt")}
            className="bg-primary text-primary-foreground px-5 py-2.5 text-xs font-heading font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors duration-300">
            
            Anfrage stellen
          </button>
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
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="font-mono text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground text-left transition-colors">
              
                  {link.label}
                </button>
            )}
              <button
              onClick={() => scrollToSection("#kontakt")}
              className="bg-primary text-primary-foreground px-5 py-3 text-sm font-heading font-semibold tracking-wider uppercase mt-2">
              
                Anfrage stellen
              </button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}