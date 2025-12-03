import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Shield, Scale, AlertCircle, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Legal = () => {
  const documents = [
    {
      title: "Terms & Conditions",
      description: "Detailed terms and conditions for using our services and products.",
      category: "Legal",
      lastUpdated: "January 2024",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Privacy Policy",
      description: "How we collect, use, and protect your personal information.",
      category: "Privacy",
      lastUpdated: "December 2023",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "NBFC Disclaimers",
      description: "Regulatory disclaimers and compliance information as per RBI guidelines.",
      category: "Regulatory",
      lastUpdated: "November 2023",
      icon: <Scale className="w-6 h-6" />,
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      title: "Grievance Redressal Policy",
      description: "Process for lodging complaints and grievance resolution mechanism.",
      category: "Customer Service",
      lastUpdated: "October 2023",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "Fair Practices Code",
      description: "Our commitment to fair lending practices and customer treatment.",
      category: "Compliance",
      lastUpdated: "September 2023",
      icon: <Scale className="w-6 h-6" />,
      color: "bg-teal-500/10 text-teal-600"
    },
    {
      title: "Interest Rate Policy",
      description: "Transparent information about our interest rate structure and methodology.",
      category: "Financial",
      lastUpdated: "August 2023",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-red-500/10 text-red-600"
    }
  ];

  const regulatoryInfo = [
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

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Legal & Compliance
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Transparency and compliance are at the heart of our operations
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

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {regulatoryInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{info.details}</p>
                <p className="text-xs text-accent">{info.validity}</p>
              </Card>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {documents.map((doc, index) => (
              <Card key={index} className="p-6 hover:shadow-strong transition-shadow">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${doc.color}`}>
                  {doc.icon}
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
            ))}
          </div>
        </div>
      </section>

      {/* Important Notices */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Important Notices</h2>
            
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="font-semibold text-foreground mb-2">RBI Guidelines Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  Batas Hire and Purchase Financial Services Pvt. Ltd. is registered with the Nepal Rastriya Bank as a Non-Banking Financial Company. 
                  We strictly adhere to all NRB guidelines and regulations for NBFC operations.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-accent">
                <h3 className="font-semibold text-foreground mb-2">Customer Data Protection</h3>
                <p className="text-sm text-muted-foreground">
                  We are committed to protecting your personal information and maintaining the highest standards of data security. 
                  All customer data is encrypted and stored securely in compliance with applicable data protection laws.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-success">
                <h3 className="font-semibold text-foreground mb-2">Fair Lending Practices</h3>
                <p className="text-sm text-muted-foreground">
                  Our lending decisions are made fairly and without discrimination. We provide transparent information about 
                  interest rates, fees, and terms to help you make informed financial decisions.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Legal;