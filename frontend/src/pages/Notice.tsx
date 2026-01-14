import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Bell, AlertTriangle, Info, FileText, Calendar, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getNoticePage } from '@/lib/api';
import { useLocale } from '@/contexts/LocaleContext';

const iconMap: Record<string, any> = {
  AlertTriangle,
  Info,
  FileText,
  Calendar,
  Bell
};

const Notice = () => {
  const { locale } = useLocale();
  const { data: pageData, isLoading } = useQuery({
    queryKey: ['noticePage', locale],
    queryFn: () => getNoticePage(locale),
    retry: 1,
  });

  const defaultNotices = [
    {
      id: 1,
      type: "Important",
      icon: "AlertTriangle",
      title: "Updated Interest Rates - Effective January 2025",
      date: "December 15, 2024",
      content: "We are revising our interest rates for vehicle hire purchase loans. The new rates will be effective from January 1, 2025. Existing customers will continue with their current rates until loan maturity."
    },
    {
      id: 2,
      type: "Service Update",
      icon: "Info",
      title: "System Maintenance Schedule",
      date: "December 10, 2024",
      content: "Our online services will be temporarily unavailable on December 20, 2024, from 11:00 PM to 3:00 AM for scheduled maintenance. We apologize for any inconvenience."
    },
    {
      id: 3,
      type: "Policy Update",
      icon: "FileText",
      title: "New KYC Documentation Requirements",
      date: "November 28, 2024",
      content: "As per NRB guidelines, additional KYC documentation may be required for loan applications above Rs. 10 lakhs. Please ensure all documents are updated."
    },
    {
      id: 4,
      type: "Holiday Notice",
      icon: "Calendar",
      title: "Office Closure During Festival Season",
      date: "October 15, 2024",
      content: "Our offices will remain closed on October 31 and November 1, 2024, for Diwali celebrations. Online services will continue to be available 24/7."
    },
    {
      id: 5,
      type: "Product Launch",
      icon: "Bell",
      title: "Introducing Green Vehicle Loans",
      date: "September 20, 2024",
      content: "We are excited to launch our new Green Vehicle Loan program with special interest rates for electric and hybrid vehicles. Apply now and contribute to a sustainable future."
    }
  ];

  const notices = pageData?.notices?.length > 0 ? pageData.notices : defaultNotices;

  const getTypeStyle = (type: string) => {
    switch (type) {
      case "Important":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "Service Update":
        return "bg-warning/10 text-warning border-warning/20";
      case "Policy Update":
        return "bg-primary/10 text-primary border-primary/20";
      case "Holiday Notice":
        return "bg-accent/10 text-accent border-accent/20";
      case "Product Launch":
        return "bg-success/10 text-success border-success/20";
      default:
        return "bg-muted/10 text-muted-foreground border-border";
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
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Bell className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {pageData?.noticeHeaderTitle || "Notices & Updates"}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">
              {pageData?.noticeHeaderSubtitle || "Stay informed about important announcements, policy updates, and service changes from Batas Hire and Purchase."}
            </p>
          </div>

          {/* Notices List */}
          <div className="max-w-4xl mx-auto space-y-6">
            {notices.map((notice: any, index: number) => {
              const Icon = iconMap[notice.icon] || Info;
              return (
                <Card key={index} className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary),0.1)] transition-all duration-500 group overflow-hidden">
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-2xl border bg-white/5 group-hover:bg-white/10 transition-colors duration-500 ${getTypeStyle(notice.type)}`}>
                          <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div>
                          <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${getTypeStyle(notice.type)}`}>
                            {notice.type}
                          </div>
                        </div>
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground bg-white/5 px-2 py-1 rounded">
                        {notice.date}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="group-hover:translate-x-1 transition-transform duration-500">
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {notice.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/5">
                        {notice.content}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Contact Support */}
          <div className="bg-primary/5 rounded-2xl p-8 text-center mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {pageData?.contactSection?.title || "Need More Information?"}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {pageData?.contactSection?.description || "If you have questions about any of these notices or need clarification on how they affect your account, our customer support team is here to help."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={pageData?.contactSection?.primaryButtonLink || "/contact"}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                style={{ textDecoration: 'none' }}
              >
                {pageData?.contactSection?.primaryButtonText || "Contact Support"}
              </a>
              <a
                href={pageData?.contactSection?.secondaryButtonLink || "tel:1800-123-4567"}
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors"
                style={{ textDecoration: 'none' }}
              >
                {pageData?.contactSection?.secondaryButtonText || "Call 1800-123-4567"}
              </a>
            </div>
          </div>

          {/* Subscribe to Updates */}
          <div className="text-center mt-12 max-w-2xl mx-auto">
            <Card className="p-10 bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-all duration-500 group">
              <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {pageData?.subscribeSection?.title || "Subscribe to Notice Updates"}
              </h4>
              <p className="text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto font-medium">
                {pageData?.subscribeSection?.description || "Get notified about important updates and announcements via email."}
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground font-medium"
                />
                <Button variant="cta" className="px-8 py-3 shadow-lg hover:shadow-primary/20">
                  {pageData?.subscribeSection?.buttonText || "Subscribe"}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Notice;