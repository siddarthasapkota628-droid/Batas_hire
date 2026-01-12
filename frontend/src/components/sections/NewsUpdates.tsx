import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, TrendingUp, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsUpdates = ({ cmsData, supplemental }: { cmsData: any; supplemental: any }) => {
  const { homeTestimonialsConfig, homeKnowledgeConfig } = cmsData;

  // Helper to safely get numeric value (handles localized objects if they slip through)
  const getSafeNumber = (val: any, fallback: number) => {
    if (typeof val === 'number') return isNaN(val) ? fallback : val;
    if (typeof val === 'string') {
      const parsed = parseInt(val, 10);
      return isNaN(parsed) ? fallback : parsed;
    }
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      // In case we get {en: 5, ne: 5}
      const firstVal = Object.values(val)[0];
      return getSafeNumber(firstVal, fallback);
    }
    return fallback;
  };

  const newsItems = supplemental?.articles?.slice(0, getSafeNumber(homeKnowledgeConfig?.maxRows, 3)).map((art: any) => ({
    title: art.title,
    description: art.excerpt,
    date: art.date,
    badge: art.category,
    badgeColor: "bg-primary", // Could be dynamic if category had color
    icon: TrendingUp
  })) || [];

  const testimonials = supplemental?.testimonials?.slice(0, getSafeNumber(homeTestimonialsConfig?.maxRows, 3)).map((t: any) => ({
    name: t.name,
    location: t.location || t.role,
    text: t.content,
    rating: getSafeNumber(t.rating, 5)
  })) || [];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* News & Updates */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {homeKnowledgeConfig?.title || "Latest News & Updates"}
                </h2>
                <p className="text-muted-foreground">{homeKnowledgeConfig?.description || "Stay updated with our latest announcements and milestones"}</p>
              </div>
              <Link to="/knowledge-center">
                <Button variant="outline" size="sm" className="group">
                  View All
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              {newsItems.map((item: any, index: number) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge className={`${item.badgeColor} text-white text-xs`}>
                              {item.badge}
                            </Badge>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3 mr-1" />
                              {item.date}
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {homeTestimonialsConfig?.title || "What Our Customers Say"}
              </h2>
              <p className="text-muted-foreground">{homeTestimonialsConfig?.description || "Real experiences from our satisfied customers"}</p>
            </div>

            <div className="space-y-6">
              {testimonials.map((testimonial: any, index: number) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-semibold text-primary">
                          {testimonial.name?.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                          <span className="text-sm text-muted-foreground">• {testimonial.location}</span>
                        </div>
                        <div className="flex items-center space-x-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-sm ${i < Math.floor(getSafeNumber(testimonial.rating, 5)) ? 'text-warning' : 'text-muted-foreground/30'}`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link to="/about">
                <Button variant="outline" className="group">
                  Read More Testimonials
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;