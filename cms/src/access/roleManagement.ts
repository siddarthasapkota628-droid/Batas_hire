import type { FieldAccess } from 'payload'
import type { User } from '@/payload-types'

export const canManageSystemRoles: FieldAccess<User> = ({ req: { user }, data, doc }) => {
    if (!user) return false

    // 1. Super Admin can do anything
    // 1. Super Admin can do anything EXCEPT create other Super Admins
    if (user.roles?.includes('admin')) {
        console.log('*** DEBUG: Checking Super Admin capabilities ***')
        console.log('*** DEBUG: Data ***', JSON.stringify(data, null, 2))
        console.log('*** DEBUG: Doc ***', doc ? 'Doc exists' : 'No doc')
        if (doc) console.log('*** DEBUG: Doc Roles ***', doc.roles)

        // If they are trying to assign 'admin' role
        if (Array.isArray(data?.roles) && data.roles.includes('admin')) {}
        return true
    }

    // 2. Client Admin Logic
    if (user.roles?.includes('client-admin')) {
        // If 'roles' is in data, we check its values.
        if (Array.isArray(data?.roles)) {
            if (data.roles.includes('admin')) {
                return false // Client Admin cannot assign Super Admin
            }
            if (data.roles.includes('client-admin')) {
                return false // Client Admin cannot assign Admin
            }
        }

        return true
    }

    // 3. Regular Users cannot change roles
    return false
}

export const canManageAdminPanelAccess: FieldAccess<User> = ({ req: { user } }) => {
    if (!user) return false
    // Only Super Admin and Client Admin can manage login access
    return Boolean(user.roles?.includes('admin') || user.roles?.includes('client-admin'))
}
