import React, {useState} from 'react'

export default function ContactForm(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function validate(){
    const e = {}
    if(!form.name.trim()) e.name = 'Name is required'
    if(!form.email.includes('@')) e.email = 'Valid email required'
    if(form.message.length < 10) e.message = 'Message too short'
    return e
  }

  function handleSubmit(e){
    e.preventDefault()
    const v = validate()
    setErrors(v)
    if(Object.keys(v).length === 0){
      setSubmitted(true)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {submitted ? <div className="alert success">Thanks, {form.name || 'friend'}! We'll reply soon.</div> : null}
      <label>Name
        <input value={form.name} onChange={e=>setForm({...form, name: e.target.value})} />
        {errors.name && <div className="error">{errors.name}</div>}
      </label>

      <label>Email
        <input value={form.email} onChange={e=>setForm({...form, email: e.target.value})} />
        {errors.email && <div className="error">{errors.email}</div>}
      </label>

      <label>Message
        <textarea value={form.message} onChange={e=>setForm({...form, message: e.target.value})} />
        {errors.message && <div className="error">{errors.message}</div>}
      </label>

      <button className="btn" type="submit">Send</button>
    </form>
  )
}
