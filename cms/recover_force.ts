import { getPayload } from 'payload'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const run = async () => {
    // 1. Manual Env Load
    const envPath = path.resolve(dirname, '.env')
    console.log(`Loading .env from: ${envPath}`)

    if (fs.existsSync(envPath)) {
        const envConfig = fs.readFileSync(envPath, 'utf8')
        envConfig.split('\n').forEach(line => {
            const [key, value] = line.split('=')
            if (key && value) {
                process.env[key.trim()] = value.trim()
            }
        })
        console.log('Env loaded manually.')
    } else {
        console.error('CRITICAL: .env file not found at root of CMS.')
        process.exit(1)
    }

    if (!process.env.PAYLOAD_SECRET) {
        console.error('PAYLOAD_SECRET still missing after load.')
        process.exit(1)
    }

    // 2. Dynamic Import of Config (AFTER Env Load)
    console.log('Importing Payload Config...')
    // Note: In ESM, we need extension or configured resolution. 
    // Assuming tsx handles .ts import.
    const { default: config } = await import('./src/payload.config')

    try {
        console.log('Initializing Payload...')
        const payload = await getPayload({ config })
        const users = await payload.find({ collection: 'users' })

        if (users.docs.length > 0) {
            const user = users.docs[0]
            console.log(`Promoting User: ${user.email} (ID: ${user.id})`)

            await payload.update({
                collection: 'users',
                id: user.id,
                data: {
                    roles: ['admin'],
                    // @ts-ignore
                    enableAdminPanelAccess: true
                }
            })
            console.log(`[SUCCESS] User ${user.email} promoted to Admin.`)
        } else {
            console.log('[WARN] No users found in database.')
        }
    } catch (e) {
        console.error('Runtime Error:', e)
    }
    process.exit(0)
}

run()
