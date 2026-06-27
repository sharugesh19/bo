import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Contact Aura Boutique',
  description: 'Get in touch with Aura Boutique for support, orders, and styling help.',
  alternates: {
    canonical: 'https://auraboutique.in/contact',
  },
};

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-screen bg-ivory">
      <Navbar />
      <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-cormorant text-4xl sm:text-5xl text-charcoal mb-6">Contact Us</h1>
        <p className="font-dm text-charcoal/70 leading-8">
          For orders, styling help, or partnership inquiries, reach us at hello@auraboutique.in or via WhatsApp.
        </p>
      </div>
      <Footer />
    </main>
  );
}
