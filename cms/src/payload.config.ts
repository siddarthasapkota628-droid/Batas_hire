import path from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { buildConfig, PayloadRequest } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { s3Storage } from '@payloadcms/storage-s3' // Ensure this is installed

import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import {
  AboutView,
  CareerView,
  ContactView,
  FAQView,
  HomeView,
  HowItWorksView,
  KnowledgeCenterView,
  LegalView,
  ServicesView,
} from './collections/Pages/Views'
import { Posts } from './collections/Posts'
import { Roles } from './collections/Roles'
import { CareerApplications } from './collections/CareerApplications'
import { ServiceInquiries } from './collections/ServiceInquiries'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { Users } from './collections/Users'

import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { SiteSettings } from './SiteSettings/config'
import { NoticesPage } from './SiteSettings/NoticePage'

import { plugins as existingPlugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      beforeLogin: ['@/components/BeforeLogin'],
      graphics: {
        Logo: '@/components/Logo/Logo#Logo',
        Icon: '@/components/Logo/Logo#Logo',
      },
    },
    livePreview: {
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },

  editor: defaultLexical,

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI!,
    },
  }),

  collections: [
    Pages,
    AboutView,
    ServicesView,
    CareerView,
    HomeView,
    HowItWorksView,
    KnowledgeCenterView,
    FAQView,
    ContactView,
    LegalView,
    Posts,
    Media,
    Categories,
    Users,
    Roles,
    CareerApplications,
    ServiceInquiries,
    ContactSubmissions,
  ],

  globals: [
    Header,
    Footer,
    SiteSettings,
    NoticesPage,
  ],

  cors: [
    getServerSideURL(),
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:8080',
    'https://batas-frontend.onrender.com',
    'https://api.batas.com',
  ].filter(Boolean),

  csrf: [
    getServerSideURL(),
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:8080',
    'https://batas-frontend.onrender.com',
    'https://cms-backend-lwsj.onrender.com',
  ].filter(Boolean),

  localization: {
    locales: [
      { label: 'English', code: 'en' },
      { label: 'Nepali', code: 'ne' },
    ],
    defaultLocale: 'en',
    fallback: true,
  },

  secret: process.env.PAYLOAD_SECRET!,

  sharp,

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }) => {
        if (req.user) return true
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },

  plugins: [
    ...existingPlugins, // Keep your original plugins (like SEO or nested pages)
    s3Storage({
      collections: {
        'media': true,
      },
      bucket: process.env.S3_BUCKET || 'media', 
      config: {
        forcePathStyle: true, 
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || 'cfacf489313590ab77699e454a976ae4',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || 'd10307683ee9992b1e92a5c659de0c0929622c43447b07746fdaa09c85aa67b1',
        },
        region: process.env.S3_REGION || 'ap-south-1',
        endpoint: process.env.S3_ENDPOINT || 'https://gxloagoxymsvjkpykzhz.storage.supabase.co/storage/v1/s3',
      },
    }),
  ],

})

