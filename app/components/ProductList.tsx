// components/ProductList.tsx
'use client'
// components/ProductList.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css'; // Import CSS file

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
                setProducts(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching products');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div className="text-center py-10">Loading...</div>;
    if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

    return (
        <div className="container">
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <h2 className="product-title">{product.title}</h2>
                        <p className="product-price">{product.price} USD</p>
                        <button className="add-to-cart-button">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
