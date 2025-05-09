import React, { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [products] = useState([
    {
      id: 1,
      name: 'RGB Mechanical Keyboard',
      price: 89.99,
      description: 'Tactile keys, customizable lighting, and fast response',
      image: '/images/gaming-keyboard.jpg',
      category: 'Keyboard',
    },
    {
      id: 2,
      name: 'Pro Gaming Mouse',
      price: 49.99,
      description: 'High DPI, ergonomic design, and programmable buttons',
      image: '/images/gaming-mouse.jpg',
      category: 'Mouse',
    },
    {
      id: 3,
      name: 'Gaming Headset',
      price: 69.99,
      description: 'Surround sound with noise-cancelling mic',
      image: '/images/gaming-headset.jpg',
      category: 'Headset',
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredProducts = selectedCategory === 'All'
  ? products
  : products.filter(product => product.category === selectedCategory);


  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">🎮 GameHub</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <header className="hero"
              style={{ backgroundImage: "url('/images/gaming-banner.jpg')" }}
      >
              <h1>Level Up Your Game</h1>
              <p>Shop elite gaming gear built for champions.</p>
      </header>

      <section className="featured">
        <h2>Featured Gear</h2>
         <div className="filter-buttons">
            {['All', 'Keyboard', 'Mouse', 'Headset'].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'active' : ''}
    >
              {category}
            </button>
          ))}
        </div>

        <ProductList products={filteredProducts} />
      </section>
      <footer>
        <p>&copy; 2025 GameHub Gear. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
