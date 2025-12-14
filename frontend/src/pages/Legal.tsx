import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Shield, Scale, AlertCircle, Download, Eye, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import { getLegalPage } from '@/lib/api';

const iconMap: Record<string, any> = {
  FileText,
  Shield,
  Scale,
  AlertCircle
};

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-600",
  green: "bg-green-500/10 text-green-600",
  purple: "bg-purple-500/10 text-purple-600",
  orange: "bg-orange-500/10 text-orange-600",
  teal: "bg-teal-500/10 text-teal-600",
  red: "bg-red-500/10 text-red-600"
};

const Legal = () => {
  const { data: pageData, isLoading } = useQuery({
    queryKey: ['legalPage'],
    queryFn: getLegalPage,
    retry: 1,
  });

  const defaultDocuments = [
    {
      title: "Terms & Conditions",
      description: "Detailed terms and conditions for using our services and products.",
      category: "Legal",
      lastUpdated: "January 2024",
      icon: "FileText",
      color: "blue"
    },
    {
      title: "Privacy Policy",
      description: "How we collect, use, and protect your personal information.",
      category: "Privacy",
      lastUpdated: "December 2023",
      icon: "Shield",
      color: "green"
    },
    {
      title: "NBFC Disclaimers",
      description: "Regulatory disclaimers and compliance information as per RBI guidelines.",
      category: "Regulatory",
      lastUpdated: "November 2023",
      icon: "Scale",
      color: "purple"
    },
    {
      title: "Grievance Redressal Policy",
      description: "Process for lodging complaints and grievance resolution mechanism.",
      category: "Customer Service",
      lastUpdated: "October 2023",
      icon: "AlertCircle",
      color: "orange"
    },
    {
      title: "Fair Practices Code",
      description: "Our commitment to fair lending practices and customer treatment.",
      category: "Compliance",
      lastUpdated: "September 2023",
      icon: "Scale",
      color: "teal"
    },
    {
      title: "Interest Rate Policy",
      description: "Transparent information about our interest rate structure and methodology.",
      category: "Financial",
      lastUpdated: "August 2023",
      icon: "FileText",
      color: "red"
    }
  ];

  const defaultRegulatoryInfo = [
    {
      title: "RBI Registration",
      details: "Certificate of Registration No: N-12345678",
      validity: "Valid until: March 2025"
    },
    {
      title: "NBFC License",
      details: "Non-Banking Financial Company License",
      validity: "Issued by: Nepal Rastriya Bank"
    },
    {
      title: "ISO Certification",
      details: "ISO 27001:2013 Information Security",
      validity: "Valid until: June 2024"
    }
  ];

  const defaultNotices = [
    {
      title: "RBI Guidelines Compliance",
      description: "Batas Hire and Purchase Financial Services Pvt. Ltd. is registered with the Nepal Rastriya Bank as a Non-Banking Financial Company. We strictly adhere to all NRB guidelines and regulations for NBFC operations.",
      type: "primary"
    },
    {
      title: "Customer Data Protection",
      description: "We are committed to protecting your personal information and maintaining the highest standards of data security. All customer data is encrypted and stored securely in compliance with applicable data protection laws.",
      type: "accent"
    },
    {
      title: "Fair Lending Practices",
      description: "Our lending decisions are made fairly and without discrimination. We provide transparent information about interest rates, fees, and terms to help you make informed financial decisions.",
      type: "success"
    }
  ];

  // Fallback Logic
  const documents = pageData?.documents?.length > 0 ? pageData.documents : defaultDocuments;
  const regulatoryInfo = pageData?.regulatoryInfo?.length > 0 ? pageData.regulatoryInfo : defaultRegulatoryInfo;
  const notices = pageData?.importantNotices?.length > 0 ? pageData.importantNotices : defaultNotices;

  const getBorderColor = (type: string) => {
    switch (type) {
      case 'primary': return 'border-l-primary';
      case 'accent': return 'border-l-accent';
      case 'success': return 'border-l-success';
      case 'destructive': return 'border-l-destructive';
      default: return 'border-l-primary';
    }
  };

  if (isLoading && !pageData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-md">
            {pageData?.legalHeaderTitle || "Legal & Compliance"}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            {pageData?.legalHeaderSubtitle || "Transparency and compliance are at the heart of our operations"}
          </p>
        </div>
      </section>

      {/* Regulatory Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Regulatory Information</h2>
            <p className="text-xl text-muted-foreground">Our licenses and certifications</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto mb-16">
            {regulatoryInfo.map((info: any, index: number) => (
              <div key={index} className="w-full md:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] flex">
                <Card className="w-full p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{info.details}</p>
                  <p className="text-xs text-accent">{info.validity}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Documents */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Legal Documents</h2>
            <p className="text-xl text-muted-foreground">Access our policies and legal documentation</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {documents.map((doc: any, index: number) => {
              const Icon = iconMap[doc.icon] || FileText;
              const colorClass = colorMap[doc.color] || colorMap['blue'];

              return (
                <div key={index} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex">
                  <Card className="w-full p-6 hover:shadow-strong transition-shadow">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${colorClass}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground">{doc.title}</h3>
                        <Badge variant="outline" className="text-xs">{doc.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{doc.description}</p>
                      <p className="text-xs text-muted-foreground">Last updated: {doc.lastUpdated}</p>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Notices */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Important Notices</h2>

            <div className="space-y-6">
              {notices.map((notice: any, index: number) => (
                <Card key={index} className={`p-6 border-l-4 ${getBorderColor(notice.type)}`}>
                  <h3 className="font-semibold text-foreground mb-2">{notice.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {notice.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Legal;