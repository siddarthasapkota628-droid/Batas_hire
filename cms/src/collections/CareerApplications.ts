import type { CollectionConfig } from 'payload'
import { checkRole } from '../access/rbac'
import { isSuperAdmin } from '../access/isSuperAdmin'
import { isClientAdmin } from '../access/isClientAdmin'

const isSuperOrClientAdmin = (args: any) => isSuperAdmin(args) || isClientAdmin(args)

export const CareerApplications: CollectionConfig = {
    slug: 'career-applications',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'email', 'jobPosition', 'createdAt'],
        listSearchableFields: ['name', 'email', 'jobPosition', 'phoneNumber'],
        group: 'Form Submissions',
        description: 'A dedicated view for Career Page applications.',
    },
    access: {
        read: (args) => {
            const rbacResult = checkRole('career-applications', 'read')(args)
            if (typeof rbacResult === 'boolean' && !rbacResult) return false

            const careerFilter = {
                form: {
                    equals: 3,
                },
            }

            if (typeof rbacResult === 'object') {
                return {
                    and: [careerFilter, rbacResult],
                }
            }

            return careerFilter as any
        },
        update: checkRole('career-applications', 'update'),
        delete: checkRole('career-applications', 'delete'),
        create: () => true, // Changed to true so the server hook can create records
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
