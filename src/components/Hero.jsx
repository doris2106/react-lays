import React from 'react'

export default function Hero({onOpenModal, onToggleTheme, theme, onToggleCards}){
  return (
    <section className="hero">
      <div className="wrap">
        <h2>Welcome to Lay's</h2>
        <p>The world's favourite potato crisps.</p>
        <div className="hero-actions">
          <button className="btn" onClick={onOpenModal}>Open Message</button>
          <button className="btn outline" onClick={onToggleTheme}>Theme: {theme}</button>
          <button className="btn small" onClick={onToggleCards}>Toggle products</button>
        </div>
      </div>
    </section>
  )
}
