import React, { createContext, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
//import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import RecipePage from './pages/RecipePage'
import ShopPage from './pages/ShopPage'

export const ThemeContext = createContext()

export default function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="app-root">
        {/* Pass menu items as props to Header */}
        <Header menuItems={["Home", "Products", "Recipes", "About"]} />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/recipes" element={<RecipePage />} />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}
