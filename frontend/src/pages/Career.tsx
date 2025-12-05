import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Clock, Users, ArrowRight, Briefcase, Award, Coffee, Heart, Search, Filter, Star, TrendingUp, Target, Zap } from 'lucide-react';

const Career = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Credit Analyst",
      department: "Risk Management",
      location: "Nepal",
      type: "Full-time",
      experience: "3-5 years",
      description: "Analyze loan applications, assess credit risk, and make lending decisions for vehicle finance and BNPL products.",
      skills: ["Credit Analysis", "Risk Assessment", "Financial Modeling"],
      salary: "₹8-12 LPA"
    },
    {
      id: 2,
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "Nepal",
      type: "Full-time",
      experience: "4-6 years",
      description: "Drive digital marketing strategies, manage online campaigns, and enhance brand presence across digital channels.",
      skills: ["Digital Marketing", "SEO/SEM", "Analytics"],
      salary: "₹10-15 LPA"
    },
    {
      id: 3,
      title: "Software Developer",
      department: "Technology",
      location: "Nepal",
      type: "Full-time",
      experience: "2-4 years",
      description: "Develop and maintain fintech applications, work on payment systems, and improve user experience.",
      skills: ["React", "Node.js", "PostgreSQL"],
      salary: "₹6-10 LPA"
    },
    {
      id: 4,
      title: "Customer Relationship Manager",
      department: "Customer Success",
      location: "Nepal",
      type: "Full-time",
      experience: "2-3 years",
      description: "Manage customer relationships, handle escalations, and ensure high customer satisfaction levels.",
      skills: ["Customer Service", "CRM", "Communication"],
      salary: "₹5-8 LPA"
    },
    {
      id: 5,
      title: "Business Development Associate",
      department: "Sales",
      location: "Nepal",
      type: "Full-time",
      experience: "1-3 years",
      description: "Identify new business opportunities, build partnerships, and drive revenue growth in the fintech sector.",
      skills: ["Sales", "Partnership Development", "Market Research"],
      salary: "₹4-7 LPA"
    },
    {
      id: 6,
      title: "Product Manager",
      department: "Product",
      location: "Nepal",
      type: "Full-time",
      experience: "5-8 years",
      description: "Define product strategy, manage roadmaps, and collaborate with cross-functional teams to deliver innovative financial products.",
      skills: ["Product Strategy", "Agile", "User Research"],
      salary: "₹15-25 LPA"
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Industry-leading salaries with performance bonuses",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Career Growth",
      description: "Clear advancement paths and leadership opportunities",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Innovation Culture",
      description: "Work on cutting-edge fintech solutions",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Work-Life Balance",
      description: "Flexible schedules and mental health support",
      icon: <Star className="w-6 h-6" />
    }
  ];

  const lifeAtCompany = [
    {
      title: "Flexible Work Environment",
      description: "Hybrid work model with flexible hours",
      icon: <Coffee className="w-6 h-6" />
    },
    {
      title: "Learning & Development",
      description: "Continuous skill development programs",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance coverage",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Team Building",
      description: "Regular team events and celebrations",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Build Your Future With Us
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Join our dynamic team and be part of Nepal's leading financial services company
          </p>
          <Button variant="hero" size="lg" className="group">
            View All Openings
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search jobs..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="risk">Risk Management</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="mumbai">Kathmandu</SelectItem>
                <SelectItem value="bangalore">Lalitpur</SelectItem>
                <SelectItem value="pune">Bhaktapur</SelectItem>
                <SelectItem value="delhi">Chitwan</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Current Openings</h2>
            <p className="text-xl text-muted-foreground">Join our team of {jobOpenings.length}+ open positions</p>
          </div>

          <div className="grid gap-6 max-w-5xl mx-auto">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="p-6 hover:shadow-strong transition-all hover:scale-[1.02]">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                      <Badge variant="outline" className="ml-auto">{job.salary}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <Badge variant="secondary">{job.department}</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {job.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">{skill}</Badge>
                      ))}
                    </div>
                    <p className="text-sm text-primary font-medium">Experience: {job.experience}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button variant="cta" className="w-full lg:w-auto">
                      Apply Now
                    </Button>
                    <Button variant="outline" size="sm" className="w-full lg:w-auto">
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Join Batas?</h2>
            <p className="text-xl text-muted-foreground">Discover what makes us a great place to work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              Learn More About Our Culture
            </Button>
          </div>
        </div>
      </section>

      {/* Life at Company */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Life at Batas</h2>
            <p className="text-xl text-muted-foreground">Why our employees love working with us</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {lifeAtCompany.map((item, index) => (
              <Card key={index} className="p-6 text-center hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Career;