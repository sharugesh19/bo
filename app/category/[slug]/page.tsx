import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ProductCard } from '@/components/ProductCard';
import { getAllCategories, products } from '@/lib/products';

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = 'https://auraboutique.in';

function categoryFromSlug(slug: string) {
  return getAllCategories().find((category) => category.slug === slug);
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryFromSlug(slug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.name} Collection`,
    description: `Shop Aura Boutique ${category.name.toLowerCase()} for festive and occasion wear.`,
    alternates: {
      canonical: `${siteUrl}/category/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categoryFromSlug(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((product) => product.category.toLowerCase().replace(/\s+/g, '-') === slug);

  return (
    <main id="main-content" className="min-h-screen bg-ivory">
      <Navbar />
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section aria-label={`${category.name} collection`} className="mb-12">
          <p className="font-inter uppercase tracking-widest text-warm-brown text-sm mb-3">Category</p>
          <h1 className="font-cormorant text-4xl sm:text-5xl text-charcoal mb-4">{category.name}</h1>
          <p className="max-w-2xl text-charcoal/70 font-dm">
            Curated pieces from the Aura Boutique {category.name.toLowerCase()} edit.
          </p>
        </section>

        <section aria-label={`${category.name} products`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {categoryProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
