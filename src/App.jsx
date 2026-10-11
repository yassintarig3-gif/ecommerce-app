import { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Oversized T-Shirt",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Streetwear Hoodie",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "Cargo Pants",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      name: "Classic Sneakers",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">TARIG</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-buttons">
          <button>Login</button>
          <button>Register</button>

          <button className="cart-btn">
            🛒 Cart ({cart.length})
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="welcome">WELCOME TO TARIG STORE</p>

          <h1>
            Discover Your
            <span> Perfect Style</span>
          </h1>

          <p className="hero-text">
            Find modern fashion, quality products and amazing deals
            all in one place.
          </p>

          <button className="shop-btn">
            Shop Now
          </button>
        </div>

        <div className="hero-card">
          <div className="tarig-circle">T</div>
          <h2>TARIG</h2>
          <p>Modern • Simple • Stylish</p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section" id="products">

        <p className="section-label">OUR COLLECTION</p>

        <h2>Featured Products</h2>

        <p className="section-description">
          Explore our latest fashion collection
        </p>

        <div className="products-grid">

          {products.map((product) => (
            <div className="product-card" key={product.id}>

              <img
                src={product.image}
                alt={product.name}
              />

              <div className="product-info">

                <h3>{product.name}</h3>

                <div className="product-bottom">

                  <strong>
                    ₹{product.price}
                  </strong>

                  <button
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">

        <div>
          <p className="section-label">ABOUT TARIG</p>

          <h2>Style Made Simple</h2>

          <p>
            TARIG is a modern e-commerce store focused on
            stylish fashion, quality products and a simple
            shopping experience.
          </p>

          <p>
            Our goal is to bring modern streetwear and
            everyday fashion to everyone.
          </p>
        </div>

        <div className="about-box">
          <span>T</span>
          <h3>TARIG</h3>
          <p>Modern • Simple • Stylish</p>
        </div>

      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">

        <p className="section-label">GET IN TOUCH</p>

        <h2>Contact TARIG</h2>

        <p>
          Have a question? We'd love to hear from you.
        </p>

        <button>
          Contact Us
        </button>

      </section>

      {/* FOOTER */}
      <footer>
        <h2>TARIG</h2>

        <p>
          Modern fashion. Simple shopping.
        </p>

        <p className="copyright">
          © 2026 TARIG Store. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;