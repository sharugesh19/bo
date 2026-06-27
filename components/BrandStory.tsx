"use client";

import { m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export function BrandStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-ivory overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Image */}
        <div className="w-full lg:w-1/2 relative aspect-[4/5] overflow-hidden">
          <m.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <Image
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=90"
              alt="Artisan crafting luxury wear"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </m.div>
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <m.h2 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-8"
          >
            The Art of <br />
            <span className="italic text-champagne">Slow Fashion</span>
          </m.h2>

          <m.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-px bg-champagne mb-8"
          />

          <m.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-dm text-charcoal/80 text-lg mb-6 leading-relaxed"
          >
            Every piece at Aura is a testament to India&apos;s rich textile heritage, reimagined for the contemporary silhouette. We believe in fashion that transcends seasons.
          </m.p>

          <m.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-dm text-charcoal/80 text-lg mb-10 leading-relaxed"
          >
            Our master artisans spend up to 400 hours handcrafting a single ensemble, ensuring that what you wear is not just clothing, but an heirloom.
          </m.p>

          <m.blockquote 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-playfair text-2xl lg:text-3xl text-charcoal border-l-2 border-champagne pl-6 py-2"
          >
            &quot;Elegance is not about being noticed, it&apos;s about being remembered.&quot;
          </m.blockquote>
        </div>
      </div>
    </section>
  );
}
