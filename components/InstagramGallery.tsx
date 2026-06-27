"use client";

import { m } from 'framer-motion';
import Image from 'next/image';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export function InstagramGallery() {
  const images = [
    "https://images.unsplash.com/photo-1529635970-29b1a5a41c09?w=400&q=80",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80",
    "https://images.unsplash.com/photo-1496747507725-b82b3a033f11?w=400&q=80",
    "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80",
  ];

  return (
    <section className="py-24 bg-ivory overflow-hidden">
      <m.div
        initial={{ rotate: -1, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center flex flex-col items-center"
      >
        <InstagramIcon className="w-8 h-8 text-charcoal mb-4" />
        <h2 className="font-cormorant text-[clamp(2rem,4vw,4rem)] text-charcoal mb-4">Follow the Journey</h2>
        <a href="#" className="font-inter uppercase tracking-widest text-sm text-charcoal/60 hover:text-champagne transition-colors pb-1 border-b border-transparent hover:border-champagne">
          @auraboutique
        </a>
      </m.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
        {images.map((src, index) => (
          <m.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative aspect-square group overflow-hidden bg-charcoal"
          >
            <Image
              src={src}
              alt="Instagram gallery image"
              fill
              className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <InstagramIcon className="w-8 h-8 text-white" />
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
}
