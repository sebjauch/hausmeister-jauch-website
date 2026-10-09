import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const photos = [
{
  src: "/images/9be22a100_20230617_104423.webp",
  label: "Baumschnitt & Grünpflege",
  span: "col-span-2 row-span-2"
},
{
  src: "/images/2e81922dd_20230617_114119.webp",
  label: "Grundstückspflege",
  span: "col-span-1 row-span-1"
},
{
  src: "/images/308d22519_20260601_113140.webp",
  label: "Regenrinnen reinigen",
  span: "col-span-1 row-span-2"
},
{
  src: "/images/24b54621a_20240629_102308.webp",
  label: "Heckenschnitt",
  span: "col-span-1 row-span-1"
},
{
  src: "/images/1701a522e_20190916_154912.webp",
  label: "Tor- & Zaunreparatur",
  span: "col-span-1 row-span-1"
},
{
  src: "/images/b4ab21fd1_20190409_151333.webp",
  label: "Zaunerneuerung",
  span: "col-span-1 row-span-1"
},
{
  src: "/images/2a9716192_generated_image.webp",
  label: "Reparaturarbeiten",
  span: "col-span-2 row-span-1"
},
{
  src: "/images/69ad9eceb_20250129_114341.webp",
  label: "Küchenmontage",
  span: "col-span-1 row-span-1"
},
{
  src: "/images/462b70b12_20230628_172049.webp",
  label: "Terrassenbau",
  span: "col-span-1 row-span-1"
},
{
  src: "/images/b6fce7dbc_20230914_155547.webp",
  label: "Balkonverkleidung",
  span: "col-span-1 row-span-1"
},
{
  src: "/images/9325ea156_20230226_085500.webp",
  label: "Dachbodenausbau",
  span: "col-span-1 row-span-2"
},
{
  src: "/images/12902cdf5_20211217_191249.webp",
  label: "Fußbodenverlegung",
  span: "col-span-2 row-span-1"
},
{
  src: "/images/73d716b30_20230618_072631.webp",
  label: "Maßarbeit — Medienelement",
  span: "col-span-1 row-span-1"
}];


export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="projekte" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-16 lg:mb-24">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground block mb-3">
              REFERENZEN
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-primary">
              Einblicke in unsere Arbeit
            </h2>
          </div>
          

          
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] lg:auto-rows-[240px] gap-3 lg:gap-4">
          {photos.map((photo, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className={`relative overflow-hidden group cursor-pointer ${photo.span} ${photo.contain ? "bg-secondary/50" : ""}`}
            onClick={() => setLightbox(photo)}>
            
              <img
              loading="lazy"
              decoding="async"
              src={photo.src}
              alt={photo.label}
              className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${photo.contain ? "object-contain" : "object-cover"}`} />
            
              {/* Overlay */}
              








            
              {/* Technical border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/40 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox &&
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-[60] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-6"
        onClick={() => setLightbox(null)}>
        
          <button
          className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
          onClick={() => setLightbox(null)}>
          
            <X className="w-6 h-6" />
          </button>
          <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-4xl max-h-[85vh] w-full"
          onClick={(e) => e.stopPropagation()}>
          
            <img
              loading="lazy"
              decoding="async"
            src={lightbox.src}
            alt={lightbox.label}
            className="w-full h-full object-contain" />
          
            <div className="mt-4 flex items-center gap-3">
              <span className="font-mono text-xs text-white/50 tracking-wider">PROJEKT</span>
              <span className="w-8 h-px bg-white/30" />
              <span className="font-heading text-white font-medium">{lightbox.label}</span>
            </div>
          </motion.div>
        </motion.div>
      }
    </section>);

}