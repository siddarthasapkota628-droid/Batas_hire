import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield, Users, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
            BP
          </div>
          <span className="font-bold text-xl text-foreground">Batas Hire and Purchase</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-foreground/80 hover:text-primary transition-smooth"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="text-foreground/80">
            Login
          </Button>
          <Button variant="cta" size="sm">
            Apply Now
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
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block py-2 text-foreground/80 hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button variant="ghost" className="justify-start">
                Login
              </Button>
              <Button variant="cta" className="justify-start">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;