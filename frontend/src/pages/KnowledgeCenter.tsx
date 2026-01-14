import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, User, Clock, ArrowRight, BookOpen, TrendingUp, Shield, Search, Star, Download, FileText, Lightbulb, HelpCircle, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getKnowledgeCenterPage } from '@/lib/api';
import { useLocale } from '@/contexts/LocaleContext';

interface Article {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
}

interface Guide {
  title: string;
  description: string;
  icon: string;
  steps: number;
  category: string;
}

interface Report {
  title: string;
  type: string;
  date: string;
  icon: string;
  size: string;
}

interface FAQ {
  question: string;
  category: string;
  answer: string;
}

interface KnowledgeCenterPageData {
  template?: string;
  knowledgeCenterHeaderTitle?: string;
  knowledgeCenterHeaderSubtitle?: string;
  articles?: Article[];
  guides?: Guide[];
  reports?: Report[];
  faqs?: FAQ[];
  helpTitle?: string;
  helpDescription?: string;
  helpPrimaryButtonText?: string;
  helpSecondaryButtonText?: string;
}

const iconMap: Record<string, any> = {
  TrendingUp,
  Target: TrendingUp, // Fallback/Map if needed
  Zap: Lightbulb,
  Star,
  Coffee: User, // Just mapping some defaults
  Award: Star,
  Heart: User,
  Users: User,
  Lightbulb,
  FileText,
  Shield,
  BookOpen,
  HelpCircle
};


const KnowledgeCenter = () => {
  const { locale } = useLocale();
  const { data: pageData, isLoading, isError } = useQuery<KnowledgeCenterPageData>({
    queryKey: ['knowledgeCenterPage', locale],
    queryFn: () => getKnowledgeCenterPage(locale),
    retry: 1, // Minimize retries to fallback quickly if backend is down
  });

  const defaultArticles = [
    {
      title: "Understanding Buy Now Pay Later: A Complete Guide",
      excerpt: "Learn how BNPL works, its benefits, and how to use it responsibly for your purchases.",
      category: "BNPL",
      author: "Financial Team",
      date: "Jan 15, 2024",
      readTime: "5 min",
      featured: true
    },
    {
      title: "Vehicle Loan vs Hire Purchase: Which is Better?",
      excerpt: "Compare different vehicle financing options and choose the best one for your needs.",
      category: "Vehicle Finance",
      author: "Credit Analyst",
      date: "Jan 10, 2024",
      readTime: "7 min",
      featured: true
    },
    {
      title: "How to Improve Your Credit Score in 2024",
      excerpt: "Practical tips and strategies to boost your credit score and get better loan terms.",
      category: "Credit Tips",
      author: "Risk Manager",
      date: "Jan 8, 2024",
      readTime: "6 min",
      featured: false
    },
    {
      title: "EMI Planning: Managing Your Monthly Budget",
      excerpt: "Learn how to plan your EMIs effectively and maintain a healthy financial balance.",
      category: "Financial Planning",
      author: "Financial Advisor",
      date: "Jan 5, 2024",
      readTime: "4 min",
      featured: false
    },
    {
      title: "Digital Lending Revolution in Nepal",
      excerpt: "Explore how technology is transforming the lending landscape in Nepal.",
      category: "Industry Insights",
      author: "Tech Team",
      date: "Jan 3, 2024",
      readTime: "8 min",
      featured: false
    },
    {
      title: "Merchant Partnership Benefits for BNPL",
      excerpt: "Discover how merchants can benefit from offering BNPL options to customers.",
      category: "Merchant Guide",
      author: "Partnership Team",
      date: "Dec 28, 2023",
      readTime: "5 min",
      featured: false
    }
  ];

  const defaultGuides = [
    {
      title: "How to Pay Your EMI",
      description: "Step-by-step guide for all payment methods",
      icon: "Lightbulb",
      steps: 5,
      category: "Payment Guide"
    },
    {
      title: "Loan Application Process",
      description: "Complete guide to applying for loans",
      icon: "FileText",
      steps: 7,
      category: "Application Guide"
    },
    {
      title: "Understanding Interest Rates",
      description: "Learn about different types of interest rates",
      icon: "TrendingUp",
      steps: 4,
      category: "Financial Guide"
    }
  ];

  const defaultReports = [
    {
      title: "Annual Financial Report 2023",
      type: "Annual Report",
      date: "March 2024",
      icon: "TrendingUp",
      size: "2.4 MB"
    },
    {
      title: "Digital Lending Whitepaper",
      type: "Research Paper",
      date: "February 2024",
      icon: "BookOpen",
      size: "1.8 MB"
    },
    {
      title: "Risk Management Guidelines",
      type: "Policy Document",
      date: "January 2024",
      icon: "Shield",
      size: "950 KB"
    },
    {
      title: "BNPL Market Analysis 2024",
      type: "Market Report",
      date: "January 2024",
      icon: "FileText",
      size: "3.2 MB"
    }
  ];

  const defaultFaqs = [
    {
      question: "How do I apply for a vehicle loan?",
      category: "Vehicle Loans",
      answer: "You can apply online through our website or visit our nearest branch with required documents."
    },
    {
      question: "What is the minimum credit score required?",
      category: "Credit Requirements",
      answer: "We consider applications with credit scores of 650 and above, though each case is evaluated individually."
    },
    {
      question: "How long does loan approval take?",
      category: "Process",
      answer: "Most loans are approved within 24-48 hours of document verification."
    },
    {
      question: "Can I prepay my loan without penalty?",
      category: "Repayment",
      answer: "Yes, you can prepay your loan anytime after 6 months without any prepayment charges."
    }
  ];

  // Fallback logic
  const articles = pageData?.articles?.length > 0 ? pageData.articles : defaultArticles;
  const guides = pageData?.guides?.length > 0 ? pageData.guides : defaultGuides;
  const publications = pageData?.reports?.length > 0 ? pageData.reports : defaultReports;
  const faqs = pageData?.faqs?.length > 0 ? pageData.faqs : defaultFaqs;

  // Only show loader if we are loading AND we don't have fallback data (which we always do now)
  // Actually, if we want to show dynamic data if available, we wait.
  // But if connection fails, we show fallback.
  // If isLoading is true, it means we are trying.
  // Let's rely on the result. If pageData is null, we use defaults.

  // NOTE: We comment out the loader to ensure "unstarted backend" (connection refused) results in immediate fallback rendering 
  // instead of stuck loading state if the query doesn't timeout fast enough.
  // However, react-query isloading is true initially. 
  // Let's use `isLoading && !pageData` check?
  // If backend is down, api returns null fairly quick (or slow depending on axios timeout).
  // Let's keeping the loader is safer for UX, but maybe the user wants immediate static render if they run locally without backend.

  if (isLoading && !isError && !pageData) {
    // Optional: You can remove this if you want to show static content WHILE loading dynamic content (stale-while-revalidate style)
    // But here we just return the loader for now.
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  // Calculate categories dynamically
  const allCategories = articles.map((a: Article) => a.category).filter(Boolean);
  const uniqueCategories = Array.from(new Set(allCategories));
  const categories = [
    { name: "All", count: articles.length },
    ...uniqueCategories.map((cat: string) => ({
      name: cat,
      count: articles.filter((a: Article) => a.category === cat).length
    }))
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-20 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-md">
            {pageData?.knowledgeCenterHeaderTitle || "Knowledge Center"}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md">
            {pageData?.knowledgeCenterHeaderSubtitle || "Stay informed with expert insights, financial tips, and industry trends"}
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
            <Input
              placeholder="Search articles and guides..."
              className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
          </div>
        </div>
      </section>



      {/* Content Sections */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* We need to use the Tabs context from above, but TabsContent needs to be inside Tabs. 
                        Refactoring structure: Put the whole section inside the Tabs or move TabsList here?
                        The original design had TabsList in a separate section. 
                        To keep state, we need one Tabs parent. 
                        Actually, let's merge the "Navigation Tabs" section into this one or utilize a state if we want remote tabs.
                        Easier fix: Just implement the Tabs structure normally around both sections or just move TabsContent up?
                        Wait, TabsContent must be child of Tabs.
                        
                        Let's restructure: Main Tabs wrapper > (TabsList Section + Content Section).
                    */}

          <Tabs defaultValue="articles" className="w-full">
            {/* Navigation Section */}
            <div className="border-b mb-12 pb-8">
              <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto">
                <TabsTrigger value="articles">Articles</TabsTrigger>
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
                <TabsTrigger value="faqs">FAQs</TabsTrigger>
              </TabsList>
            </div>


            <TabsContent value="articles" className="space-y-12">
              {/* Categories Filter */}
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <Button key={category.name} variant="outline" size="sm" className="rounded-full">
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>

              {/* Featured Articles */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-2">
                  <Star className="w-6 h-6 text-primary" />
                  Featured Articles
                </h2>

                <div className="flex flex-wrap justify-center gap-8 mb-16">
                  {articles.filter((article: Article) => article.featured).map((article: Article, index: number) => (
                    <Card key={index} className="w-full lg:w-[calc(50%-2rem)] overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(var(--primary),0.1)] transition-all duration-500 group">
                      <div className="h-56 bg-gradient-to-br from-primary/20 to-accent/10 relative overflow-hidden">
                        <Badge className="absolute top-6 left-6 bg-primary/90 text-white border-none px-4 py-1 font-bold">{article.category}</Badge>
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      </div>
                      <div className="p-8">
                        <div className="flex items-center gap-6 mb-4">
                          <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
                            <Calendar className="w-4 h-4" />
                            {article.date}
                          </div>
                          <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                            <Clock className="w-4 h-4" />
                            {article.readTime}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors cursor-pointer leading-tight">{article.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">{article.excerpt}</p>
                        <div className="flex items-center justify-between border-t border-white/5 pt-6">
                          <div className="flex items-center gap-3 text-sm font-semibold text-muted-foreground">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                              <User className="w-4 h-4" />
                            </div>
                            {article.author}
                          </div>
                          <Button variant="cta" size="sm" className="group">
                            Read Full Article
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Recent Articles */}
                <h2 className="text-3xl font-bold text-foreground mb-8">Recent Articles</h2>
                <div className="flex flex-wrap justify-center gap-6">
                  {articles.filter((article: Article) => !article.featured).map((article: Article, index: number) => (
                    <Card key={index} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary),0.05)] transition-all duration-500 hover:-translate-y-2 cursor-pointer group flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <Badge className="bg-primary/10 text-primary border-none text-[10px] uppercase font-bold tracking-widest">{article.category}</Badge>
                        <span className="text-[10px] text-muted-foreground font-black uppercase tracking-tighter flex items-center gap-1">
                          <Clock className="w-3 h-3 text-primary" />
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug flex-grow">{article.title}</h3>
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-xs font-bold text-muted-foreground border-t border-white/5 pt-4">
                        <span className="flex items-center gap-2">
                          <User className="w-4 h-4 text-primary" />
                          {article.author}
                        </span>
                        <span>{article.date}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="guides" className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-primary" />
                How-To Guides
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                {guides.map((guide: Guide, index: number) => {
                  const Icon = iconMap[guide.icon] || Lightbulb;
                  return (
                    <Card key={index} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-success/50 hover:shadow-[0_0_30px_rgba(var(--success),0.1)] transition-all duration-500 hover:-translate-y-2 cursor-pointer group">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 bg-success/10 text-success rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                          <Icon className="w-7 h-7" />
                        </div>
                        <Badge className="bg-success text-white border-none text-[10px] font-black uppercase px-3">{guide.category}</Badge>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-success transition-colors">{guide.title}</h3>
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{guide.description}</p>
                      <div className="flex items-center justify-between border-t border-white/5 pt-6">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{guide.steps} Steps</span>
                        <Button variant="ghost" size="sm" className="text-success hover:text-success/80 hover:bg-success/5 group font-bold">
                          Start Guide
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="reports" className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Publications & Reports
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                {publications.map((pub: Report, index: number) => {
                  const Icon = iconMap[pub.icon] || TrendingUp;
                  return (
                    <Card key={index} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] p-8 text-center bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary),0.1)] transition-all duration-500 hover:-translate-y-2 group">
                      <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">{pub.title}</h3>
                      <p className="text-xs text-primary font-bold uppercase tracking-widest mb-4">{pub.type}</p>
                      <div className="flex items-center justify-center gap-3 text-xs font-medium text-muted-foreground mb-6">
                        <span>{pub.date}</span>
                        <div className="w-1 h-1 bg-white/20 rounded-full" />
                        <span>{pub.size}</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full border-white/10 bg-white/5 hover:bg-white/10 group">
                        <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                        Download
                      </Button>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="faqs" className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-primary" />
                Frequently Asked Questions
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                {faqs.map((faq: FAQ, index: number) => (
                  <Card key={index} className="w-full md:w-[calc(50%-1.5rem)] p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-primary/10 text-primary border-none text-[10px] font-black uppercase px-2">{faq.category}</Badge>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-snug">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">{faq.answer}</p>
                  </Card>
                ))}
              </div>
              <div className="text-center">
                <Button variant="outline" size="lg">
                  View All FAQs
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {pageData?.helpTitle || "Need More Help?"}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {pageData?.helpDescription || "Can't find what you're looking for? Our support team is here to help."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              {pageData?.helpPrimaryButtonText || "Contact Support"}
            </Button>
            <Button variant="outline" size="lg">
              {pageData?.helpSecondaryButtonText || "Schedule a Call"}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default KnowledgeCenter;