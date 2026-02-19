import React, {useState} from 'react'

export default function Slider({images=[]}){
  const [i, setI] = useState(0)
  if(images.length === 0) return null
  const prev = ()=> setI(v => (v - 1 + images.length) % images.length)
  const next = ()=> setI(v => (v + 1) % images.length)
  return (
    <div className="slider">
      <button className="nav" onClick={prev}>◀</button>
      <img src={images[i]} alt={`slide-${i}`} />
      <button className="nav" onClick={next}>▶</button>
    </div>
  )
}
