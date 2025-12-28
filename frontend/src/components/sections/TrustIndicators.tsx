import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Clock, Users, Banknote, TrendingUp, CheckCircle } from 'lucide-react';

const TrustIndicators = ({ cmsData }: { cmsData: any }) => {
  const {
    trustTitle = "Trusted by Thousands",
    trustStats = [
      { value: "50K+", label: "Happy Customers", subLabel: "Trusted by families across Nepal", icon: "Users" },
      { value: "₹500Cr+", label: "Loans Disbursed", subLabel: "Helping dreams come true", icon: "Banknote" },
      { value: "2 mins", label: "Avg Approval Time", subLabel: "Quick and hassle-free process", icon: "Clock" },
      { value: "22+", label: "Years of Legacy", subLabel: "Established financial expertise", icon: "TrendingUp" }
    ],
    certificationTitle = "Licensed & Certified",
    badges = [
      { title: "NBFC Licensed", subTitle: "NRB Authorized", icon: "Shield" },
      { title: "ISO Certified", subTitle: "Quality Management Standards", icon: "Award" },
      { title: "Secure Platform", subTitle: "256-bit SSL Encryption", icon: "Shield" }
    ]
  } = cmsData || {};

  const iconMap: Record<string, any> = {
    Shield, Award, Clock, Users, Banknote, TrendingUp, CheckCircle
  };

  const getIcon = (name: string) => iconMap[name] || Shield;

  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Trust Metrics */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {trustTitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our numbers speak for themselves - building trust through consistent service and reliability
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustStats?.map((metric: any, index: number) => {
            const IconComponent = getIcon(metric.icon);
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{metric.value}</div>
                  <div className="text-sm font-semibold text-foreground mb-2">{metric.label}</div>
                  <div className="text-xs text-muted-foreground">{metric.subLabel}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-foreground mb-2">{certificationTitle}</h3>
          <p className="text-muted-foreground">Your security and trust are our top priorities</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {badges?.map((cert: any, index: number) => {
            const IconComponent = getIcon(cert.icon);
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-success/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-success" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.subTitle}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;