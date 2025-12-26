import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Archive } from '../../blocks/ArchiveBlock/config'
import { CallToAction } from '../../blocks/CallToAction/config'
import { Content } from '../../blocks/Content/config'
import { FormBlock } from '../../blocks/Form/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { hero } from '@/heros/config'
import { slugField } from 'payload'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

import { isSuperAdmin } from '../../access/isSuperAdmin'

import { AboutPage } from './About'
import { ServicesPage } from './Services'
import { HowItWorksPage } from './HowItWorks'
import { CareerPage } from './Career'
import { KnowledgeCenterPage } from './KnowledgeCenter'
import { FAQPage } from './FAQPage'
import { ContactPage } from './Contact'
import { LegalPage } from './LegalPage';
import { NoticePage } from './NoticePage';
import { checkRole } from '../../access/rbac'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: isSuperAdmin, // Locked: Only Vendor can create pages
    delete: checkRole('pages', 'delete'),
    read: (args) => {
      const { req: { user } } = args

      // 1. If no user (Public/Frontend), allow reading published pages
      if (!user) {
        return {
          _status: {
            equals: 'published',
          },
        }
      }

      // 2. If user exists (Admin Panel), strictly enforce RBAC
      return checkRole('pages', 'read')(args)
    },
    update: checkRole('pages', 'update'),
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    hidden: true, // Hide from sidebar
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'pages',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'template',
      type: 'select',
      defaultValue: 'default',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'About Page', value: 'about' },
        { label: 'Services Page', value: 'services' },
        { label: 'How It Works Page', value: 'how-it-works' },
        { label: 'Home Page', value: 'home' },
        { label: 'Career Page', value: 'career' },
        { label: 'Knowledge Center Page', value: 'knowledge-center' },
        { label: 'FAQ Page', value: 'faq' },
        { label: 'Contact Page', value: 'contact' },
        { label: 'Legal Page', value: 'legal' },
        { label: 'Notice Page', value: 'notice' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [CallToAction, Content, MediaBlock, Archive, FormBlock],
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        AboutPage,
        ServicesPage,
        HowItWorksPage,
        CareerPage,
        KnowledgeCenterPage,
        FAQPage,
        ContactPage,
        LegalPage,
        NoticePage,
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
