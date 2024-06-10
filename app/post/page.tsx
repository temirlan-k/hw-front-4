// pages/index.tsx
import Head from 'next/head';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import CreateProduct from '../components/createProduct';


export default function PostPages() {
    return (
        <div>
            <Header />
            <main>
                <h1>asd</h1>
                <ProductList />
            </main>
        </div>
    );
}
