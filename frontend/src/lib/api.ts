import axios from 'axios';
export const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export const getGlobal = async (slug: string) => {
    const response = await api.get(`/globals/${slug}`);
    return response.data;
};

export const getPages = async () => {
    const response = await api.get('/pages?where[slug][equals]=about&depth=2');
    return response.data;
};
