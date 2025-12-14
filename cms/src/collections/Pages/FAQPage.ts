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
                        },
                        {
                            name: 'faqHeaderSubtitle',
                            type: 'textarea',
                            defaultValue: "Find answers to common questions about our services. Can't find what you're looking for? Our support team is here to help.",
                            label: 'Header Subtitle',
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
                                        },
                                        {
                                            name: 'answer',
                                            type: 'textarea',
                                            required: true,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
