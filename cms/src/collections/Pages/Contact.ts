import { Tab } from 'payload';

export const ContactPage: Tab = {
    label: 'Contact Page',
    admin: {
        condition: (data: any) => data?.template === 'contact',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Header',
                    fields: [
                        {
                            name: 'contactHeaderTitle',
                            type: 'text',
                            defaultValue: 'Get In Touch',
                            label: 'Header Title',
                            localized: true,
                        },
                        {
                            name: 'contactHeaderSubtitle',
                            type: 'textarea',
                            defaultValue: "Have questions about our financial services? We're here to help you 24/7 with personalized support.",
                            label: 'Header Subtitle',
                            localized: true,
                        },
                    ],
                },
                {
                    label: 'Contact Methods',
                    fields: [
                        {
                            name: 'contactMethods',
                            type: 'array',
                            label: 'Methods',
                            minRows: 1,
                            maxRows: 8,
                            fields: [
                                {
                                    name: 'icon',
                                    type: 'select',
                                    options: [
                                        { label: 'Phone', value: 'Phone' },
                                        { label: 'Mail', value: 'Mail' },
                                        { label: 'Message/Chat', value: 'MessageCircle' },
                                        { label: 'Map Pin/Location', value: 'MapPin' },
                                        { label: 'Clock', value: 'Clock' },
                                    ],
                                    defaultValue: 'Phone',
                                },
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: true,
                                    label: 'Title',
                                    localized: true,
                                },
                                {
                                    name: 'description',
                                    type: 'text',
                                    label: 'Description',
                                    localized: true,
                                },
                                {
                                    name: 'contactInfo',
                                    type: 'text',
                                    required: true,
                                    label: 'Contact Info',
                                },
                                {
                                    name: 'availability',
                                    type: 'text',
                                    label: 'Availability',
                                    localized: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Form Settings',
                    fields: [
                        {
                            name: 'contactForm',
                            type: 'relationship',
                            relationTo: 'forms',
                            label: 'Select Contact Form',
                            required: true,
                        },
                        {
                            name: 'formTitle',
                            type: 'text',
                            defaultValue: 'Send Us a Message',
                            localized: true,
                        },
                    ],
                },
                {
                    label: 'Business Hours',
                    fields: [
                        {
                            name: 'businessHoursTitle',
                            type: 'text',
                            defaultValue: 'Business Hours',
                            label: 'Section Title',
                            localized: true,
                        },
                        {
                            name: 'businessHours',
                            type: 'array',
                            label: 'Schedule',
                            minRows: 1,
                            maxRows: 7,
                            fields: [
                                {
                                    name: 'day',
                                    type: 'text',
                                    required: true,
                                    label: 'Day(s)',
                                    defaultValue: 'Monday - Friday',
                                    localized: true,
                                },
                                {
                                    name: 'time',
                                    type: 'text',
                                    required: true,
                                    label: 'Time',
                                    defaultValue: '9:00 AM to 6:00 PM',
                                    localized: true,
                                },
                            ],
                        },
                        {
                            name: 'businessHoursNote',
                            type: 'text',
                            label: 'Assessment/Note',
                            defaultValue: '24/7 Customer Support Available',
                            localized: true,
                        },
                    ],
                },
            ],
        },
    ],
};
