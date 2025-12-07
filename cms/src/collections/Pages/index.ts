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

import { isAdmin } from '../../access/isAdmin'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: authenticatedOrPublished,
    update: isAdmin,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
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
        {
          label: 'About Specifics',
          admin: {
            condition: (data) => data?.template === 'about',
          },
          fields: [
            {
              type: 'tabs',
              tabs: [
                {
                  label: 'Header & Story',
                  fields: [
                    {
                      name: 'aboutHeaderTitle',
                      type: 'text',
                      label: 'Header Title',
                      defaultValue: 'About Batas Hire and Purchase',
                    },
                    {
                      name: 'aboutHeaderSubtitle',
                      type: 'textarea',
                      label: 'Header Subtitle',
                      defaultValue: "We're on a mission to make financial services more accessible...",
                    },
                    {
                      name: 'aboutStoryTitle',
                      type: 'text',
                      label: 'Story Title',
                      defaultValue: '22 Years of Growth in Financial Services',
                    },
                    {
                      name: 'aboutStoryContent',
                      type: 'richText',
                      label: 'Story Content',
                    },
                  ],
                },
                {
                  label: 'Stats (Fixed 4)',
                  fields: [
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'stat1',
                          type: 'group',
                          label: 'Stat 1',
                          fields: [
                            { name: 'number', type: 'text', defaultValue: '50,000+' },
                            { name: 'label', type: 'text', defaultValue: 'Happy Customers' },
                          ],
                        },
                        {
                          name: 'stat2',
                          type: 'group',
                          label: 'Stat 2',
                          fields: [
                            { name: 'number', type: 'text', defaultValue: '₹500 Cr+' },
                            { name: 'label', type: 'text', defaultValue: 'Loans Disbursed' },
                          ],
                        },
                        {
                          name: 'stat3',
                          type: 'group',
                          label: 'Stat 3',
                          fields: [
                            { name: 'number', type: 'text', defaultValue: '99.2%' },
                            { name: 'label', type: 'text', defaultValue: 'Customer Satisfaction' },
                          ],
                        },
                        {
                          name: 'stat4',
                          type: 'group',
                          label: 'Stat 4',
                          fields: [
                            { name: 'number', type: 'text', defaultValue: '15+' },
                            { name: 'label', type: 'text', defaultValue: 'Banking Partners' },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Mission/Vision',
                  fields: [
                    {
                      name: 'mission',
                      type: 'group',
                      fields: [
                        { name: 'icon', type: 'select', options: ['Target', 'Eye', 'Users', 'Award'], defaultValue: 'Target' },
                        { name: 'title', type: 'text', defaultValue: 'Our Mission' },
                        { name: 'description', type: 'textarea' },
                      ],
                    },
                    {
                      name: 'vision',
                      type: 'group',
                      fields: [
                        { name: 'icon', type: 'select', options: ['Target', 'Eye', 'Users', 'Award'], defaultValue: 'Eye' },
                        { name: 'title', type: 'text', defaultValue: 'Our Vision' },
                        { name: 'description', type: 'textarea' },
                      ],
                    },
                    {
                      name: 'values',
                      type: 'group',
                      fields: [
                        { name: 'icon', type: 'select', options: ['Target', 'Eye', 'Users', 'Award'], defaultValue: 'Users' },
                        { name: 'title', type: 'text', defaultValue: 'Our Values' },
                        { name: 'description', type: 'textarea' },
                      ],
                    },
                  ],
                },
                {
                  label: 'Directors & Leadership',
                  fields: [
                    {
                      name: 'directors',
                      type: 'array',
                      label: 'Board of Directors (Fixed 4)',
                      minRows: 4,
                      maxRows: 4,
                      fields: [
                        { name: 'name', type: 'text', required: true },
                        { name: 'position', type: 'text', required: true },
                        { name: 'experience', type: 'text' },
                        { name: 'education', type: 'text' },
                        { name: 'specialization', type: 'text' },
                      ],
                    },
                    {
                      name: 'leadership',
                      type: 'array',
                      label: 'Leadership Team (Fixed 4)',
                      minRows: 4,
                      maxRows: 4,
                      fields: [
                        { name: 'name', type: 'text', required: true },
                        { name: 'position', type: 'text', required: true },
                        { name: 'department', type: 'text' },
                        { name: 'experience', type: 'text' },
                        { name: 'expertise', type: 'text' },
                      ],
                    },
                  ],
                },
                {
                  label: 'Timeline & Testimonials',
                  fields: [
                    {
                      name: 'timeline',
                      type: 'array',
                      label: 'Milestones (Fixed 6)',
                      minRows: 6,
                      maxRows: 6,
                      fields: [
                        { name: 'year', type: 'text', required: true },
                        { name: 'event', type: 'text', required: true },
                        { name: 'description', type: 'textarea' },
                      ],
                    },
                    {
                      name: 'testimonials',
                      type: 'array',
                      label: 'Customer Reviews (Fixed 6)',
                      minRows: 6,
                      maxRows: 6,
                      fields: [
                        { name: 'name', type: 'text', required: true },
                        { name: 'role', type: 'text' },
                        { name: 'location', type: 'text' },
                        { name: 'rating', type: 'number', min: 1, max: 5, defaultValue: 5 },
                        { name: 'content', type: 'textarea', required: true },
                        { name: 'product', type: 'text' },
                      ],
                    },
                  ],
                },
                {
                  label: 'Compliance',
                  fields: [
                    {
                      name: 'complianceTitle',
                      type: 'text',
                      defaultValue: 'Regulatory Compliance',
                    },
                    {
                      name: 'complianceDescription',
                      type: 'textarea',
                    },
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'badge1',
                          type: 'group',
                          fields: [{ name: 'text', type: 'text', defaultValue: 'RBI Licensed NBFC' }],
                        },
                        {
                          name: 'badge2',
                          type: 'group',
                          fields: [{ name: 'text', type: 'text', defaultValue: 'ISO 27001 Certified' }],
                        },
                        {
                          name: 'badge3',
                          type: 'group',
                          fields: [{ name: 'text', type: 'text', defaultValue: 'PCI DSS Compliant' }],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
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
