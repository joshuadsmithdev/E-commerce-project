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
      image: '/images/keyboard.jpg',
    },
    {
      id: 2,
      name: 'Pro Gaming Mouse',
      price: 49.99,
      description: 'High DPI, ergonomic design, and programmable buttons',
      image: '/images/mouse.jpg',
    },
    {
      id: 3,
      name: 'Gaming Headset',
      price: 69.99,
      description: 'Surround sound with noise-cancelling mic',
      image: '/images/headset.jpg',
    },
  ]);

  return (
    <div className="App">
      <header className="hero"
              style={{ backgroundImage: "url('/images/gaming-banner.jpg')" }}
      >
              <h1>Level Up Your Game</h1>
              <p>Shop elite gaming gear built for champions.</p>
      </header>

      <section className="featured">
        <h2>Featured Gear</h2>
        <ProductList products={products} />
      </section>
      <footer>
        <p>&copy; 2025 GameHub Gear. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
