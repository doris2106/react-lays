import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Lay's</h4>
            <ul>
              <li><a href="/">Our Story</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">Sustainability</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li><a href="/#products">Classic Salted</a></li>
              <li><a href="/#products">Salt & Vinegar</a></li>
              <li><a href="/#products">All Flavours</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">FAQ</a></li>
              <li><a href="/">Store Locator</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="/">Facebook</a></li>
              <li><a href="/">Instagram</a></li>
              <li><a href="/">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} PepsiCo. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  )
}
