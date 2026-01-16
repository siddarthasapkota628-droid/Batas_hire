import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/card';
import { Bell, AlertTriangle, Info, FileText, Calendar } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getNoticePage } from '@/lib/api';
import { useLocale } from '@/contexts/LocaleContext';
import { useEffect, useState } from 'react';

const iconMap: Record<string, any> = {
  AlertTriangle,
  Info,
  FileText,
  Calendar,
  Bell,
};

const typeClassMap: Record<string, string> = {
  Important: 'border-red-500 text-red-500',
  'Service Update': 'border-blue-500 text-blue-500',
  'Policy Update': 'border-yellow-500 text-yellow-500',
  'Holiday Notice': 'border-green-500 text-green-500',
  'Product Launch': 'border-purple-500 text-purple-500',
};

const defaultNotices = [
  {
    id: 1,
    type: 'Important',
    icon: 'AlertTriangle',
    title: 'Updated Interest Rates - Effective January 2025',
    date: 'December 15, 2024',
    content:
      'We are revising our interest rates for vehicle hire purchase loans. The new rates will be effective from January 1, 2025. Existing customers will continue with their current rates until loan maturity.',
  },
  {
    id: 2,
    type: 'Service Update',
    icon: 'Info',
    title: 'System Maintenance Schedule',
    date: 'December 10, 2024',
    content:
      'Our online services will be temporarily unavailable on December 20, 2024, from 11:00 PM to 3:00 AM for scheduled maintenance. We apologize for any inconvenience.',
  },
];

const defaultNoticePage = {
  noticeHeaderTitle: 'Notices & Updates',
  noticeHeaderSubtitle:
    'Stay informed about important announcements, policy updates, and service changes from Batas Hire and Purchase.',
  notices: defaultNotices,
  contactSection: {
    title: 'Need More Information?',
    description:
      'If you have questions about any of these notices or need clarification on how they affect your account, our customer support team is here to help.',
    primaryButtonText: 'Contact Support',
    primaryButtonLink: '/contact',
    secondaryButtonText: 'Call 1800-123-4567',
    secondaryButtonLink: 'tel:18001234567',
  },
  subscribeSection: {
    title: 'Subscribe to Notice Updates',
    description: 'Get notified about important updates and announcements via email.',
    buttonText: 'Subscribe',
    placeholder: 'Enter your email address',
  },
};

export default function NoticePage() {
  const [noticePageData, setNoticePageData] = useState<any>(null);
  const { locale } = useLocale();

  useEffect(() => {
    const loadNoticePage = async () => {
      try {
        const data = await getNoticePage(locale);
        setNoticePageData(data);
      } catch (error) {
        console.error('Error fetching notice data:', error);
      }
    };
    loadNoticePage();
  }, [locale]);

  const noticePage = noticePageData || defaultNoticePage;

  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Bell className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {noticePage.noticesHeaderTitle}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">{noticePage.noticesHeaderSubtitle}</p>
          </div>

          {/* Notices List */}
          <div className="max-w-4xl mx-auto space-y-6">
            {noticePage.notices.map((item: any, index: number) => {
              const Icon = iconMap[item.icon] || Info;
              return (
                <Card key={index} className="border-0 shadow-medium bg-card-elevated overflow-hidden">
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-full border ${typeClassMap[item.type] || 'border-gray-500'}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div
                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${
                              typeClassMap[item.type] || 'border-gray-500'
                            }`}
                          >
                            {item.type}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">{item.date}</div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Contact Support */}
          <div className="bg-primary/5 rounded-2xl p-8 text-center mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">{noticePage.contactSection.title}</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{noticePage.contactSection.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={noticePage.contactSection.primaryButtonLink}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                {noticePage.contactSection.primaryButtonText}
              </a>
              <a
                href={noticePage.contactSection.secondaryButtonLink}
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors"
              >
                {noticePage.contactSection.secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="text-center mt-12 max-w-2xl mx-auto">
            <Card className="p-6 border-0 shadow-medium bg-card-elevated">
              <h4 className="text-lg font-semibold text-foreground mb-3">{noticePage.subscribeSection.title}</h4>
              <p className="text-sm text-muted-foreground mb-4">{noticePage.subscribeSection.description}</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder={noticePage.subscribeSection.placeholder}
                  className="flex-1 px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                />
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  {noticePage.subscribeSection.buttonText}
                </button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
