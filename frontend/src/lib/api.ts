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
    const response = await api.get('/pages?where[slug][equals]=how-it-works&depth=2');
    return response.data;
};

// Generic function for any page type
