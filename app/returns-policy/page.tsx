import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Returns Policy',
  description: 'Review Aura Boutique returns and exchange information.',
  alternates: {
    canonical: 'https://auraboutique.in/returns-policy',
  },
};

export default function ReturnsPolicyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-ivory">
      <Navbar />
      <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-cormorant text-4xl sm:text-5xl text-charcoal mb-6">Returns Policy</h1>
        <p className="font-dm text-charcoal/70 leading-8">
          Eligible items can be requested for return or exchange within 15 days of delivery, subject to product
          condition checks.
        </p>
      </div>
      <Footer />
    </main>
  );
}
