import Header from '@/components/layout/Header';
import Products from '@/components/sections/Products';
import EMICalculator from '@/components/calculators/EMICalculator';
import Footer from '@/components/layout/Footer';
import { useQuery } from '@tanstack/react-query';
import { getServicesPage } from '@/lib/api';

const ProductsServices = () => {
  const { data } = useQuery({
    queryKey: ['servicesPage'],
    queryFn: getServicesPage,
  });

  const cmsData = data?.docs?.[0] || {};

  return (
    <main className="min-h-screen">
      <Header />
      <Products cmsData={cmsData} />
      <EMICalculator />
      <Footer />
    </main>
  );
};

export default ProductsServices;