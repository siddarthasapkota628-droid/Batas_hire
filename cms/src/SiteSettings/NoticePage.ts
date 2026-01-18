import type { GlobalConfig } from 'payload'
import { checkRole } from '../access/rbac'

export const NoticesPage: GlobalConfig = {
  slug: 'notices-page',
  label: 'Notice Page',
  admin: {
    group: 'Pages',
  },

  access: {
    read: () => true, // Publicly accessible for the frontend
    update: checkRole('notices-page', 'update'),
  },

  fields: [
    {
      type: 'tabs',
      tabs: [
        // ================= HEADER =================
        {
          label: 'Header',
          fields: [
            {
              name: 'noticesHeaderTitle',
              type: 'text',
              localized: true,
              defaultValue: 'Notices & Updates',
              label: 'Header Title',
            },
            {
              name: 'noticesHeaderSubtitle',
              type: 'textarea',
              localized: true,
              defaultValue:
                'Stay informed about important announcements, policy updates, and service changes from Batas Hire and Purchase.',
              label: 'Header Subtitle',
            },
          ],
        },

        // ================= NOTICES LIST =================
        {
          label: 'Notices List',
          fields: [
            {
              name: 'notices',
              type: 'array',
              label: 'Notices',
              minRows: 1,
              admin: {
                disableVersioning: true, // ✅ important for Postgres arg limit safety
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  localized: true,
                  required: true,
                },
                {
                  name: 'date',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'content',
                  type: 'textarea',
                  localized: true,
                  required: true,
                },
                {
                  name: 'type',
                  type: 'select',
                  label: 'Notice Type',
                  options: [
                    { label: 'Important', value: 'Important' },
                    { label: 'Service Update', value: 'Service Update' },
                    { label: 'Policy Update', value: 'Policy Update' },
                    { label: 'Holiday Notice', value: 'Holiday Notice' },
                    { label: 'Product Launch', value: 'Product Launch' },
                  ],
                  defaultValue: 'Important',
                },
                {
                  name: 'icon',
                  type: 'select',
                  label: 'Icon',
                  options: [
                    { label: 'Alert Triangle', value: 'AlertTriangle' },
                    { label: 'Info', value: 'Info' },
                    { label: 'File Text', value: 'FileText' },
                    { label: 'Calendar', value: 'Calendar' },
                    { label: 'Bell', value: 'Bell' },
                  ],
                  defaultValue: 'Info',
                },
              ],
            },
          ],
        },

        // ================= BOTTOM SECTIONS =================
        {
          label: 'Bottom Sections',
          fields: [
            {
              name: 'contactSection',
              type: 'group',
              label: 'Contact Support Section',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  localized: true,
                  defaultValue: 'Need More Information?',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  localized: true,
                  defaultValue:
                    'If you have questions about any of these notices or need clarification on how they affect your account, our customer support team is here to help.',
                },
                {
                  name: 'primaryButtonText',
                  type: 'text',
                  localized: true,
                  defaultValue: 'Contact Support',
                },
                {
                  name: 'primaryButtonLink',
                  type: 'text',
                  defaultValue: '/contact',
                },
                {
                  name: 'secondaryButtonText',
                  type: 'text',
                  localized: true,
                  defaultValue: 'Call 1800-123-4567',
                },
                {
                  name: 'secondaryButtonLink',
                  type: 'text',
                  defaultValue: 'tel:1800-123-4567',
                },
              ],
            },
            {
              name: 'subscribeSection',
              type: 'group',
              label: 'Subscribe Section',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  localized: true,
                  defaultValue: 'Subscribe to Notice Updates',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  localized: true,
                  defaultValue:
                    'Get notified about important updates and announcements via email.',
                },
                {
                  name: 'buttonText',
                  type: 'text',
                  localized: true,
                  defaultValue: 'Subscribe',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
