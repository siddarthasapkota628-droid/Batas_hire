import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield, Users, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import { getHeader, getSiteSettings, getMediaUrl } from '@/lib/api';
import { useLocale } from '@/contexts/LocaleContext';
import { Globe } from 'lucide-react';
import { Header as HeaderType, Page } from '@/types/payload-types';

interface NavLink {
  href: string;
  label: string;
  id?: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locale, toggleLocale } = useLocale();

  const { data: headerData } = useQuery({
    queryKey: ['header', locale],
    queryFn: () => getHeader(locale),
  });

  const { data: siteSettings } = useQuery({
    queryKey: ['site-settings', locale],
    queryFn: () => getSiteSettings(locale),
  });

  const defaultNavigationLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products & Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/career', label: 'Career' },
    { href: '/knowledge-center', label: 'Knowledge Center' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
    { href: '/legal', label: 'Legal' },
    { href: '/notice', label: 'Notice' },
  ];

  // Map headerData?.navItems to the correct structure if available
  const navigationLinks: NavLink[] = (headerData?.navItems || []).length > 0
    ? (headerData?.navItems || []).map((item) => {
      const referenceValue = item.link.reference?.value;
      const slug = typeof referenceValue === 'object' ? (referenceValue as Page).slug : undefined;

      const href = item.link.type === 'custom'
        ? (item.link.url || '#')
        : (slug === 'home' ? '/' : (slug ? `/${slug}` : '#'));

      return {
        label: item.link.label,
        href,
        id: item.id || undefined
      };
    })
    : defaultNavigationLinks;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          {siteSettings?.siteLogo && typeof siteSettings.siteLogo === 'object' && siteSettings.siteLogo.url ? (
            <img
              src={getMediaUrl(siteSettings.siteLogo.url)}
              alt={siteSettings.siteTitle || 'Logo'}
              className="w-10 h-10 object-contain"
            />
          ) : (
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
              BP
            </div>
          )}
          <span className="font-bold text-xl text-foreground">
            {siteSettings?.siteTitle || 'Batas Hire and Purchase'}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navigationLinks.map((link, index) => (
            <Link
              key={link.id || `${link.href}-${index}`}
              to={link.href}
              className="text-foreground/80 hover:text-primary transition-smooth whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            className="text-foreground/80 flex items-center gap-2"
            onClick={toggleLocale}
          >
            <Globe className="h-4 w-4" />
            {locale === 'en' ? 'नेपाली' : 'English'}
          </Button>
          <Button variant="ghost" size="sm" className="text-foreground/80">
            {headerData?.loginLabel || 'Login'}
          </Button>
          <Button variant="cta" size="sm">
            {headerData?.applyNowLabel || 'Apply Now'}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container px-4 py-4 space-y-3">
            {navigationLinks.map((link, index) => (
              <Link
                key={link.id || `${link.href}-${index}-mobile`}
                to={link.href}
                className="block py-2 text-foreground/80 hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button
                variant="ghost"
                className="justify-start flex items-center gap-2"
                onClick={() => {
                  toggleLocale();
                  setIsMenuOpen(false);
                }}
              >
                <Globe className="h-4 w-4" />
                {locale === 'en' ? 'नेपाली' : 'English'}
              </Button>
              <Button variant="ghost" className="justify-start">
                {headerData?.loginLabel || 'Login'}
              </Button>
              <Button variant="cta" className="justify-start">
                {headerData?.applyNowLabel || 'Apply Now'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;