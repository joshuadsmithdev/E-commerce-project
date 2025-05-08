function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p><strong>${product.price.toFixed(2)}</strong></p>
      <p>{product.description}</p>
    </div>
  );
}
