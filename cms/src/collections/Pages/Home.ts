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
                                    localized: true,
                                },
                                {
                                    name: 'heroBadge2',
                                    type: 'text',
                                    label: 'Top Middle Badge (e.g., Secure & Trusted)',
                                    defaultValue: 'Secure & Trusted',
                                    localized: true,
                                },
                                {
                                    name: 'heroRating',
                                    type: 'text',
                                    label: 'Rating Text (e.g., 4.9/5)',
                                    defaultValue: '4.9/5',
                                    localized: true,
                                },
                            ],
                        },
                        {
                            name: 'heroTitlePart1',
                            type: 'text',
                            label: 'Title Part 1 (Regular)',
                            defaultValue: 'Smart Finance',
                            localized: true,
                        },
                        {
                            name: 'heroTitlePart2',
                            type: 'text',
                            label: 'Title Part 2 (Highlighted/Red)',
                            defaultValue: 'Made Simple',
                            localized: true,
                        },
                        {
                            name: 'heroSubtitle',
                            type: 'textarea',
                            label: 'Hero Subtitle',
                            defaultValue: 'Instant BNPL solutions and vehicle financing with transparent terms...',
                            localized: true,
                        },
                        {
                            name: 'floatingFeatures',
                            type: 'array',
                            label: 'Floating Feature Tags (Glassmorphism)',
                            minRows: 1,
                            maxRows: 3,
                            fields: [
                                { name: 'text', type: 'text', required: true, localized: true }
                            ],
                        },
                        {
                            name: 'heroStats',
                            type: 'array',
                            label: 'Hero Bottom Stats',
                            minRows: 1,
                            maxRows: 3,
                            fields: [
                                { name: 'value', type: 'text', required: true, localized: true },
                                { name: 'label', type: 'text', required: true, localized: true },
                            ],
                        },
                        {
                            name: 'heroCTAs',
                            type: 'array',
                            label: 'Hero CTA Buttons',
                            minRows: 1,
                            maxRows: 2,
                            fields: [
                                { name: 'label', type: 'text', required: true, localized: true },
                                { name: 'link', type: 'text', required: true },
                                {
                                    name: 'variant',
                                    type: 'select',
                                    options: [
                                        { label: 'Hero (Primary)', value: 'hero' },
                                        { label: 'Outline', value: 'outline' },
                                    ],
                                    defaultValue: 'hero',
                                }
                            ]
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
                            localized: true,
                        },
                        {
                            name: 'journeyDescription',
                            type: 'textarea',
                            defaultValue: 'Discover our comprehensive financial services...',
                            localized: true,
                        },
                        {
                            name: 'journeyCards',
                            type: 'array',
                            label: 'Journey Progress Cards',
                            minRows: 1,
                            maxRows: 4,
                            fields: [
                                { name: 'icon', type: 'select', options: ['Book', 'Users', 'Briefcase', 'BookOpen', 'FileCheck', 'Calculator', 'Phone'], defaultValue: 'Book' },
                                { name: 'title', type: 'text', required: true, localized: true },
                                { name: 'description', type: 'textarea', localized: true },
                                { name: 'linkText', type: 'text', defaultValue: 'Explore', localized: true },
                                { name: 'link', type: 'text', label: 'Link (e.g., /products)' },
                            ],
                        },
                        {
                            name: 'quickToolsTitle',
                            type: 'text',
                            defaultValue: 'Quick Tools',
                            localized: true,
                        },
                        {
                            name: 'quickToolsDescription',
                            type: 'text',
                            defaultValue: 'Get instant calculations and valuations',
                            localized: true,
                        },
                        {
                            name: 'quickTools',
                            type: 'array',
                            label: 'Calculator/Tools Cards',
                            minRows: 1,
                            maxRows: 2,
                            fields: [
                                { name: 'name', type: 'text', required: true, localized: true },
                                { name: 'description', type: 'text', localized: true },
                                { name: 'buttonText', type: 'text', defaultValue: 'Calculate Now', localized: true },
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
                            localized: true,
                        },
                        {
                            name: 'trustDescription',
                            type: 'textarea',
                            defaultValue: 'Our numbers speak for themselves - building trust through consistent service and reliability',
                            localized: true,
                        },
                        {
                            name: 'trustStats',
                            type: 'array',
                            label: 'Trust Milestone Stats',
                            minRows: 1,
                            maxRows: 4,
                            fields: [
                                { name: 'value', type: 'text', required: true, localized: true },
                                { name: 'label', type: 'text', required: true, localized: true },
                                { name: 'subLabel', type: 'text', localized: true },
                            ],
                        },
                        {
                            name: 'certificationTitle',
                            type: 'text',
                            defaultValue: 'Licensed & Certified',
                            localized: true,
                        },
                        {
                            name: 'certificationDescription',
                            type: 'text',
                            defaultValue: 'Your security and trust are our top priorities',
                            localized: true,
                        },
                        {
                            name: 'badges',
                            type: 'array',
                            label: 'Certification Badges',
                            minRows: 1,
                            maxRows: 3,
                            fields: [
                                { name: 'title', type: 'text', required: true, localized: true },
                                { name: 'subTitle', type: 'text', localized: true },
                                { name: 'icon', type: 'select', options: ['Shield', 'CheckCircle', 'Award'], defaultValue: 'Shield' },
                            ],
                        }
                    ],
                },
                {
                    label: 'Scrolling Notices',
                    fields: [
                        {
                            name: 'scrollingNotices',
                            type: 'array',
                            label: 'Top Scrolling Notices',
                            admin: {
                                description: 'These notices will scroll at the very top of the home page.',
                            },
                            fields: [
                                {
                                    name: 'message',
                                    type: 'text',
                                    required: true,
                                    label: 'Notice Message',
                                    localized: true,
                                },
                                {
                                    name: 'type',
                                    type: 'select',
                                    defaultValue: 'announcement',
                                    options: [
                                        { label: 'Announcement (Blue)', value: 'announcement' },
                                        { label: 'Warning (Orange)', value: 'warning' },
                                        { label: 'Info (Green)', value: 'info' },
                                    ],
                                    required: true,
                                },
                                {
                                    name: 'expiryDate',
                                    type: 'date',
                                    label: 'Expiry Date (Optional)',
                                    admin: {
                                        description: 'Notice will automatically disappear after this date.',
                                    },
                                },
                            ],
                        },
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
                                { name: 'title', type: 'text', defaultValue: 'Our Final Solutions', localized: true },
                                { name: 'description', type: 'textarea', localized: true },
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
                                { name: 'title', type: 'text', defaultValue: 'What Our Customers Say', localized: true },
                                { name: 'description', type: 'textarea', localized: true },
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
                                { name: 'title', type: 'text', defaultValue: 'Latest News & Updates', localized: true },
                                { name: 'description', type: 'textarea', localized: true },
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
