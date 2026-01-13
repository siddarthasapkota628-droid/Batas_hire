import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, CheckCircle, Star, CheckCircle2 } from 'lucide-react';
import heroImage from '@/assets/hero-fintech.jpg';
import nbfcBadge from '@/assets/nbfc-badge.png';
import { useLocale } from '@/contexts/LocaleContext';

const Hero = ({ cmsData }: { cmsData: any }) => {
  const { locale } = useLocale();
  const {
    heroBadge1 = "NBFC Licensed",
    heroBadge2 = "Secure & Trusted",
    heroRating = "4.9/5",
    heroTitlePart1 = "Smart Finance",
    heroTitlePart2 = "Made Simple",
    heroSubtitle = "Instant BNPL solutions and vehicle financing with transparent terms, quick approvals, and flexible EMI options tailored for your needs.",
    floatingFeatures = [
      { text: "Instant Approval" },
      { text: "0% Processing Fee" },
      { text: "Flexible EMI" }
    ],
    heroStats = [
      { value: "50K+", label: "Happy Customers" },
      { value: "₹500Cr+", label: "Loans Disbursed" },
      { value: "2 mins", label: "Avg Approval Time" }
    ],
    heroCTAs = [],
    heroImage: cmsHeroImage
  } = cmsData;

  const bgImage = cmsHeroImage?.url ? `http://localhost:3000${cmsHeroImage.url}` : heroImage;

  const defaultCTAs = [
    { label: locale === 'ne' ? 'BNPL को लागि आवेदन दिनुहोस्' : 'Apply for BNPL', link: '/form/1', variant: 'hero' },
    { label: locale === 'ne' ? 'EMI गणना गर्नुहोस्' : 'Calculate EMI', link: '/form/2', variant: 'outline' }
  ];

  const ctasToRender = heroCTAs && heroCTAs.length > 0 ? heroCTAs : defaultCTAs;

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Professional Financial Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-primary/30 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-4 mb-8 animate-slide-up">
            {heroBadge1 && (
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <img src={nbfcBadge} alt="Badge" className="w-6 h-6" />
                <span className="text-white text-sm font-medium">{heroBadge1}</span>
              </div>
            )}
            {heroBadge2 && (
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Shield className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">{heroBadge2}</span>
              </div>
            )}
            {heroRating && (
              <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Star className="w-4 h-4 text-accent fill-current" />
                <span className="text-white text-sm font-medium ml-2">{heroRating} {locale === 'ne' ? 'रेटिङ' : 'Rating'}</span>
              </div>
            )}
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            {heroTitlePart1}
            <span className="block text-accent">{heroTitlePart2}</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed animate-slide-up">
            {heroSubtitle}
          </p>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-4 mb-10 animate-slide-up">
            {floatingFeatures?.map((feature: any, i: number) => (
              <div key={i} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                <span className="text-white font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            {ctasToRender.map((cta: any, i: number) => (
              <Button
                key={i}
                variant={cta.variant || 'hero'}
                size="xl"
                className={cta.variant === 'outline' ? "bg-white/10 text-white border-white/30 hover:bg-white/20" : "group"}
                asChild
              >
                <a href={cta.link}>
                  {cta.label}
                  {cta.variant !== 'outline' && (
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  )}
                </a>
              </Button>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20 animate-slide-up">
            {heroStats?.map((stat: any, i: number) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
