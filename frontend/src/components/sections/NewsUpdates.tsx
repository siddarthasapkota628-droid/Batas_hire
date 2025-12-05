import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, TrendingUp, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsUpdates = () => {
  const newsItems = [
    {
      type: "milestone",
      icon: Award,
      title: "Rs. 500 Crore+ Loans Disbursed",
      description: "We've successfully disbursed over ₹500 crores in loans, helping thousands achieve their dreams.",
      date: "2024-08-15",
      badge: "Milestone",
      badgeColor: "bg-success"
    },
    {
      type: "announcement", 
      icon: TrendingUp,
      title: "New Low-Interest Rates Live!",
      description: "Exciting new interest rates starting from 8.5% per annum. Check your eligibility now.",
      date: "2024-08-10",
      badge: "New",
      badgeColor: "bg-primary"
    },
    {
      type: "blog",
      icon: Users,
      title: "Electric Vehicle Loans Now Available",
      description: "Special financing options for electric vehicles with attractive terms and quick processing.",
      date: "2024-08-05",
      badge: "Product Launch",
      badgeColor: "bg-accent"
    }
  ];

  const testimonials = [
    {
      name: "Priyanka Parajuli",
      location: "Kathmandu",
      text: "Quick approval and transparent process. Got my car loan in just 2 days!",
      rating: 5
    },
    {
      name: "Rajesh Shrestha", 
      location: "Lalitpur",
      text: "Excellent customer service and competitive rates. Highly recommended!",
      rating: 5
    },
    {
      name: "Anita Kumari",
      location: "Bhaktapur", 
      text: "The EMI calculator helped me plan perfectly. Seamless experience throughout.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* News & Updates */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Latest News & Updates
                </h2>
                <p className="text-muted-foreground">Stay updated with our latest announcements and milestones</p>
              </div>
              <Link to="/knowledge-center">
                <Button variant="outline" size="sm" className="group">
                  View All
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              {newsItems.map((item, index) => {
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
                              {new Date(item.date).toLocaleDateString()}
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
                What Our Customers Say
              </h2>
              <p className="text-muted-foreground">Real experiences from our satisfied customers</p>
            </div>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-semibold text-primary">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                          <span className="text-sm text-muted-foreground">• {testimonial.location}</span>
                        </div>
                        <div className="flex items-center space-x-1 mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-warning text-sm">★</span>
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