import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, ShoppingCart, Car, Clock, Percent, CheckCircle, CreditCard } from 'lucide-react';
import bnplImage from '@/assets/bnpl-concept.jpg';
import vehicleImage from '@/assets/vehicle-finance.jpg';

const Products = () => {
  const bnplFeatures = [
    "Shop now, pay in 3-12 monthly installments",
    "0% interest for first 3 months", 
    "Instant approval in 2 minutes",
    "Available at 10,000+ partner merchants",
    "Credit limit up to ₹5 lakhs"
  ];

  const vehicleFeatures = [
    "Finance cars, bikes & commercial vehicles",
    "Loan amount up to ₹50 lakhs",
    "Interest rates starting from 8.99%",
    "Tenure up to 7 years",
    "Minimal documentation required"
  ];

  return (
    <section id="products" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Financial Solutions
          </h2>
          <p className="text-xl text-muted-foreground">
            Tailored financing options to meet your diverse needs with transparent terms and competitive rates
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          
          {/* BNPL Product */}
          <Card className="group overflow-hidden border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-[1.02]">
            <div className="relative h-64 overflow-hidden">
              <img
                src={bnplImage}
                alt="Buy Now Pay Later Services"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <ShoppingCart className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">BNPL</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Buy Now Pay Later
                </h3>
                <p className="text-white/90 text-sm">
                  Shop today, pay flexibly tomorrow
                </p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-card-elevated rounded-lg">
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-foreground">2 Minutes</div>
                  <div className="text-sm text-muted-foreground">Approval Time</div>
                </div>
                <div className="text-center p-3 bg-card-elevated rounded-lg">
                  <Percent className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-foreground">0% Interest</div>
                  <div className="text-sm text-muted-foreground">First 3 Months</div>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {bnplFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex space-x-3">
                <Button variant="cta" className="flex-1 group">
                  Apply for BNPL
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="default">
                  Learn More
                </Button>
              </div>
            </div>
          </Card>

          {/* Vehicle Finance Product */}
          <Card className="group overflow-hidden border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-[1.02]">
            <div className="relative h-64 overflow-hidden">
              <img
                src={vehicleImage}
                alt="Vehicle Financing Services"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <Car className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">Vehicle Loan</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Vehicle Hire Purchase
                </h3>
                <p className="text-white/90 text-sm">
                  Drive your dream vehicle today
                </p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-card-elevated rounded-lg">
                  <CreditCard className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-foreground">₹50 Lakhs</div>
                  <div className="text-sm text-muted-foreground">Max Loan Amount</div>
                </div>
                <div className="text-center p-3 bg-card-elevated rounded-lg">
                  <Percent className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-foreground">8.99%*</div>
                  <div className="text-sm text-muted-foreground">Interest Rate</div>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {vehicleFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex space-x-3">
                <Button variant="cta" className="flex-1 group">
                  Apply for Vehicle Loan
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="default">
                  EMI Calculator
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom financing solution? Our experts are here to help.
          </p>
          <Button variant="outline" size="lg">
            Speak to Our Experts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;