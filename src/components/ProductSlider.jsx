import { useRef, useState } from "react";
import Modal from './Modal'

const defaultSlides = [
  { id: 1, img: "/66.webp", alt: "Classic", title: "Classic", color: "yellow" },
  { id: 2, img: "/11.webp", alt: "Chile Limon", title: "Chile Limon", color: "red" },
  { id: 3, img: "/44.webp", alt: "Tomato", title: "Tomato", color: "green" },
  { id: 4, img: "/vinegar.png", alt: "Salt & Vinegar", title: "Salt & Vinegar", color: "lightgreen" },
  { id: 5, img: "/22.webp", alt: "Cream & Onion", title: "Cream & Onion", color: "darkred" },
  { id: 6, img: "/55.webp", alt: "Wavy Original", title: "Wavy Original", color: "darkred" },
  { id: 7, img: "/66.webp", alt: "Wavy Original 2", title: "Wavy Original", color: "darkred" },
  { id: 8, img: "/77.webp", alt: "Wavy Original 3", title: "Wavy Original", color: "darkred" },
]

const ProductSlider = ({ slides = defaultSlides }) => {
  const sliderRef = useRef(null);
  const [selected, setSelected] = useState(null)

  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  // Use Link for navigation to ensure reliable routing

  return (
    <section className="products" id="products">
      <div className="section-container">
        <h2 className="section-title">Our Product Range</h2>
        <p className="section-subtitle">
          Choose from our wide selection of delicious flavours
        </p>

        <div className="slider-wrapper">

          <button className="slider-btn left" onClick={slideLeft}>
            &#10094;
          </button>

          <div className="flavour-slider" ref={sliderRef}>
            {slides.map(s => (
              <div key={s.id} className={`slider-panel ${s.color}`}>
                <img src={s.img} alt={s.alt} />
                <div className="slide-info">
                  <h3>{s.title}</h3>
                  <button className="btn small" onClick={() => setSelected(s)}>
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-btn right" onClick={slideRight}>
            &#10095;
          </button>

        </div>
        {selected && (
          <Modal onClose={() => setSelected(null)}>
            <div className="product-modal" style={{padding:20}}>
              <img src={selected.img} alt={selected.alt} style={{width:'100%', borderRadius:8}} />
              <h2 style={{marginTop:12}}>{selected.title} — Lay's</h2>
              <p style={{marginTop:8}}>
                Lay's {selected.title} chips — iconic, crunchy potato chips with a signature crisp. Flavor notes: {selected.title} has bright, savory notes and a satisfying crunch.
              </p>
              <p style={{marginTop:8}}>
                Suggested serving: pair with a cold drink or enjoy solo. For recipe ideas, try crushing into a crunchy topping for salads or using as a coating for baked chicken.
              </p>
              <div style={{display:'flex', gap:12, marginTop:16}}>
                <button className="btn" onClick={() => {
                  // simple prompt flow: show a short confirm then close
                  alert(`Thanks! More details about ${selected.title} sent.`);
                  setSelected(null);
                }}>OK</button>
                <button className="btn-secondary" onClick={() => setSelected(null)}>Close</button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default ProductSlider;
