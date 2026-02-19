
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewsletterForm from "../components/NewsletterForm";
import ProductSlider from "../components/ProductSlider";
import Testimonials from "../components/Testimonials";
import avatar2 from "../assets/avatar2.svg";
import avatar3 from "../assets/avatar3.svg";

export default function HomePage() {
  const navigate = useNavigate();

  // Custom slides array passed via props to ProductSlider
  const productSlides = [
    { id: 1, img: "/66.webp", alt: "Classic", title: "Classic", color: "yellow" },
    { id: 2, img: "/11.webp", alt: "Chile Limon", title: "Chile Limon", color: "red" },
    { id: 3, img: "/44.webp", alt: "Tomato", title: "Tomato", color: "green" },
    { id: 4, img: "/vinegar.png", alt: "Salt & Vinegar", title: "Salt & Vinegar", color: "lightgreen" },
    { id: 5, img: "/22.webp", alt: "Cream & Onion", title: "Cream & Onion", color: "darkred" },
    { id: 6, img: "/55.webp", alt: "Wavy Original", title: "Wavy Original", color: "darkred" },
    { id: 7, img: "/66.webp", alt: "Wavy Original 2", title: "Wavy Original", color: "darkred" },
    { id: 8, img: "/77.webp", alt: "Wavy Original 3", title: "Wavy Original", color: "darkred" },
  ];

  // Testimonials data passed via props to Testimonials component
  const testimonials = [
    // public folder image (no import)
    { name: 'Aisha K.', quote: "These crisps make every party better!", avatar: '/avatars/avatar1.svg' },
    // imported (bundled) images
    { name: 'Marco R.', quote: "Love the bold flavours — my go-to snack.", avatar: avatar2 },
    { name: 'Sofia L.', quote: "Crispy, tasty, and perfect with dips.", avatar: avatar3 },
    { name: 'Liam P.', quote: "Perfect crunch and seasoning every time.", avatar: '/avatars/avatar2.svg' },
    { name: 'Nora B.', quote: "My movie nights wouldn't be the same without these.", avatar: avatar2 },
    { name: 'Diego V.', quote: "A flavour for every mood — highly recommend!", avatar: avatar3 },
    { name: 'Priya S.', quote: "Snack time upgraded — love the variety.", avatar: '/avatars/avatar1.svg' },
    { name: 'Omar H.', quote: "Great taste and crunch — always fresh.", avatar: avatar2 },
    { name: 'Lina G.', quote: "I keep coming back for more flavours!", avatar: avatar3 },
    { name: 'Ethan W.', quote: "Perfect for sharing with friends.", avatar: '/avatars/avatar2.svg' },
    { name: 'Maya K.', quote: "Crisps that bring everyone to the table.", avatar: avatar3 },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" id="top">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content">
            <button
              className="cta-button"
              onClick={() => navigate('/shop')}
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* TAGLINE */}
      <section className="tagline-section">
        <h2>Made for Every Moment</h2>
        <p>
          Whether you're celebrating with friends or enjoying a quiet moment,
          Lay's is the perfect companion.
        </p>
      </section>

      {/* PRODUCT SLIDER (receives slides via props) */}
      <ProductSlider slides={productSlides} />

      {/* FLAVOURS SHOWCASE */}
      <section className="flavours-showcase" id="flavours">
        <div className="section-container">
          <h2 className="section-title">
            Explore Our World of Flavours
          </h2>

          <div className="flavours-grid">
            <div className="flavour-item">
              <img src="/light.jpg" alt="Flavour Variant 1" />
              <div className="flavour-info">
                <h4>Crispy & Light</h4>
              </div>
            </div>

            <div className="flavour-item">
              <img src="/bold.png" alt="Flavour Variant 2" />
              <div className="flavour-info">
                <h4>Bold & Daring</h4>
              </div>
            </div>

            <div className="flavour-item">
              <img src="/classic.jpg" alt="Flavour Variant 3" />
              <div className="flavour-info">
                <h4>Classic & Timeless</h4>
              </div>
            </div>

            <div className="flavour-item">
              <img src="/exotic.jpg" alt="Flavour Variant 4" />
              <div className="flavour-info">
                <h4>Exotic & Adventurous</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE SECTION */}
      <section className="lifestyle" id="recipes">
        <div className="section-container">
          <h2 className="section-title">Inspiration & Recipes</h2>

          <div className="lifestyle-grid">
            <div className="lifestyle-card">
              <div className="lifestyle-image">
                <img src="/rec.png" alt="Creative Recipes" />
              </div>
              <div className="lifestyle-content">
                <h3>Creative Recipes</h3>
                <p>
                  Discover innovative ways to enjoy Lay's in your favourite
                  dishes and snacks.
                </p>
                <a href="/recipes" className="learn-more">
                  Learn More →
                </a>
              </div>
            </div>

            <div className="lifestyle-card">
              <div className="lifestyle-image">
                <img src="/r3.png" alt="Party Ideas" />
              </div>
              <div className="lifestyle-content">
                <h3>Party Ideas</h3>
                <p>
                  Make your celebrations unforgettable with Lay's crisps.
                </p>
                <a href="/recipes" className="learn-more">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials inserted into existing Lifestyle area (driven by props) */}
      <section className="testimonials-section">
        <div className="section-container">
          <Testimonials items={testimonials} />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about" id="about">
        <div className="section-container">
          <h2 className="section-title">Why Lay's?</h2>

          <div className="about-grid">
            <div className="about-item">
              <div className="about-icon">🥔</div>
              <h3>Quality Ingredients</h3>
              <p>
                We use only the finest potatoes and ingredients to craft the
                perfect crisp.
              </p>
            </div>

            <div className="about-item">
              <div className="about-icon">🌍</div>
              <h3>Global Favourite</h3>
              <p>
                Enjoyed in more than 200 countries worldwide.
              </p>
            </div>

            <div className="about-item">
              <div className="about-icon">✨</div>
              <h3>Perfect Taste</h3>
              <p>
                Crafted to deliver the perfect balance of flavour and crunch.
              </p>
            </div>

            <div className="about-item">
              <div className="about-icon">🤝</div>
              <h3>Trusted Brand</h3>
              <p>
                A legacy spanning generations of families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Props demo removed - Learn more buttons added to product slider */}

      {/* NEWSLETTER */}
      <section className="newsletter" id="newsletter">
        <div className="section-container">
          <h2>Stay Updated</h2>
          <p>
            Subscribe to get the latest flavours, recipes, and exclusive
            offers
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
