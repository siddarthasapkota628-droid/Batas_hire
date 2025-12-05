import Header from '@/components/layout/Header';
import About from '@/components/sections/About';
import CompanyProfile from '@/components/sections/CompanyProfile';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/layout/Footer';

const AboutUs = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <About />
      <CompanyProfile />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default AboutUs;