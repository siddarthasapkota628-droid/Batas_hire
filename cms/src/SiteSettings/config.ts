import type { GlobalConfig } from 'payload'
import { checkRole } from '../access/rbac'

export const SiteSettings: GlobalConfig = {
    slug: 'site-settings',
    lockDocuments: false,
    access: {
        read: checkRole('site-settings', 'read'),
        update: checkRole('site-settings', 'update'),
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
