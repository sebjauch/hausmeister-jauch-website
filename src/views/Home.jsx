import React from "react";
import Navbar from "../components/home/Navbar";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import TargetGroupsSection from "../components/home/TargetGroupsSection";
import GallerySection from "../components/home/GallerySection";
import WhyUsSection from "../components/home/WhyUsSection";
import FaqSection from "../components/home/FaqSection";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/home/Footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* Separator line */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="border-t border-border" />
      </div>

      <AboutSection />
      <ServicesSection />
      <TargetGroupsSection />
      <GallerySection />
      <WhyUsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}