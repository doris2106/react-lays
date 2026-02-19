import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('h_eJtLugmPJDNFcJ-')
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address')
      setMessage('')
      setLoading(false)
      return
    }

    // Prepare email parameters
    const templateParams = {
      to_email: email,
      user_email: email,
      message: 'Thanks for subscribing to Lay\'s! We\'re excited to share the latest flavours, recipes, and exclusive offers with you.',
    }

    // Send email using EmailJS
    emailjs
      .send('service_1k3m3oc', 'template_4dre1ag', templateParams)
      .then((response) => {
        console.log('Email sent successfully!', response)
        setMessage('✓ Thank you for subscribing! Check your email for confirmation.')
        setError('')
        setEmail('')
        setLoading(false)
        
        // Clear message after 4 seconds
        setTimeout(() => setMessage(''), 4000)
      })
      .catch((err) => {
        console.error('Failed to send email:', err)
        setError('Failed to subscribe. Please try again.')
        setMessage('')
        setLoading(false)
      })
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={error ? 'form-input error' : 'form-input'}
          disabled={loading}
        />
        <button type="submit" className="newsletter-btn" disabled={loading}>
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
      {error && <span className="error-message">{error}</span>}
      {message && <span className="success-message">{message}</span>}
    </form>
  )
}
