import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Award, Briefcase, GraduationCap, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getAboutPage } from '@/lib/api';
import { useLocale } from '@/contexts/LocaleContext';

const CompanyProfile = () => {
  const { locale } = useLocale();

  const { data: pageData, isLoading, error } = useQuery({
    queryKey: ['aboutPage', locale],
    queryFn: () => getAboutPage(locale),
  });

  const staticBoardMembers = [
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

  const staticLeadership = [
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

  const staticMilestones = [
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
  const cmsData = pageData?.docs?.[0] || {};

  // Use CMS data if available and has rows, otherwise fallback to static
  const boardMembers = (cmsData.directors && cmsData.directors.length > 0) ? cmsData.directors : staticBoardMembers;
  const leadership = (cmsData.leadership && cmsData.leadership.length > 0) ? cmsData.leadership : staticLeadership;
  const milestones = (cmsData.timeline && cmsData.timeline.length > 0) ? cmsData.timeline : staticMilestones;

  // Helper to get image URL
  const getImageUrl = (photo: any) => {
    if (photo && photo.url) {
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
            <h2 className="text-4xl font-bold text-foreground mb-4">{cmsData.directorsTitle || "Board of Directors"}</h2>
            <p className="text-xl text-muted-foreground">{cmsData.directorsDescription || "Experienced leadership guiding our strategic vision"}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {boardMembers.map((member: any, index: number) => {
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
            <h2 className="text-4xl font-bold text-foreground mb-4">{cmsData.leadershipTitle || "Leadership Team"}</h2>
            <p className="text-xl text-muted-foreground">{cmsData.leadershipDescription || "Meet our executive team driving operational excellence"}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
            {leadership.map((leader: any, index: number) => {
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

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 z-10"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary),0.1)] transition-all duration-500 group relative">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="secondary" className="font-black bg-primary text-primary-foreground px-3 py-1 text-sm rounded-lg">{milestone.year}</Badge>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{milestone.event}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed font-medium">{milestone.description}</p>
                      
                      {/* Decorative background element */}
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Award className="w-12 h-12 text-primary" />
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;