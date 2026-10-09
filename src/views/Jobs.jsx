import React from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import JobListings from "@/components/jobs/JobListings";
import JobsContactSection from "@/components/jobs/JobsContactSection";

export default function Jobs() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            ZURÜCK ZUR STARTSEITE
          </a>

          <div className="max-w-3xl">
            <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground block mb-3">
              KARRIERE
            </span>
            <h1 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-6 leading-[1.15]">
              Wir suchen Verstärkung
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Der Hausmeisterservice Sebastian Jauch wächst – und wir suchen
              Menschen, die mit anpacken wollen. Ob als Hausmeister, im
            Winterräumdienst, als Bodenleger oder Gartenbauer: Wenn Sie
            handwerkliches Geschick und Lust auf abwechslungsreiche Arbeit
            mitbringen, sind Sie bei uns richtig.
            </p>
          </div>
        </div>
      </section>

      {/* Job listings */}
      <JobListings />

      {/* Application form */}
      <JobsContactSection />

      <Footer />
    </>
  );
}