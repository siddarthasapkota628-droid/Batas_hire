import type { CollectionConfig } from 'payload'
import { checkRole } from '../access/rbac'

export const ServiceInquiries: CollectionConfig = {
    slug: 'service-inquiries',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'email', 'phoneNumber', 'createdAt'],
        listSearchableFields: ['name', 'email', 'phoneNumber'],
        group: 'Form Submissions',
        description: 'Direct view for Service Inquiry form submissions.',
    },
    access: {
        read: (args) => {
            const rbacResult = checkRole('service-inquiries', 'read')(args)
            if (typeof rbacResult === 'boolean' && !rbacResult) return false

            const filter = { form: { equals: 2 } } // Service Form ID

            if (typeof rbacResult === 'object') {
                return {
                    and: [filter, rbacResult],
                }
            }

            return filter as any
        },
        update: checkRole('service-inquiries', 'update'),
        delete: checkRole('service-inquiries', 'delete'),
        create: () => true,
    },
    fields: [
        { name: 'name', type: 'text', label: 'Full Name', admin: { readOnly: true } },
        { name: 'email', type: 'email', label: 'Email Address', admin: { readOnly: true } },
        { name: 'phoneNumber', type: 'text', label: 'Phone Number', admin: { readOnly: true } },
        { name: 'form', type: 'relationship', relationTo: 'forms', admin: { hidden: true } },
        { name: 'submissionData', type: 'json', admin: { hidden: true } },
    ],
}
