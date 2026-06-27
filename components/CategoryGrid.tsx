"use client";

import { m } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CategoryGrid() {
  const categories = [
    { name: "Sarees", image: "https://images.unsplash.com/photo-1529635970-29b1a5a41c09?w=600&q=80", className: "col-span-1 md:col-span-2 row-span-2 h-[400px] md:h-[600px]" },
    { name: "Lehengas", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80", className: "col-span-1 h-[300px]" },
    { name: "Kurtas", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80", className: "col-span-1 h-[300px]" },
    { name: "Gowns", image: "https://images.unsplash.com/photo-1496747507725-b82b3a033f11?w=600&q=80", className: "col-span-1 md:col-span-2 h-[300px]" },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <m.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-cormorant text-[clamp(2.5rem,5vw,5rem)] text-charcoal mb-12 text-center"
      >
        Shop by Category
      </m.h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-min">
        {categories.map((category, index) => (
          <m.div
            key={category.name}
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            className={`relative group overflow-hidden cursor-pointer ${category.className}`}
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-700 ease-[0.25,0.46,0.45,0.94] group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            <div className="absolute bottom-6 left-6 flex items-center justify-between right-6 transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="font-cormorant text-3xl text-white">{category.name}</h3>
              <ArrowRight className="text-white w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
            </div>
            <Link href="/products" className="absolute inset-0 z-10" aria-label={`Shop ${category.name}`} />
          </m.div>
        ))}
      </div>
    </section>
  );
}
