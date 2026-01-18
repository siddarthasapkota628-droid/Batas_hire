import type { CollectionConfig, FieldAccess } from 'payload'

import { authenticated } from '../../access/authenticated'
import { isSuperAdmin } from '../../access/isSuperAdmin'
import { isClientAdmin } from '../../access/isClientAdmin'

// Local helper to replace deleted file
const isSuperOrClientAdmin = (args: any) => isSuperAdmin(args) || isClientAdmin(args)
import { canManageSystemRoles, canManageAdminPanelAccess } from '../../access/roleManagement'
import { checkRole } from '../../access/rbac'

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
    create: checkRole('users', 'create'),
    delete: checkRole('users', 'delete'),
    read: (args) => {
      const {
        req: { user },
      } = args
      if (user?.roles?.includes('admin')) return true

      // Combine System Role filters with RBAC
      const rbacResult = checkRole('users', 'read')(args)
      if (typeof rbacResult === 'boolean' && !rbacResult) return false

      const systemFilters = user?.roles?.includes('client-admin')
        ? {
          roles: {
            not_equals: 'admin',
          },
        }
        : {
          id: {
            equals: user?.id,
          },
        }

      if (typeof rbacResult === 'object') {
        return {
          and: [systemFilters, rbacResult],
        }
      }

      return systemFilters as any
    },
    update: (args) => {
      // Allow users to update themselves
      if (args.req.user && args.id === args.req.user.id) {
        return true
      }
      return checkRole('users', 'update')(args)
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
          label: 'Vendor',
          value: 'admin',
        },
        {
          label: 'Super Admin',
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
          // Allow system scripts to override this check
          if (req.context?.preventRoleOverride === false) {
            return true
          }

          if (Array.isArray(val) && val.includes('admin')) {
            return 'Creating new Super Admins is disabled.'
          }
        }
        if (operation === 'update') {
          if (Array.isArray(val) && val.includes('admin')) {
            // Allow system scripts to override this check
            if (req.context?.preventRoleOverride === false) {
              return true
            }

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
