import { useState, type FormEvent } from 'react'
import { Page, Hero } from '../components/ui'
import { salon } from '../data/salon'
export default function Contact() {
  const [errs, setErrs] = useState<Record<string, string>>({}); const [done, setDone] = useState(false)
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); const d = new FormData(e.currentTarget); const x: Record<string, string> = {}
    if (!String(d.get('name')).trim()) x.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(String(d.get('email')))) x.email = 'Please enter a valid email address.'
    if (String(d.get('msg')).trim().length < 5) x.msg = 'Please write a short message.'
    setErrs(x); setDone(Object.keys(x).length === 0)
  }
  const field = (id: string, label: string, area?: boolean) => <label htmlFor={id}>{label}
    {area ? <textarea id={id} name={id} rows={5} aria-invalid={!!errs[id]} aria-describedby={errs[id] ? id + 'e' : undefined} /> : <input id={id} name={id} aria-invalid={!!errs[id]} aria-describedby={errs[id] ? id + 'e' : undefined} />}
    {errs[id] && <span id={id + 'e'} className="err">{errs[id]}</span>}</label>
  return <Page title="Contact" desc="Contact Blush and Bloom."><Hero eyebrow="Contact" title="Say hello">Message the salon on Instagram or Facebook, or use the form below.</Hero>
    <section className="sec"><div className="wrap row"><div><h2>Reach us</h2>
      <p><a href={salon.instagram} target="_blank" rel="noopener noreferrer">Instagram</a><br /><a href={salon.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></p>
      {salon.phone && <p><a href={`tel:${salon.phone}`}>{salon.phone}</a></p>}{salon.email && <p><a href={`mailto:${salon.email}`}>{salon.email}</a></p>}
      {salon.address && <p>{salon.address}</p>}{salon.hours && <p>{salon.hours}</p>}</div>
      <form className="f" onSubmit={submit} noValidate><h2>Enquiry</h2>{field('name', 'Name')}{field('email', 'Email')}{field('msg', 'Message', true)}
        <button className="btn" type="submit">Check enquiry</button>
        {done && <p role="status"><strong>Your details look valid, but this form is not connected to a service yet, so nothing has been sent.</strong> Please message the salon on Instagram.</p>}</form></div></section></Page>
}
