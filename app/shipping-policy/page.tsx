import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Shipping Policy',
  description: 'Review Aura Boutique shipping timelines and delivery details.',
  alternates: {
    canonical: 'https://auraboutique.in/shipping-policy',
  },
};

export default function ShippingPolicyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-ivory">
      <Navbar />
      <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-cormorant text-4xl sm:text-5xl text-charcoal mb-6">Shipping Policy</h1>
        <p className="font-dm text-charcoal/70 leading-8">
          Orders are dispatched after confirmation and typically delivered within 3 to 7 business days depending on
          destination and product availability.
        </p>
      </div>
      <Footer />
    </main>
  );
}
