import type { Tab } from 'payload/types'

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
                        },
                        {
                            name: 'careerHeaderSubtitle',
                            type: 'textarea',
                            defaultValue: 'Join our dynamic team and be part of Nepal\'s leading financial services company',
                        },
                    ],
                },
                {
                    label: 'Job Openings',
                    fields: [
                        {
                            name: 'jobOpenings',
                            type: 'array',
                            label: 'Current Openings',
                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: true,
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
