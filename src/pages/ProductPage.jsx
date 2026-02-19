import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const productDetails = {
  classic: {
    name: 'Classic Salted',
    description: 'Our original and most beloved flavour. Perfectly salty with just the right amount of seasoning.',
    nutrition: { calories: 150, fat: 10, protein: 2, carbs: 15 },
    reviews: ['Amazing crispy taste!', 'Perfect for snacking', 'Best quality']
  },
  vinegar: {
    name: 'Salt & Vinegar',
    description: 'Bold and tangy with the perfect balance of salt and vinegar flavours.',
    nutrition: { calories: 150, fat: 10, protein: 2, carbs: 16 },
    reviews: ['Loved the tang', 'Great flavour', 'Very addictive']
  },
  chile: {
    name: 'Chile Limon',
    description: 'Spicy and zesty with a hint of lime. Perfect for those who like heat!',
    nutrition: { calories: 140, fat: 9, protein: 2, carbs: 15 },
    reviews: ['Spicy perfection', 'Love the kick', 'Amazing taste']
  },
  cream: {
    name: 'Cream & Onion',
    description: 'Creamy and savoury with subtle onion notes. Pure comfort in every bite.',
    nutrition: { calories: 150, fat: 10, protein: 2, carbs: 15 },
    reviews: ['So creamy', 'Outstanding flavour', 'My favourite']
  }
}

export default function ProductPage() {
  const [searchParams] = useSearchParams()
  const flavor = searchParams.get('flavor') || 'classic'
  const product = productDetails[flavor] || productDetails.classic
  const [activeTab, setActiveTab] = useState('description')

  return (
    <div className="product-page">
      <div className="section-container">
        <div className="product-detail">
          <div className="product-image-large">
            <img src={`https://via.placeholder.com/400?text=${product.name}`} alt={product.name} />
          </div>
          
          <div className="product-info">
            <h1>{product.name}</h1>
            <p className="product-price">$2.99</p>
            <button className="add-to-cart-btn" onClick={() => alert('Added to cart!')}>Add to Cart</button>

            {/* ACCORDION */}
            <div className="accordion">
              <div className="accordion-item">
                <button 
                  className={`accordion-header ${activeTab === 'description' ? 'active' : ''}`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                {activeTab === 'description' && (
                  <div className="accordion-content">
                    <p>{product.description}</p>
                  </div>
                )}
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-header ${activeTab === 'nutrition' ? 'active' : ''}`}
                  onClick={() => setActiveTab('nutrition')}
                >
                  Nutrition Facts
                </button>
                {activeTab === 'nutrition' && (
                  <div className="accordion-content">
                    <table className="nutrition-table">
                      <tbody>
                        <tr><td>Calories</td><td>{product.nutrition.calories}</td></tr>
                        <tr><td>Fat</td><td>{product.nutrition.fat}g</td></tr>
                        <tr><td>Protein</td><td>{product.nutrition.protein}g</td></tr>
                        <tr><td>Carbs</td><td>{product.nutrition.carbs}g</td></tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-header ${activeTab === 'reviews' ? 'active' : ''}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews
                </button>
                {activeTab === 'reviews' && (
                  <div className="accordion-content">
                    <ul>
                      {product.reviews.map((review, i) => <li key={i}>⭐ {review}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
