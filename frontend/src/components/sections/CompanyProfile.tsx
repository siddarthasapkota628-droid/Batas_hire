import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Award, Briefcase, GraduationCap, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getAboutPage } from '@/lib/api';
import { useLocale } from '@/contexts/LocaleContext';
import { AboutPage, Media } from '@/types/payload-types';

const CompanyProfile = () => {
  const { locale } = useLocale();

  interface StaticBoardMember {
    name: string;
    position: string;
    experience: string;
    education: string;
    specialization: string;
    photo?: null;
  }

  interface StaticLeader {
    name: string;
    position: string;
    department: string;
    experience: string;
    expertise: string;
    photo?: null;
  }

  interface StaticMilestone {
    year: string;
    event: string;
    description: string;
  }

  const { data: pageData, isLoading, error } = useQuery({
    queryKey: ['aboutPage', locale],
    queryFn: () => getAboutPage(locale),
  });

  const staticBoardMembers: StaticBoardMember[] = [
    {
      name: "Rajesh Adhikari",
      position: "Chairman & Managing Director",
      experience: "25+ years in Financial Services",
      education: "MBA Finance, TU",
      specialization: "Strategic Leadership, Risk Management"
    },
    {
      name: "Priyanka Koirala",
      position: "Executive Director",
      experience: "20+ years in Banking & NBFC",
      education: "CA, CFA",
      specialization: "Credit Risk, Operations"
    },
    {
      name: "Amit Nepal",
      position: "Independent Director",
      experience: "30+ years in Banking",
      education: "Post Graduate in Economics",
      specialization: "Regulatory Compliance, Governance"
    },
    {
      name: "Dr. Sunita Rai",
      position: "Independent Director",
      experience: "15+ years in Academia & Finance",
      education: "PhD in Finance",
      specialization: "Financial Research, Technology"
    }
  ];

  const staticLeadership: StaticLeader[] = [
    {
      name: "Bikash Shrestha",
      position: "Chief Technology Officer",
      department: "Technology",
      experience: "12+ years",
      expertise: "Digital Transformation, Fintech"
    },
    {
      name: "Meera Joshi",
      position: "Chief Risk Officer",
      department: "Risk Management",
      experience: "15+ years",
      expertise: "Credit Risk, Compliance"
    },
    {
      name: "Arjun Kumar",
      position: "Chief Marketing Officer",
      department: "Marketing",
      experience: "10+ years",
      expertise: "Digital Marketing, Brand Strategy"
    },
    {
      name: "Kavita KC",
      position: "Chief Human Resources Officer",
      department: "Human Resources",
      experience: "18+ years",
      expertise: "Talent Management, Culture"
    }
  ];

  const staticMilestones: StaticMilestone[] = [
    { year: "2002", event: "Company Incorporated", description: "Batas Hire and Purchase founded with vision to democratize credit" },
    { year: "2005", event: "NBFC License", description: "Obtained NBFC license from NRB" },
    { year: "2010", event: "₹100 Cr AUM", description: "Reached ₹100 crores in Assets Under Management" },
    { year: "2015", event: "Digital Transformation", description: "Launched digital lending platform and mobile app" },
    { year: "2018", event: "₹1000 Cr AUM", description: "Crossed Rs. 1000 crores milestone in lending portfolio" },
    { year: "2020", event: "BNPL Launch", description: "Introduced Buy Now Pay Later services for retail customers" },
    { year: "2022", event: "AI Integration", description: "Implemented AI-powered credit assessment system" },
    { year: "2024", event: "₹5000 Cr AUM", description: "Achieved Rs. 5000 crores in Assets Under Management" }
  ];

  // Safely access CMS data
  const cmsData = pageData?.docs?.[0];

  // Use CMS data if available and has rows, otherwise fallback to static
  const boardMembers: (AboutPage['directors'][number] | StaticBoardMember)[] = (cmsData?.directors && cmsData.directors.length > 0) ? cmsData.directors : staticBoardMembers;
  const leadership: (AboutPage['leadership'][number] | StaticLeader)[] = (cmsData?.leadership && cmsData.leadership.length > 0) ? cmsData.leadership : staticLeadership;
  const milestones: (AboutPage['timeline'][number] | StaticMilestone)[] = (cmsData?.timeline && cmsData.timeline.length > 0) ? cmsData.timeline : staticMilestones;

  // Helper to get image URL
  const getImageUrl = (photo: number | Media | null | undefined) => {
    if (photo && typeof photo === 'object' && 'url' in photo && photo.url) {
      // payload usually returns relative URL
      return `http://localhost:3000${photo.url}`;
    }
    return null;
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-background text-foreground container mx-auto px-4 flex justify-center items-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </section>
    );
  }

  if (error) {
    console.error("Error fetching about page:", error);
    // Don't render error UI, just use static data
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Board of Directors */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">{cmsData?.directorsTitle || "Board of Directors"}</h2>
            <p className="text-xl text-muted-foreground">{cmsData?.directorsDescription || "Experienced leadership guiding our strategic vision"}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {boardMembers.map((member, index) => {
              const imageUrl = getImageUrl(member.photo);

              return (
                <div key={index} className="w-full md:w-[calc(50%-2rem)] max-w-lg">
                  <Card className="p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary),0.1)] transition-all duration-500 hover:-translate-y-2 group h-full">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                      <div className="w-24 h-24 rounded-2xl flex-shrink-0 overflow-hidden bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        {imageUrl ? (
                          <img
                            src={imageUrl}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-primary">
                            <User className="w-12 h-12" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                        <p className="text-primary font-semibold mb-4 bg-primary/10 px-3 py-1 rounded-full inline-block text-sm">{member.position}</p>

                        <div className="space-y-3 text-sm">
                          {member.experience && (
                            <div className="flex items-center gap-3 justify-center sm:justify-start">
                              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                <Briefcase className="w-4 h-4 text-primary" />
                              </div>
                              <span className="text-muted-foreground font-medium">{member.experience}</span>
                            </div>
                          )}
                          {member.education && (
                            <div className="flex items-center gap-3 justify-center sm:justify-start">
                              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                <GraduationCap className="w-4 h-4 text-primary" />
                              </div>
                              <span className="text-muted-foreground font-medium">{member.education}</span>
                            </div>
                          )}
                          {member.specialization && (
                            <div className="flex items-center gap-3 justify-center sm:justify-start">
                              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                <Award className="w-4 h-4 text-primary" />
                              </div>
                              <span className="text-muted-foreground font-medium">{member.specialization}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">{cmsData?.leadershipTitle || "Leadership Team"}</h2>
            <p className="text-xl text-muted-foreground">{cmsData?.leadershipDescription || "Meet our executive team driving operational excellence"}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
            {leadership.map((leader, index) => {
              const imageUrl = getImageUrl(leader.photo);

              return (
                <div key={index} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] max-w-xs">
                  <Card className="p-8 text-center bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary),0.1)] transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col items-center">
                    <div className="w-20 h-20 rounded-2xl mx-auto mb-6 overflow-hidden bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-primary">
                          <User className="w-10 h-10" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{leader.name}</h3>
                    <p className="text-sm text-primary font-semibold mb-4 bg-primary/5 px-3 py-1 rounded-full uppercase tracking-wider">{leader.position}</p>

                    <div className="space-y-3 mt-auto w-full">
                      {leader.department && (
                        <Badge variant="outline" className="w-full justify-center py-2 border-white/10 bg-white/5 text-muted-foreground uppercase text-[10px] tracking-widest font-black">
                          {leader.department}
                        </Badge>
                      )}
                      <div className="flex flex-col gap-1">
                        {leader.experience && (
                          <p className="text-xs text-muted-foreground font-medium">Experience: {leader.experience}</p>
                        )}
                        {leader.expertise && (
                          <p className="text-xs text-muted-foreground/80 font-medium italic">"{leader.expertise}"</p>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Company Timeline - Keep Static for now as requested */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">{cmsData.timelineTitle || "22 Years of Growth"}</h2>
            <p className="text-xl text-muted-foreground">{cmsData.timelineDescription || "Our journey from inception to industry leadership"}</p>
          </div>

          <div className="relative">
            {/* Horizontal Scroll Container */}
            <div className="flex overflow-x-auto pb-12 pt-8 gap-8 scroll-smooth snap-x snap-mandatory no-scrollbar hover:no-scrollbar focus:no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {/* Timeline Track Line (runs behind cards) */}
              <div className="absolute top-[4.5rem] left-0 right-0 h-0.5 bg-primary/20 hidden md:block"></div>

              {milestones.map((milestone, index) => (
                <div key={index} className="flex-shrink-0 w-[300px] md:w-[350px] snap-center">
                  <div className="relative pt-6">
                    {/* Timeline Dot on the line */}
                    <div className="absolute top-0 left-1/2 -ml-2 w-4 h-4 bg-primary rounded-full z-10 hidden md:block border-4 border-background ring-4 ring-primary/10"></div>

                    <Card className="p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(var(--primary),0.15)] transition-all duration-500 group h-full flex flex-col items-center text-center">
                      <div className="mb-6 relative">
                        <Badge variant="secondary" className="font-black bg-primary text-primary-foreground px-4 py-1.5 text-sm rounded-xl relative z-10 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                          {milestone.year}
                        </Badge>
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{milestone.event}</h3>
                      <p className="text-muted-foreground leading-relaxed font-medium text-sm">{milestone.description}</p>

                      <div className="mt-8 pt-6 border-t border-white/5 w-full">
                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mx-auto opacity-40 group-hover:opacity-100 group-hover:bg-primary/10 transition-all">
                          <Award className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll indicator for desktop */}
            <div className="hidden md:flex justify-center gap-2 mt-4">
              <div className="text-[10px] text-muted-foreground uppercase font-black tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10 animate-pulse">
                Swipe or Scroll horizontally to explore our journey
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;