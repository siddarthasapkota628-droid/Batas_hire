import { Tab } from 'payload/types';

export const FAQPage: Tab = {
    label: 'FAQ Page',
    admin: {
        condition: (data) => data?.template === 'faq',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Header',
                    fields: [
                        {
                            name: 'faqHeaderTitle',
                            type: 'text',
                            defaultValue: 'Frequently Asked Questions',
                            label: 'Header Title',
                            localized: true,
                        },
                        {
                            name: 'faqHeaderSubtitle',
                            type: 'textarea',
                            defaultValue: "Find answers to common questions about our services. Can't find what you're looking for? Our support team is here to help.",
                            label: 'Header Subtitle',
                            localized: true,
                        },
                    ],
                },
                {
                    label: 'FAQs',
                    fields: [
                        {
                            name: 'faqCategories',
                            type: 'array',
                            label: 'FAQ Categories',
                            fields: [
                                {
                                    name: 'categoryName',
                                    type: 'text',
                                    required: true,
                                    label: 'Category Name',
                                    localized: true,
                                },
                                {
                                    name: 'questions',
                                    type: 'array',
                                    label: 'Questions',
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
                                            required: true,
                                            localized: true,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Support CTA',
                    fields: [
                        {
                            name: 'supportTitle',
                            type: 'text',
                            defaultValue: 'Still have questions?',
                            localized: true,
                        },
                        {
                            name: 'supportDescription',
                            type: 'textarea',
                            defaultValue: 'Our customer support team is available 24/7 to assist you with any questions or concerns.',
                            localized: true,
                        },
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'chatButtonLabel',
                                    type: 'text',
                                    defaultValue: 'Chat with Support',
                                    localized: true,
                                },
                                {
                                    name: 'callButtonLabel',
                                    type: 'text',
                                    defaultValue: 'Call 1800-123-4567',
                                    localized: true,
                                },
                                {
                                    name: 'phoneUrl',
                                    type: 'text',
                                    defaultValue: 'tel:18001234567',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
