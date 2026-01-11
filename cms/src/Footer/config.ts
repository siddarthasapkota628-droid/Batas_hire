import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  lockDocuments: false,
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              name: 'description',
              type: 'textarea',
              required: true,
              defaultValue: 'Your trusted partner for flexible financing solutions. We provide transparent, accessible, and innovative financial services to help you achieve your goals.',
            },
            {
              name: 'contactInfo',
              type: 'group',
              fields: [
                {
                  name: 'phone',
                  type: 'text',
                  required: true,
                  defaultValue: '1800-123-4567 (Toll Free)',
                },
                {
                  name: 'email',
                  type: 'text',
                  required: true,
                  defaultValue: 'support@batas.com',
                },
                {
                  name: 'address',
                  type: 'textarea',
                  required: true,
                  defaultValue: 'Batas Tower, Kathmandu,\nNepal',
                },
              ],
            },
            {
              name: 'socialLinks',
              type: 'array',
              fields: [
                {
                  name: 'platform',
                  type: 'select',
                  options: [
                    { label: 'Facebook', value: 'facebook' },
                    { label: 'Twitter', value: 'twitter' },
                    { label: 'LinkedIn', value: 'linkedin' },
                    { label: 'Instagram', value: 'instagram' },
                  ],
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'copyrightText',
              type: 'text',
              required: true,
              defaultValue: '© 2024 Batas Hire and Purchase Financial Services Pvt. Ltd. All rights reserved. | NBFC License No: N-12345',
            },
          ],
        },
        {
          label: 'Navigation',
          fields: [
            {
              name: 'quickLinks',
              type: 'array',
              label: 'Quick Links',
              fields: [
                link({
                  appearances: false,
                }),
              ],
              admin: {
                initCollapsed: true,
                components: {
                  RowLabel: '@/Footer/RowLabel#RowLabel',
                },
              },
            },
            {
              name: 'ourProducts',
              type: 'array',
              label: 'Our Products',
              fields: [
                link({
                  appearances: false,
                }),
              ],
              admin: {
                initCollapsed: true,
                components: {
                  RowLabel: '@/Footer/RowLabel#RowLabel',
                },
              },
            },
            {
              name: 'legalCompliance',
              type: 'array',
              label: 'Legal & Compliance',
              fields: [
                link({
                  appearances: false,
                }),
              ],
              admin: {
                initCollapsed: true,
                components: {
                  RowLabel: '@/Footer/RowLabel#RowLabel',
                },
              },
            },
          ],
        },
        {
          label: 'Newsletter',
          fields: [
            {
              name: 'newsletter',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  defaultValue: 'Stay Updated',
                },
                {
                  name: 'description',
                  type: 'text',
                  required: true,
                  defaultValue: 'Get the latest financial tips and product updates',
                },
                {
                  name: 'placeholder',
                  type: 'text',
                  required: true,
                  defaultValue: 'Your email',
                },
                {
                  name: 'buttonLabel',
                  type: 'text',
                  required: true,
                  defaultValue: 'Subscribe',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
