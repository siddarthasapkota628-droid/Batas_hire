import { getPayload } from 'payload'
import config from '@payload-config'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Try loading from default (CWD) first
dotenv.config()

// If missing, try explicit path
if (!process.env.PAYLOAD_SECRET) {
    const explicitPath = path.resolve(dirname, '../../.env')
    console.log(`Trying to load env from: ${explicitPath}`)
    if (fs.existsSync(explicitPath)) {
        dotenv.config({ path: explicitPath })
    } else {
        console.log(`File not found at explicit path.`)
    }
}

const recoverAdmin = async () => {
    if (!process.env.PAYLOAD_SECRET) {
        console.error('CRITICAL: PAYLOAD_SECRET missing.')
        console.log('Current Env Keys:', Object.keys(process.env).filter(k => k.includes('PAYLOAD') || k.includes('SECRET')))
        process.exit(1)
    }

    try {
        const payload = await getPayload({ config })

        console.log('--- FINDING USERS ---')
        const users = await payload.find({
            collection: 'users',
            limit: 1,
        })

        if (users.docs.length === 0) {
            console.log('No users found. You should create one via Admin Panel URL.')
        } else {
            const user = users.docs[0]
            console.log(`Found User: ${user.email} (ID: ${user.id}). Promoting to SUPER ADMIN...`)

            await payload.update({
                collection: 'users',
                id: user.id,
                data: {
                    roles: ['admin'],
                    ['enableAdminPanelAccess' as string]: true
                }
            })
            console.log(`SUCCESS: User ${user.email} is now a Super Admin.`)
        }
    } catch (err) {
        console.error('Payload Error:', err)
    }
    process.exit(0)
}

recoverAdmin()
