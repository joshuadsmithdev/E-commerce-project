import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductItem 
                    key={product.id} 
                    name={product.name} 
                    price={product.price} 
                    description={product.description} 
                />
            ))}
        </div>
    );
};

export default ProductList;