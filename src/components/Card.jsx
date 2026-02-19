import React from 'react'

export default function Card({id, title, img, desc, onLearnMore}){
  return (
    <article className="product-card">
      <div className="product-image"><img src={img} alt={title} /></div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div style={{marginTop:8}}>
        <button className="btn small" onClick={onLearnMore}>Learn more</button>
      </div>
    </article>
  )
}
