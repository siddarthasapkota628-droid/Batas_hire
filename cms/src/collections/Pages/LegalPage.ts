import { Tab } from 'payload';

export const LegalPage: Tab = {
    label: 'Legal Page',
    admin: {
        condition: (data) => data?.template === 'legal',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Header',
                    fields: [
                        {
                            name: 'legalHeaderTitle',
                            type: 'text',
                            defaultValue: 'Legal & Compliance',
                            label: 'Header Title',
                            localized: true,
                        },
                        {
                            name: 'legalHeaderSubtitle',
                            type: 'textarea',
                            defaultValue: 'Transparency and compliance are at the heart of our operations',
                            label: 'Header Subtitle',
                            localized: true,
                        },
                    ],
                },
                {
                    label: 'Regulatory Information',
                    fields: [
                        {
                            name: 'regulatoryTitle',
                            type: 'text',
                            defaultValue: 'Regulatory Information',
                            localized: true,
                        },
                        {
                            name: 'regulatorySubtitle',
                            type: 'text',
                            defaultValue: 'Our licenses and certifications',
                            localized: true,
                        },
                        {
                            name: 'regulatoryInfo',
                            type: 'array',
                            label: 'Certificates & Licenses',
                            minRows: 1,
                            maxRows: 6,
                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: true,
                                    localized: true,
                                },
                                {
                                    name: 'details',
                                    type: 'text',
                                    label: 'Details/Registration No',
                                    localized: true,
                                },
                                {
                                    name: 'validity',
                                    type: 'text',
                                    label: 'Validity/Issuer',
                                    localized: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Legal Documents',
                    fields: [
                        {
                            name: 'documentsTitle',
                            type: 'text',
                            defaultValue: 'Legal Documents',
                            localized: true,
                        },
                        {
                            name: 'documentsSubtitle',
                            type: 'text',
                            defaultValue: 'Access our policies and legal documentation',
                            localized: true,
                        },
                        {
                            name: 'documents',
                            type: 'array',
                            label: 'Documents List',
                            minRows: 1,
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
                                    name: 'category',
                                    type: 'text',
                                    label: 'Category (e.g. Legal, Privacy)',
                                    localized: true,
                                },
                                {
                                    name: 'lastUpdated',
                                    type: 'text',
                                    label: 'Last Updated Date',
                                    localized: true,
                                },
                                {
                                    name: 'icon',
                                    type: 'select',
                                    options: [
                                        { label: 'File Text', value: 'FileText' },
                                        { label: 'Shield', value: 'Shield' },
                                        { label: 'Scale', value: 'Scale' },
                                        { label: 'Alert Circle', value: 'AlertCircle' },
                                    ],
                                    defaultValue: 'FileText',
                                },
                                {
                                    name: 'color',
                                    type: 'select',
                                    label: 'Icon Color Theme',
                                    options: [
                                        { label: 'Blue', value: 'blue' },
                                        { label: 'Green', value: 'green' },
                                        { label: 'Purple', value: 'purple' },
                                        { label: 'Orange', value: 'orange' },
                                        { label: 'Teal', value: 'teal' },
                                        { label: 'Red', value: 'red' },
                                    ],
                                    defaultValue: 'blue',
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Important Notices',
                    fields: [
                        {
                            name: 'noticesTitle',
                            type: 'text',
                            defaultValue: 'Important Notices',
                            localized: true,
                        },
                        {
                            name: 'importantNotices',
                            type: 'array',
                            label: 'Notices List',
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
                                    name: 'type',
                                    type: 'select',
                                    label: 'Notice Type (Color)',
                                    options: [
                                        { label: 'Primary (Standard)', value: 'primary' },
                                        { label: 'Accent (Info)', value: 'accent' },
                                        { label: 'Success (Green)', value: 'success' },
                                        { label: 'Destructive (Red)', value: 'destructive' },
                                    ],
                                    defaultValue: 'primary',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
