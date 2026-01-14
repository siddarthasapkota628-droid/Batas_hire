import { Card } from '@/components/ui/card';
import { Star, Quote, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getAboutPage } from '@/lib/api';
import { useLocale } from '@/contexts/LocaleContext';

const Testimonials = () => {
  const { locale } = useLocale();

  // Helper to safely get numeric value (handles localized objects if they slip through)
  const getSafeNumber = (val: any, fallback: number) => {
    if (typeof val === 'number') return isNaN(val) ? fallback : val;
    if (typeof val === 'string') {
      const parsed = parseInt(val, 10);
      return isNaN(parsed) ? fallback : parsed;
    }
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      // In case we get {en: 5, ne: 5}
      const firstVal = Object.values(val)[0];
      return getSafeNumber(firstVal, fallback);
    }
    return fallback;
  };

  const { data, isLoading } = useQuery({
    queryKey: ['aboutPage', locale],
    queryFn: () => getAboutPage(locale),
  });

  // Get the About page data (it returns an object with docs array)
  // Safety check: ensure docs array exists and has at least one item
  const cmsData = (data && data.docs && data.docs.length > 0) ? data.docs[0] : {};
  const staticTestimonials = [
    {
      name: "Rajesh Rai",
      role: "Small Business Owner",
      location: "Kathmandu",
      rating: 5,
      content: "Batas helped me expand my retail business with their quick BNPL solutions. The approval process was incredibly fast and transparent. My customers love the flexibility, and my sales have increased by 40%.",
      product: "BNPL for Business"
    },
    {
      name: "Priya Shrestha",
      role: "Software Engineer",
      location: "Kathmandu",
      rating: 5,
      content: "Getting my dream bike was so easy with Batas vehicle financing. The EMI rates were competitive, and the entire process was completed online. Highly recommend their services!",
      product: "Vehicle Hire Purchase"
    },
    {
      name: "Amit Shah",
      role: "Marketing Manager",
      location: "Kathmandu",
      rating: 5,
      content: "I've been using Batas BNPL for my online shopping for over a year now. The instant approval and flexible payment options have made managing my monthly budget so much easier.",
      product: "Buy Now Pay Later"
    },
    {
      name: "Sneha Maharjan",
      role: "Teacher",
      location: "Chitwan",
      rating: 5,
      content: "The customer service at Batas is exceptional. When I had questions about my loan, their team was always available to help. They truly care about their customers.",
      product: "Personal Loan"
    },
    {
      name: "Vikash Kumar",
      role: "Entrepreneur",
      location: "Bhaktapur",
      rating: 5,
      content: "As a startup founder, access to quick financing was crucial. Batas understood my needs and provided the perfect solution with minimal documentation. They're truly supporting India's entrepreneurial spirit.",
      product: "Business Financing"
    },
    {
      name: "Kavita Nepal",
      role: "Fashion Designer",
      location: "Kavre",
      rating: 5,
      content: "Batas BNPL has transformed how I shop for my design materials. I can buy what I need when I need it, and pay comfortably over time. It's been a game-changer for my business cash flow.",
      product: "BNPL Services"
    }
  ];

  const staticStats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "4.8/5", label: "Customer Rating" },
    { number: "₹5000Cr+", label: "Loans Disbursed" },
    { number: "98%", label: "Customer Satisfaction" }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  // Safely access CMS data
  // Safely access CMS data - already defined above
  // const cmsData = pageData?.docs?.[0] || {};

  // Use CMS data if available and has rows, otherwise fallback to static
  const testimonials = (cmsData.testimonials && cmsData.testimonials.length > 0)
    ? cmsData.testimonials.map((t: any) => ({ ...t, rating: getSafeNumber(t.rating, 5) }))
    : staticTestimonials;
  const stats = (cmsData.stats && cmsData.stats.length > 0) ? cmsData.stats : staticStats;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {cmsData.testimonialsTitle || "What Our Customers Say"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {cmsData.testimonialsDescription || "Don't just take our word for it. Hear from thousands of satisfied customers across India."}
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 max-w-5xl mx-auto">
          {stats.map((stat: any, index: number) => (
            <div key={index} className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-6 flex-1 min-w-[160px] max-w-[200px] hover:border-primary/30 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 tracking-tighter">{stat.number || stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase font-black tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial: any, index: number) => (
            <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] max-w-sm h-full flex mt-4">
              <Card className="p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary),0.1)] transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden flex flex-col w-full">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:scale-125 transition-transform duration-700">
                  <Quote className="w-12 h-12 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 mb-6 flex-grow italic">
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Customer Info */}
                <div className="flex items-end justify-between mt-auto">
                  <div>
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground font-semibold">{testimonial.role}</p>
                    <p className="text-[10px] text-muted-foreground/60 uppercase font-black tracking-tighter">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    {testimonial.product && (
                      <div className="text-[10px] text-primary font-black uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/10">
                        {testimonial.product}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Join thousands of satisfied customers who trust Batas for their financial needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Start Your Application
            </button>
            <button className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-card-elevated transition-colors font-medium">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;