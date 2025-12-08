import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import QuickHighlights from '@/components/sections/QuickHighlights';
import Products from '@/components/sections/Products';
import TrustIndicators from '@/components/sections/TrustIndicators';
import NewsUpdates from '@/components/sections/NewsUpdates';
import ScrollingNotice from '@/components/sections/ScrollingNotice';
import Footer from '@/components/layout/Footer';
import { useQuery } from '@tanstack/react-query';
import { getHomePage } from '@/lib/api';

const Home = () => {
  const { data } = useQuery({
    queryKey: ['homePage'],
    queryFn: getHomePage,
  });

  const cmsData = data?.docs?.[0] || {};


  return (
    <main className="min-h-screen">
      <Header />
      <ScrollingNotice />
      <Hero />
      <QuickHighlights />
      <Products cmsData={cmsData} />
      <TrustIndicators />
      <NewsUpdates />
      <Footer />
    </main>
  );
};

export default Home;