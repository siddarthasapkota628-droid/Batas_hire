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
        read: isSuperOrClientAdmin,
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
                },

            ],
        },
    ],
}
