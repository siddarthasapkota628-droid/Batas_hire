import type { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
    slug: 'contact-submissions',
    dbName: 'form_submissions',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'email', 'phoneNumber', 'createdAt'],
        listSearchableFields: ['name', 'email', 'phoneNumber'],
        group: 'Form Submissions',
        description: 'Direct view for General Contact form submissions.',
    },
    access: {
        read: ({ req: { user } }) => {
            if (!user) return false
            // For Contact form, we might need to find the ID or filter by name in submissionData
            // For now, we'll use a placeholder or filter out known IDs (2 and 3)
            const filter = {
                and: [
                    { form: { not_equals: 2 } }, // Not Services
                    { form: { not_equals: 3 } }, // Not Careers
                ]
            }
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
