import { Tab } from 'payload/types';

export const AboutPage: Tab = {
    label: 'About Specifics',
    admin: {
        condition: (data) => data?.template === 'about',
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
                        },
                        {
                            name: 'aboutHeaderSubtitle',
                            type: 'textarea',
                            label: 'Header Subtitle',
                            defaultValue: "We're on a mission to make financial services more accessible...",
                        },
                        {
                            name: 'aboutStoryTitle',
                            type: 'text',
                            label: 'Story Title',
                            defaultValue: '22 Years of Growth in Financial Services',
                        },
                        {
                            name: 'aboutStoryContent',
                            type: 'richText',
                            label: 'Story Content',
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
                                        { name: 'number', type: 'text', defaultValue: '50,000+' },
                                        { name: 'label', type: 'text', defaultValue: 'Happy Customers' },
                                    ],
                                },
                                {
                                    name: 'stat2',
                                    type: 'group',
                                    label: 'Stat 2',
                                    fields: [
                                        { name: 'number', type: 'text', defaultValue: '₹500 Cr+' },
                                        { name: 'label', type: 'text', defaultValue: 'Loans Disbursed' },
                                    ],
                                },
                                {
                                    name: 'stat3',
                                    type: 'group',
                                    label: 'Stat 3',
                                    fields: [
                                        { name: 'number', type: 'text', defaultValue: '99.2%' },
                                        { name: 'label', type: 'text', defaultValue: 'Customer Satisfaction' },
                                    ],
                                },
                                {
                                    name: 'stat4',
                                    type: 'group',
                                    label: 'Stat 4',
                                    fields: [
                                        { name: 'number', type: 'text', defaultValue: '15+' },
                                        { name: 'label', type: 'text', defaultValue: 'Banking Partners' },
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
                                { name: 'title', type: 'text', defaultValue: 'Our Mission' },
                                { name: 'description', type: 'textarea' },
                            ],
                        },
                        {
                            name: 'vision',
                            type: 'group',
                            fields: [
                                { name: 'icon', type: 'select', options: ['Target', 'Eye', 'Users', 'Award'], defaultValue: 'Eye' },
                                { name: 'title', type: 'text', defaultValue: 'Our Vision' },
                                { name: 'description', type: 'textarea' },
                            ],
                        },
                        {
                            name: 'values',
                            type: 'group',
                            fields: [
                                { name: 'icon', type: 'select', options: ['Target', 'Eye', 'Users', 'Award'], defaultValue: 'Users' },
                                { name: 'title', type: 'text', defaultValue: 'Our Values' },
                                { name: 'description', type: 'textarea' },
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
                        },
                        {
                            name: 'directorsDescription',
                            type: 'textarea',
                            defaultValue: 'Experienced leadership guiding our strategic vision',
                        },
                        {
                            name: 'directors',
                            type: 'array',
                            label: 'Board of Directors',
                            minRows: 1,
                            maxRows: 10,
                            fields: [
                                { name: 'photo', type: 'upload', relationTo: 'media', required: true },
                                { name: 'name', type: 'text', required: true },
                                { name: 'position', type: 'text', required: true },
                                { name: 'experience', type: 'text' },
                                { name: 'education', type: 'text' },
                                { name: 'specialization', type: 'text' },
                            ],
                        },
                        {
                            name: 'leadershipTitle',
                            type: 'text',
                            defaultValue: 'Leadership Team',
                        },
                        {
                            name: 'leadershipDescription',
                            type: 'textarea',
                            defaultValue: 'Meet our executive team driving operational excellence',
                        },
                        {
                            name: 'leadership',
                            type: 'array',
                            label: 'Leadership Team (Fixed 4)',
                            minRows: 1,
                            maxRows: 10,
                            fields: [
                                { name: 'photo', type: 'upload', relationTo: 'media', required: true },
                                { name: 'name', type: 'text', required: true },
                                { name: 'position', type: 'text', required: true },
                                { name: 'department', type: 'text' },
                                { name: 'experience', type: 'text' },
                                { name: 'expertise', type: 'text' },
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
                        },
                        {
                            name: 'timelineDescription',
                            type: 'textarea',
                            defaultValue: 'Our journey from inception to industry leadership',
                        },
                        {
                            name: 'timeline',
                            type: 'array',
                            label: 'Milestones (Fixed 6)',
                            minRows: 1,
                            maxRows: 10,
                            fields: [
                                { name: 'year', type: 'text', required: true },
                                { name: 'event', type: 'text', required: true },
                                { name: 'description', type: 'textarea' },
                            ],
                        },
                        {
                            name: 'testimonialsTitle',
                            type: 'text',
                            defaultValue: 'What Our Customers Say',
                        },
                        {
                            name: 'testimonialsDescription',
                            type: 'textarea',
                            defaultValue: "Don't just take our word for it. Hear from thousands of satisfied customers across India.",
                        },
                        {
                            name: 'stats',
                            type: 'array',
                            label: 'Key Statistics',
                            minRows: 1,
                            maxRows: 4,
                            fields: [
                                { name: 'value', type: 'text', required: true },
                                { name: 'label', type: 'text', required: true },
                            ],
                        },
                        {
                            name: 'testimonials',
                            type: 'array',
                            label: 'Customer Reviews',
                            minRows: 1,
                            maxRows: 10,
                            fields: [
                                { name: 'name', type: 'text', required: true },
                                { name: 'role', type: 'text' },
                                { name: 'location', type: 'text' },
                                { name: 'rating', type: 'number', min: 1, max: 5, defaultValue: 5 },
                                { name: 'content', type: 'textarea', required: true },
                                { name: 'product', type: 'text' },
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
                        },
                        {
                            name: 'complianceDescription',
                            type: 'textarea',
                        },
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'badge1',
                                    type: 'group',
                                    fields: [{ name: 'text', type: 'text', defaultValue: 'RBI Licensed NBFC' }],
                                },
                                {
                                    name: 'badge2',
                                    type: 'group',
                                    fields: [{ name: 'text', type: 'text', defaultValue: 'ISO 27001 Certified' }],
                                },
                                {
                                    name: 'badge3',
                                    type: 'group',
                                    fields: [{ name: 'text', type: 'text', defaultValue: 'PCI DSS Compliant' }],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
