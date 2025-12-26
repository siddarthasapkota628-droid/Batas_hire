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

const pageSlugs = [
  'pages',
  'about-page',
  'services-page',
  'career-page',
  'home-page',
  'how-it-works-page',
  'knowledge-center-page',
  'faq-page',
  'contact-page',
  'legal-page',
  'notice-page',
]

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

            // Find specific fields in the dynamic submissionData array
            const nameField = data.submissionData.find((field: any) => {
              if (!field?.field || typeof field.field !== 'string') return false
              const key = field.field.toLowerCase()
              return key === 'name' || key.includes('name') || key.includes('full') || key.includes('first')
            })

            const emailField = data.submissionData.find((field: any) =>
              field?.field && typeof field.field === 'string' && ['email', 'Email'].includes(field.field)
            )

            const phoneField = data.submissionData.find((field: any) => {
              if (!field?.field || typeof field.field !== 'string') return false
              const key = field.field.toLowerCase()
              return key.includes('phone') || key.includes('mobile') || key.includes('contact')
            })

            const resumeField = data.submissionData.find((field: any) => {
              if (!field?.field || typeof field.field !== 'string') return false
              const key = field.field.toLowerCase()
              return key.includes('pdf') || key.includes('resume') || key.includes('file') || key.includes('cv')
            })

            const jobPositionField = data.submissionData.find((field: any) => {
              if (!field?.field || typeof field.field !== 'string') return false
              const key = field.field.toLowerCase()
              return key.includes('job') || key.includes('position') || key.includes('role')
            })

            // Populate structured fields
            if (nameField?.value) {
              data.name = nameField.value
              data.title = nameField.value
            } else if (emailField?.value) {
              data.title = emailField.value
            } else {
              data.title = 'Submission'
            }

            if (emailField?.value) data.email = emailField.value
            if (phoneField?.value) data.phoneNumber = phoneField.value
            if (resumeField?.value) data.resume = resumeField.value
            if (jobPositionField?.value) data.jobPosition = jobPositionField.value

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
