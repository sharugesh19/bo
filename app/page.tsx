import { Navbar } from '@/components/Navbar';
import { TrustBar } from '@/components/TrustBar';
import { HeroSection } from '@/components/HeroSection';
import { MarqueeStrip } from '@/components/MarqueeStrip';
import { FeaturedCollection } from '@/components/FeaturedCollection';
import { BrandStory } from '@/components/BrandStory';
import { BestSellers } from '@/components/BestSellers';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BackToTop } from '@/components/BackToTop';

import { CategoryGrid } from '@/components/CategoryGrid';
import { VideoSection } from '@/components/VideoSection';
import { Testimonials } from '@/components/Testimonials';
import { InstagramGallery } from '@/components/InstagramGallery';
import { LimitedEdition } from '@/components/LimitedEdition';
import { Newsletter } from '@/components/Newsletter';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <TrustBar />
      <HeroSection />
      <MarqueeStrip />
      <FeaturedCollection />
      <BrandStory />
      <BestSellers />
      <CategoryGrid />
      <VideoSection />
      <Testimonials />
      <InstagramGallery />
      <LimitedEdition />
      <Newsletter />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </main>
  );
}
