import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Shop All Products',
  description:
    'Browse Aura Boutique products including sarees, lehengas, kurtas, gowns and co-ord sets.',
  alternates: {
    canonical: 'https://auraboutique.in/products',
  },
};

export default function ProductsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-ivory">
      <Navbar />
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section aria-label="All products" className="mb-12">
          <p className="font-inter uppercase tracking-widest text-warm-brown text-sm mb-3">Collection</p>
          <h1 className="font-cormorant text-4xl sm:text-5xl text-charcoal mb-4">Shop All Collections</h1>
          <p className="max-w-2xl text-charcoal/70 font-dm">
            Explore the full Aura Boutique edit, from bridal lehengas to festive sarees and modern occasion wear.
          </p>
        </section>

        <section aria-label="Product grid">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>

        <div className="mt-16 flex justify-center">
          <Link
            href="/"
            className="border border-charcoal text-charcoal font-dm px-10 py-4 hover:bg-charcoal hover:text-white transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
