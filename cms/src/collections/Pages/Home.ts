import { Tab } from 'payload';

export const HomePage: Tab = {
    label: 'Home Specifics',
    admin: {
        condition: (data: any) => data?.template === 'home',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Home Hero',
                    fields: [
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'heroBadge1',
                                    type: 'text',
                                    label: 'Top Left Badge (e.g., NBFC Licensed)',
                                    defaultValue: 'NBFC Licensed',
                                },
                                {
                                    name: 'heroBadge2',
                                    type: 'text',
                                    label: 'Top Middle Badge (e.g., Secure & Trusted)',
                                    defaultValue: 'Secure & Trusted',
                                },
                                {
                                    name: 'heroRating',
                                    type: 'text',
                                    label: 'Rating Text (e.g., 4.9/5)',
                                    defaultValue: '4.9/5',
                                },
                            ],
                        },
                        {
                            name: 'heroTitlePart1',
                            type: 'text',
                            label: 'Title Part 1 (Regular)',
                            defaultValue: 'Smart Finance',
                        },
                        {
                            name: 'heroTitlePart2',
                            type: 'text',
                            label: 'Title Part 2 (Highlighted/Red)',
                            defaultValue: 'Made Simple',
                        },
                        {
                            name: 'heroSubtitle',
                            type: 'textarea',
                            label: 'Hero Subtitle',
                            defaultValue: 'Instant BNPL solutions and vehicle financing with transparent terms...',
                        },
                        {
                            name: 'floatingFeatures',
                            type: 'array',
                            label: 'Floating Feature Tags (Glassmorphism)',
                            minRows: 3,
                            maxRows: 3,
                            fields: [
                                { name: 'text', type: 'text', required: true }
                            ],
                        },
                        {
                            name: 'heroStats',
                            type: 'array',
                            label: 'Hero Bottom Stats',
                            minRows: 3,
                            maxRows: 3,
                            fields: [
                                { name: 'value', type: 'text', required: true },
                                { name: 'label', type: 'text', required: true },
                            ],
                        }
                    ],
                },
                {
                    label: 'Journey & Tools',
                    fields: [
                        {
                            name: 'journeyTitle',
                            type: 'text',
                            defaultValue: 'Your Financial Journey Simplified',
                        },
                        {
                            name: 'journeyDescription',
                            type: 'textarea',
                            defaultValue: 'Discover our comprehensive financial services...',
                        },
                        {
                            name: 'journeyCards',
                            type: 'array',
                            label: 'Journey Progress Cards',
                            minRows: 4,
                            maxRows: 4,
                            fields: [
                                { name: 'icon', type: 'select', options: ['Book', 'Users', 'Briefcase', 'BookOpen', 'FileCheck', 'Calculator', 'Phone'], defaultValue: 'Book' },
                                { name: 'title', type: 'text', required: true },
                                { name: 'description', type: 'textarea' },
                                { name: 'linkText', type: 'text', defaultValue: 'Explore' },
                                { name: 'link', type: 'text', label: 'Link (e.g., /products)' },
                            ],
                        },
                        {
                            name: 'quickToolsTitle',
                            type: 'text',
                            defaultValue: 'Quick Tools',
                        },
                        {
                            name: 'quickTools',
                            type: 'array',
                            label: 'Calculator/Tools Cards',
                            minRows: 2,
                            maxRows: 2,
                            fields: [
                                { name: 'name', type: 'text', required: true },
                                { name: 'description', type: 'text' },
                                { name: 'buttonText', type: 'text', defaultValue: 'Calculate Now' },
                                { name: 'icon', type: 'select', options: ['Calculator', 'Car', 'FileCheck', 'TrendingUp'], defaultValue: 'Calculator' },
                            ],
                        }
                    ],
                },
                {
                    label: 'Trust & Badges',
                    fields: [
                        {
                            name: 'trustTitle',
                            type: 'text',
                            defaultValue: 'Trusted by Thousands',
                        },
                        {
                            name: 'trustStats',
                            type: 'array',
                            label: 'Trust Milestone Stats',
                            minRows: 4,
                            maxRows: 4,
                            fields: [
                                { name: 'value', type: 'text', required: true },
                                { name: 'label', type: 'text', required: true },
                                { name: 'subLabel', type: 'text' },
                            ],
                        },
                        {
                            name: 'certificationTitle',
                            type: 'text',
                            defaultValue: 'Licensed & Certified',
                        },
                        {
                            name: 'badges',
                            type: 'array',
                            label: 'Certification Badges',
                            minRows: 3,
                            maxRows: 3,
                            fields: [
                                { name: 'title', type: 'text', required: true },
                                { name: 'subTitle', type: 'text' },
                                { name: 'icon', type: 'select', options: ['Shield', 'CheckCircle', 'Award'], defaultValue: 'Shield' },
                            ],
                        }
                    ],
                },
                {
                    label: 'Dynamic Feeds',
                    fields: [
                        {
                            name: 'homeProductsConfig',
                            type: 'group',
                            label: 'Our Final Solutions (Services)',
                            fields: [
                                { name: 'title', type: 'text', defaultValue: 'Our Final Solutions' },
                                { name: 'description', type: 'textarea' },
                                {
                                    type: 'row',
                                    fields: [
                                        { name: 'minRows', type: 'number', defaultValue: 2 },
                                        { name: 'maxRows', type: 'number', defaultValue: 4 },
                                    ]
                                }
                            ],
                        },
                        {
                            name: 'homeTestimonialsConfig',
                            type: 'group',
                            label: 'What Our Customers Say (Testimonials)',
                            fields: [
                                { name: 'title', type: 'text', defaultValue: 'What Our Customers Say' },
                                { name: 'description', type: 'textarea' },
                                {
                                    type: 'row',
                                    fields: [
                                        { name: 'minRows', type: 'number', defaultValue: 3 },
                                        { name: 'maxRows', type: 'number', defaultValue: 10 },
                                    ]
                                }
                            ],
                        },
                        {
                            name: 'homeKnowledgeConfig',
                            type: 'group',
                            label: 'Latest News & Updates (Knowledge Center)',
                            fields: [
                                { name: 'title', type: 'text', defaultValue: 'Latest News & Updates' },
                                { name: 'description', type: 'textarea' },
                                {
                                    type: 'row',
                                    fields: [
                                        { name: 'minRows', type: 'number', defaultValue: 3 },
                                        { name: 'maxRows', type: 'number', defaultValue: 6 },
                                    ]
                                }
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
