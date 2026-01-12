import { Tab } from 'payload';

export const HowItWorksPage: Tab = {
    label: 'How It Works Specifics',
    admin: {
        condition: (data) => data?.template === 'how-it-works',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Header & Footer',
                    fields: [
                        {
                            name: 'headerTitle',
                            type: 'text',
                            label: 'Header Title',
                            defaultValue: 'How It Works',
                            required: true,
                            localized: true,
                        },
                        {
                            name: 'headerSubtitle',
                            type: 'textarea',
                            label: 'Header Subtitle',
                            defaultValue: 'Get approved and funded in just 4 simple steps...',
                            localized: true,
                        },
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'ctaTitle',
                                    type: 'text',
                                    label: 'CTA Title',
                                    defaultValue: 'Ready to Get Started?',
                                    localized: true,
                                },
                                {
                                    name: 'ctaDescription',
                                    type: 'textarea',
                                    label: 'CTA Description',
                                    defaultValue: 'Join thousands of satisfied customers who have chosen our hassle-free financing solutions.',
                                    localized: true,
                                },
                            ],
                        },
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'ctaPrimaryButtonText',
                                    type: 'text',
                                    label: 'Primary Button Text',
                                    defaultValue: 'Start Your Application',
                                    localized: true,
                                },
                                {
                                    name: 'ctaPrimaryButtonLink',
                                    type: 'text',
                                    label: 'Primary Button Link',
                                    defaultValue: '/contact',
                                    localized: true,
                                },
                            ],
                        },
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'ctaSecondaryButtonText',
                                    type: 'text',
                                    label: 'Secondary Button Text',
                                    defaultValue: 'Calculate Your EMI',
                                    localized: true,
                                },
                                {
                                    name: 'ctaSecondaryButtonLink',
                                    type: 'text',
                                    label: 'Secondary Button Link',
                                    defaultValue: '/calculator',
                                    localized: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Process Steps',
                    fields: [
                        {
                            name: 'steps',
                            type: 'array',
                            label: 'Steps',
                            minRows: 1,
                            maxRows: 6,
                            fields: [
                                {
                                    name: 'stepNumber',
                                    type: 'number',
                                    label: 'Step Number',
                                    required: true,
                                },
                                {
                                    name: 'icon',
                                    type: 'select',
                                    label: 'Icon',
                                    options: [
                                        { label: 'Mobile/Smartphone', value: 'Smartphone' },
                                        { label: 'Clock/Time', value: 'Clock' },
                                        { label: 'Check Circle/Approved', value: 'CheckCircle' },
                                        { label: 'Credit Card/Funds', value: 'CreditCard' },
                                        { label: 'Document/File', value: 'FileText' },
                                        { label: 'Shield/Secure', value: 'Shield' },
                                    ],
                                    defaultValue: 'Smartphone',
                                },
                                {
                                    name: 'title',
                                    type: 'text',
                                    label: 'Step Title',
                                    required: true,
                                    localized: true,
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                    label: 'Step Description',
                                    localized: true,
                                },
                                {
                                    name: 'bulletPoints',
                                    type: 'array',
                                    label: 'Bullet Points',
                                    fields: [
                                        {
                                            name: 'text',
                                            type: 'text',
                                            label: 'Point',
                                            localized: true,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Trust Features',
                    fields: [
                        {
                            name: 'trustFeatures',
                            type: 'array',
                            label: 'Features',
                            minRows: 1,
                            maxRows: 4,
                            fields: [
                                {
                                    name: 'icon',
                                    type: 'select',
                                    label: 'Icon',
                                    options: [
                                        { label: 'Shield/Secure', value: 'Shield' },
                                        { label: 'Clock/Time', value: 'Clock' },
                                        { label: 'Document/Minimal', value: 'FileText' },
                                        { label: 'Zap/Fast', value: 'Zap' },
                                    ],
                                    defaultValue: 'Shield',
                                },
                                {
                                    name: 'title',
                                    type: 'text',
                                    label: 'Feature Title',
                                    required: true,
                                    localized: true,
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                    label: 'Feature Description',
                                    localized: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
