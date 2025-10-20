import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { useState } from "react";
import "./App.css";

function App() {
  const [products] = useState([
    { id: 1, name: "RGB Mechanical Keyboard", price: 89.99, description: "Tactile keys, customizable lighting, and fast response", image: "/images/gaming-keyboard.jpg", category: "Keyboard" },
    { id: 2, name: "Pro Gaming Mouse",        price: 49.99, description: "High DPI, ergonomic design, and programmable buttons",   image: "/images/gaming-mouse.jpg",    category: "Mouse" },
    { id: 3, name: "Gaming Headset",          price: 69.99, description: "Surround sound with noise-cancelling mic",               image: "/images/gaming-headset.jpg",  category: "Headset" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const Catalog = (
    <>
      <header
        className="hero"
        style={{ backgroundImage: "url('/images/gaming-banner.jpg')" }}
      >
        <h1>Level Up Your Game</h1>
        <p>Shop elite gaming gear built for champions.</p>
      </header>

      <div className="filter-buttons">
        {["All", "Keyboard", "Mouse", "Headset"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>

      <section className="featured">
        <h2>Featured Gear</h2>
        <ProductList products={filteredProducts} />
      </section>
    </>
  );

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="logo">🎮 GameHub</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={Catalog} />
          <Route path="/products" element={Catalog} />
          <Route path="/products/:id" element={<ProductDetail products={products} />} />
          <Route path="/contact" element={<p style={{padding: 24}}>Email us at support@example.com</p>} />
        </Routes>

        <footer>
          <p>&copy; {new Date().getFullYear()} GameHub Gear. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
