import { postgresAdapter } from '@payloadcms/db-postgres'
import sharp from 'sharp'
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'

import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { AboutPageCollection } from './collections/Pages/AboutPage'
import { ServicesPageCollection } from './collections/Pages/ServicesPage'
import { CareerPageCollection } from './collections/Pages/CareerPage'
import { HomePageCollection } from './collections/Pages/HomePage'
import { HowItWorksPageCollection } from './collections/Pages/HowItWorksPage'
import { KnowledgeCenterPageCollection } from './collections/Pages/KnowledgeCenterPage'
import { FAQPageCollection } from './collections/Pages/FAQPageCollection'
import { ContactPageCollection } from './collections/Pages/ContactPage'
import { LegalPageCollection } from './collections/Pages/LegalPageCollection'
import { NoticePageCollection } from './collections/Pages/NoticePageCollection'
import { Posts } from './collections/Posts'
import { Roles } from './collections/Roles'
import { CareerApplications } from './collections/CareerApplications'
import { ServiceInquiries } from './collections/ServiceInquiries'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { Users } from './collections/Users'
import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { SiteSettings } from './SiteSettings/config'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      beforeLogin: ['@/components/BeforeLogin'],
      graphics: {
        Logo: '@/components/Logo/Logo#Logo',
        Icon: '@/components/Logo/Logo#Logo',
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  collections: [
    Pages,
    AboutPageCollection,
    ServicesPageCollection,
    CareerPageCollection,
    HomePageCollection,
    HowItWorksPageCollection,
    KnowledgeCenterPageCollection,
    FAQPageCollection,
    ContactPageCollection,
    LegalPageCollection,
    NoticePageCollection,
    Posts,
    Media,
    Categories,
    Users,
    Roles,
    CareerApplications,
    ServiceInquiries,
    ContactSubmissions,
  ],
  cors: [
    getServerSideURL(),
    'http://localhost:8080',
    'http://localhost:5173',
    'http://localhost:3000',
  ].filter(Boolean),
  csrf: [
    getServerSideURL(),
    'http://localhost:8080',
    'http://localhost:5173',
    'http://localhost:3000',
  ].filter(Boolean),
  globals: [Header, Footer, SiteSettings],
  localization: {
    locales: [
      {
        label: 'English',
        code: 'en',
      },
      {
        label: 'Nepali',
        code: 'ne',
      },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
  plugins,
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
})
