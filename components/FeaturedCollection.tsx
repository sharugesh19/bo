"use client";

import { m } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function FeaturedCollection() {
  const collections = [
    {
      id: 1,
      name: "The Bridal Edit",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=90",
      className: "col-span-1 md:row-span-2 md:h-full h-[400px]",
    },
    {
      id: 2,
      name: "Festive Sarees",
      image: "https://images.unsplash.com/photo-1529635970-29b1a5a41c09?w=800&q=90",
      className: "col-span-1 h-[400px]",
    },
    {
      id: 3,
      name: "Modern Co-ords",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=90",
      className: "col-span-1 h-[400px]",
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-ivory">
      <div className="flex flex-col items-center mb-16">
        <m.h2 
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: 'auto', opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-cormorant text-[clamp(2.5rem,5vw,5rem)] text-charcoal overflow-hidden"
        >
          Featured Collections
        </m.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:auto-rows-[400px]">
        {collections.map((item, index) => (
          <m.div
            key={item.id}
            initial={{ scale: 0.96, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            className={`relative overflow-hidden group cursor-pointer ${item.className} ${index === 0 ? 'md:row-span-2' : ''}`}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-700 ease-[0.25,0.46,0.45,0.94] group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 text-white">
              <h3 className="font-cormorant text-3xl mb-2">{item.name}</h3>
              <Link href="/products" className="font-inter uppercase tracking-widest text-xs border-b border-white pb-1 hover:text-champagne hover:border-champagne transition-colors">
                Explore
              </Link>
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
}
