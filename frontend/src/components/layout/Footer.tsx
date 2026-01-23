import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getFooter, getSiteSettings, getMediaUrl } from '@/lib/api';
import { useLocale } from '@/contexts/LocaleContext';

const socialIconMap: Record<string, React.ReactNode> = {
  facebook: <Facebook className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  instagram: <Instagram className="w-5 h-5" />,
};

const Footer = () => {
  const { locale } = useLocale();

  const { data: footerData } = useQuery({
    queryKey: ['footer', locale],
    queryFn: () => getFooter(locale),
  });

  const { data: siteSettings } = useQuery({
    queryKey: ['site-settings', locale],
    queryFn: () => getSiteSettings(locale),
  });

  const quickLinksFallback = [
    { label: 'About Us', href: '/about' },
    { label: 'Products & Services', href: '/products' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Career', href: '/career' },
    { label: 'Knowledge Center', href: '/knowledge-center' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Notice', href: '/notice' }
  ];

  const productsFallback = [
    { label: 'Buy Now Pay Later', href: '#bnpl' },
    { label: 'Vehicle Hire Purchase', href: '#vehicle-loan' },
    { label: 'EMI Calculator', href: '#calculator' },
    { label: 'Merchant Partners', href: '#partners' }
  ];

  const legalFallback = [
    { label: 'Legal & Compliance', href: '/legal' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/legal' },
    { label: 'NBFC Disclaimers', href: '/legal' },
    { label: 'Grievance Redressal', href: '/legal' }
  ];

  const socialLinksFallback = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' }
  ];

  const renderNavColumn = (title: string, links: any[] | undefined, fallback: any[]) => {
    const linksToRender = links && links.length > 0 ? links : fallback;

    return (
      <div>
        <h4 className="font-semibold text-lg mb-4">{title}</h4>
        <ul className="space-y-2">
          {linksToRender.map((link, index) => {
            const isExternal = link.isCustom || !link.href?.startsWith('/');
            return (
              <li key={index}>
                {isExternal ? (
                  <a href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              {siteSettings?.siteLogo?.url ? (
                <img
                  src={getMediaUrl(siteSettings.siteLogo.url)}
                  alt={siteSettings.siteTitle || 'Logo'}
                  className="w-10 h-10 object-contain"
                />
              ) : (
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-foreground text-primary font-bold text-sm">
                  BP
                </div>
              )}
              <span className="font-bold text-xl">
                {siteSettings?.siteTitle || 'Batas Hire and Purchase'}
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              {footerData?.description || 'Your trusted partner for flexible financing solutions. We provide transparent, accessible, and innovative financial services to help you achieve your goals.'}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm">{footerData?.contactInfo?.phone || '1800-123-4567 (Toll Free)'}</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm">{footerData?.contactInfo?.email || 'support@batas.com'}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span className="text-sm whitespace-pre-line">
                  {footerData?.contactInfo?.address || 'Batas Tower, Kathmandu,\nNepal'}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {footerData?.socialLinks && footerData.socialLinks.length > 0 ? footerData.socialLinks.map((social: any, index: number) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.platform}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-accent-foreground rounded-full flex items-center justify-center transition-colors"
                >
                  {socialIconMap[social.platform]}
                </a>
              )) : socialLinksFallback.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-accent-foreground rounded-full flex items-center justify-center transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {/* Quick Links (Smart structure) */}
          {renderNavColumn('Quick Links', footerData?.quickLinks?.map((item: any) => ({
            label: item.link.label,
            href: item.link.type === 'custom'
              ? item.link.url
              : (item.link.reference?.value?.slug ? `/${item.link.reference.value.slug}` : '#'),
            isCustom: item.link.type === 'custom'
          })), quickLinksFallback)}

          {/* Our Products (Simple structure) */}
          {renderNavColumn('Our Products', footerData?.ourProducts?.map((item: any) => ({
            label: item.label,
            href: item.url,
            isCustom: true
          })), productsFallback)}

          {/* Legal & Compliance (Simple structure) */}
          {renderNavColumn('Legal & Compliance', footerData?.legalCompliance?.map((item: any) => ({
            label: item.label,
            href: item.url,
            isCustom: true
          })), legalFallback)}

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              {footerData?.copyrightText || `© 2024 Batas Hire and Purchase Financial Services Pvt. Ltd. All rights reserved. | NBFC License No: N-12345`}
            </div>
            <div className="flex items-center space-x-6 text-xs text-primary-foreground/60">
              <span>Developed by Naya Code Pvt. Ltd.</span>
              <span>•</span>
              <a href="#" className="hover:text-accent transition-colors">
                Cookie Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-accent transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
