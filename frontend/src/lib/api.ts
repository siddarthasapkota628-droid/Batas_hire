import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export const getGlobal = async (slug: string) => {
    const response = await api.get(`/globals/${slug}`);
    return response.data;
};

// Get About Page
export const getAboutPage = async () => {
    const response = await api.get('/pages?where[slug][equals]=about&depth=2');
    return response.data;
};

// Get Home Page
export const getHomePage = async () => {
    const response = await api.get('/pages?where[slug][equals]=home&depth=2');
    return response.data;
};

// Get Services Page
export const getServicesPage = async () => {
    const response = await api.get('/pages?where[slug][equals]=services&depth=2');
    return response.data;
};

// Get How It Works Page
export const getHowItWorksPage = async () => {
    const response = await api.get('/pages?where[slug][equals]=how-it-works');
    return response.data.docs[0];
};

export const getCareerPage = async () => {
    const response = await api.get('/pages?where[slug][equals]=career');
    return response.data.docs[0];
};

export const getKnowledgeCenterPage = async () => {
    const response = await api.get('/pages?where[slug][equals]=knowledge-center');
    return response.data.docs[0];
};

// Get Form by ID
export const getForm = async (formId: string) => {
    const response = await api.get(`/forms/${formId}`);
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

export const getFAQPage = async () => {
    const response = await api.get('/pages?where[template][equals]=faq');
    return response.data.docs[0];
};

export const getContactPage = async () => {
    const response = await api.get('/pages?where[template][equals]=contact');
    return response.data.docs[0];
};

export const getLegalPage = async () => {
    const response = await api.get('/pages?where[template][equals]=legal');
    return response.data.docs[0];
};

export const getNoticePage = async () => {
    const response = await api.get('/pages?where[template][equals]=notice');
    return response.data.docs[0];
};

export const getHeader = async () => {
    const response = await api.get('/globals/header');
    return response.data;
};
