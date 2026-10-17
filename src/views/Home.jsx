import React from "react";
import Navbar from "../components/home/Navbar";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import GallerySection from "../components/home/GallerySection";
import ProcessSection from "../components/home/ProcessSection";
import AboutSection from "../components/home/AboutSection";
import FaqSection from "../components/home/FaqSection";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <ProcessSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
