"use client";

import { m } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <m.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-50px" }}
      className="group flex flex-col"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-blush/20 mb-4">
        {/* Badges */}
        {product.badge && (
          <m.div 
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            className="absolute top-0 left-0 z-10 bg-champagne text-white text-[10px] font-inter uppercase tracking-widest px-3 py-1"
          >
            {product.badge}
          </m.div>
        )}

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={(e) => { e.preventDefault(); setIsWishlisted(!isWishlisted); }}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <m.div animate={isWishlisted ? { scale: [1, 1.2, 1] } : {}}>
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-champagne text-champagne' : 'text-charcoal'}`} />
          </m.div>
        </button>

        {/* Images */}
        <Link href={`/products/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.image}
            alt={`${product.name} by Aura Boutique`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
          />
          <Image
            src={product.hoverImage || product.image}
            alt={`${product.name} alternate view by Aura Boutique`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover absolute top-0 left-0 opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-105"
          />
        </Link>

        {/* Quick Add Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10">
          <button type="button" className="w-full bg-white text-charcoal font-dm text-sm py-3 hover:bg-charcoal hover:text-white transition-colors">
            Quick Add
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col flex-1">
        <div className="text-[10px] text-warm-brown font-inter uppercase tracking-widest mb-1">
          {product.category}
        </div>
        <Link href={`/products/${product.slug}`} className="group-hover:text-champagne transition-colors">
          <h3 className="font-dm font-medium text-charcoal mb-2 line-clamp-1">{product.name}</h3>
        </Link>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-dm text-charcoal">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="font-dm text-charcoal/40 line-through text-sm">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          
          <div className="flex items-center text-charcoal/60">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-xs ml-1 font-inter">{product.rating}</span>
          </div>
        </div>
      </div>
    </m.article>
  );
}
