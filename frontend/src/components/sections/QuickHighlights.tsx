import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator, FileCheck, Users, BookOpen, Briefcase, Phone, Book, Car, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocale } from '@/contexts/LocaleContext';
import { HomePage } from '@/types/payload-types';

const QuickHighlights = ({ cmsData }: { cmsData: Partial<HomePage> }) => {
  const { locale } = useLocale();
  const {
    journeyTitle = "Your Financial Journey Simplified",
    journeyDescription = "Discover our comprehensive financial services designed to make your dreams achievable",
    journeyCards = [],
    quickToolsTitle = "Quick Tools",
    quickToolsDescription = locale === 'ne' ? 'तुरुन्त गणना र मूल्याङ्कन प्राप्त गर्नुहोस्' : 'Get instant calculations and valuations',
    quickTools = []
  } = cmsData || {}; // Fallback to empty object

  const iconMap: Record<string, React.ElementType> = {
    FileCheck, Users, Briefcase, BookOpen, Calculator, Phone, Book, Car, TrendingUp
  };

  const getIcon = (name: string) => iconMap[name] || FileCheck;

  return (
    <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        {/* Quick Highlights */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {journeyTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {journeyDescription}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {(journeyCards as any[])?.map((card, index) => {
            const IconComponent = getIcon(card.icon as string);
            return (
              <Link key={index} to={card.link || '#'} className="group w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-sm">
                <Card className="h-full bg-white/5 backdrop-blur-md border-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary),0.1)] transition-all duration-500 hover:-translate-y-2 group">
                  <CardContent className="p-8 text-center flex flex-col h-full">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                      {card.description}
                    </p>
                    <div className="flex items-center justify-center text-primary font-semibold group-hover:gap-2 transition-all">
                      <span>{card.linkText || 'Explore'}</span>
                      <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Quick Tools */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">{quickToolsTitle}</h3>
          <p className="text-muted-foreground">{quickToolsDescription}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {(quickTools as any[])?.map((tool, index) => {
            const IconComponent = getIcon(tool.icon as string);
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="sr-only">Icon</span>
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1">{tool.name}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                      <Button variant="outline" size="sm" className="group">
                        {tool.buttonText}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickHighlights;