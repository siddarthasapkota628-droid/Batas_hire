import type { Tab } from 'payload'

export const CareerPage: Tab = {
    label: 'Career Page',
    admin: {
        condition: (data) => data?.template === 'career',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Header',
                    fields: [
                        {
                            name: 'careerHeaderTitle',
                            type: 'text',
                            defaultValue: 'Build Your Future With Us',
                            localized: true,
                        },
                        {
                            name: 'careerHeaderSubtitle',
                            type: 'textarea',
                            defaultValue: 'Join our dynamic team and be part of Nepal\'s leading financial services company',
                            localized: true,
                        },
                    ],
                },
                {
                    label: 'Job Openings',
                    fields: [
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'jobOpeningsTitle',
                                    type: 'text',
                                    label: 'Section Title',
                                    defaultValue: 'Current Openings',
                                    localized: true,
                                },
                                {
                                    name: 'jobOpeningsSubtitle',
                                    type: 'text',
                                    label: 'Section Subtitle',
                                    defaultValue: 'Join our team of open positions',
                                    localized: true,
                                },
                            ],
                        },
                        {
                            name: 'jobOpenings',
                            type: 'array',
                            label: 'Current Openings',
                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: true,
                                    localized: true,
                                },
                                {
                                    type: 'row',
                                    fields: [
                                        {
                                            name: 'department',
                                            type: 'select',
                                            options: [
                                                { label: 'Technology', value: 'Technology' },
                                                { label: 'Risk Management', value: 'Risk Management' },
                                                { label: 'Marketing', value: 'Marketing' },
                                                { label: 'Sales', value: 'Sales' },
                                                { label: 'Customer Success', value: 'Customer Success' },
                                                { label: 'Product', value: 'Product' },
                                                { label: 'Finance', value: 'Finance' },
                                                { label: 'HR', value: 'HR' },
                                            ],
                                        },
                                        {
                                            name: 'location',
                                            type: 'select',
                                            options: [
                                                { label: 'Kathmandu', value: 'Kathmandu' },
                                                { label: 'Lalitpur', value: 'Lalitpur' },
                                                { label: 'Bhaktapur', value: 'Bhaktapur' },
                                                { label: 'Chitwan', value: 'Chitwan' },
                                                { label: 'Pokhara', value: 'Pokhara' },
                                                { label: 'Remote', value: 'Remote' },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: 'row',
                                    fields: [
                                        {
                                            name: 'type',
                                            type: 'select',
                                            options: [
                                                { label: 'Full-time', value: 'Full-time' },
                                                { label: 'Part-time', value: 'Part-time' },
                                                { label: 'Contract', value: 'Contract' },
                                                { label: 'Internship', value: 'Internship' },
                                            ],
                                            defaultValue: 'Full-time',
                                        },
                                        {
                                            name: 'experience',
                                            type: 'text',
                                            label: 'Experience Required (e.g. 3-5 years)',
                                        },
                                        {
                                            name: 'salary',
                                            type: 'text',
                                            label: 'Salary Range (e.g. ₹8-12 LPA)',
                                        },
                                    ],
                                },
                                {
                                    type: 'row',
                                    fields: [
                                        {
                                            name: 'status',
                                            type: 'select',
                                            options: [
                                                { label: 'Open', value: 'Open' },
                                                { label: 'Closed', value: 'Closed' },
                                            ],
                                            defaultValue: 'Open',
                                            required: true,
                                            admin: {
                                                width: '50%',
                                            },
                                        },
                                        {
                                            name: 'expiryDate',
                                            type: 'date',
                                            label: 'Expiry Date',
                                            admin: {
                                                width: '50%',
                                                description: 'Vacancy will automatically be hidden after this date.',
                                            },
                                        },
                                    ],
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                },
                                {
                                    name: 'skills',
                                    type: 'array',
                                    label: 'Required Skills',
                                    fields: [
                                        {
                                            name: 'skill',
                                            type: 'text',
                                            localized: true,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Benefits',
                    fields: [
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'benefitsTitle',
                                    type: 'text',
                                    label: 'Section Title',
                                    defaultValue: 'Why Join Batas?',
                                    localized: true,
                                },
                                {
                                    name: 'benefitsSubtitle',
                                    type: 'text',
                                    label: 'Section Subtitle',
                                    defaultValue: 'Discover what makes us a great place to work',
                                    localized: true,
                                },
                            ],
                        },
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'cultureButtonText',
                                    type: 'text',
                                    label: 'Culture Button Text',
                                    defaultValue: 'Learn More About Our Culture',
                                    localized: true,
                                },
                                {
                                    name: 'cultureButtonLink',
                                    type: 'text',
                                    label: 'Culture Button Link',
                                    defaultValue: '/culture',
                                    localized: true,
                                },
                            ],
                        },
                        {
                            name: 'benefits',
                            type: 'array',
                            label: 'Why Join Us',
                            fields: [
                                {
                                    name: 'icon',
                                    type: 'select',
                                    options: [
                                        { label: 'TrendingUp', value: 'TrendingUp' },
                                        { label: 'Target', value: 'Target' },
                                        { label: 'Zap', value: 'Zap' },
                                        { label: 'Star', value: 'Star' },
                                        { label: 'Coffee', value: 'Coffee' },
                                        { label: 'Award', value: 'Award' },
                                        { label: 'Heart', value: 'Heart' },
                                        { label: 'Users', value: 'Users' },
                                    ],
                                },
                                {
                                    name: 'title',
                                    type: 'text',
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Life at Batas',
                    fields: [
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'lifeAtCompanyTitle',
                                    type: 'text',
                                    label: 'Section Title',
                                    defaultValue: 'Life at Batas',
                                    localized: true,
                                },
                                {
                                    name: 'lifeAtCompanySubtitle',
                                    type: 'text',
                                    label: 'Section Subtitle',
                                    defaultValue: 'Why our employees love working with us',
                                    localized: true,
                                },
                            ],
                        },
                        {
                            name: 'lifeAtCompany',
                            type: 'array',
                            label: 'Life at Batas Cards',
                            fields: [
                                {
                                    name: 'icon',
                                    type: 'select',
                                    options: [
                                        { label: 'TrendingUp', value: 'TrendingUp' },
                                        { label: 'Target', value: 'Target' },
                                        { label: 'Zap', value: 'Zap' },
                                        { label: 'Star', value: 'Star' },
                                        { label: 'Coffee', value: 'Coffee' },
                                        { label: 'Award', value: 'Award' },
                                        { label: 'Heart', value: 'Heart' },
                                        { label: 'Users', value: 'Users' },
                                    ],
                                },
                                {
                                    name: 'title',
                                    type: 'text',
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}
