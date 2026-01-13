import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator, FileCheck, Users, BookOpen, Briefcase, Phone, Book, Car, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocale } from '@/contexts/LocaleContext';

const QuickHighlights = ({ cmsData }: { cmsData: any }) => {
  const { locale } = useLocale();
  const {
    journeyTitle = "Your Financial Journey Simplified",
    journeyDescription = "Discover our comprehensive financial services designed to make your dreams achievable",
    journeyCards = [],
    quickToolsTitle = "Quick Tools",
    quickToolsDescription = locale === 'ne' ? 'तुरुन्त गणना र मूल्याङ्कन प्राप्त गर्नुहोस्' : 'Get instant calculations and valuations',
    quickTools = []
  } = cmsData || {}; // Fallback to empty object

  const iconMap: Record<string, any> = {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {journeyCards?.map((card: any, index: number) => {
            const IconComponent = getIcon(card.icon);
            return (
              <Link key={index} to={card.link || '#'} className="group">
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {card.description}
                    </p>
                    <div className="flex items-center justify-center text-primary group-hover:translate-x-1 transition-transform">
                      <span className="text-sm font-medium mr-1">{card.linkText || 'Explore'}</span>
                      <ArrowRight className="w-4 h-4" />
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
          {quickTools?.map((tool: any, index: number) => {
            const IconComponent = getIcon(tool.icon);
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