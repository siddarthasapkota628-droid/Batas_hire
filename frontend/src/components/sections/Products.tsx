import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription, DialogHeader } from '@/components/ui/dialog';
import DynamicForm from '@/components/ui/DynamicForm';
import {
  ArrowRight,
  ShoppingCart,
  Car,
  Clock,
  Percent,
  CheckCircle,
  CreditCard,
  Home,
  Briefcase
} from 'lucide-react';

import bnplImage from '@/assets/bnpl-concept.jpg';
import vehicleImage from '@/assets/vehicle-finance.jpg';

const iconMap: Record<string, any> = {
  ShoppingCart,
  Car,
  Home,
  Briefcase,
  CreditCard,
  Clock,
  Percent,
  CheckCircle
};

interface ProductsProps {
  cmsData?: any;
  supplemental?: any[];
}

const Products = ({ cmsData = {}, supplemental }: ProductsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { homeProductsConfig } = cmsData;
  const FORM_ID = "2";

  // Use config values if available
  const title = homeProductsConfig?.title || cmsData.productsTitle || "Our Financial Solutions";
  const description = homeProductsConfig?.description || cmsData.productsDescription || "Tailored financing options to meet your diverse needs with transparent terms and competitive rates";
  const maxRows = homeProductsConfig?.maxRows || 4;

  // Static Data (Fallback)
  const defaultProducts = [
    {
      title: "Buy Now Pay Later",
      subtitle: "Shop today, pay flexibly tomorrow",
      image: bnplImage,
      icon: "ShoppingCart",
      ctaText: "Apply for BNPL",
      secondaryCtaText: "Learn More",
      features: [
        { text: "Shop now, pay in 3-12 monthly installments" },
        { text: "0% interest for first 3 months" },
        { text: "Instant approval in 2 minutes" },
        { text: "Available at 10,000+ partner merchants" },
        { text: "Credit limit up to ₹5 lakhs" }
      ],
      stats: [
        { icon: "Clock", value: "2 Minutes", label: "Approval Time" },
        { icon: "Percent", value: "0% Interest", label: "First 3 Months" }
      ]
    },
    {
      title: "Vehicle Hire Purchase",
      subtitle: "Drive your dream vehicle today",
      image: vehicleImage,
      icon: "Car",
      ctaText: "Apply for Vehicle Loan",
      secondaryCtaText: "EMI Calculator",
      features: [
        { text: "Finance cars, bikes & commercial vehicles" },
        { text: "Loan amount up to ₹50 lakhs" },
        { text: "Interest rates starting from 8.99%" },
        { text: "Tenure up to 7 years" },
        { text: "Minimal documentation required" }
      ],
      stats: [
        { icon: "CreditCard", value: "₹50 Lakhs", label: "Max Loan Amount" },
        { icon: "Percent", value: "8.99%*", label: "Interest Rate" }
      ]
    }
  ];

  // Merge/Select Data
  const productsSource = supplemental && supplemental.length > 0 ? supplemental : (cmsData.products || []);

  const products = productsSource.length > 0
    ? productsSource.slice(0, maxRows).map((p: any) => ({
      ...p,
      image: p.image?.url ? `http://localhost:3000${p.image.url}` : null
    }))
    : defaultProducts;

  return (
    <section id="products" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground">{description}</p>
        </div>

        {/* Products Grid */}
        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {products.map((product: any, index: number) => {
            const ProductIcon = iconMap[product.icon] || ShoppingCart;

            return (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-[1.02] w-full md:w-[calc(50%-2rem)] max-w-[600px]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={
                      product.image ||
                      (index === 0 ? bnplImage : vehicleImage)
                    }
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <ProductIcon className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-medium">
                        Product
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {product.title}
                    </h3>
                    <p className="text-white/90 text-sm">{product.subtitle}</p>
                  </div>
                </div>

                <div className="p-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {product.stats?.map((stat: any, sIndex: number) => {
                      const StatIcon = iconMap[stat.icon] || Clock;
                      return (
                        <div
                          key={sIndex}
                          className="text-center p-3 bg-card-elevated rounded-lg"
                        >
                          <StatIcon className="w-6 h-6 text-primary mx-auto mb-2" />
                          <div className="font-semibold text-foreground">
                            {stat.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {stat.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {product.features?.map(
                      (feature: any, fIndex: number) => (
                        <li
                          key={fIndex}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">
                            {feature.text || feature}
                          </span>
                        </li>
                      )
                    )}
                  </ul>

                  <div className="flex space-x-3">
                    <Button
                      variant="cta"
                      className="flex-1 group"
                      onClick={() => setIsModalOpen(true)}
                    >
                      {product.ctaText}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="default">
                      {product.secondaryCtaText}
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom financing solution? Our experts are here to help.
          </p>
          <Button variant="outline" size="lg" onClick={() => setIsModalOpen(true)}>
            Speak to Our Experts
          </Button>
        </div>

        {/* Dynamic Form Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Apply Now</DialogTitle>
              <DialogDescription>
                Please fill out the form below to submit your application.
              </DialogDescription>
            </DialogHeader>
            {/* 
                  IMPORTANT: You need to replace 'FORM_ID' with the actual ID of the 
                  form you create in the PayloadCMS admin panel (under the Forms collection).
                  
                  For now, if the ID is invalid, the component will show an error state.
                */}
            <DynamicForm formId={FORM_ID} onSuccess={() => setIsModalOpen(false)} />
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
};

export default Products;
