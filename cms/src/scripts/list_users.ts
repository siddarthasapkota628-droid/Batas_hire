import { getPayload } from 'payload'
import config from '@payload-config'

const listUsers = async () => {
    const payload = await getPayload({ config })

    const users = await payload.find({
        collection: 'users',
    })

    console.log('--- USERS FOUND ---')
    users.docs.forEach((user) => {
        console.log(`ID: ${user.id} | Email: ${user.email} | Roles: ${JSON.stringify(user.roles)} | Enabled: ${(user as any).enableAdminPanelAccess}`)
    })
    console.log('-------------------')

    process.exit(0)
}

listUsers()
