import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Eye, Users, Award, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Our Mission",
      description: "To democratize financial services by providing accessible, transparent, and innovative financing solutions that empower individuals and businesses to achieve their goals."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Our Vision", 
      description: "To become the leading digital financial services provider, transforming how people access and manage credit through technology-driven solutions."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Our Values",
      description: "Transparency, integrity, customer-centricity, and innovation guide everything we do. We believe in building lasting relationships based on trust and mutual success."
    }
  ];

  const achievements = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "₹500 Cr+", label: "Loans Disbursed" },
    { number: "99.2%", label: "Customer Satisfaction" },
    { number: "15+", label: "Banking Partners" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Batas Hire and Purchase
          </h2>
          <p className="text-xl text-muted-foreground">
            We're on a mission to make financial services more accessible, transparent, 
            and customer-centric through innovative technology and personalized solutions.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              22 Years of Growth in Financial Services
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded with the vision of democratizing financial services, Batas Hire and Purchase has emerged as a 
                trusted partner for individuals and businesses seeking flexible financing solutions. 
                Our NBFC license ensures regulatory compliance while our technology-first approach 
                delivers unmatched customer experience.
              </p>
              <p>
                We understand that every customer's financial journey is unique. That's why we've 
                built our platform to offer personalized solutions, whether you're looking to 
                purchase your dream vehicle or need flexible payment options for your purchases.
              </p>
              <p>
                With our AI-powered assessment system and streamlined processes, we've reduced 
                approval times from weeks to minutes, making financial assistance available when 
                you need it most.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button variant="cta" className="group">
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline">
                View Leadership Team
              </Button>
            </div>
          </div>

          {/* Achievements Grid - Landscape Format */}
          <div className="grid grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-4 border-0 shadow-medium bg-card-elevated">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {achievement.number}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {achievement.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="p-8 text-center border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-[1.02] bg-card-elevated">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                {value.icon}
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                {value.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Regulatory Compliance */}
        <div className="bg-primary/5 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Regulatory Compliance</h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
            Batas Hire and Purchase operates under the regulatory oversight of the NRB 
            as a licensed Non-Banking Financial Company (NBFC). We maintain the highest standards 
            of compliance, data security, and customer protection in all our operations.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2 bg-white/50 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-sm font-medium text-foreground">RBI Licensed NBFC</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/50 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-sm font-medium text-foreground">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/50 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-sm font-medium text-foreground">PCI DSS Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;