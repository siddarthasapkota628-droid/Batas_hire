import type { CollectionConfig } from 'payload'
import type { FieldAccess } from 'payload'
import { isSuperAdmin } from '../access/isSuperAdmin'
import { isClientAdmin } from '../access/isClientAdmin'

const isSuperOrClientAdmin: FieldAccess = (args) => {
    return isSuperAdmin(args as any) || isClientAdmin(args as any)
}

export const Roles: CollectionConfig = {
    slug: 'roles',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'updatedAt'],
    },
    access: {
        // Admins (Super & Client) can manage roles
        create: isSuperOrClientAdmin,
        read: ({ req: { user } }) => {
            if (!user) return false
            // Vendor (admin) sees everything
            if ((user.roles as any)?.includes('admin')) return true
            // Client (client-admin) sees everything EXCEPT the 'Admin' role
            if ((user.roles as any)?.includes('client-admin')) {
                return {
                    name: {
                        not_equals: 'Admin',
                    },
                }
            }
            return false
        },
        update: isSuperOrClientAdmin,
        delete: isSuperOrClientAdmin,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'permissions',
            type: 'array',
            label: 'Permissions',
            fields: [
                {
                    name: 'resource',
                    type: 'select',
                    required: true,
                    options: [
                        { label: 'Pages', value: 'pages' },
                        { label: 'Media', value: 'media' },
                        { label: 'Users', value: 'users' },
                        { label: 'Posts', value: 'posts' },
                        { label: 'Categories', value: 'categories' },
                        { label: 'Header', value: 'header' },
                        { label: 'Footer', value: 'footer' },
                        { label: 'Site Settings', value: 'site-settings' },
                        { label: 'Notice Page (Global)', value: 'notices-page' },
                        { label: 'Forms', value: 'forms' },
                        { label: 'Form Submissions (Global)', value: 'form-submissions' },
                        { label: 'Career Applications', value: 'career-applications' },
                        { label: 'Service Inquiries', value: 'service-inquiries' },
                        { label: 'Contact Submissions', value: 'contact-submissions' },
                    ],
                },
                {
                    name: 'specificPages',
                    type: 'relationship',
                    relationTo: 'pages',
                    hasMany: true,
                    label: 'Specific Pages (Optional)',
                    admin: {
                        description: 'Leave empty for ALL pages. Select pages to restrict access.',
                        condition: (data: any, siblingData: any) => siblingData?.resource === 'pages',
                    },
                },
                {
                    name: 'action',
                    type: 'select',
                    required: true,
                    options: [
                        { label: 'Read Only', value: 'read' },
                        { label: 'Full Access (CRUD)', value: 'manage' },
                        { label: 'Create Only', value: 'create' },
                        { label: 'Update Only', value: 'update' },
                        { label: 'Delete Only', value: 'delete' },
                    ],
                    defaultValue: 'read',
                    validate: (value, options) => {
                        const siblingData = (options as any)?.siblingData
                        if (siblingData?.resource === 'pages') {
                            if (['create', 'delete', 'manage'].includes(value)) {
                                return 'Restricted: New Pages can only be created by the Vendor (Dev Team).'
                            }
                        }
                        return true
                    }
                },

            ],
        },
    ],
}
