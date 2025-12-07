
import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@payload-config'

const run = async () => {
    const payload = await getPayload({ config })
    const users = await payload.find({ collection: 'users' })

    if (users.docs.length > 0) {
        const firstUser = users.docs[0]
        console.log(`Found user: ${firstUser.email} (ID: ${firstUser.id})`)

        try {
            await payload.update({
                collection: 'users',
                id: firstUser.id,
                data: { roles: ['admin'] }
            })
            console.log(`✅ Successfully updated user ${firstUser.email} to 'admin' role.`)
        } catch (e) {
            console.error("Failed to update user role:", e)
        }
    } else {
        console.log("No users found to update.")
    }
    process.exit(0)
}

run()
