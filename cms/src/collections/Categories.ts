import type { CollectionConfig } from 'payload'

import { checkRole } from '../access/rbac'
import { anyone } from '../access/anyone'
import { slugField } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    create: checkRole('categories', 'create'),
    delete: checkRole('categories', 'delete'),
    read: anyone,
    update: checkRole('categories', 'update'),
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slugField({
      position: undefined,
    }),
  ],
}
