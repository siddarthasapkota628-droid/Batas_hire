import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator, FileCheck, Users, BookOpen, Briefcase, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickHighlights = () => {
  const highlights = [
    {
      icon: FileCheck,
      title: "Our Loans & Services",
      description: "Vehicle loans, personal loans with instant approval",
      link: "/products",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "About Us",
      description: "22 years of legacy, trusted by 50K+ customers", 
      link: "/about",
      color: "text-accent"
    },
    {
      icon: Briefcase,
      title: "Career",
      description: "Join our growing team and build your future",
      link: "/career", 
      color: "text-success"
    },
    {
      icon: BookOpen,
      title: "Knowledge Center",
      description: "Financial tips, guides, and expert insights",
      link: "/knowledge-center",
      color: "text-warning"
    }
  ];

  const quickTools = [
    {
      title: "EMI Calculator",
      description: "Calculate your monthly payments instantly",
      icon: Calculator,
      action: "Calculate Now"
    },
    {
      title: "Valuation Check", 
      description: "Check your vehicle's current market value",
      icon: FileCheck,
      action: "Check Value"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        {/* Quick Highlights */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Financial Journey Simplified
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive financial services designed to make your dreams achievable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Link key={index} to={highlight.link} className="group">
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-${highlight.color.split('-')[1]}/10 to-${highlight.color.split('-')[1]}/5 flex items-center justify-center`}>
                      <IconComponent className={`w-8 h-8 ${highlight.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {highlight.description}
                    </p>
                    <div className="flex items-center justify-center text-primary group-hover:translate-x-1 transition-transform">
                      <span className="text-sm font-medium mr-1">Explore</span>
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
          <h3 className="text-2xl font-bold text-foreground mb-2">Quick Tools</h3>
          <p className="text-muted-foreground">Get instant calculations and valuations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {quickTools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1">{tool.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                      <Button variant="outline" size="sm" className="group">
                        {tool.action}
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