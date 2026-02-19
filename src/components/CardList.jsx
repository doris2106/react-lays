import React from 'react'
import Card from './Card'

export default function CardList({cards, onLearnMore}){
  return (
    <section className="card-list products">
      <div className="wrap">
        <div className="products-grid">
          {cards.map(c=> <Card key={c.id} {...c} onLearnMore={()=>onLearnMore && onLearnMore(c.id)} />)}
        </div>
      </div>
    </section>
  )
}
