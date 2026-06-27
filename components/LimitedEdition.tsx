"use client";

import { useState, useEffect } from 'react';
import { m } from 'framer-motion';
import Image from 'next/image';

export function LimitedEdition() {
  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 8, minutes: 45, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-warm-brown text-ivory py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-inter uppercase tracking-[0.2em] text-champagne mb-4"
            >
              Exclusive Drop
            </m.div>
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-cormorant text-5xl lg:text-7xl mb-6 leading-tight"
            >
              The Royal <br/> Heritage Edit
            </m.h2>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-dm text-ivory/80 text-lg mb-10 max-w-md"
            >
              Only 12 pieces crafted worldwide. Featuring pure gold zardosi on royal velvet. Once they're gone, they're gone forever.
            </m.p>

            <div className="flex gap-4 mb-12">
              {Object.entries(timeLeft).map(([unit, value], i) => (
                <m.div
                  key={unit}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex flex-col items-center bg-charcoal/30 backdrop-blur-sm p-4 min-w-[80px]"
                >
                  <div className="font-cormorant text-3xl text-champagne">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="font-inter text-[10px] uppercase tracking-widest text-ivory/60 mt-1">
                    {unit}
                  </div>
                </m.div>
              ))}
            </div>

            <m.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="bg-champagne text-white font-dm px-10 py-4 hover:bg-white hover:text-charcoal transition-colors duration-300"
            >
              Shop Limited Edition
            </m.button>
          </div>
          
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px]">
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src="https://images.unsplash.com/photo-1496747507725-b82b3a033f11?w=800&q=90"
                alt="Limited edition royal edit"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}
