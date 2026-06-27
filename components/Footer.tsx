"use client";

import { m } from 'framer-motion';
import Link from 'next/link';

export function Footer() {
  const links = [
    {
      title: "Shop",
      items: ["New Arrivals", "Sarees", "Lehengas", "Kurtas", "Collections"]
    },
    {
      title: "Information",
      items: ["About Us", "Contact", "Shipping & Returns", "Size Guide", "FAQ"]
    },
    {
      title: "Legal",
      items: ["Terms of Service", "Privacy Policy", "Cookie Policy"]
    }
  ];

  return (
    <footer className="bg-deep-black text-ivory pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="font-cormorant text-[20vw] font-bold tracking-tighter">AURA</span>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="font-cormorant text-4xl mb-6 block">
              AURA
            </Link>
            <p className="text-ivory/60 font-dm max-w-sm mb-8">
              Curated luxury for the modern Indian woman. Discover our handpicked collection of designer wear.
            </p>
            <div className="flex space-x-4">
              {['Instagram', 'Facebook', 'Pinterest'].map((social) => (
                <a key={social} href="#" className="text-ivory/60 hover:text-champagne font-inter text-sm uppercase tracking-wider transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          {links.map((column, i) => (
            <div key={column.title}>
              <h4 className="font-dm font-medium mb-6">{column.title}</h4>
              <ul className="space-y-4">
                {column.items.map((item, j) => (
                  <m.li 
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1 + j * 0.05 }}
                  >
                    <Link href="#" className="text-ivory/60 hover:text-champagne transition-colors font-dm text-sm">
                      {item}
                    </Link>
                  </m.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ivory/40 font-inter text-xs">
            © {new Date().getFullYear()} Aura Boutique. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 opacity-60">
            <span className="font-inter text-xs uppercase">UPI</span>
            <span className="font-inter text-xs uppercase">Visa</span>
            <span className="font-inter text-xs uppercase">Mastercard</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
