import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, Info, Megaphone } from 'lucide-react';

interface ScrollingNoticeProps {
  cmsData?: any;
}

const ScrollingNotice = ({ cmsData }: ScrollingNoticeProps) => {
  const cmsNotices = cmsData?.scrollingNotices || [];
  const now = new Date();

  const defaultNotices = [
    {
      type: 'warning',
      icon: AlertTriangle,
      message: "Scheduled Maintenance: Payment portal will be unavailable on 15th Aug from 1 AM to 5 AM",
    },
    {
      type: 'announcement',
      icon: Megaphone,
      message: "🎉 New Low-Interest Rates Live! Electric Vehicle loans starting from 8.5% per annum",
    },
    {
      type: 'info',
      icon: Info,
      message: "We've successfully disbursed over ₹500 crores in loans! Thank you for your trust.",
    }
  ];

  // Map CMS notices to include icons and filter by expiry
  const activeNotices = cmsNotices.length > 0
    ? cmsNotices
      .filter((n: any) => !n.expiryDate || new Date(n.expiryDate) > now)
      .map((n: any) => ({
        ...n,
        icon: n.type === 'warning' ? AlertTriangle : (n.type === 'info' ? Info : Megaphone)
      }))
    : defaultNotices.map(n => ({ ...n }));

  if (activeNotices.length === 0) return null;

  return (
    <div className="sticky top-16 z-40 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden py-2">
          <div className="animate-scroll-left whitespace-nowrap">
            {activeNotices.map((notice: any, index: number) => {
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