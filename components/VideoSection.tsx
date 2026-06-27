"use client";

import { m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export function VideoSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative h-[80vh] w-full overflow-hidden bg-charcoal flex items-center justify-center">
      <m.div style={{ y }} className="absolute inset-0 w-full h-[140%] -top-[20%]">
        <Image
          src="https://images.unsplash.com/photo-1483985988041-bac1ae5ab18f?w=1800&q=90"
          alt="Video placeholder"
          fill
          className="object-cover opacity-60"
          sizes="100vw"
        />
      </m.div>
      <div className="relative z-10 text-center">
        <m.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-cormorant text-5xl md:text-7xl text-white mb-8 drop-shadow-lg"
        >
          Crafted for the Extraordinary
        </m.h2>
        <m.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="group relative inline-flex items-center justify-center w-32 h-32 rounded-full border border-white/30 hover:border-champagne transition-colors duration-500"
        >
          <span className="font-inter uppercase tracking-widest text-xs text-white group-hover:text-champagne transition-colors">Play</span>
        </m.button>
      </div>
    </section>
  );
}
