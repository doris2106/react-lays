import React, { useState, useEffect, useRef } from 'react'

export default function Testimonials({ items = [], interval = 3500 }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [visible, setVisible] = useState(1)
  const length = items ? items.length : 0

  // responsive visible count
  useEffect(() => {
    function update() {
      const w = window.innerWidth
      if (w >= 1100) setVisible(3)
      else if (w >= 700) setVisible(2)
      else setVisible(1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // auto-advance
  useEffect(() => {
    if (!length) return
    if (paused) return
    const maxIndex = Math.max(0, length - visible)
    const timer = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1))
    }, interval)
    return () => clearInterval(timer)
  }, [length, interval, paused, visible])

  if (!items || items.length === 0) return null

  const maxIndex = Math.max(0, length - visible)
  const goPrev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1))
  const goNext = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1))

  const pageCount = Math.ceil(length / visible)
  const currentPage = Math.floor(index / visible)

  return (
    <div
      className="testimonials-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="slides" style={{ transform: `translateX(-${index * (100 / visible)}%)` }}>
        {items.map((t, i) => (
          <div className="slide" key={i} style={{ flex: `0 0 ${100 / visible}%` }}>
            {t.avatar && <img src={t.avatar} alt={t.name} className="testimonial-avatar" />}
            <blockquote className="testimonial-quote">“{t.quote}”</blockquote>
            <div className="testimonial-name">— {t.name}</div>
          </div>
        ))}
      </div>

      <button className="test-nav prev" onClick={goPrev} aria-label="Previous testimonial">‹</button>
      <button className="test-nav next" onClick={goNext} aria-label="Next testimonial">›</button>

      <div className="test-dots">
        {Array.from({ length: pageCount }).map((_, p) => (
          <button
            key={p}
            className={`dot ${p === currentPage ? 'active' : ''}`}
            onClick={() => setIndex(p * visible)}
            aria-label={`Show page ${p + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
