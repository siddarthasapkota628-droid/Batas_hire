import type { CollectionConfig } from 'payload'

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
        read: ({ req: { user } }) => {
            if (!user) return false
            const filter = { form: { equals: 2 } } // Service Form ID
            const roles = user.roles || []
            return roles.includes('admin') || roles.includes('client-admin') ? filter : false
        },
        update: ({ req: { user } }) => !!user,
        delete: ({ req: { user } }) => !!user,
        create: () => false,
    },
    fields: [
        { name: 'name', type: 'text', label: 'Full Name', admin: { readOnly: true } },
        { name: 'email', type: 'email', label: 'Email Address', admin: { readOnly: true } },
        { name: 'phoneNumber', type: 'text', label: 'Phone Number', admin: { readOnly: true } },
        { name: 'form', type: 'relationship', relationTo: 'forms', admin: { hidden: true } },
        { name: 'submissionData', type: 'json', admin: { hidden: true } },
    ],
}
