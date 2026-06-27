import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Heart, Star, Truck } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { getProductBySlug } from '@/lib/products';

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = 'https://auraboutique.in';

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} - Buy Online | Aura Boutique`,
    description: `Buy ${product.name} online. ${product.fabric} fabric. Rs. ${product.price.toLocaleString(
      'en-IN'
    )}. Free shipping above Rs. 2,999 and easy 15-day returns.`,
    openGraph: {
      title: `${product.name} | Aura Boutique`,
      description: `Shop ${product.name} - premium Indian fashion.`,
      images: [{ url: product.image, width: 800, height: 1000, alt: product.name }],
      type: 'website',
    },
    alternates: {
      canonical: `${siteUrl}/products/${product.slug}`,
    },
  };
}

function ProductSchemaScript({ slug }: { slug: string }) {
  const product = getProductBySlug(slug);

  if (!product) {
    return null;
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: [product.image],
    description: `${product.name} - ${product.fabric} fabric from Aura Boutique.`,
    brand: {
      '@type': 'Brand',
      name: 'Aura Boutique',
    },
    offers: {
      '@type': 'Offer',
      url: `${siteUrl}/products/${product.slug}`,
      priceCurrency: 'INR',
      price: product.price,
      priceValidUntil: new Date('2026-12-31T00:00:00.000Z').toISOString().split('T')[0],
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Aura Boutique',
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'INR',
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'IN',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 2,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 3,
            maxValue: 7,
            unitCode: 'DAY',
          },
        },
      },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'IN',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 15,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/FreeReturn',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviews,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <main id="main-content" className="min-h-screen bg-ivory">
      <Navbar />
      <ProductSchemaScript slug={slug} />
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm font-inter text-charcoal/60 mb-8">
          <Link href="/" className="hover:text-champagne">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/products" className="hover:text-champagne">
            Products
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <section aria-label="Product gallery" className="space-y-4">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={product.image}
                alt={`${product.name} in ${product.fabric} by Aura Boutique`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[product.image, product.hoverImage, product.image, product.hoverImage].map((image, index) => (
                <div key={`${image}-${index}`} className="relative aspect-[3/4]">
                  <Image
                    src={image}
                    alt={`${product.name} alternate view ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              ))}
            </div>
          </section>

          <section aria-label="Product details" className="flex flex-col">
            <div className="mb-8">
              <p className="font-inter text-sm uppercase tracking-widest text-warm-brown mb-2">Aura Exclusive</p>
              <h1 className="font-cormorant text-4xl sm:text-5xl text-charcoal mb-4">{product.name}</h1>

              <div className="flex items-center space-x-4 mb-6" aria-label={`Rated ${product.rating} out of 5 by ${product.reviews} customers`}>
                <div className="flex text-champagne" aria-hidden="true">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`w-4 h-4 ${index < Math.floor(product.rating) ? 'fill-current' : 'fill-transparent'}`}
                    />
                  ))}
                </div>
                <span className="font-inter text-sm text-charcoal/60">{product.reviews} reviews</span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="font-dm text-2xl text-charcoal">{formatPrice(product.price)}</span>
                {product.originalPrice ? (
                  <span className="font-dm text-lg text-charcoal/40 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                ) : null}
                {product.badge === 'Sale' ? (
                  <span className="bg-blush text-charcoal font-inter text-xs uppercase px-2 py-1 rounded">
                    Sale
                  </span>
                ) : null}
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="font-dm font-medium text-charcoal">Size</span>
                <button
                  type="button"
                  className="font-inter text-xs uppercase tracking-widest text-charcoal/60 hover:text-champagne underline"
                >
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-5 gap-4">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    className="border border-charcoal/20 py-3 font-dm text-sm hover:border-charcoal transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex space-x-4 mb-12">
              <button
                type="button"
                className="flex-1 bg-charcoal text-white font-dm py-4 hover:bg-champagne transition-colors duration-300"
              >
                Add to Cart
              </button>
              <button
                type="button"
                aria-label="Add to wishlist"
                className="w-14 border border-charcoal/20 flex items-center justify-center hover:border-charcoal hover:text-champagne transition-colors"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-blush/20 p-6 flex items-start space-x-4 mb-12">
              <Truck className="w-6 h-6 text-charcoal mt-1" />
              <div>
                <h2 className="font-dm font-medium text-charcoal mb-1">Estimated Delivery</h2>
                <p className="font-dm text-sm text-charcoal/60 mb-3">Enter your pincode for exact dates</p>
                <div className="flex items-end gap-2">
                  <label className="sr-only" htmlFor="pincode">
                    Pincode
                  </label>
                  <input
                    id="pincode"
                    type="text"
                    inputMode="numeric"
                    placeholder="Pincode"
                    className="border border-charcoal/20 bg-transparent px-3 py-2 w-32 font-dm text-sm outline-none focus:border-champagne"
                  />
                  <button type="button" className="bg-charcoal text-white px-4 py-2 font-dm text-sm">
                    Check
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-charcoal/10 divide-y divide-charcoal/10">
              {['Fabric & Care', 'Delivery & Returns', 'Description'].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="w-full py-4 flex justify-between items-center font-dm text-charcoal hover:text-champagne transition-colors"
                >
                  {item}
                  <span className="text-xl" aria-hidden="true">
                    +
                  </span>
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
