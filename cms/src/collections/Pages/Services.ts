import { Tab } from 'payload';

export const ServicesPage: Tab = {
    label: 'Products & Solutions',
    admin: {
        condition: (data) => data?.template === 'services',
    },
    fields: [
        {
            name: 'productsTitle',
            type: 'text',
            defaultValue: 'Our Financial Solutions',
            label: 'Section Title',
            localized: true,
        },
        {
            name: 'productsDescription',
            type: 'textarea',
            defaultValue: 'Tailored financing options to meet your diverse needs with transparent terms and competitive rates',
            label: 'Section Description',
            localized: true,
        },
        {
            name: 'products',
            type: 'array',
            label: 'Product Cards',
            minRows: 2,
            maxRows: 4,
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                    label: 'Card Background Image',
                },
                {
                    name: 'icon',
                    type: 'select',
                    options: ['ShoppingCart', 'Car', 'Home', 'Briefcase', 'CreditCard'],
                    defaultValue: 'ShoppingCart',
                    label: 'Card Icon',
                },
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                    label: 'Product Title (e.g., Buy Now Pay Later)',
                    localized: true,
                },
                {
                    name: 'subtitle',
                    type: 'text',
                    label: 'Subtitle (e.g., Shop today, pay flexibly tomorrow)',
                    localized: true,
                },
                {
                    name: 'stats',
                    type: 'array',
                    label: 'Key Stats (Displayed in grid)',
                    minRows: 1,
                    maxRows: 10,
                    fields: [
                        {
                            name: 'value',
                            type: 'text',
                            required: true,
                            label: 'Value (e.g., 0% Interest)',
                            localized: true,
                        },
                        {
                            name: 'label',
                            type: 'text',
                            required: true,
                            label: 'Label (e.g., First 3 Months)',
                            localized: true,
                        },
                        {
                            name: 'icon',
                            type: 'select',
                            options: ['Clock', 'Percent', 'CreditCard', 'CheckCircle'],
                            defaultValue: 'Clock',
                        }
                    ],
                },
                {
                    name: 'features',
                    type: 'array',
                    label: 'Features List',
                    fields: [
                        {
                            name: 'text',
                            type: 'text',
                            required: true,
                            localized: true,
                        },
                    ],
                },
                {
                    name: 'ctaText',
                    type: 'text',
                    defaultValue: 'Apply Now',
                    label: 'Primary Button Text',
                    localized: true,
                },
                {
                    name: 'secondaryCtaText',
                    type: 'text',
                    defaultValue: 'Learn More',
                    label: 'Secondary Button Text',
                    localized: true,
                },
            ],
        },
    ],
};
