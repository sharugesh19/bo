"use client";

import { useState, useEffect } from 'react';
import { m } from 'framer-motion';
import Link from 'next/link';
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react';
import clsx from 'clsx';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = 3;
  const wishlistCount = 2;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <m.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-ivory/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
                className="text-charcoal hover:text-champagne transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <Link href="/" className="font-cormorant text-3xl font-semibold tracking-wide relative group">
                AURA
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-champagne/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {['Home', 'Shop', 'New Arrivals', 'Collections', 'About'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="font-dm text-sm uppercase tracking-widest text-charcoal/80 hover:text-charcoal relative group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-champagne scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center justify-end space-x-5 lg:flex-1">
              <button aria-label="Search" className="text-charcoal hover:text-champagne transition-colors hidden sm:block">
                <Search className="w-5 h-5" />
              </button>
              
              <m.button whileHover={{ scale: 1.15 }} aria-label="Wishlist" className="text-charcoal relative">
                <Heart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-champagne text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              </m.button>
              
              <m.button whileHover={{ scale: 1.15 }} aria-label="Cart" className="text-charcoal relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-champagne text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              </m.button>
              
              <button aria-label="Account" className="text-charcoal hover:text-champagne transition-colors hidden sm:block">
                <User className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </div>
      </m.header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden flex">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <m.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="ml-auto w-[80%] max-w-sm bg-ivory h-full shadow-2xl relative z-10 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="font-cormorant text-2xl">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex flex-col space-y-6">
              {['Home', 'Shop', 'New Arrivals', 'Collections', 'About'].map((item, i) => (
                <m.div
                  key={item}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                    className="font-dm text-lg uppercase tracking-wider block border-b border-blush pb-2"
                  >
                    {item}
                  </Link>
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      )}
    </>
  );
}
