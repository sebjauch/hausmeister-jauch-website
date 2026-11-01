import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";
import { REVIEWS, REVIEW_SOURCES } from "@/data/reviews";
import { GOOGLE_REVIEW } from "@/data/site";

function Stars({ count = 5, className = "w-4 h-4" }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${className} ${i < count ? "fill-accent text-accent" : "text-border"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

const MAX_REVIEWS = 6;

function formatRating(value) {
  return Number(value).toFixed(1).replace(".", ",");
}

// Abwechselnd MyHammer und Google, damit beide Plattformen sichtbar sind.
function interleave(a, b) {
  const out = [];
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i]) out.push(a[i]);
    if (b[i]) out.push(b[i]);
  }
  return out;
}

export default function ReviewsSection() {
  const [google, setGoogle] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/reviews")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data?.ok && data.count) setGoogle(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const sources = REVIEW_SOURCES.map((s) =>
    s.name === "Google" && google
      ? { ...s, rating: formatRating(google.rating), count: google.count, url: google.url || s.url }
      : s
  );
  const total = sources.reduce((sum, s) => sum + s.count, 0);
  const allFive = sources.every((s) => s.rating === "5,0");

  const myHammer = REVIEWS.filter((r) => r.source === "MyHammer");
  const googleReviews =
    google && google.reviews?.length
      ? google.reviews.map((r) => ({ ...r, job: null }))
      : REVIEWS.filter((r) => r.source === "Google");
  const reviews = interleave(myHammer, googleReviews).slice(0, MAX_REVIEWS);

  return (
    <section id="bewertungen" className="py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground block mb-3">
              BEWERTUNGEN
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-6">
              Das sagen meine Kunden
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {total} Bewertungen auf Google und MyHammer
              {allFive ? ", alle mit 5 von 5 Sternen." : "."}
            </p>
          </div>

          {/* Plattformen */}
          <div className="grid grid-cols-2 gap-4 lg:min-w-[420px]">
            {sources.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border bg-card hover:border-primary/40 transition-colors p-5"
              >
                <div className="font-heading font-semibold text-primary mb-2">{s.name}</div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-heading text-2xl font-bold text-primary">{s.rating}</span>
                  <Stars count={Math.round(parseFloat(String(s.rating).replace(",", ".")))} />
                </div>
                <div className="text-sm text-muted-foreground inline-flex items-center gap-1 group-hover:text-primary transition-colors">
                  {s.count} Bewertungen ansehen
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bewertungen */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r, index) => (
            <motion.figure
              key={r.author + r.source + index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
              className="border border-border bg-card p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <Stars count={r.rating ?? 5} />
                <Quote className="w-6 h-6 text-primary/20" aria-hidden="true" />
              </div>
              <blockquote className="text-foreground leading-relaxed flex-1">
                „{r.text}“
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border text-sm">
                <div className="font-semibold text-primary">
                  {r.authorUrl ? (
                    <a href={r.authorUrl} target="_blank" rel="noopener noreferrer nofollow" className="hover:underline">
                      {r.author}
                    </a>
                  ) : (
                    r.author
                  )}
                </div>
                <div className="text-muted-foreground">
                  {r.job ? `${r.job} · ` : ""}via {r.source}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:items-center">
          <p className="text-muted-foreground">Waren Sie zufrieden? Ich freue mich über Ihre Bewertung.</p>
          <a
            href={GOOGLE_REVIEW}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit border border-primary text-primary px-5 py-2.5 font-heading font-semibold text-xs tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Bewertung auf Google schreiben
          </a>
        </div>
      </div>
    </section>
  );
}
