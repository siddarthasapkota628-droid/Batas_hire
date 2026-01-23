import { getPayload } from 'payload'
import config from '../payload.config'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
    path: path.resolve(dirname, '../../.env'),
})

const run = async () => {
    console.log('Initializing Payload...')
    const payload = await getPayload({ config })

    try {
        console.log('Fetching Page with ID 8...')
        const page = await payload.findByID({
            collection: 'pages',
            id: 8,
            depth: 2,
        })

        console.log('Page Data Retrieved.')
        console.log('---------------------------------------------------')
        // Inspect specific arrays
        // @ts-ignore
        console.log('Job Openings:', JSON.stringify(page.jobOpenings, null, 2))
        // @ts-ignore
        console.log('Benefits:', JSON.stringify(page.benefits, null, 2))
        // @ts-ignore
        console.log('Life At Company:', JSON.stringify(page.lifeAtCompany, null, 2))

        // Check for nulls in arrays
        // @ts-ignore
        const hasNullJob = page.jobOpenings?.some(item => item === null)
        if (hasNullJob) console.error('!!! FOUND NULL IN JOB OPENINGS !!!')

        console.log('---------------------------------------------------')
        console.log('Full Page Data:', JSON.stringify(page, null, 2))

    } catch (error) {
        console.error('Error fetching page:', error)
    }

    process.exit(0)
}

run()
