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
import { useLocale } from '@/contexts/LocaleContext';
import { HomePage, ServicesPage, AboutPage, KnowledgeCenterPage } from '@/types/payload-types';

const Home = () => {
  const { locale } = useLocale();

  const { data: homeData } = useQuery({
    queryKey: ['homePage', locale],
    queryFn: () => getHomePage(locale),
  });

  const { data: servicesData } = useQuery({
    queryKey: ['servicesPage', locale],
    queryFn: () => getServicesPage(locale),
  });

  const { data: aboutData } = useQuery({
    queryKey: ['aboutPage', locale],
    queryFn: () => getAboutPage(locale),
  });

  const { data: knowledgeData } = useQuery({
    queryKey: ['knowledgePage', locale],
    queryFn: () => getKnowledgeCenterPage(locale),
  });

  const cmsData = homeData?.docs?.[0] || {} as HomePage;
  const supplemental = {
    products: servicesData?.docs?.[0]?.products || [],
    testimonials: aboutData?.docs?.[0]?.testimonials || [],
    articles: knowledgeData?.articles || [],
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