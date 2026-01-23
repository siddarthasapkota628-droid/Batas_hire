import type { GlobalConfig } from 'payload'
import { checkRole } from '../access/rbac'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true, // Publicly accessible for the frontend
    update: checkRole('header', 'update'),
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      localized: true,
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 15,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'loginLabel',
      type: 'text',
      defaultValue: 'Login',
      localized: true,
    },
    {
      name: 'applyNowLabel',
      type: 'text',
      defaultValue: 'Apply Now',
      localized: true,
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
