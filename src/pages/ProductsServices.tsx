import Header from '@/components/layout/Header';
import Products from '@/components/sections/Products';
import EMICalculator from '@/components/calculators/EMICalculator';
import Footer from '@/components/layout/Footer';

const ProductsServices = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Products />
      <EMICalculator />
      <Footer />
    </main>
  );
};

export default ProductsServices;