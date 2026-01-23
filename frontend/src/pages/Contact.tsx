import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, MessageCircle, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getContactPage } from '@/lib/api';
import { useState } from 'react';
import DynamicForm from '@/components/ui/DynamicForm';
import { useLocale } from '@/contexts/LocaleContext';

const iconMap: { [key: string]: JSX.Element } = {
  Phone: <Phone className="w-6 h-6" />,
  Mail: <Mail className="w-6 h-6" />,
  MessageCircle: <MessageCircle className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
};

const Contact = () => {
  const { locale } = useLocale();
  const { data: pageData, isLoading } = useQuery({
    queryKey: ['contactPage', locale],
    queryFn: () => getContactPage(locale),
    retry: 1,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  const contactMethods = pageData?.contactMethods?.map((method: any) => ({
    ...method,
    icon: iconMap[method.icon] || <Phone className="w-6 h-6" /> // Fallback icon
  })) || [];

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {pageData?.contactHeaderTitle || "Get In Touch"}
            </h1>
            <p className="text-xl text-muted-foreground">
              {pageData?.contactHeaderSubtitle || "Have questions about our financial services? We're here to help you 24/7 with personalized support."}
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto mb-16">
            {contactMethods.map((method: any, index: number) => (
              <div key={index} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex">
                <Card className="w-full p-6 text-center border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-[1.02] bg-card-elevated flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  <div className="font-medium text-foreground mb-2 mt-auto">
                    {method.contactInfo}
                  </div>
                  {method.availability && (
                    <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground mt-2">
                      <Clock className="w-3 h-3" />
                      <span>{method.availability}</span>
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 border-0 shadow-medium bg-card-elevated">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                {pageData?.formTitle || "Send Us a Message"}
              </h3>
              {pageData?.contactForm?.id ? (
                <DynamicForm formId={pageData.contactForm.id} />
              ) : (
                <p className="text-center text-muted-foreground py-10">
                  Form configuration missing in CMS.
                </p>
              )}
            </Card>
          </div>

          {/* Office Hours */}
          <div className="text-center mt-12">
            <div className="inline-block bg-primary/5 rounded-2xl p-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Clock className="w-5 h-5 text-primary" />
                <h4 className="text-lg font-semibold text-foreground">
                  {pageData?.businessHoursTitle || "Business Hours"}
                </h4>
              </div>
              <div className="text-muted-foreground space-y-1">
                {pageData?.businessHours && pageData.businessHours.length > 0 ? (
                  pageData.businessHours.map((item: any, idx: number) => (
                    <div key={idx}>
                      <span className="font-medium">{item.day}:</span> {item.time}
                    </div>
                  ))
                ) : (
                  <>
                    <div>Monday - Friday: 9:00 AM to 6:00 PM</div>
                    <div>Saturday: 10:00 AM to 4:00 PM</div>
                    <div>Sunday: Closed</div>
                  </>
                )}
                <div className="text-primary font-medium mt-2">
                  {pageData?.businessHoursNote || "24/7 Customer Support Available"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;