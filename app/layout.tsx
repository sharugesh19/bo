import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/Providers';

const siteUrl = 'https://auraboutique.in';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | Aura Boutique',
    default: 'Aura Boutique - Luxury Indian Fashion & Designer Wear Online',
  },
  description:
    "Shop India's finest boutique fashion. Exclusive sarees, lehengas, designer kurtas and gowns with premium craftsmanship.",
  keywords: [
    'boutique fashion india',
    'designer sarees online',
    'luxury lehenga india',
    'premium indian wear',
    'bridal boutique india',
    'festive collection india',
    'designer kurta sets',
    'indo western gowns',
    'buy sarees online india',
    'indian ethnic wear online',
  ],
  authors: [{ name: 'Aura Boutique', url: siteUrl }],
  creator: 'Aura Boutique',
  publisher: 'Aura Boutique Pvt. Ltd.',
  category: 'fashion',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Aura Boutique',
    title: 'Aura Boutique - Luxury Indian Fashion & Designer Wear',
    description: "India's premium online boutique. Shop exclusive sarees, lehengas and designer wear.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aura Boutique luxury Indian fashion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@auraboutique',
    creator: '@auraboutique',
    title: 'Aura Boutique - Luxury Indian Fashion',
    description: "India's premium boutique with exclusive sarees, lehengas and designer wear.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE',
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aura Boutique',
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  description: 'India\'s premium luxury boutique for designer sarees, lehengas and ethnic wear.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-XXXXXXXXXX',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'YOUR ADDRESS',
    addressLocality: 'YOUR CITY',
    addressRegion: 'YOUR STATE',
    postalCode: 'XXXXXX',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://instagram.com/auraboutique',
    'https://facebook.com/auraboutique',
    'https://twitter.com/auraboutique',
    'https://www.youtube.com/@auraboutique',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Aura Boutique',
  url: siteUrl,
  description: 'India\'s premium luxury boutique for the modern Indian woman.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <meta name="theme-color" content="#C9A96E" />
        <meta name="msapplication-TileColor" content="#C9A96E" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
