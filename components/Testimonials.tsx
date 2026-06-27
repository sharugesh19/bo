"use client";

import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Bride",
      text: "The bridal lehenga was absolutely stunning. The craftsmanship and attention to detail exceeded all my expectations. I felt like royalty on my special day.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
    },
    {
      name: "Ananya Patel",
      role: "Regular Client",
      text: "Aura Boutique is my go-to for all festive wear. Their collection is always fresh, unique, and the quality of the fabric is unmatched.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
    },
    {
      name: "Riya Kapoor",
      role: "Fashion Enthusiast",
      text: "The co-ords are incredibly comfortable yet chic. Perfect for modern Indian aesthetics. The customer service was also very helpful with sizing.",
      rating: 4,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-blush/30 overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <m.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-cormorant text-[clamp(2.5rem,5vw,4rem)] text-charcoal mb-16"
        >
          Words from Our Clients
        </m.h2>

        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <m.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center"
            >
              <div className="flex space-x-1 text-champagne mb-8">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="font-playfair text-2xl md:text-4xl text-charcoal italic mb-10 leading-relaxed max-w-3xl">
                &quot;{testimonials[current].text}&quot;
              </p>
              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-champagne p-1">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image src={testimonials[current].avatar} alt={testimonials[current].name} fill className="object-cover" />
                  </div>
                </div>
                <h4 className="font-dm font-medium text-charcoal">{testimonials[current].name}</h4>
                <p className="font-inter text-xs uppercase tracking-widest text-charcoal/50 mt-1">{testimonials[current].role}</p>
              </div>
            </m.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${current === idx ? 'bg-champagne w-6' : 'bg-charcoal/20'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
