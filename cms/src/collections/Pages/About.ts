import { Tab } from 'payload';

export const AboutPage: Tab = {
    label: 'About Specifics',
    admin: {
        condition: (data: any) => data?.template === 'about',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Header & Story',
                    fields: [
                        {
                            name: 'aboutHeaderTitle',
                            type: 'text',
                            label: 'Header Title',
                            defaultValue: 'About Batas Hire and Purchase',
                            localized: true,
                        },
                        {
                            name: 'aboutHeaderSubtitle',
                            type: 'textarea',
                            label: 'Header Subtitle',
                            defaultValue: "We're on a mission to make financial services more accessible...",
                            localized: true,
                        },
                        {
                            name: 'aboutStoryTitle',
                            type: 'text',
                            label: 'Story Title',
                            defaultValue: '22 Years of Growth in Financial Services',
                            localized: true,
                        },
                        {
                            name: 'aboutStoryContent',
                            type: 'richText',
                            label: 'Story Content',
                            localized: true,
                        },
                    ],
                },
                {
                    label: 'Stats (Fixed 4)',
                    fields: [
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'stat1',
                                    type: 'group',
                                    label: 'Stat 1',
                                    fields: [
                                        { name: 'number', type: 'text', defaultValue: '50,000+', localized: true },
                                        { name: 'label', type: 'text', defaultValue: 'Happy Customers', localized: true },
                                    ],
                                },
                                {
                                    name: 'stat2',
                                    type: 'group',
                                    label: 'Stat 2',
                                    fields: [
                                        { name: 'number', type: 'text', defaultValue: '₹500 Cr+', localized: true },
                                        { name: 'label', type: 'text', defaultValue: 'Loans Disbursed', localized: true },
                                    ],
                                },
                                {
                                    name: 'stat3',
                                    type: 'group',
                                    label: 'Stat 3',
                                    fields: [
                                        { name: 'number', type: 'text', defaultValue: '99.2%', localized: true },
                                        { name: 'label', type: 'text', defaultValue: 'Customer Satisfaction', localized: true },
                                    ],
                                },
                                {
                                    name: 'stat4',
                                    type: 'group',
                                    label: 'Stat 4',
                                    fields: [
                                        { name: 'number', type: 'text', defaultValue: '15+', localized: true },
                                        { name: 'label', type: 'text', defaultValue: 'Banking Partners', localized: true },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Mission/Vision',
                    fields: [
                        {
                            name: 'mission',
                            type: 'group',
                            fields: [
                                { name: 'icon', type: 'select', options: ['Target', 'Eye', 'Users', 'Award'], defaultValue: 'Target' },
                                { name: 'title', type: 'text', defaultValue: 'Our Mission', localized: true },
                                { name: 'description', type: 'textarea', localized: true },
                            ],
                        },
                        {
                            name: 'vision',
                            type: 'group',
                            fields: [
                                { name: 'icon', type: 'select', options: ['Target', 'Eye', 'Users', 'Award'], defaultValue: 'Eye' },
                                { name: 'title', type: 'text', defaultValue: 'Our Vision', localized: true },
                                { name: 'description', type: 'textarea', localized: true },
                            ],
                        },
                        {
                            name: 'values',
                            type: 'group',
                            fields: [
                                { name: 'icon', type: 'select', options: ['Target', 'Eye', 'Users', 'Award'], defaultValue: 'Users' },
                                { name: 'title', type: 'text', defaultValue: 'Our Values', localized: true },
                                { name: 'description', type: 'textarea', localized: true },
                            ],
                        },
                    ],
                },
                {
                    label: 'Directors & Leadership',
                    fields: [
                        {
                            name: 'directorsTitle',
                            type: 'text',
                            defaultValue: 'Board of Directors',
                            localized: true,
                        },
                        {
                            name: 'directorsDescription',
                            type: 'textarea',
                            defaultValue: 'Experienced leadership guiding our strategic vision',
                            localized: true,
                        },
                        {
                            name: 'directors',
                            type: 'array',
                            label: 'Board of Directors',
                            minRows: 1,
                            maxRows: 10,
                            fields: [
                                { name: 'photo', type: 'upload', relationTo: 'media', required: true },
                                { name: 'name', type: 'text', required: true, localized: true },
                                { name: 'position', type: 'text', required: true, localized: true },
                                { name: 'experience', type: 'text', localized: true },
                                { name: 'education', type: 'text', localized: true },
                                { name: 'specialization', type: 'text', localized: true },
                            ],
                        },
                        {
                            name: 'leadershipTitle',
                            type: 'text',
                            defaultValue: 'Leadership Team',
                            localized: true,
                        },
                        {
                            name: 'leadershipDescription',
                            type: 'textarea',
                            defaultValue: 'Meet our executive team driving operational excellence',
                            localized: true,
                        },
                        {
                            name: 'leadership',
                            type: 'array',
                            label: 'Leadership Team (Fixed 4)',
                            minRows: 1,
                            maxRows: 10,
                            fields: [
                                { name: 'photo', type: 'upload', relationTo: 'media', required: true },
                                { name: 'name', type: 'text', required: true, localized: true },
                                { name: 'position', type: 'text', required: true, localized: true },
                                { name: 'department', type: 'text', localized: true },
                                { name: 'experience', type: 'text', localized: true },
                                { name: 'expertise', type: 'text', localized: true },
                            ],
                        },
                    ],
                },
                {
                    label: 'Timeline & Testimonials',
                    fields: [
                        {
                            name: 'timelineTitle',
                            type: 'text',
                            defaultValue: '22 Years of Growth',
                            localized: true,
                        },
                        {
                            name: 'timelineDescription',
                            type: 'textarea',
                            defaultValue: 'Our journey from inception to industry leadership',
                            localized: true,
                        },
                        {
                            name: 'timeline',
                            type: 'array',
                            label: 'Milestones (Fixed 6)',
                            minRows: 1,
                            maxRows: 10,
                            fields: [
                                { name: 'year', type: 'text', required: true, localized: true },
                                { name: 'event', type: 'text', required: true, localized: true },
                                { name: 'description', type: 'textarea', localized: true },
                            ],
                        },
                        {
                            name: 'testimonialsTitle',
                            type: 'text',
                            defaultValue: 'What Our Customers Say',
                            localized: true,
                        },
                        {
                            name: 'testimonialsDescription',
                            type: 'textarea',
                            defaultValue: "Don't just take our word for it. Hear from thousands of satisfied customers across India.",
                            localized: true,
                        },
                        {
                            name: 'stats',
                            type: 'array',
                            label: 'Key Statistics',
                            minRows: 1,
                            maxRows: 4,
                            fields: [
                                { name: 'value', type: 'text', required: true, localized: true },
                                { name: 'label', type: 'text', required: true, localized: true },
                            ],
                        },
                        {
                            name: 'testimonials',
                            type: 'array',
                            label: 'Customer Reviews',
                            minRows: 1,
                            maxRows: 10,
                            fields: [
                                { name: 'name', type: 'text', required: true, localized: true },
                                { name: 'role', type: 'text', localized: true },
                                { name: 'location', type: 'text', localized: true },
                                { name: 'rating', type: 'number', min: 1, max: 5, defaultValue: 5 },
                                { name: 'content', type: 'textarea', required: true, localized: true },
                                { name: 'product', type: 'text', localized: true },
                            ],
                        },
                    ],
                },
                {
                    label: 'Compliance',
                    fields: [
                        {
                            name: 'complianceTitle',
                            type: 'text',
                            defaultValue: 'Regulatory Compliance',
                            localized: true,
                        },
                        {
                            name: 'complianceDescription',
                            type: 'textarea',
                            localized: true,
                        },
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'badge1',
                                    type: 'group',
                                    fields: [{ name: 'text', type: 'text', defaultValue: 'RBI Licensed NBFC', localized: true }],
                                },
                                {
                                    name: 'badge2',
                                    type: 'group',
                                    fields: [{ name: 'text', type: 'text', defaultValue: 'ISO 27001 Certified', localized: true }],
                                },
                                {
                                    name: 'badge3',
                                    type: 'group',
                                    fields: [{ name: 'text', type: 'text', defaultValue: 'PCI DSS Compliant', localized: true }],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
