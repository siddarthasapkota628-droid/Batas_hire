import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
    slug: 'site-settings',
    lockDocuments: false,
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'siteTitle',
            type: 'text',
            required: true,
            defaultValue: 'Batas Hire and Purchase',
            localized: true,
        },
        {
            name: 'siteLogo',
            type: 'upload',
            relationTo: 'media',
            required: true,
            admin: {
                description: 'Logo used in the frontend header and footer',
            },
        },
        {
            name: 'adminLogo',
            type: 'upload',
            relationTo: 'media',
            admin: {
                description: 'Logo used in the Payload admin dashboard and login page',
            },
        },
        {
            name: 'favicon',
            type: 'upload',
            relationTo: 'media',
        },
    ],
}
