import type { CollectionConfig } from 'payload'
import { isSuperAdmin } from '../access/isSuperAdmin'
import { isClientAdmin } from '../access/isClientAdmin'

const isSuperOrClientAdmin = (args: any) => isSuperAdmin(args) || isClientAdmin(args)

export const FormDashboards: CollectionConfig = {
    slug: 'form-dashboards',
    admin: {
        useAsTitle: 'title',
        group: 'Dashboard',
        description: 'Create custom cards for the Form Submissions dashboard.',
    },
    access: {
        // Only Admins should manage the dashboard layout
        create: isSuperOrClientAdmin,
        read: isSuperOrClientAdmin,
        update: isSuperOrClientAdmin,
        delete: isSuperOrClientAdmin,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            label: 'Card Title',
            admin: {
                description: 'The title displayed on the dashboard card (e.g., "Job Applications").',
            },
        },
        {
            name: 'targetForm',
            type: 'relationship',
            relationTo: 'forms',
            required: true,
            label: 'Target Form',
            admin: {
                description: 'Which form should this card display submissions for?',
            },
        },
        {
            name: 'priority',
            type: 'number',
            defaultValue: 10,
            label: 'Display Priority',
            admin: {
                description: 'Lower numbers appear first.',
            },
        },
    ],
}
