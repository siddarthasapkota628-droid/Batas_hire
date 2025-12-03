import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Speak with our customer service team",
      contact: "1800-123-4567",
      availability: "24/7 Support"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us", 
      description: "Send us your queries and feedback",
      contact: "support@batashireandpurchase.com",
      availability: "Response within 24 hours"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with our support agents",
      contact: "Available on website",
      availability: "9 AM to 9 PM"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Office",
      description: "Meet us at our head office",
      contact: "Batas Tower, Nepal",
      availability: "Mon-Fri: 9 AM to 6 PM"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions about our financial services? We're here to help you 24/7 with personalized support.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-[1.02] bg-card-elevated">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {method.description}
                </p>
                <div className="font-medium text-foreground mb-2">
                  {method.contact}
                </div>
                <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{method.availability}</span>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 border-0 shadow-medium bg-card-elevated">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground">
                    <option>Select inquiry type</option>
                    <option>BNPL Application</option>
                    <option>Vehicle Hire Purchase</option>
                    <option>Existing Loan Query</option>
                    <option>Technical Support</option>
                    <option>General Inquiry</option>
                    <option>Complaint</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    placeholder="Please describe your inquiry in detail..."
                  />
                </div>

                <Button variant="cta" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Office Hours */}
          <div className="text-center mt-12">
            <div className="inline-block bg-primary/5 rounded-2xl p-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Clock className="w-5 h-5 text-primary" />
                <h4 className="text-lg font-semibold text-foreground">Business Hours</h4>
              </div>
              <div className="text-muted-foreground space-y-1">
                <div>Monday - Friday: 9:00 AM to 6:00 PM</div>
                <div>Saturday: 10:00 AM to 4:00 PM</div>
                <div>Sunday: Closed</div>
                <div className="text-primary font-medium">24/7 Customer Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;