import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Products & Services', href: '/products' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Career', href: '/career' },
    { label: 'Knowledge Center', href: '/knowledge-center' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Notice', href: '/notice' }
  ];

  const products = [
    { label: 'Buy Now Pay Later', href: '#bnpl' },
    { label: 'Vehicle Hire Purchase', href: '#vehicle-loan' },
    { label: 'EMI Calculator', href: '#calculator' },
    { label: 'Merchant Partners', href: '#partners' }
  ];

  const legal = [
    { label: 'Legal & Compliance', href: '/legal' },
    { label: 'Privacy Policy', href: '/legal' },
    { label: 'Terms & Conditions', href: '/legal' },
    { label: 'NBFC Disclaimers', href: '/legal' },
    { label: 'Grievance Redressal', href: '/legal' }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-foreground text-primary font-bold text-sm">
                BP
              </div>
              <span className="font-bold text-xl">Batas Hire and Purchase</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted partner for flexible financing solutions. We provide transparent, 
              accessible, and innovative financial services to help you achieve your goals.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm">1800-123-4567 (Toll Free)</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm">support@batas.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span className="text-sm">
                  Batas Tower, Kathmandu,
                  Nepal
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
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

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Products</h4>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <a 
                    href={product.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {product.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal & Compliance</h4>
            <ul className="space-y-2 mb-6">
              {legal.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="bg-primary-foreground/5 p-4 rounded-lg">
              <h5 className="font-medium mb-2">Stay Updated</h5>
              <p className="text-xs text-primary-foreground/70 mb-3">
                Get the latest financial tips and product updates
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded text-xs text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-accent"
                />
                <Button size="sm" variant="hero" className="px-3">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-primary-foreground/60">
                © 2024 Batas Hire and Purchase Financial Services Pvt. Ltd. All rights reserved. | NBFC License No: N-12345
              </div>
            <div className="flex items-center space-x-6 text-xs text-primary-foreground/60">
              <span>Developer by Naya Code Pvt. Ltd.</span>
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
