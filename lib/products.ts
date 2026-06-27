export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'Sarees' | 'Lehengas' | 'Kurtas' | 'Gowns' | 'Co-ords';
  badge?: 'New' | 'Sale' | 'Limited' | 'Bestseller';
  image: string;
  hoverImage: string;
  rating: number;
  reviews: number;
  isNew: boolean;
  isFestive: boolean;
  fabric: string;
  slug: string;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Midnight Silk Zari Saree",
    price: 34999,
    originalPrice: 42000,
    category: "Sarees",
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1529635970-29b1a5a41c09?w=600&h=800&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop&q=80",
    rating: 4.8,
    reviews: 124,
    isNew: false,
    isFestive: true,
    fabric: "Pure Banarasi Silk",
    slug: "midnight-silk-zari-saree"
  },
  {
    id: "p2",
    name: "Rose Gold Bridal Lehenga",
    price: 125000,
    category: "Lehengas",
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop&q=80",
    rating: 5.0,
    reviews: 42,
    isNew: true,
    isFestive: true,
    fabric: "Georgette with Zardosi work",
    slug: "rose-gold-bridal-lehenga"
  },
  {
    id: "p3",
    name: "Emerald Green Velvet Gown",
    price: 45000,
    originalPrice: 55000,
    category: "Gowns",
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1496747507725-b82b3a033f11?w=600&h=800&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&h=800&fit=crop&q=80",
    rating: 4.6,
    reviews: 89,
    isNew: false,
    isFestive: false,
    fabric: "Silk Velvet",
    slug: "emerald-green-velvet-gown"
  },
  {
    id: "p4",
    name: "Ivory Embroidered Kurta Set",
    price: 18500,
    category: "Kurtas",
    badge: "New",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1483985988041-bac1ae5ab18f?w=600&h=800&fit=crop&q=80",
    rating: 4.9,
    reviews: 210,
    isNew: true,
    isFestive: false,
    fabric: "Chanderi Silk",
    slug: "ivory-embroidered-kurta-set"
  },
  // Add 8 more to reach 12
  {
    id: "p5",
    name: "Crimson Red Festive Lehenga",
    price: 85000,
    category: "Lehengas",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1529635970-29b1a5a41c09?w=600&h=800&fit=crop&q=80",
    rating: 4.7,
    reviews: 56,
    isNew: true,
    isFestive: true,
    fabric: "Raw Silk",
    slug: "crimson-red-festive-lehenga"
  },
  {
    id: "p6",
    name: "Sapphire Blue Co-ord Set",
    price: 22000,
    category: "Co-ords",
    badge: "New",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&q=80",
    rating: 4.5,
    reviews: 34,
    isNew: true,
    isFestive: false,
    fabric: "Crepe",
    slug: "sapphire-blue-coord-set"
  },
  {
    id: "p7",
    name: "Golden Tissue Tissue Saree",
    price: 41000,
    category: "Sarees",
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&h=800&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1496747507725-b82b3a033f11?w=600&h=800&fit=crop&q=80",
    rating: 4.8,
    reviews: 77,
    isNew: false,
    isFestive: true,
    fabric: "Tissue Silk",
    slug: "golden-tissue-saree"
  },
  {
    id: "p8",
    name: "Dusty Pink Anarkali Gown",
    price: 29500,
    originalPrice: 35000,
    category: "Gowns",
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1483985988041-bac1ae5ab18f?w=600&h=800&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop&q=80",
    rating: 4.4,
    reviews: 112,
    isNew: false,
    isFestive: true,
    fabric: "Georgette",
    slug: "dusty-pink-anarkali-gown"
  },
  {
    id: "p9",
    name: "Charcoal Grey Silk Kurta",
    price: 15000,
    category: "Kurtas",
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1529635970-29b1a5a41c09?w=600&h=800&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&q=80",
    rating: 4.9,
    reviews: 320,
    isNew: false,
    isFestive: false,
    fabric: "Tussar Silk",
    slug: "charcoal-grey-silk-kurta"
  },
  {
    id: "p10",
    name: "Ruby Red Bridal Saree",
    price: 55000,
    category: "Sarees",
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1496747507725-b82b3a033f11?w=600&h=800&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1483985988041-bac1ae5ab18f?w=600&h=800&fit=crop&q=80",
    rating: 5.0,
    reviews: 15,
    isNew: true,
    isFestive: true,
    fabric: "Kanjivaram Silk",
    slug: "ruby-red-bridal-saree"
  },
  {
    id: "p11",
    name: "Pastel Mint Lehanga Choli",
    price: 95000,
    category: "Lehengas",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop&q=80",
    rating: 4.6,
    reviews: 64,
    isNew: false,
    isFestive: true,
    fabric: "Organza",
    slug: "pastel-mint-lehenga-choli"
  },
  {
    id: "p12",
    name: "Mustard Yellow Co-ord Set",
    price: 19500,
    originalPrice: 24000,
    category: "Co-ords",
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&h=800&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop&q=80",
    rating: 4.3,
    reviews: 48,
    isNew: false,
    isFestive: false,
    fabric: "Cotton Silk",
    slug: "mustard-yellow-coord-set"
  }
];
