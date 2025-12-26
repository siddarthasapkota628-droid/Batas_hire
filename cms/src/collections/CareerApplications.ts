import type { CollectionConfig } from 'payload'
import { isSuperAdmin } from '../access/isSuperAdmin'
import { isClientAdmin } from '../access/isClientAdmin'

const isSuperOrClientAdmin = (args: any) => isSuperAdmin(args) || isClientAdmin(args)

export const CareerApplications: CollectionConfig = {
    slug: 'career-applications',
    dbName: 'form_submissions', // Point to the same table as form-builder submissions
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'email', 'jobPosition', 'createdAt'],
        group: 'Form Submissions',
        description: 'A dedicated view for Career Page applications.',
    },
    access: {
        read: (args) => {
            const { req: { user } } = args

            // Basic login check
            if (!user) return false

            const careerFilter = {
                form: {
                    equals: 3,
                },
            }

            // If Super Admin or Client Admin, return the filter
            const roles = user.roles || []
            if (roles.includes('admin') || roles.includes('client-admin')) {
                return careerFilter
            }

            return false
        },
        update: isSuperOrClientAdmin,
        delete: isSuperOrClientAdmin,
        create: () => false, // Submissions should only come from the frontend
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            label: 'Full Name',
            admin: { readOnly: true },
        },
        {
            name: 'email',
            type: 'email',
            label: 'Email Address',
            admin: { readOnly: true },
        },
        {
            name: 'phoneNumber',
            type: 'text',
            label: 'Phone Number',
            admin: { readOnly: true },
        },
        {
            name: 'jobPosition',
            type: 'text',
            label: 'Job Position',
            admin: { readOnly: true },
        },
        {
            name: 'resume',
            type: 'upload',
            relationTo: 'media',
            label: 'Resume / PDF',
            admin: {
                readOnly: true,
                components: {
                    Cell: '@/components/DownloadResumeCell',
                },
            },
        },
        {
            name: 'form',
            type: 'relationship',
            relationTo: 'forms',
            admin: { hidden: true },
        },
        {
            name: 'submissionData',
            type: 'json',
            admin: { hidden: true },
        },
    ],
}
