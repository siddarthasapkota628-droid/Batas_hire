import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, CreditCard, CheckCircle, ArrowRight, Smartphone, Clock, Shield, Zap, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getHowItWorksPage } from '@/lib/api';

const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="w-8 h-8" />,
  Clock: <Clock className="w-8 h-8" />,
  CheckCircle: <CheckCircle className="w-8 h-8" />,
  CreditCard: <CreditCard className="w-8 h-8" />,
  FileText: <FileText className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
};

const featureIconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
};


const HowItWorks = () => {
  const { data: pageData, isLoading, error } = useQuery({
    queryKey: ['howItWorksPage'],
    queryFn: getHowItWorksPage,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  const data = pageData?.docs?.[0] || {};

  // Default fallbacks if data is missing (or for initial verification)
  const headerTitle = data.headerTitle || "How It Works";
  const headerSubtitle = data.headerSubtitle || "Get approved and funded in just 4 simple steps. Our streamlined process ensures you get the financing you need quickly and hassle-free.";

  const steps = data.steps?.map((step: any, index: number) => ({
    id: step.stepNumber || index + 1,
    icon: iconMap[step.icon] || <Smartphone className="w-8 h-8" />,
    title: step.title,
    description: step.description,
    details: step.bulletPoints?.map((bp: any) => bp.text) || []
  })) || [];

  const features = data.trustFeatures?.map((feature: any) => ({
    icon: featureIconMap[feature.icon] || <Shield className="w-6 h-6" />,
    title: feature.title,
    description: feature.description
  })) || [];


  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {headerTitle}
          </h2>
          <p className="text-xl text-muted-foreground">
            {headerSubtitle}
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {steps.map((step: any, index: number) => (
              <div key={step.id} className="relative group w-full md:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] min-w-[230px]">
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
                    {step.details.map((detail: string, detailIndex: number) => (
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
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {features.map((feature: any, index: number) => (
              <div key={index} className="text-center p-6 rounded-lg bg-card-elevated w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] min-w-[280px]">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
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