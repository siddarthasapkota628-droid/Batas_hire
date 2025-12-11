import type { CollectionConfig, FieldAccess } from 'payload'

import { authenticated } from '../../access/authenticated'
import { isSuperAdmin } from '../../access/isSuperAdmin'
import { isClientAdmin } from '../../access/isClientAdmin'

// Local helper to replace deleted file
const isSuperOrClientAdmin = (args: any) => isSuperAdmin(args) || isClientAdmin(args)
import { canManageSystemRoles, canManageAdminPanelAccess } from '../../access/roleManagement'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    // Control who can log in to the Admin Panel
    admin: ({ req: { user } }) => {
      if (!user) return false;
      // 1. Super Admin always gets access
      if ((user.roles as any)?.includes('admin')) return true;
      // 2. Others need explicit flag
      return Boolean((user as any).enableAdminPanelAccess);
    },
    create: isSuperOrClientAdmin, // Only Admins can create users
    delete: isSuperOrClientAdmin, // Only Admins can delete users
    read: ({ req: { user } }) => {
      if (user?.roles?.includes('admin')) return true
      if (user?.roles?.includes('client-admin')) {
        return {
          roles: {
            not_equals: 'admin',
          },
        } as any
      }
      // Allow users to read themselves
      if (user) {
        return {
          id: {
            equals: user.id,
          },
        } as any
      }
      return false
    },
    update: (args) => {
      // Allow users to update themselves
      if (args.req.user && args.id === args.req.user.id) {
        return true
      }
      console.log('DEBUG: Users Collection Update Access', args.req.user?.email)
      return isSuperOrClientAdmin(args)
    },
  },
  admin: {
    defaultColumns: ['name', 'email', 'roles'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      defaultValue: ['user'],
      label: 'System Roles',
      options: [
        {
          label: 'Super Admin',
          value: 'admin',
        },
        {
          label: 'Admin',
          value: 'client-admin',
        },
        {
          label: 'Viewer',
          value: 'user',
        },
      ],
      access: {
        create: canManageSystemRoles,
        update: canManageSystemRoles,
      },
      admin: {
        components: {
          Field: '@/components/fields/RolesSelect#RolesSelect',
        },
      },
      validate: async (val, options) => {
        const { operation, req } = options || {}
        // Safe access to id if available (different payload versions handle this differently)
        const id = (options as any)?.id

        if (operation === 'create') {
          if (Array.isArray(val) && val.includes('admin')) {
            return 'Creating new Super Admins is disabled.'
          }
        }
        if (operation === 'update') {
          if (Array.isArray(val) && val.includes('admin')) {
            try {
              // If we have an ID, we check if the user is ALREADY an admin.
              // If they are, we allow the update (preserving their admin status).
              // If they are NOT, we block it (preventing escalation).
              if (id) {
                const existingUser = await req.payload.findByID({
                  collection: 'users',
                  id,
                })
                if (existingUser && (existingUser.roles as any)?.includes('admin')) {
                  return true
                }
              }
            } catch (e) {
              // If findByID fails, fall through to block
            }
            return 'You cannot assign the Super Admin role.'
          }
        }
        return true
      },

    },
    {
      name: 'enableAdminPanelAccess',
      type: 'checkbox',
      label: 'Enable Admin Panel Access',
      defaultValue: false,
      access: {
        read: isSuperOrClientAdmin as FieldAccess, // Only admins should see this setting
        update: canManageAdminPanelAccess,
        create: canManageAdminPanelAccess,
      },
      admin: {
        position: 'sidebar',
        description: 'If unchecked, this user cannot log in to the Admin Panel.',
      },
    },
    {
      name: 'associatedRoles',
      type: 'relationship',
      relationTo: 'roles',
      hasMany: true,
      label: 'Functional Roles (RBAC)',
      access: {
        create: isSuperOrClientAdmin as FieldAccess,
        update: isSuperOrClientAdmin as FieldAccess,
      },
    },
  ],
  timestamps: true,
}
