import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Eye, Users, Award, ArrowRight, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getAboutPage } from '@/lib/api';
import { useLocale } from '@/contexts/LocaleContext';
import RichText from '@/components/cms/RichText';

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="w-6 h-6" />,
  Eye: <Eye className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
};

const About = () => {
  const { locale } = useLocale();

  const { data: pageData, isLoading, error } = useQuery({
    queryKey: ['aboutPage', locale],
    queryFn: () => getAboutPage(locale),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  // Helper to safely access nested data
  const data = pageData?.docs?.[0] || {};
  const specifics = data;
  // Note: specifics are at the root level of the doc usually if we defined them as fields in the collection directly, 
  // BUT in our config they are inside tabs. Payload flattens tabs in the API response usually, 
  // unless they are named tabs (which they are not in the config I saw, just 'label').
  // Let's assume flattened.

  const headerTitle = specifics.aboutHeaderTitle || "About Batas Hire and Purchase";
  const headerSubtitle = specifics.aboutHeaderSubtitle || "We're on a mission to make financial services more accessible, transparent, and customer-centric through innovative technology and personalized solutions.";

  // Handling Rich Text for Story - Simplification: extract text or use default
  // For now, if it's complex, we fallback to default strings. 
  // In a real implementation we would render the RichText serialiser.
  // We'll check if simple text is possible or just use the title for now.
  const storyTitle = specifics.aboutStoryTitle || "22 Years of Growth in Financial Services";
  const storyContent = specifics.aboutStoryContent;

  const stats = [
    { number: specifics.stat1?.number || "50,000+", label: specifics.stat1?.label || "Happy Customers" },
    { number: specifics.stat2?.number || "₹500 Cr+", label: specifics.stat2?.label || "Loans Disbursed" },
    { number: specifics.stat3?.number || "99.2%", label: specifics.stat3?.label || "Customer Satisfaction" },
    { number: specifics.stat4?.number || "15+", label: specifics.stat4?.label || "Banking Partners" }
  ];

  const missions = [
    {
      icon: specifics.mission?.icon || "Target",
      title: specifics.mission?.title || "Our Mission",
      description: specifics.mission?.description || "To democratize financial services by providing accessible, transparent, and innovative financing solutions that empower individuals and businesses to achieve their goals."
    },
    {
      icon: specifics.vision?.icon || "Eye",
      title: specifics.vision?.title || "Our Vision",
      description: specifics.vision?.description || "To become the leading digital financial services provider, transforming how people access and manage credit through technology-driven solutions."
    },
    {
      icon: specifics.values?.icon || "Users",
      title: specifics.values?.title || "Our Values",
      description: specifics.values?.description || "Transparency, integrity, customer-centricity, and innovation guide everything we do. We believe in building lasting relationships based on trust and mutual success."
    }
  ];

  const complianceTitle = specifics.complianceTitle || "Regulatory Compliance";
  const complianceDescription = specifics.complianceDescription || "Batas Hire and Purchase operates under the regulatory oversight of the NRB as a licensed Non Banking Financial Company (NBFC). We maintain the highest standards of compliance, data security, and customer protection in all our operations.";
  const badges = [
    { text: specifics.badge1?.text || "RBI Licensed NBFC" },
    { text: specifics.badge2?.text || "ISO 27001 Certified" },
    { text: specifics.badge3?.text || "PCI DSS Compliant" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
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

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              {storyTitle}
            </h3>
            <div className="text-muted-foreground prose prose-sm max-w-none">
              {storyContent ? (
                <RichText content={storyContent} />
              ) : (
                <div className="space-y-4">
                  <p>Founded with the vision of democratizing financial services, Batas Hire and Purchase has emerged as a trusted partner for individuals and businesses seeking flexible financing solutions.</p>
                  <p>We understand that every customer's financial journey is unique. That's why we've built our platform to offer personalized solutions.</p>
                  <p>With our AI powered assessment system and streamlined processes, we've reduced approval times from weeks to minutes.</p>
                </div>
              )}
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

          {/* Achievements Grid - Fixed Stats */}
          <div className="flex flex-wrap justify-center gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 border-white/10 shadow-soft bg-white/5 backdrop-blur-sm min-w-[140px] flex-1 max-w-[180px] hover:border-primary/30 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission, Vision, Values - Fixed Groups */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {missions.map((item, index) => (
            <div key={index} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] max-w-sm">
              <Card className="p-8 text-center bg-white/5 backdrop-blur-md border-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary),0.1)] transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col items-center">
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {iconMap[item.icon] || <Target className="w-8 h-8" />}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {item.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

        {/* Regulatory Compliance */}
        <div className="bg-primary/5 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">{complianceTitle}</h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
            {complianceDescription}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 hover:bg-white/20 transition-colors">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-foreground">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;