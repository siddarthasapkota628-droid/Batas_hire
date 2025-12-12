import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Clock, Users, ArrowRight, Briefcase, Award, Coffee, Heart, Search, Filter, Star, TrendingUp, Target, Zap, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getCareerPage } from '@/lib/api';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import DynamicForm from '@/components/ui/DynamicForm';
import { toast } from 'sonner';

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
    const FORM_ID = "3"; // Hardcoded for now as requested

    const { data: pageData, isLoading } = useQuery({
        queryKey: ['careerPage'],
        queryFn: getCareerPage,
    });

    const handleApply = (job: any) => {
        // Hardcoded form ID as requested for Phase 1
        setSelectedFormId(FORM_ID);
        setIsModalOpen(true);
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
        );
    }

    const jobOpenings = pageData?.jobOpenings || [];
    const benefits = pageData?.benefits || [];
    const lifeAtCompany = pageData?.lifeAtCompany || [];

    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="hero-gradient py-20 relative">
                <div className="container mx-auto px-4 text-center relative z-10">
                    {/* UI FIX: Added text-white and drop-shadow to ensure visibility against gradient/background */}
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-md">
                        {pageData?.careerHeaderTitle || "Build Your Future With Us"}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md">
                        {pageData?.careerHeaderSubtitle || "Join our dynamic team and be part of Nepal's leading financial services company"}
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
                        <h2 className="text-4xl font-bold text-foreground mb-4">Current Openings</h2>
                        <p className="text-xl text-muted-foreground">Join our team of {jobOpenings.length}+ open positions</p>
                    </div>

                    <div className="grid gap-6 max-w-5xl mx-auto">
                        {jobOpenings.map((job: any, index: number) => (
                            <Card key={index} className="p-6 hover:shadow-strong transition-all hover:scale-[1.02]">
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
                                            {job.skills?.map((skillItem: any, i: number) => (
                                                <Badge key={i} variant="outline" className="text-xs">{skillItem.skill}</Badge>
                                            ))}
                                        </div>
                                        <p className="text-sm text-primary font-medium">Experience: {job.experience}</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Button
                                            variant="cta"
                                            className="w-full lg:w-auto"
                                            onClick={() => handleApply(job)}
                                        >
                                            Apply Now
                                        </Button>
                                        <Button variant="outline" size="sm" className="w-full lg:w-auto">
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
                        <h2 className="text-4xl font-bold text-foreground mb-4">Why Join Batas?</h2>
                        <p className="text-xl text-muted-foreground">Discover what makes us a great place to work</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto mb-12">
                        {benefits.map((benefit: any, index: number) => {
                            const Icon = iconMap[benefit.icon] || Star;
                            return (
                                <Card key={index} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] p-6 text-center hover:scale-105 transition-transform">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                </Card>
                            );
                        })}
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

                    <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                        {lifeAtCompany.map((item: any, index: number) => {
                            const Icon = iconMap[item.icon] || Coffee;
                            return (
                                <Card key={index} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] p-6 text-center hover:scale-105 transition-transform">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </Card>
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
                        <DynamicForm formId={selectedFormId} onSuccess={() => setIsModalOpen(false)} />
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
