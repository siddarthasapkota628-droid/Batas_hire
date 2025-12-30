import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import QuickHighlights from '@/components/sections/QuickHighlights';
import Products from '@/components/sections/Products';
import TrustIndicators from '@/components/sections/TrustIndicators';
import NewsUpdates from '@/components/sections/NewsUpdates';
import ScrollingNotice from '@/components/sections/ScrollingNotice';
import Footer from '@/components/layout/Footer';
import { useQuery } from '@tanstack/react-query';
import { getHomePage, getServicesPage, getAboutPage, getKnowledgeCenterPage } from '@/lib/api';

const Home = () => {
  const { data: homeData } = useQuery({
    queryKey: ['homePage'],
    queryFn: getHomePage,
  });

  const { data: servicesData } = useQuery({
    queryKey: ['servicesPage'],
    queryFn: getServicesPage,
  });

  const { data: aboutData } = useQuery({
    queryKey: ['aboutPage'],
    queryFn: getAboutPage,
  });

  const { data: knowledgeData } = useQuery({
    queryKey: ['knowledgePage'],
    queryFn: getKnowledgeCenterPage,
  });

  const cmsData = homeData?.docs?.[0] || {};
  const supplemental = {
    products: servicesData?.docs?.[0]?.products || [],
    testimonials: aboutData?.docs?.[0]?.testimonials || [],
    articles: knowledgeData?.articles || [], // Check if knowledgeData is Doc or docs[0]
  };


  return (
    <main className="min-h-screen">
      <Header />
      <ScrollingNotice cmsData={cmsData} />
      <Hero cmsData={cmsData} />
      <QuickHighlights cmsData={cmsData} />
      <Products cmsData={cmsData} supplemental={supplemental.products} />
      <TrustIndicators cmsData={cmsData} />
      <NewsUpdates cmsData={cmsData} supplemental={supplemental} />
      <Footer />
    </main>
  );
};

export default Home;