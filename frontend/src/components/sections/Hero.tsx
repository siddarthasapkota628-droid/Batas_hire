import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, CheckCircle, Star } from 'lucide-react';
import heroImage from '@/assets/hero-fintech.jpg';
import nbfcBadge from '@/assets/nbfc-badge.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional Financial Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-primary/30 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Trust Badges */}
          <div className="flex items-center space-x-6 mb-8 animate-slide-up">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <img src={nbfcBadge} alt="NBFC Licensed" className="w-6 h-6" />
              <span className="text-white text-sm font-medium">NBFC Licensed</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Secure & Trusted</span>
            </div>
            <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-accent fill-current" />
              ))}
              <span className="text-white text-sm font-medium ml-2">4.9/5</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Smart Finance
            <span className="block text-accent">Made Simple</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed animate-slide-up">
            Instant BNPL solutions and vehicle financing with transparent terms, 
            quick approvals, and flexible EMI options tailored for your needs.
          </p>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-4 mb-10 animate-slide-up">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
              <span className="text-white font-medium">Instant Approval</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
              <span className="text-white font-medium">0% Processing Fee</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
              <span className="text-white font-medium">Flexible EMI</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Button variant="hero" size="xl" className="group">
              Apply for BNPL
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              Calculate EMI
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20 animate-slide-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-white/70 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">₹500Cr+</div>
              <div className="text-white/70 text-sm">Loans Disbursed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2 mins</div>
              <div className="text-white/70 text-sm">Avg Approval Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
