import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, CreditCard, CheckCircle, ArrowRight, Smartphone, Clock, Shield } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <Smartphone className="w-8 h-8" />,
      title: "Apply Online",
      description: "Fill out our simple online application form with basic details. Takes less than 3 minutes to complete.",
      details: ["Provide personal information", "Upload required documents", "Choose loan amount & tenure"]
    },
    {
      id: 2,
      icon: <Clock className="w-8 h-8" />,
      title: "Instant Verification", 
      description: "Our AI-powered system verifies your details and provides instant pre-approval within 2 minutes.",
      details: ["Automated document verification", "Credit score assessment", "Income evaluation"]
    },
    {
      id: 3,
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Get Approved",
      description: "Receive final approval and loan terms. Review and digitally sign your loan agreement.",
      details: ["Final approval notification", "Loan terms confirmation", "Digital agreement signing"]
    },
    {
      id: 4,
      icon: <CreditCard className="w-8 h-8" />,
      title: "Receive Funds",
      description: "Funds are disbursed directly to your bank account or to the merchant/dealer instantly.",
      details: ["Instant fund transfer", "Payment to merchant/dealer", "Loan account activation"]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Get approved and funded in just 4 simple steps. Our streamlined process ensures you get the financing you need quickly and hassle-free.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={step.id} className="relative group">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-border z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                )}

                <Card className="relative z-10 h-full p-6 text-center border-0 shadow-medium hover:shadow-strong transition-all duration-300 group-hover:scale-[1.02] bg-card-elevated">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mx-auto mb-4 mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="text-left space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-lg bg-card-elevated">
              <div className="w-12 h-12 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">100% Secure</h4>
              <p className="text-sm text-muted-foreground">Bank-grade security and encryption protect your data</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card-elevated">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">2-Minute Approval</h4>
              <p className="text-sm text-muted-foreground">Get instant pre-approval with our AI-powered system</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card-elevated">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Minimal Documents</h4>
              <p className="text-sm text-muted-foreground">Just basic documents required for quick processing</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have chosen our hassle-free financing solutions. 
              Apply now and experience the future of digital lending.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" className="group">
                Start Your Application
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Calculate Your EMI
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;