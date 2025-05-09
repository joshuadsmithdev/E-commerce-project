import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail">
      <Link to="/" className="back-link">← Back to Products</Link>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p><strong>${product.price.toFixed(2)}</strong></p>
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
