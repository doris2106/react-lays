import React from 'react'

export default function Menu({ items = [] }) {
  return (
    <nav className="props-menu">
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </nav>
  )
}
