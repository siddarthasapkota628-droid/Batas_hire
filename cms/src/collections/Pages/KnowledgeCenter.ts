import type { Tab } from 'payload'

export const KnowledgeCenterPage: Tab = {
    label: 'Knowledge Center Page',
    admin: {
        condition: (data: any) => data?.template === 'knowledge-center',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Header',
                    fields: [
                        {
                            name: 'knowledgeCenterHeaderTitle',
                            type: 'text',
                            defaultValue: 'Knowledge Center',
                            localized: true,
                        },
                        {
                            name: 'knowledgeCenterHeaderSubtitle',
                            type: 'textarea',
                            defaultValue: 'Stay informed with expert insights, financial tips, and industry trends',
                            localized: true,
                        },
                        {
                            name: 'helpTitle',
                            type: 'text',
                            defaultValue: 'Need More Help?',
                            localized: true,
                        },
                        {
                            name: 'helpDescription',
                            type: 'textarea',
                            defaultValue: "Can't find what you're looking for? Our support team is here to help.",
                            localized: true,
                        },
                        {
                            name: 'helpPrimaryButtonText',
                            type: 'text',
                            defaultValue: 'Contact Support',
                            localized: true,
                        },
                        {
                            name: 'helpSecondaryButtonText',
                            type: 'text',
                            defaultValue: 'Schedule a Call',
                            localized: true,
                        },
                    ],
                },
                {
                    label: 'Articles',
                    fields: [
                        {
                            name: 'articles',
                            type: 'array',
                            label: 'Articles',
                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: true,
                                    localized: true,
                                },
                                {
                                    name: 'excerpt',
                                    type: 'textarea',
                                    localized: true,
                                },
                                {
                                    type: 'row',
                                    fields: [
                                        {
                                            name: 'category',
                                            type: 'text',
                                            localized: true,
                                        },
                                        {
                                            name: 'author',
                                            type: 'text',
                                            localized: true,
                                        },
                                        {
                                            name: 'date',
                                            type: 'text',
                                            localized: true,
                                        },
                                        {
                                            name: 'readTime',
                                            type: 'text',
                                            localized: true,
                                        },
                                        {
                                            name: 'featured',
                                            type: 'checkbox',
                                            label: 'Featured Article?',
                                        }
                                    ]
                                }
                            ],
                        },
                    ],
                },
                {
                    label: 'Guides',
                    fields: [
                        {
                            name: 'guides',
                            type: 'array',
                            label: 'How-To Guides',
                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: true,
                                    localized: true,
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                    localized: true,
                                },
                                {
                                    type: 'row',
                                    fields: [
                                        {
                                            name: 'icon',
                                            type: 'select',
                                            options: [
                                                { label: 'Lightbulb', value: 'Lightbulb' },
                                                { label: 'FileText', value: 'FileText' },
                                                { label: 'TrendingUp', value: 'TrendingUp' },
                                                { label: 'Shield', value: 'Shield' },
                                                { label: 'BookOpen', value: 'BookOpen' },
                                            ],
                                        },
                                        {
                                            name: 'category',
                                            type: 'text',
                                            localized: true,
                                        },
                                        {
                                            name: 'steps',
                                            type: 'number',
                                        }
                                    ]
                                }
                            ],
                        },
                    ],
                },
                {
                    label: 'Reports',
                    fields: [
                        {
                            name: 'reports',
                            type: 'array',
                            label: 'Publications & Reports',
                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: true,
                                    localized: true,
                                },
                                {
                                    name: 'type',
                                    type: 'text',
                                    label: 'Report Type (e.g. Annual Report)',
                                    localized: true,
                                },
                                {
                                    type: 'row',
                                    fields: [
                                        {
                                            name: 'date',
                                            type: 'text',
                                            localized: true,
                                        },
                                        {
                                            name: 'size',
                                            type: 'text',
                                            label: 'File Size (e.g. 2.4 MB)',
                                            localized: true,
                                        },
                                        {
                                            name: 'icon',
                                            type: 'select',
                                            options: [
                                                { label: 'TrendingUp', value: 'TrendingUp' },
                                                { label: 'BookOpen', value: 'BookOpen' },
                                                { label: 'Shield', value: 'Shield' },
                                                { label: 'FileText', value: 'FileText' },
                                            ]
                                        }
                                    ]
                                }
                            ],
                        },
                    ],
                },
                {
                    label: 'FAQs',
                    fields: [
                        {
                            name: 'faqs',
                            type: 'array',
                            label: 'Frequently Asked Questions',
                            fields: [
                                {
                                    name: 'question',
                                    type: 'text',
                                    required: true,
                                    localized: true,
                                },
                                {
                                    name: 'answer',
                                    type: 'textarea',
                                    localized: true,
                                },
                                {
                                    name: 'category',
                                    type: 'text',
                                    localized: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}
