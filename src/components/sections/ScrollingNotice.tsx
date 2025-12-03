import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, Info, Megaphone } from 'lucide-react';

const ScrollingNotice = () => {
  const notices = [
    {
      type: 'warning',
      icon: AlertTriangle,
      message: "Scheduled Maintenance: Payment portal will be unavailable on 15th Aug from 1 AM to 5 AM",
      color: "border-warning bg-warning/5 text-warning-foreground"
    },
    {
      type: 'announcement',
      icon: Megaphone, 
      message: "🎉 New Low-Interest Rates Live! Electric Vehicle loans starting from 8.5% per annum",
      color: "border-primary bg-primary/5 text-primary-foreground"
    },
    {
      type: 'info',
      icon: Info,
      message: "We've successfully disbursed over ₹500 crores in loans! Thank you for your trust.",
      color: "border-success bg-success/5 text-success-foreground"
    }
  ];

  return (
    <div className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden py-2">
          <div className="animate-scroll-left whitespace-nowrap">
            {notices.map((notice, index) => {
              const IconComponent = notice.icon;
              return (
                <span key={index} className="inline-flex items-center space-x-2 mx-8 text-sm">
                  <IconComponent className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{notice.message}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ScrollingNotice;