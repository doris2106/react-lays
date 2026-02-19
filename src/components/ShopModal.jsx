import React from 'react'

const products = [
  { id: 1, name: '🥔 Classic Salted', price: '$2.99' },
  { id: 2, name: '🌶️ Salt & Vinegar', price: '$2.99' },
  { id: 3, name: '🔥 Chile Limon', price: '$3.49' },
  { id: 4, name: '🧅 Cream & Onion', price: '$2.99' }
]

export default function ShopModal({ open, onClose }) {
  if (!open) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Welcome to Lay's Shop</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <div className="shop-products">
            {products.map(product => (
              <div key={product.id} className="shop-product-item">
                <h4>{product.name}</h4>
                <p className="product-price">{product.price}</p>
                <button className="add-btn">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Close</button>
          <button className="btn-primary" onClick={() => alert('Proceeding to checkout...')}>Go to Shop</button>
        </div>
      </div>
    </div>
  )
}
