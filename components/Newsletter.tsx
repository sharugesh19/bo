"use client";

import { useState } from 'react';
import { m } from 'framer-motion';
import { Check } from 'lucide-react';

export function Newsletter() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const title = "Join the Inner Circle";

  return (
    <section className="py-32 bg-ivory text-center relative overflow-hidden">
      {/* Decorative Botanical SVG Lines */}
      <svg className="absolute top-0 left-0 w-64 h-64 text-champagne/20 pointer-events-none" viewBox="0 0 100 100">
        <m.path 
          d="M0,100 C30,100 50,70 50,50 C50,30 70,0 100,0" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
      <svg className="absolute bottom-0 right-0 w-64 h-64 text-champagne/20 pointer-events-none" viewBox="0 0 100 100">
        <m.path 
          d="M100,0 C70,0 50,30 50,50 C50,70 30,100 0,100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>

      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 flex justify-center space-x-2">
          {title.split(' ').map((word, i) => (
            <m.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              {word}
            </m.span>
          ))}
        </h2>
        <m.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-dm text-charcoal/70 mb-10 text-lg"
        >
          Subscribe to receive early access to new collections, exclusive offers, and editorial fashion stories.
        </m.p>

        <form onSubmit={handleSubmit} className="relative max-w-md mx-auto group">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input 
            id="newsletter-email"
            type="email" 
            placeholder="Enter your email address" 
            required
            className="w-full bg-transparent border-b border-charcoal/20 py-4 px-2 font-dm text-charcoal outline-none transition-colors peer"
            disabled={status !== 'idle'}
          />
          {/* Animated bottom border */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-champagne transition-all duration-500 peer-focus:w-full" />
          
          <button 
            type="submit" 
            disabled={status !== 'idle'}
            className="absolute right-0 top-1/2 -translate-y-1/2 font-inter uppercase tracking-widest text-sm text-charcoal hover:text-champagne transition-colors"
          >
            {status === 'idle' && 'Subscribe'}
            {status === 'loading' && <span className="animate-pulse">Sending...</span>}
            {status === 'success' && <m.span initial={{ scale: 0 }} animate={{ scale: 1 }}><Check className="w-5 h-5 text-[#25D366]" /></m.span>}
          </button>
        </form>
      </div>
    </section>
  );
}
