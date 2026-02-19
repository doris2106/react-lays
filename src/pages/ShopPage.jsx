import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const products = [
  { id: 1, name: '🥔 Classic Salted', priceUSD: 2.99, priceINR: 249 },
  { id: 2, name: '🌶️ Salt & Vinegar', priceUSD: 2.99, priceINR: 249 },
  { id: 3, name: '🔥 Chile Limon', priceUSD: 3.49, priceINR: 289 },
  { id: 4, name: '🧅 Cream & Onion', priceUSD: 2.99, priceINR: 249 }
]

export default function ShopPage() {
  const [cart, setCart] = useState([])
  const navigate = useNavigate()

  const addToCart = (product) => {
    setCart([...cart, product])
    alert(`${product.name} added to cart!`)
  }

  return (
    <div className="shop-page">
      <section className="shop-hero">
        <div className="shop-header">
          <h1>Welcome to Lay's Shop</h1>
          <p>Choose from our premium selection of delicious flavours</p>
        </div>
      </section>

      <section className="shop-products-section">
        <div className="section-container">
          <h2>Our Products</h2>
          <div className="shop-grid">
            {products.map(product => (
              <div key={product.id} className="shop-card">
                <div className="shop-card-content">
                  <h3>{product.name}</h3>
                  <div className="shop-price">
                    <span className="price-inr">₹{product.priceINR}</span>
                    <span className="price-usd">${product.priceUSD}</span>
                  </div>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shop-footer-section">
        <div className="section-container">
          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <p className="cart-count">Items in cart: <strong>{cart.length}</strong></p>
            {cart.length > 0 && (
              <div className="cart-items">
                {cart.map((item, idx) => (
                  <div key={idx} className="cart-item">
                    {item.name} - ₹{item.priceINR}
                  </div>
                ))}
                <div className="cart-total">
                  Total: ₹{cart.reduce((sum, item) => sum + item.priceINR, 0)}
                </div>
              </div>
            )}
          </div>
          <div className="shop-actions">
            <button className="btn-secondary" onClick={() => navigate('/')}>
              Continue Shopping
            </button>
            {cart.length > 0 && (
              <button className="btn-primary" onClick={() => alert('Proceeding to checkout...')}>
                Checkout
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
