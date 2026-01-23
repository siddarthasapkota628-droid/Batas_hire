import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Clock, Users, Banknote, TrendingUp, CheckCircle } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

const TrustIndicators = ({ cmsData }: { cmsData: any }) => {
  const { locale } = useLocale();
  const {
    trustTitle = "Trusted by Thousands",
    trustDescription = locale === 'ne' ? 'हाम्रा संख्याहरू आफैं बोल्छन् - निरन्तर सेवा र विश्वसनीयता मार्फत विश्वास निर्माण गर्दै' : 'Our numbers speak for themselves - building trust through consistent service and reliability',
    trustStats = [
      { value: "50K+", label: "Happy Customers", subLabel: "Trusted by families across Nepal", icon: "Users" },
      { value: "₹500Cr+", label: "Loans Disbursed", subLabel: "Helping dreams come true", icon: "Banknote" },
      { value: "2 mins", label: "Avg Approval Time", subLabel: "Quick and hassle-free process", icon: "Clock" },
      { value: "22+", label: "Years of Legacy", subLabel: "Established financial expertise", icon: "TrendingUp" }
    ],
    certificationTitle = "Licensed & Certified",
    certificationDescription = locale === 'ne' ? 'तपाईंको सुरक्षा र विश्वास हाम्रो उच्च प्राथमिकता हो' : 'Your security and trust are our top priorities',
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
            {trustDescription}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {trustStats?.map((metric: any, index: number) => {
            const IconComponent = getIcon(metric.icon);
            return (
              <div key={index} className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-[280px]">
                <Card className="h-full text-center bg-white/5 backdrop-blur-sm border-white/10 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(var(--primary),0.05)] transition-all duration-500 group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                    <div className="text-sm font-bold text-foreground/80 mb-2 uppercase tracking-wider">{metric.label}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{metric.subLabel}</div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-foreground mb-2">{certificationTitle}</h3>
          <p className="text-muted-foreground">{certificationDescription}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {badges?.map((cert: any, index: number) => {
            const IconComponent = getIcon(cert.icon);
            return (
              <div key={index} className="w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.33%-1.5rem)] max-w-xs">
                <Card className="h-full text-center bg-white/5 backdrop-blur-sm border-success/20 hover:border-success/50 hover:shadow-[0_0_20px_rgba(var(--success),0.1)] transition-all duration-500 group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-success/10 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                      <IconComponent className="w-7 h-7 text-success" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cert.subTitle}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;