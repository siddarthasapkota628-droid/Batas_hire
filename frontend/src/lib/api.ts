import axios from 'axios';
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
    NoticePage,
    Header as HeaderType,
    Footer as FooterType,
    SiteSetting,
    Form
} from '../types/payload-types';

// Helper type for Payload collection responses
interface PayloadCollectionResponse<T> {
    docs: T[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | null;
    nextPage: number | null;
}

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
});

export const getGlobal = async (slug: string, locale?: string) => {
    const localeQuery = locale ? `&locale=${locale}` : '';
    const response = await api.get(`/globals/${slug}?depth=1${localeQuery}`);
    return response.data;
};

// Get About Page
export const getAboutPage = async (locale?: string): Promise<PayloadCollectionResponse<AboutPage>> => {
    const localeQuery = locale ? `&locale=${locale}` : '';
    const response = await api.get(`/about-page?where[slug][equals]=about&depth=2${localeQuery}`);
    return response.data;
};

// Get Home Page
export const getHomePage = async (locale?: string): Promise<PayloadCollectionResponse<HomePage>> => {
    const localeQuery = locale ? `&locale=${locale}` : '';
    const response = await api.get(`/home-page?where[slug][equals]=home&depth=2${localeQuery}`);
    return response.data;
};

// Get Services Page
export const getServicesPage = async (locale?: string): Promise<PayloadCollectionResponse<ServicesPage>> => {
    const localeQuery = locale ? `&locale=${locale}` : '';
    const response = await api.get(`/services-page?where[slug][equals]=services&depth=2${localeQuery}`);
    return response.data;
};

// Get How It Works Page
export const getHowItWorksPage = async (locale?: string): Promise<HowItWorksPage> => {
    const localeQuery = locale ? `&locale=${locale}` : '';
    const response = await api.get(`/how-it-works-page?where[slug][equals]=how-it-works${localeQuery}`);
    return response.data.docs[0];
};

export const getCareerPage = async (locale?: string): Promise<CareerPage> => {
    const localeQuery = locale ? `&locale=${locale}` : '';
    const response = await api.get(`/career-page?where[slug][equals]=career${localeQuery}`);
    return response.data.docs[0];
};

export const getKnowledgeCenterPage = async (locale?: string): Promise<KnowledgeCenterPage> => {
    const localeQuery = locale ? `&locale=${locale}` : '';
    const response = await api.get(`/knowledge-center-page?where[slug][equals]=knowledge-center${localeQuery}`);
    return response.data.docs[0];
};

// Get Form by ID
export const getForm = async (formId: string, locale?: string): Promise<Form> => {
    const localeQuery = locale ? `?locale=${locale}` : '';
    const response = await api.get(`/forms/${formId}${localeQuery}`);
    return response.data;
};

// Submit Form
export const submitForm = async (formId: string, data: any) => {
    const response = await api.post('/form-submissions', {
        form: formId,
        submissionData: Object.entries(data).map(([field, value]) => ({
            field,
            value,
        })),
    });
    return response.data;
};

// Generic function for any page type

export const getFAQPage = async (locale?: string): Promise<FaqPage> => {
    const localeQuery = locale ? `&locale=${locale}` : '';
    const response = await api.get(`/faq-page?where[template][equals]=faq${localeQuery}`);
    return response.data.docs[0];
};

export const getContactPage = async (locale?: string): Promise<ContactPage> => {
    const localeQuery = locale ? `&locale=${locale}` : '';
    const response = await api.get(`/contact-page?where[template][equals]=contact${localeQuery}`);
    return response.data.docs[0];
};

export const getLegalPage = async (locale?: string): Promise<LegalPage> => {
    const localeQuery = locale ? `&locale=${locale}` : '';
    const response = await api.get(`/legal-page?where[template][equals]=legal${localeQuery}`);
    return response.data.docs[0];
};

export const getNoticePage = async (locale?: string) => {
  const localeParam = locale ? `&locale=${locale}` : '';
  const response = await api.get(
    `/globals/notices-page?depth=2${localeParam}`
  );

  return response.data;
};

export const getHeader = async (locale?: string): Promise<HeaderType> => {
    const localeQuery = locale ? `&locale=${locale}` : '';
    const response = await api.get(`/globals/header?depth=1${localeQuery}`);
    return response.data;
};

export const getFooter = async (locale?: string): Promise<FooterType> => {
    const localeQuery = locale ? `&locale=${locale}` : '';
    const response = await api.get(`/globals/footer?depth=1${localeQuery}`);
    return response.data;
};

export const getSiteSettings = async (locale?: string): Promise<SiteSetting> => {
    const localeQuery = locale ? `&locale=${locale}` : '';
    const response = await api.get(`/globals/site-settings?depth=1${localeQuery}`);
    return response.data;
};

// Upload Media
export const uploadMedia = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await api.post('/media', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};
// Helper to get absolute Media URL
export const getMediaUrl = (url?: string) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `http://localhost:3000${url}`;
};
