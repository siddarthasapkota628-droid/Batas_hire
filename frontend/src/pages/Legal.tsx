import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Shield, Scale, AlertCircle, Download, Eye, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import { getLegalPage } from '@/lib/api';
import { useLocale } from '@/contexts/LocaleContext';
import { LegalPage } from '@/types/payload-types';
import React from 'react';

const iconMap: Record<string, React.ElementType> = {
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
  const { locale } = useLocale();
  const { data: pageData, isLoading } = useQuery({
    queryKey: ['legalPage', locale],
    queryFn: () => getLegalPage(locale),
    retry: 1,
  });

  const defaultDocuments: NonNullable<LegalPage['documents']> = [
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

  const defaultRegulatoryInfo: NonNullable<LegalPage['regulatoryInfo']> = [
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

  const defaultNotices: NonNullable<LegalPage['importantNotices']> = [
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
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {pageData?.regulatoryTitle || "Regulatory Information"}
            </h2>
            <p className="text-xl text-muted-foreground">
              {pageData?.regulatorySubtitle || "Our licenses and certifications"}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto mb-16">
            {regulatoryInfo.map((info, index: number) => (
              <div key={index} className="w-full md:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] flex max-w-sm">
                <Card className="w-full p-8 text-center bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary),0.1)] transition-all duration-500 hover:-translate-y-2 group group-hover:bg-white/10">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{info.title}</h3>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 mb-3">
                    <p className="text-sm text-muted-foreground font-medium">{info.details}</p>
                  </div>
                  <p className="text-xs text-primary font-black uppercase tracking-widest">{info.validity}</p>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {pageData?.documentsTitle || "Legal Documents"}
            </h2>
            <p className="text-xl text-muted-foreground">
              {pageData?.documentsSubtitle || "Access our policies and legal documentation"}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {documents.map((doc, index: number) => {
              const Icon = iconMap[doc.icon] || FileText;
              const colorClass = colorMap[doc.color] || colorMap['blue'];

              return (
                <div key={index} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex max-w-sm">
                  <Card className="w-full p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary),0.1)] transition-all duration-500 hover:-translate-y-2 group flex flex-col">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${colorClass}`}>
                      <Icon className="w-8 h-8" />
                    </div>

                    <div className="mb-6 flex-grow">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{doc.title}</h3>
                        <Badge className="bg-white/10 text-muted-foreground border-white/10 text-[10px] uppercase font-black px-2">{doc.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{doc.description}</p>
                      <div className="flex items-center gap-2 text-[10px] text-muted-foreground/60 uppercase font-black bg-white/5 px-2 py-1 rounded w-fit">
                        Last updated: {doc.lastUpdated}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="cta" size="sm" className="flex-1 shadow-md hover:shadow-primary/20">
                        <Eye className="w-4 h-4 mr-2" />
                        View Document
                      </Button>
                      <Button variant="outline" size="sm" className="border-white/10 bg-white/5 hover:bg-white/10">
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
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              {pageData?.noticesTitle || "Important Notices"}
            </h2>

            <div className="space-y-6">
              {notices.map((notice, index: number) => (
                <div key={index} className="relative group">
                  <div className={`absolute -inset-0.5 rounded-2xl opacity-50 group-hover:opacity-100 transition duration-500 blur ${notice.type === 'primary' ? 'bg-primary/20' : notice.type === 'success' ? 'bg-success/20' : 'bg-accent/20'}`} />
                  <Card className={`relative p-8 bg-background/80 backdrop-blur-md border-l-8 ${getBorderColor(notice.type)} hover:bg-white/[0.02] transition-colors duration-500`}>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{notice.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {notice.description}
                    </p>
                  </Card>
                </div>
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