import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import QuickHighlights from '@/components/sections/QuickHighlights';
import Products from '@/components/sections/Products';
import TrustIndicators from '@/components/sections/TrustIndicators';
import NewsUpdates from '@/components/sections/NewsUpdates';
import ScrollingNotice from '@/components/sections/ScrollingNotice';
import Footer from '@/components/layout/Footer';

const Home = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <ScrollingNotice />
      <Hero />
      <QuickHighlights />
      <Products />
      <TrustIndicators />
      <NewsUpdates />
      <Footer />
    </main>
  );
};

export default Home;