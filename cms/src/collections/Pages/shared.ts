import { CollectionConfig, Field } from 'payload'
import { hero } from '@/heros/config'
import { slugField } from 'payload'
import {
    MetaDescriptionField,
    MetaImageField,
    MetaTitleField,
    OverviewField,
    PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { CallToAction } from '../../blocks/CallToAction/config'
import { Content } from '../../blocks/Content/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { Archive } from '../../blocks/ArchiveBlock/config'
import { FormBlock } from '../../blocks/Form/config'

// Import all page-specific tabs
import { AboutPage } from './About'
import { ServicesPage } from './Services'
import { HowItWorksPage } from './HowItWorks'
import { CareerPage } from './Career'
import { KnowledgeCenterPage } from './KnowledgeCenter'
import { FAQPage } from './FAQPage'
import { ContactPage } from './Contact'
import { LegalPage } from './LegalPage'
import { NoticePage } from './NoticePage'
import { HomePage } from './Home'

// Import shared logic
import { isSuperAdmin } from '../../access/isSuperAdmin'
import { checkRole } from '../../access/rbac'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

export const basePageFields: Field[] = [
    {
        name: 'title',
        type: 'text',
        required: true,
    },
    {
        name: 'publishedAt',
        type: 'date',
        admin: { position: 'sidebar' },
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
        admin: { position: 'sidebar', hidden: true },
    },
]

export const getAllTabs = (activeTemplate: string): any[] => {
    return [
        { fields: [hero], label: 'Hero' },
        {
            fields: [
                {
                    name: 'layout',
                    type: 'blocks',
                    blocks: [CallToAction, Content, MediaBlock, Archive, FormBlock],
                    admin: { initCollapsed: true },
                },
            ],
            label: 'Content',
        },
        // Page Specific Tabs - only visible if they match the template
        { ...AboutPage, admin: { ...AboutPage.admin, condition: (data: any) => activeTemplate === 'about' && data?.template === 'about' } },
        { ...ServicesPage, admin: { ...ServicesPage.admin, condition: (data: any) => activeTemplate === 'services' && data?.template === 'services' } },
        { ...HowItWorksPage, admin: { ...HowItWorksPage.admin, condition: (data: any) => activeTemplate === 'how-it-works' && data?.template === 'how-it-works' } },
        { ...CareerPage, admin: { ...CareerPage.admin, condition: (data: any) => activeTemplate === 'career' && data?.template === 'career' } },
        { ...KnowledgeCenterPage, admin: { ...KnowledgeCenterPage.admin, condition: (data: any) => activeTemplate === 'knowledge-center' && data?.template === 'knowledge-center' } },
        { ...FAQPage, admin: { ...FAQPage.admin, condition: (data: any) => activeTemplate === 'faq' && data?.template === 'faq' } },
        { ...ContactPage, admin: { ...ContactPage.admin, condition: (data: any) => activeTemplate === 'contact' && data?.template === 'contact' } },
        { ...LegalPage, admin: { ...LegalPage.admin, condition: (data: any) => activeTemplate === 'legal' && data?.template === 'legal' } },
        { ...NoticePage, admin: { ...NoticePage.admin, condition: (data: any) => activeTemplate === 'notice' && data?.template === 'notice' } },
        { ...HomePage, admin: { ...HomePage.admin, condition: (data: any) => activeTemplate === 'home' && data?.template === 'home' } },
        {
            name: 'meta',
            label: 'SEO',
            fields: [
                OverviewField({
                    titlePath: 'meta.title',
                    descriptionPath: 'meta.description',
                    imagePath: 'meta.image',
                }),
                MetaTitleField({ hasGenerateFn: true }),
                MetaImageField({ relationTo: 'media' }),
                MetaDescriptionField({}),
                PreviewField({
                    hasGenerateFn: true,
                    titlePath: 'meta.title',
                    descriptionPath: 'meta.description',
                }),
            ],
        },
    ]
}

const setTemplate = (template: string) => ({ data }: any) => {
    return {
        ...data,
        template,
    }
}

export const createVirtualPageCollection = (slug: string, template: string, label: string): CollectionConfig => ({
    slug,
    dbName: 'pages',
    lockDocuments: false,
    admin: {
        useAsTitle: 'title',
        group: 'Pages',
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
    },
    access: {
        create: isSuperAdmin,
        delete: checkRole('pages', 'delete'),
        read: (args: any) => {
            const { req: { user } } = args
            const templateFilter = { template: { equals: template } }

            // 1. If no user (Public/Frontend), allow reading published documents of this template
            if (!user) {
                return {
                    and: [
                        { _status: { equals: 'published' } },
                        templateFilter
                    ]
                }
            }

            // 2. If user exists, strictly enforce RBAC and filter by template
            const rbac = checkRole('pages', 'read')(args)
            if (!rbac) return false
            if (typeof rbac === 'boolean') return templateFilter
            return { and: [rbac, templateFilter] }
        },
        update: checkRole('pages', 'update'),
    },
    fields: [
        ...basePageFields,
        {
            type: 'tabs',
            tabs: getAllTabs(template),
        },
        slugField(),
    ],
    hooks: {
        afterChange: [revalidatePage],
        beforeChange: [populatePublishedAt, setTemplate(template)],
        afterDelete: [revalidateDelete],
    },
    versions: {
        drafts: {
            autosave: { interval: 100 },
            schedulePublish: true,
        },
        maxPerDoc: 50,
    },
})
