import { Tab } from 'payload/types';

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
                    label: 'Header',
                    fields: [
                        {
                            name: 'headerTitle',
                            type: 'text',
                            label: 'Header Title',
                            defaultValue: 'How It Works',
                            required: true,
                        },
                        {
                            name: 'headerSubtitle',
                            type: 'textarea',
                            label: 'Header Subtitle',
                            defaultValue: 'Get approved and funded in just 4 simple steps...',
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
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                    label: 'Step Description',
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
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                    label: 'Feature Description',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
