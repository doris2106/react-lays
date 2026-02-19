import React, { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
const scrollToSection = (id) => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
  setMobileMenuOpen(false)
}

  return (
    <nav className="navbar">
      <div className="nav-container">
       
      <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
  <li onClick={() => scrollToSection('top')}>Home</li>
  <li onClick={() => scrollToSection('products')}>Products</li>
  <li onClick={() => scrollToSection('recipes')}>Recipes</li>
  <li onClick={() => scrollToSection('about')}>About</li>
</ul>



      </div>
    </nav>
  )
}
