"use client";

import { useState } from 'react';
import { m } from 'framer-motion';
import Link from 'next/link';
import { ProductCard } from './ProductCard';
import { products } from '@/lib/products';

export function BestSellers() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Sarees', 'Lehengas', 'Kurtas', 'Gowns'];

  const filteredProducts = products.filter(p => activeTab === 'All' || p.category === activeTab).slice(0, 4);

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-12">
        <m.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-cormorant text-[clamp(2.5rem,5vw,5rem)] text-charcoal mb-8 text-center"
        >
          Curated For You
        </m.h2>

        {/* Filter Tabs */}
        <div className="flex space-x-2 md:space-x-8 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 scrollbar-hide justify-start md:justify-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className="relative px-4 py-2 font-dm text-sm whitespace-nowrap"
            >
              <span className={`relative z-10 transition-colors ${activeTab === tab ? 'text-charcoal' : 'text-charcoal/50 hover:text-charcoal'}`}>
                {tab}
              </span>
              {activeTab === tab && (
                <m.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-px bg-charcoal"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {filteredProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
      
      <div className="mt-16 flex justify-center">
        <Link href="/products" className="border border-charcoal text-charcoal font-dm px-10 py-4 hover:bg-charcoal hover:text-white transition-colors duration-300">
          View All Products
        </Link>
      </div>
    </section>
  );
}
