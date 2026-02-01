import axios from 'axios'
import {
  AboutPage,
  HomePage,
  ServicesPage,
  HowItWorksPage,
  CareerPage,
  KnowledgeCenterPage,
  FaqPage,
  ContactPage,
  LegalPage,
  Header as HeaderType,
  Footer as FooterType,
  SiteSetting,
  Form,
} from '../types/payload-types'

/* ===============================
   Payload collection response
================================ */
interface PayloadCollectionResponse<T> {
  docs: T[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
}

/* ===============================
   AXIOS INSTANCE (CRITICAL FIX)
================================ */
export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  withCredentials: true, // 🔥 REQUIRED FOR PAYLOAD
})

/* ===============================
   GLOBALS
================================ */
export const getGlobal = async (slug: string, locale?: string) => {
  const localeQuery = locale ? `&locale=${locale}` : ''
  const res = await api.get(`/globals/${slug}?depth=1${localeQuery}`)
  return res.data
}

export const getHeader = async (locale?: string): Promise<HeaderType> => {
  const localeQuery = locale ? `&locale=${locale}` : ''
  const res = await api.get(`/globals/header?depth=1${localeQuery}`)
  return res.data
}

export const getFooter = async (locale?: string): Promise<FooterType> => {
  const localeQuery = locale ? `&locale=${locale}` : ''
  const res = await api.get(`/globals/footer?depth=1${localeQuery}`)
  return res.data
}

export const getSiteSettings = async (locale?: string): Promise<SiteSetting> => {
  const localeQuery = locale ? `&locale=${locale}` : ''
  const res = await api.get(`/globals/site-settings?depth=1${localeQuery}`)
  return res.data
}

/* ===============================
   PAGES
================================ */
const pageQuery = (slug: string, locale?: string, depth = 2) => {
  const localeQuery = locale ? `&locale=${locale}` : ''
  return `?where[slug][equals]=${slug}&depth=${depth}${localeQuery}`
}

export const getHomePage = async (locale?: string) =>
  (await api.get(`/home-page${pageQuery('home', locale)}`)).data

export const getAboutPage = async (locale?: string) =>
  (await api.get(`/about-page${pageQuery('about', locale)}`)).data

export const getServicesPage = async (locale?: string) =>
  (await api.get(`/services-page${pageQuery('services', locale)}`)).data

export const getHowItWorksPage = async (locale?: string): Promise<HowItWorksPage> =>
  (await api.get(`/how-it-works-page${pageQuery('how-it-works', locale)}`)).data.docs[0]

export const getCareerPage = async (locale?: string): Promise<CareerPage> =>
  (await api.get(`/career-page${pageQuery('career', locale)}`)).data.docs[0]

export const getKnowledgeCenterPage = async (locale?: string): Promise<KnowledgeCenterPage> =>
  (await api.get(`/knowledge-center-page${pageQuery('knowledge-center', locale)}`)).data.docs[0]

export const getFAQPage = async (locale?: string): Promise<FaqPage> =>
  (await api.get(`/faq-page?where[template][equals]=faq${locale ? `&locale=${locale}` : ''}`)).data.docs[0]

export const getContactPage = async (locale?: string): Promise<ContactPage> =>
  (await api.get(`/contact-page?where[template][equals]=contact${locale ? `&locale=${locale}` : ''}`)).data.docs[0]

export const getLegalPage = async (locale?: string): Promise<LegalPage> =>
  (await api.get(`/legal-page?where[template][equals]=legal${locale ? `&locale=${locale}` : ''}`)).data.docs[0]

export const getNoticePage = async (locale?: string) =>
  (await api.get(`/globals/notices-page?depth=2${locale ? `&locale=${locale}` : ''}`)).data

/* ===============================
   FORMS
================================ */
export const getForm = async (formId: string, locale?: string): Promise<Form> =>
  (await api.get(`/forms/${formId}${locale ? `?locale=${locale}` : ''}`)).data

export const submitForm = async (formId: string, data: any) =>
  (await api.post('/form-submissions', {
    form: formId,
    submissionData: Object.entries(data).map(([field, value]) => ({ field, value })),
  })).data

/* ===============================
   MEDIA
================================ */
export const uploadMedia = async (file: File) => {
  const formData = new FormData()
  formData.append('file', file)

  return (await api.post('/media', formData)).data
}

export const getMediaUrl = (url?: string) => {
  if (!url) return ''
  if (url.startsWith('http')) return url
  return `${import.meta.env.VITE_API_URL}${url}`
}
