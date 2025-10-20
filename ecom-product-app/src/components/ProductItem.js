import { Link } from 'react-router-dom';
import React from 'react';
import './ProductItem.css';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p><strong>{`$${product.price.toFixed(2)}`}</strong></p>
      <p>{product.description}</p>
      <button
        className="add-to-cart"
        onClick={() => alert(`Added ${product.name} to cart`)}
      >
        Add to Cart
      </button>
      <Link to={`/products/${product.id}`} className="view-details">
        View Details
      </Link>
    </div>
  );
}

export default ProductItem;
