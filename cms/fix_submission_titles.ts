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
    } else {
        console.error('CRITICAL: .env file not found at root of CMS.')
        process.exit(1)
    }

    if (!process.env.PAYLOAD_SECRET) {
        process.env.PAYLOAD_SECRET = 'YOUR_SECRET_HERE' // Fallback
    }

    console.log('Importing Payload Config...')
    const { default: config } = await import('./src/payload.config')

    try {
        console.log('Initializing Payload...')
        const payload = await getPayload({ config })

        console.log('Fetching Form Submissions...')
        const submissions = await payload.find({
            collection: 'form-submissions',
            limit: 1000,
        })

        console.log(`Found ${submissions.docs.length} submissions. Processing...`)

        for (const sub of submissions.docs) {
            const data: any = sub.submissionData || []
            let newTitle = 'Submission'

            // Improved Logic
            const nameField = data.find((field: any) => {
                const key = (field.field || '').toLowerCase()
                return key === 'name' || key.includes('name') || key.includes('full') || key.includes('first')
            })

            const emailField = data.find((field: any) =>
                ['email', 'Email'].includes(field.field)
            )

            if (nameField && nameField.value) {
                newTitle = nameField.value
            } else if (emailField && emailField.value) {
                newTitle = emailField.value
            }

            // Update if title is missing or generic "Submission" (or if we want to force update everything)
            // Let's force update to fix the "Email displayed as title" issue
            if (sub.title !== newTitle) {
                console.log(`Updating ID: ${sub.id} -> ${newTitle}`)
                await payload.update({
                    collection: 'form-submissions',
                    id: sub.id,
                    data: {
                        title: newTitle
                    }
                })
            }
        }
        console.log('[SUCCESS] All titles updated.')

    } catch (e) {
        console.error('Runtime Error:', e)
    }
    process.exit(0)
}

run()
