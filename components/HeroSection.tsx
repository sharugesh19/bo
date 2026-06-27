"use client";

import { m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  const headline = "Wear the Extraordinary".split(" ");

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-charcoal">
      {/* Background Image with Parallax */}
      <m.div style={{ y }} className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1529635970-29b1a5a41c09?w=1800&q=90&fit=crop"
          alt="Fashion editorial model wearing luxury Indian boutique wear"
          fill
          priority
          className="object-cover object-[center_top]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/55" />
      </m.div>

      {/* Floating Badge */}
      <m.div 
        initial={{ rotate: 45, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="absolute top-32 right-8 md:top-40 md:right-24 z-20"
      >
        <m.div 
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="bg-champagne text-white text-xs font-inter uppercase tracking-widest px-6 py-3 rounded-full shadow-xl"
        >
          New Collection
        </m.div>
      </m.div>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        
        {/* Eyebrow */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-champagne font-inter uppercase tracking-[0.2em] text-sm md:text-base mb-6"
        >
          New Festive Collection 2025
        </m.div>

        {/* Headline */}
        <h1 className="font-cormorant font-light text-pure-white flex flex-wrap justify-center gap-x-4 md:gap-x-8 leading-tight text-[clamp(4rem,9vw,9rem)]">
          {headline.map((word, i) => (
            <m.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.06, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="inline-block"
            >
              {word}
            </m.span>
          ))}
        </h1>

        {/* Subtext */}
        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-white/80 font-dm font-light text-lg md:text-xl max-w-lg mt-6 mb-12"
        >
          Curated luxury for the modern Indian woman.
        </m.p>

        {/* CTAs */}
        <m.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link 
            href="/products" 
            className="bg-champagne text-white font-dm font-medium px-10 py-4 rounded-none hover:bg-white hover:text-charcoal transition-colors duration-300 tracking-wide"
          >
            Explore Collection
          </Link>
          <Link 
            href="/about" 
            className="bg-transparent border border-white text-white font-dm font-medium px-10 py-4 rounded-none hover:bg-white/10 transition-colors duration-300 tracking-wide"
          >
            Our Story
          </Link>
        </m.div>
      </div>

      {/* Scroll Indicator */}
      <m.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2"
      >
        <span className="font-inter uppercase tracking-widest text-[10px]">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </m.div>
    </section>
  );
}
