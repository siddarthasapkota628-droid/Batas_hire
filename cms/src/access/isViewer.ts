import type { Access } from 'payload'

import type { User } from '@/payload-types'

export const isViewer: Access<User> = ({ req: { user } }) => {
    // Return true or false based on if the user has a viewer role
    return Boolean(user?.roles?.includes('viewer'))
}
