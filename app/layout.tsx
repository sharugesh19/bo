import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans, Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '600'], variable: '--font-cormorant', display: 'swap' });
const dm = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-dm', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400'], style: ['italic'], variable: '--font-playfair', display: 'swap' });
const inter = Inter({ subsets: ['latin'], weight: ['400'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: {
    template: '%s | Aura Boutique — Premium Indian Fashion',
    default: 'Aura Boutique — Luxury Indian Fashion & Designer Wear Online'
  },
  description: 'Shop India\'s finest boutique fashion. Exclusive sarees, lehengas, designer kurtas & gowns. Free shipping above ₹2999. Trusted by 50,000+ customers.',
  keywords: ['boutique fashion india', 'designer sarees online', 'luxury lehenga', 'premium indian wear', 'bridal boutique india'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://auraboutique.in',
    siteName: 'Aura Boutique',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }]
  },
  twitter: { card: 'summary_large_image', site: '@auraboutique' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://auraboutique.in' },
  verification: { google: 'PLACEHOLDER_VERIFICATION_CODE' }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dm.variable} ${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "Aura Boutique",
                  "url": "https://auraboutique.in",
                  "logo": "https://auraboutique.in/logo.png",
                  "contactPoint": { "@type": "ContactPoint", "telephone": "+91-XXXXXXXXXX", "contactType": "customer service" },
                  "sameAs": ["https://instagram.com/auraboutique", "https://facebook.com/auraboutique"]
                },
                {
                  "@type": "WebSite",
                  "name": "Aura Boutique",
                  "url": "https://auraboutique.in",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://auraboutique.in/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
