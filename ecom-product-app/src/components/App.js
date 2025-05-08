import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

const App = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 29.99, description: 'Description for Product 1' },
        { id: 2, name: 'Product 2', price: 39.99, description: 'Description for Product 2' },
        { id: 3, name: 'Product 3', price: 49.99, description: 'Description for Product 3' },
    ]);

    return (
        <div className="app">
            <h1>E-Commerce Product Listing</h1>
            <ProductList products={products} />
        </div>
    );
};

export default App;