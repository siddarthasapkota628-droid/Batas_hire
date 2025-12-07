import type { Access, FieldAccess } from 'payload'

import type { User } from '@/payload-types'

export const isAdmin = ({ req: { user } }: { req: any }): boolean => {
    // Return true or false based on if the user has an admin role
    return Boolean(user?.roles?.includes('admin'))
}

export const isAdminFieldLevel: FieldAccess<User> = ({ req: { user } }) => {
    // Return true or false based on if the user has an admin role
    return Boolean(user?.roles?.includes('admin'))
}
