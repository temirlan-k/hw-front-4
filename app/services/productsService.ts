import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchProducts = async () => {
    const response = await axiosInstance.get('/products');
    return response.data;
};

export const createProduct = async (product: any) => {
    const response = await axiosInstance.post('/products', product);
    return response.data;
};
