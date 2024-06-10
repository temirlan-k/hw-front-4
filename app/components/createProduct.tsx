// pages/create-product.tsx
'use client'
// pages/create-product.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './CreateProduct.module.css'; // Import CSS module

interface FormData {
    title: string;
    description: string;
    price: string;
    category: string;
    image: string;
}

const CreateProduct: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        title: '',
        description: '',
        price: '',
        category: '',
        image: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log('Product created:', data);
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Create Product</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                {/* Form fields */}
            </form>
        </div>
    );
};

export default CreateProduct;
