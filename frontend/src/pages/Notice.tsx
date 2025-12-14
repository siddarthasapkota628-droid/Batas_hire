import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/card';
import { Bell, AlertTriangle, Info, FileText, Calendar, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getNoticePage } from '@/lib/api';

const iconMap: Record<string, any> = {
  AlertTriangle,
  Info,
  FileText,
  Calendar,
  Bell
};

const Notice = () => {
  const { data: pageData, isLoading } = useQuery({
    queryKey: ['noticePage'],
    queryFn: getNoticePage,
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
                <Card key={index} className="border-0 shadow-medium bg-card-elevated overflow-hidden">
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-full border ${getTypeStyle(notice.type)}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${getTypeStyle(notice.type)}`}>
                            {notice.type}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {notice.date}
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {notice.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
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
            <Card className="p-6 border-0 shadow-medium bg-card-elevated">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                {pageData?.subscribeSection?.title || "Subscribe to Notice Updates"}
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                {pageData?.subscribeSection?.description || "Get notified about important updates and announcements via email."}
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                />
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  {pageData?.subscribeSection?.buttonText || "Subscribe"}
                </button>
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