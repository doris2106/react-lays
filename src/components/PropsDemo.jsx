import React from 'react'
import CardList from './CardList'
import Menu from './Menu'

const sampleCards = [
  { id: 1, title: 'Classic', img: '/classic.jpg', desc: "Our timeless flavour" },
  { id: 2, title: 'Bold', img: '/bold.png', desc: 'Packed with bold seasoning' },
  { id: 3, title: 'Light', img: '/light.jpg', desc: 'Crispy & light' },
]

const sampleMenu = ['Home', 'Products', 'Recipes', 'About']

export default function PropsDemo() {
  return (
    <div className="props-demo-block">
      <h2>Props Demo</h2>

      <section style={{marginBottom:18}}>
        <h3>Menu (via props)</h3>
        <Menu items={sampleMenu} />
      </section>

      <section>
        <h3>Cards (via props)</h3>
        <CardList cards={sampleCards} onLearnMore={(id) => alert(`Learn more ${id}`)} />
      </section>
    </div>
  )
}
