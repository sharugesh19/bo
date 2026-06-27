import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'About Aura Boutique',
  description: 'Learn about Aura Boutique and our approach to premium Indian fashion.',
  alternates: {
    canonical: 'https://auraboutique.in/about',
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen bg-ivory">
      <Navbar />
      <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-cormorant text-4xl sm:text-5xl text-charcoal mb-6">About Aura Boutique</h1>
        <p className="font-dm text-charcoal/70 leading-8">
          Aura Boutique curates luxury Indian fashion for celebrations, weddings, and everyday elegance. We focus on
          craftsmanship, timeless silhouettes, and a premium shopping experience.
        </p>
      </div>
      <Footer />
    </main>
  );
}
