import { Tab } from 'payload/types';

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
                        },
                        {
                            name: 'legalHeaderSubtitle',
                            type: 'textarea',
                            defaultValue: 'Transparency and compliance are at the heart of our operations',
                            label: 'Header Subtitle',
                        },
                    ],
                },
                {
                    label: 'Regulatory Information',
                    fields: [
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
                                },
                                {
                                    name: 'details',
                                    type: 'text',
                                    label: 'Details/Registration No',
                                },
                                {
                                    name: 'validity',
                                    type: 'text',
                                    label: 'Validity/Issuer',
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Legal Documents',
                    fields: [
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
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                },
                                {
                                    name: 'category',
                                    type: 'text',
                                    label: 'Category (e.g. Legal, Privacy)',
                                },
                                {
                                    name: 'lastUpdated',
                                    type: 'text',
                                    label: 'Last Updated Date',
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
                            name: 'importantNotices',
                            type: 'array',
                            label: 'Notices List',
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
