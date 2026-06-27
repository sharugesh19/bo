import { products } from '@/lib/products';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Star, Heart, Truck, ChevronRight } from 'lucide-react';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug) || products[0];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <main className="min-h-screen bg-ivory">
      <Navbar />
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm font-inter text-charcoal/60 mb-8">
          <Link href="/" className="hover:text-champagne">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/products" className="hover:text-champagne">{product.category}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[product.image, product.hoverImage, product.image, product.hoverImage].map((img, i) => (
                <div key={i} className="relative aspect-[3/4] cursor-pointer hover:opacity-80 transition-opacity">
                  <Image src={img} alt={`Thumbnail ${i}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-8">
              <h2 className="font-inter text-sm uppercase tracking-widest text-warm-brown mb-2">Aura Exclusive</h2>
              <h1 className="font-cormorant text-4xl sm:text-5xl text-charcoal mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex text-champagne">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-transparent'}`} />
                  ))}
                </div>
                <span className="font-inter text-sm text-charcoal/60">{product.reviews} reviews</span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="font-dm text-2xl text-charcoal">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="font-dm text-lg text-charcoal/40 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {product.badge === 'Sale' && (
                  <span className="bg-blush text-charcoal font-inter text-xs uppercase px-2 py-1 rounded">Sale</span>
                )}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="font-dm font-medium text-charcoal">Size</span>
                <button className="font-inter text-xs uppercase tracking-widest text-charcoal/60 hover:text-champagne underline">Size Guide</button>
              </div>
              <div className="grid grid-cols-5 gap-4">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button key={size} className="border border-charcoal/20 py-3 font-dm text-sm hover:border-charcoal transition-colors">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-4 mb-12">
              <button className="flex-1 bg-charcoal text-white font-dm py-4 hover:bg-champagne transition-colors duration-300">
                Add to Cart
              </button>
              <button className="w-14 border border-charcoal/20 flex items-center justify-center hover:border-charcoal hover:text-champagne transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Delivery */}
            <div className="bg-blush/20 p-6 flex items-start space-x-4 mb-12">
              <Truck className="w-6 h-6 text-charcoal mt-1" />
              <div>
                <h4 className="font-dm font-medium text-charcoal mb-1">Estimated Delivery</h4>
                <p className="font-dm text-sm text-charcoal/60 mb-3">Enter your pincode for exact dates</p>
                <div className="flex">
                  <input type="text" placeholder="Pincode" className="border border-charcoal/20 bg-transparent px-3 py-2 w-32 font-dm text-sm outline-none focus:border-champagne" />
                  <button className="bg-charcoal text-white px-4 py-2 font-dm text-sm ml-2">Check</button>
                </div>
              </div>
            </div>

            {/* Accordion Placeholders */}
            <div className="border-t border-charcoal/10 divide-y divide-charcoal/10">
              {['Fabric & Care', 'Delivery & Returns', 'Description'].map((item) => (
                <button key={item} className="w-full py-4 flex justify-between items-center font-dm text-charcoal hover:text-champagne transition-colors">
                  {item}
                  <span className="text-xl">+</span>
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
