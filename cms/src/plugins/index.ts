import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { searchPlugin } from '@payloadcms/plugin-search'
import { Plugin } from 'payload'
import { revalidateRedirects } from '@/hooks/revalidateRedirects'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { searchFields } from '@/search/fieldOverrides'
import { beforeSyncWithSearch } from '@/search/beforeSync'
import { isSuperAdmin } from '../access/isSuperAdmin'
import { isClientAdmin } from '../access/isClientAdmin'
// import FormFolderGrid from '@/components/FormFolderGrid'

const isSuperOrClientAdmin = (args: any) => isSuperAdmin(args) || isClientAdmin(args)

import { Page, Post } from '@/payload-types'
import { getServerSideURL } from '@/utilities/getURL'

const generateTitle: GenerateTitle<Post | Page> = ({ doc }) => {
  return doc?.title ? `${doc.title} | Payload Website Template` : 'Payload Website Template'
}

const generateURL: GenerateURL<Post | Page> = ({ doc }) => {
  const url = getServerSideURL()

  return doc?.slug ? `${url}/${doc.slug}` : url
}

const pageSlugs = ['pages']

export const plugins: Plugin[] = [
  redirectsPlugin({
    collections: [...pageSlugs, 'posts'],
    overrides: {
      // @ts-expect-error - This is a valid override, mapped fields don't resolve to the same type
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'from') {
            return {
              ...field,
              admin: {
                description: 'You will need to rebuild the website when changing this field.',
              },
            }
          }
          return field
        })
      },
      hooks: {
        afterChange: [revalidateRedirects],
      },
    },
  }),
  nestedDocsPlugin({
    collections: ['categories'],
    generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
  }),
  seoPlugin({
    collections: pageSlugs,
    generateTitle,
    generateURL,
  }),
  formBuilderPlugin({
    fields: {
      payment: false,
    },
    formOverrides: {
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'confirmationMessage') {
            return {
              ...field,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                  ]
                },
              }),
            }
          }
          if ('name' in field && field.name === 'fields' && field.type === 'blocks') {
            return {
              ...field,
              blocks: [
                ...(field.blocks || []),
                {
                  slug: 'file',
                  labels: {
                    singular: 'File',
                    plural: 'Files',
                  },
                  fields: [
                    {
                      name: 'name',
                      type: 'text',
                      label: 'Name (lowercase, no spaces)',
                      required: true,
                    },
                    {
                      name: 'label',
                      type: 'text',
                      label: 'Label',
                    },
                    {
                      name: 'required',
                      type: 'checkbox',
                      label: 'Required',
                    },
                  ],
                },
              ],
            }
          }
          return field
        })
      },
    },
    formSubmissionOverrides: {
      fields: ({ defaultFields }) => {
        return [
          ...defaultFields,
          {
            name: 'title',
            type: 'text',
            admin: {
              hidden: true,
            },
          },
          {
            name: 'name',
            type: 'text',
            label: 'Full Name',
          },
          {
            name: 'email',
            type: 'email',
            label: 'Email Address',
          },
          {
            name: 'phoneNumber',
            type: 'text',
            label: 'Phone Number',
          },
          {
            name: 'resume',
            type: 'upload',
            relationTo: 'media',
            label: 'Resume / PDF',
          },
          {
            name: 'jobPosition',
            type: 'text',
            label: 'Job Position',
          },
        ]
      },
           hooks: {
        beforeChange: [
          ({ data }) => {
            if (!data?.submissionData || !Array.isArray(data.submissionData)) return data

            // Helper to find field values by name pattern
            const findValue = (patterns: string[]) => {
              const field = data.submissionData.find((f: any) => {
                if (!f?.field || typeof f.field !== 'string') return false
                const key = f.field.toLowerCase()
                return patterns.some((p) => key === p.toLowerCase() || key.includes(p.toLowerCase()))
              })
              return field?.value
            }

            // Map fields with expanded patterns
            const name = findValue(['name', 'full name', 'first name', 'contact name'])
            const email = findValue(['email', 'email address'])
            const phone = findValue(['phone', 'mobile', 'contact number', 'tel'])
            const resume = findValue(['resume', 'cv', 'pdf', 'file', 'attachment'])
            const job = findValue(['job', 'position', 'role', 'apply', 'applying', 'vacancy'])

            // Populate structured fields
            if (name) {
              data.name = name
              data.title = name
            } else if (email) {
              data.title = email
            } else {
              data.title = `Submission ${new Date().toLocaleDateString()}`
            }

            if (email) data.email = email
            if (phone) data.phoneNumber = phone
            if (resume) data.resume = resume
            if (job) data.jobPosition = job

            return data
          },
        ],
      },
      admin: {
        useAsTitle: 'id',
        defaultColumns: ['id', 'form', 'createdAt'],
        hidden: true,
      },
      access: {
        read: isSuperOrClientAdmin,
        update: isSuperOrClientAdmin,
        create: () => true,
        delete: isSuperOrClientAdmin,
      },
    },
  }),
  searchPlugin({
    collections: [...pageSlugs, 'posts'],
    beforeSync: beforeSyncWithSearch,
    searchOverrides: {
      fields: ({ defaultFields }) => {
        return [...defaultFields, ...searchFields]
      },
    },
  }),
]
