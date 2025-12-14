import type { Tab } from 'payload/types'

export const KnowledgeCenterPage: Tab = {
    label: 'Knowledge Center Page',
    admin: {
        condition: (data) => data?.template === 'knowledge-center',
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
                        },
                        {
                            name: 'knowledgeCenterHeaderSubtitle',
                            type: 'textarea',
                            defaultValue: 'Stay informed with expert insights, financial tips, and industry trends',
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
                                },
                                {
                                    name: 'excerpt',
                                    type: 'textarea',
                                },
                                {
                                    type: 'row',
                                    fields: [
                                        {
                                            name: 'category',
                                            type: 'text',
                                        },
                                        {
                                            name: 'author',
                                            type: 'text',
                                        },
                                        {
                                            name: 'date',
                                            type: 'text',
                                        },
                                        {
                                            name: 'readTime',
                                            type: 'text',
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
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
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
                                },
                                {
                                    name: 'type',
                                    type: 'text',
                                    label: 'Report Type (e.g. Annual Report)',
                                },
                                {
                                    type: 'row',
                                    fields: [
                                        {
                                            name: 'date',
                                            type: 'text',
                                        },
                                        {
                                            name: 'size',
                                            type: 'text',
                                            label: 'File Size (e.g. 2.4 MB)',
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
                                },
                                {
                                    name: 'answer',
                                    type: 'textarea',
                                },
                                {
                                    name: 'category',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}
