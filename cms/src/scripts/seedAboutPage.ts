import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@payload-config'

const run = async () => {
    const payload = await getPayload({ config })

    const existing = await payload.find({
        collection: 'pages',
        where: {
            slug: { equals: 'about' }
        }
    })

    if (existing.docs.length > 0) {
        console.log("About page already exists. Skipping creation.")
        process.exit(0)
    }

    console.log("Creating 'About' page...")

    try {
        await payload.create({
            collection: 'pages',
            data: {
                title: 'About Us',
                slug: 'about',
                template: 'about',
                _status: 'published',
                publishedAt: new Date().toISOString(),

                // Header
                aboutHeaderTitle: "About Batas Hire and Purchase",
                aboutHeaderSubtitle: "We're on a mission to make financial services more accessible, transparent, and customer-centric through innovative technology and personalized solutions.",

                // Story
                aboutStoryTitle: "22 Years of Growth in Financial Services",
                aboutStoryContent: {
                    root: {
                        type: "root",
                        format: "",
                        indent: 0,
                        version: 1,
                        children: [
                            {
                                type: "paragraph",
                                format: "",
                                indent: 0,
                                version: 1,
                                children: [{
                                    type: "text",
                                    text: "Founded with the vision of democratizing financial services...",
                                    version: 1,
                                    mode: "normal",
                                    format: 0,
                                    style: ""
                                }]
                            }
                        ],
                        direction: "ltr"
                    }
                },

                // Stats
                stat1: { number: "50,000+", label: "Happy Customers" },
                stat2: { number: "₹500 Cr+", label: "Loans Disbursed" },
                stat3: { number: "99.2%", label: "Customer Satisfaction" },
                stat4: { number: "15+", label: "Banking Partners" },

                // Mission/Vision/Values
                mission: {
                    icon: 'Target',
                    title: 'Our Mission',
                    description: 'To democratize financial services by providing accessible, transparent, and innovative financing solutions that empower individuals and businesses to achieve their goals.'
                },
                vision: {
                    icon: 'Eye',
                    title: 'Our Vision',
                    description: 'To become the leading digital financial services provider, transforming how people access and manage credit through technology-driven solutions.'
                },
                values: {
                    icon: 'Users',
                    title: 'Our Values',
                    description: 'Transparency, integrity, customer-centricity, and innovation guide everything we do. We believe in building lasting relationships based on trust and mutual success.'
                },

                // Compliance
                complianceTitle: "Regulatory Compliance",
                complianceDescription: "Batas Hire and Purchase operates under the regulatory oversight of the NRB as a licensed Non Banking Financial Company (NBFC). We maintain the highest standards of compliance, data security, and customer protection in all our operations.",
                badge1: { text: "RBI Licensed NBFC" },
                badge2: { text: "ISO 27001 Certified" },
                badge3: { text: "PCI DSS Compliant" },

                // Directors (4 required)
                directors: [
                    { name: "Rajesh Adhikari", position: "Chairman & Managing Director", experience: "25+ years", education: "MBA", specialization: "Strategy" },
                    { name: "Priyanka Koirala", position: "Executive Director", experience: "20+ years", education: "CA", specialization: "Risk" },
                    { name: "Amit Nepal", position: "Independent Director", experience: "30+ years", education: "Economics", specialization: "Compliance" },
                    { name: "Dr. Sunita Rai", position: "Independent Director", experience: "15+ years", education: "PhD", specialization: "Research" }
                ],

                // Leadership (4 required)
                leadership: [
                    { name: "Bikash Shrestha", position: "CTO", department: "Technology", experience: "12+ years", expertise: "Fintech" },
                    { name: "Meera Joshi", position: "CRO", department: "Risk", experience: "15+ years", expertise: "Compliance" },
                    { name: "Arjun Kumar", position: "CMO", department: "Marketing", experience: "10+ years", expertise: "Strategy" },
                    { name: "Kavita KC", position: "CHRO", department: "HR", experience: "18+ years", expertise: "Talent" }
                ],

                // Timeline (6 required)
                timeline: [
                    { year: "2010", event: "₹100 Cr AUM", description: "Reached ₹100 crores in Assets Under Management" },
                    { year: "2015", event: "Digital Transformation", description: "Launched digital lending platform" },
                    { year: "2018", event: "₹1000 Cr AUM", description: "Crossed Rs. 1000 crores milestone" },
                    { year: "2020", event: "BNPL Launch", description: "Introduced BNPL services" },
                    { year: "2022", event: "AI Integration", description: "Implemented AI credit assessment" },
                    { year: "2024", event: "₹5000 Cr AUM", description: "Achieved Rs. 5000 crores AUM" }
                ],

                // Testimonials (6 required)
                testimonials: [
                    { name: "Rajesh Rai", role: "Business Owner", location: "Kathmandu", rating: 5, content: "Great service!", product: "BNPL" },
                    { name: "Priya Shrestha", role: "Engineer", location: "Kathmandu", rating: 5, content: "Easy process.", product: "Vehicle Loan" },
                    { name: "Amit Shah", role: "Manager", location: "Kathmandu", rating: 5, content: "Very flexible.", product: "BNPL" },
                    { name: "Sneha Maharjan", role: "Teacher", location: "Chitwan", rating: 5, content: "Good support.", product: "Personal Loan" },
                    { name: "Vikash Kumar", role: "Entrepreneur", location: "Bhaktapur", rating: 5, content: "Fast financing.", product: "Business Loan" },
                    { name: "Kavita Nepal", role: "Designer", location: "Kavre", rating: 5, content: "Helpful.", product: "BNPL" }
                ]
            }
        })
        console.log("✅ Successfully created 'About' page with default content.")
    } catch (e: any) {
        console.error("❌ Failed to create About page.")
        console.error("Error Message:", e.message)
        console.error("Full Error:", JSON.stringify(e, null, 2))
        if (e.data) {
            console.error("Error Data:", JSON.stringify(e.data, null, 2))
        }
        if (e.stack) console.error(e.stack)
    }
    process.exit(0)
}

run()
