import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Clock, Users, ArrowRight, Briefcase, Award, Coffee, Heart, Search, Filter, Star, TrendingUp, Target, Zap, Loader2, Calendar } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getCareerPage } from '@/lib/api';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import DynamicForm from '@/components/ui/DynamicForm';
import { toast } from 'sonner';
import { useLocale } from '@/contexts/LocaleContext';

interface CareerJob {
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    salary: string;
    status: string;
    expiryDate?: string;
    description: string;
    skills?: { skill: string }[];
}

interface CareerBenefit {
    icon: string;
    title: string;
    description: string;
}

interface CareerLifeAtCompany {
    icon: string;
    title: string;
    description: string;
}

interface CareerPageData {
    careerHeaderTitle?: string;
    careerHeaderSubtitle?: string;
    jobOpeningsTitle?: string;
    jobOpeningsSubtitle?: string;
    benefitsTitle?: string;
    benefitsSubtitle?: string;
    cultureButtonText?: string;
    cultureButtonLink?: string;
    lifeAtCompanyTitle?: string;
    lifeAtCompanySubtitle?: string;
    jobOpenings?: CareerJob[];
    benefits?: CareerBenefit[];
    lifeAtCompany?: CareerLifeAtCompany[];
}

const iconMap: Record<string, any> = {
    TrendingUp,
    Target,
    Zap,
    Star,
    Coffee,
    Award,
    Heart,
    Users,
};

const Career = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFormId, setSelectedFormId] = useState<string | null>(null);
    const [selectedJob, setSelectedJob] = useState<CareerJob | null>(null);
    const FORM_ID = "3"; // Updated to match CMS

    const { locale } = useLocale();

    const { data: pageData, isLoading } = useQuery<CareerPageData>({
        queryKey: ['careerPage', locale],
        queryFn: () => getCareerPage(locale),
    });

    const handleApply = (job: CareerJob) => {
        // Hardcoded form ID as requested for Phase 1
        setSelectedFormId(FORM_ID);
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
        );
    }

    const now = new Date();
    const jobOpenings = (pageData?.jobOpenings || []).filter((job: CareerJob) => {
        const isOpen = !job.status || job.status === 'Open';
        const isNotExpired = !job.expiryDate || new Date(job.expiryDate) > now;
        return isOpen && isNotExpired;
    });

    // Fallbacks
    const headerTitle = pageData?.careerHeaderTitle || "Build Your Future With Us";
    const headerSubtitle = pageData?.careerHeaderSubtitle || "Join our dynamic team and be part of Nepal's leading financial services company";

    const openingTitle = pageData?.jobOpeningsTitle || "Current Openings";
    const openingSubtitle = (pageData?.jobOpeningsSubtitle || "Join our team of {count}+ open positions").replace("{count}", jobOpenings.length.toString());

    const whyJoinTitle = pageData?.benefitsTitle || "Why Join Batas?";
    const whyJoinSubtitle = pageData?.benefitsSubtitle || "Discover what makes us a great place to work";
    const cultureBtnText = pageData?.cultureButtonText || "Learn More About Our Culture";
    const cultureBtnLink = pageData?.cultureButtonLink || "/culture";

    const lifeTitle = pageData?.lifeAtCompanyTitle || "Life at Batas";
    const lifeSubtitle = pageData?.lifeAtCompanySubtitle || "Why our employees love working with us";

    const benefits = pageData?.benefits?.length > 0
        ? pageData.benefits
        : [
            { icon: "TrendingUp", title: "Growth", description: "Clear career progression paths" },
            { icon: "Target", title: "Impact", description: "Make a real difference in people's lives" }
        ];

    const lifeAtCompany = pageData?.lifeAtCompany?.length > 0
        ? pageData.lifeAtCompany
        : [
            { icon: "Coffee", title: "Culture", description: "A collaborative and inclusive environment" },
            { icon: "Heart", title: "Well-being", description: "Comprehensive health and wellness support" }
        ];

    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="hero-gradient py-20 relative">
                <div className="container mx-auto px-4 text-center relative z-10">
                    {/* UI FIX: Added text-white and drop-shadow to ensure visibility against gradient/background */}
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-md">
                        {headerTitle}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md">
                        {headerSubtitle}
                    </p>
                    <Button variant="secondary" size="lg" className="group">
                        View All Openings
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
                                <SelectItem value="kathmandu">Kathmandu</SelectItem>
                                <SelectItem value="lalitpur">Lalitpur</SelectItem>
                                <SelectItem value="bhaktapur">Bhaktapur</SelectItem>
                                <SelectItem value="chitwan">Chitwan</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </section>

            {/* Current Openings */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-foreground mb-4">{openingTitle}</h2>
                        <p className="text-xl text-muted-foreground">{openingSubtitle}</p>
                    </div>

                    <div className="grid gap-6 max-w-5xl mx-auto">
                        {jobOpenings.map((job: any, index: number) => (
                            <Card key={index} className="p-8 bg-white/5 backdrop-blur-md border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary),0.1)] transition-all duration-500 group">
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                                                <Briefcase className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <Badge variant="secondary" className="bg-primary/10 text-primary border-none">{job.department}</Badge>
                                                    <Badge variant="outline" className="border-white/20 text-muted-foreground">{job.salary}</Badge>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-4 mb-6">
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                                                <MapPin className="w-4 h-4 text-primary" />
                                                {job.location}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                                                <Clock className="w-4 h-4 text-primary" />
                                                {job.type}
                                            </div>
                                            {job.expiryDate && (
                                                <div className="flex items-center gap-2 text-sm text-destructive font-medium bg-destructive/5 px-2 py-0.5 rounded">
                                                    <Calendar className="w-4 h-4" />
                                                    Expires: {new Date(job.expiryDate).toLocaleDateString(undefined, {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric'
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-muted-foreground mb-6 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">{job.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {job.skills?.map((skillItem: any, i: number) => (
                                                <Badge key={i} variant="outline" className="text-[10px] uppercase tracking-wider border-white/10 bg-white/5">{skillItem.skill}</Badge>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-bold text-primary">
                                            <TrendingUp className="w-4 h-4" />
                                            Experience: {job.experience}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 min-w-[160px]">
                                        <Button
                                            variant="cta"
                                            size="lg"
                                            className="w-full shadow-lg hover:shadow-primary/20"
                                            onClick={() => handleApply(job)}
                                        >
                                            Apply Now
                                        </Button>
                                        <Button variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-white/10">
                                            View Details
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                        {jobOpenings.length === 0 && (
                            <div className="text-center text-muted-foreground">
                                <p>No job openings found. Please check back later.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-foreground mb-4">{whyJoinTitle}</h2>
                        <p className="text-xl text-muted-foreground">{whyJoinSubtitle}</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto mb-12">
                        {benefits.map((benefit: CareerBenefit, index: number) => {
                            const Icon = iconMap[benefit.icon] || Star;
                            return (
                                <div key={index} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] max-w-xs">
                                    <Card className="p-8 text-center bg-white/5 backdrop-blur-md border-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary),0.1)] transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col items-center">
                                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{benefit.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{benefit.description}</p>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center">
                        <a href={cultureBtnLink} style={{ textDecoration: 'none' }}>
                            <Button variant="outline" size="lg">
                                {cultureBtnText}
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Life at Company */}
            <section className="py-16 bg-gradient-subtle">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-foreground mb-4">{lifeTitle}</h2>
                        <p className="text-xl text-muted-foreground">{lifeSubtitle}</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                        {lifeAtCompany.map((item: CareerLifeAtCompany, index: number) => {
                            const Icon = iconMap[item.icon] || Coffee;
                            return (
                                <div key={index} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] max-w-xs">
                                    <Card className="p-8 text-center bg-white/5 backdrop-blur-md border-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary),0.1)] transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col items-center">
                                        <div className="w-16 h-16 bg-success/10 text-success rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-success transition-colors">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{item.description}</p>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Application Modal */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Apply for Position</DialogTitle>
                        <DialogDescription>
                            Please fill out the details below.
                        </DialogDescription>
                    </DialogHeader>
                    {selectedFormId ? (
                        <DynamicForm formId={selectedFormId} jobData={selectedJob} onSuccess={() => setIsModalOpen(false)} />
                    ) : (
                        <div className="p-10 text-center text-muted-foreground">
                            <p>Loading application form...</p>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            <Footer />
        </main>
    );
};

export default Career;
