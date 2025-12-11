import type { Access } from 'payload'

export const isClientAdmin: Access = ({ req: { user } }) => {
    return Boolean(user?.roles?.includes('client-admin'))
}
