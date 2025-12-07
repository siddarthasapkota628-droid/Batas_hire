import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Award, Briefcase, GraduationCap, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getPages } from '@/lib/api';

const CompanyProfile = () => {
  const { data: pageData, isLoading } = useQuery({
    queryKey: ['pages', 'about'],
    queryFn: getPages,
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

  const milestones = [
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
      <div className="flex justify-center items-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Board of Directors */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Board of Directors</h2>
            <p className="text-xl text-muted-foreground">Experienced leadership guiding our strategic vision</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {boardMembers.map((member: any, index: number) => {
              const imageUrl = getImageUrl(member.photo);

              return (
                <Card key={index} className="p-6 hover:shadow-strong transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full flex-shrink-0 overflow-hidden bg-primary/10 flex items-center justify-center">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-primary">
                          <User className="w-8 h-8" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-2">{member.position}</p>

                      <div className="space-y-2 text-sm">
                        {member.experience && (
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{member.experience}</span>
                          </div>
                        )}
                        {member.education && (
                          <div className="flex items-center gap-2">
                            <GraduationCap className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{member.education}</span>
                          </div>
                        )}
                        {member.specialization && (
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{member.specialization}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">Meet our executive team driving operational excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {leadership.map((leader: any, index: number) => {
              const imageUrl = getImageUrl(leader.photo);

              return (
                <Card key={index} className="p-6 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden bg-accent/10 flex items-center justify-center">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-accent">
                        <User className="w-8 h-8" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{leader.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{leader.position}</p>
                  {leader.department && (
                    <Badge variant="outline" className="mb-2 text-xs">{leader.department}</Badge>
                  )}
                  {leader.experience && (
                    <p className="text-xs text-muted-foreground mb-1">{leader.experience}</p>
                  )}
                  {leader.expertise && (
                    <p className="text-xs text-muted-foreground">{leader.expertise}</p>
                  )}
                </Card>
              );
            })}
          </div>
        </div>

        {/* Company Timeline - Keep Static for now as requested */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">22 Years of Growth</h2>
            <p className="text-xl text-muted-foreground">Our journey from inception to industry leadership</p>
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
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="font-bold">{milestone.year}</Badge>
                        <h3 className="font-semibold text-foreground">{milestone.event}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
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