"use client";

import { MessageCircle } from 'lucide-react';
import { m } from 'framer-motion';

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <m.a
        href="https://wa.me/1234567890?text=Hello%20Aura%20Boutique"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative"
        aria-label="Chat with us on WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75" />
      </m.a>
      <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-white text-charcoal text-xs font-dm px-3 py-1.5 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </div>
    </div>
  );
}
