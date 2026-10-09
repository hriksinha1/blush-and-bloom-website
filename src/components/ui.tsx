import { useEffect, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Minus } from 'lucide-react'
import { salon, type Faq } from '../data/salon'

export function Page({ title, desc, children }: { title: string; desc: string; children: ReactNode }) {
  useEffect(() => { document.title = `${title} | ${salon.name}`; document.querySelector('meta[name=description]')?.setAttribute('content', desc); window.scrollTo(0, 0) }, [title, desc])
  return <>{children}</>
}
export function Hero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return <section className="sec alt"><div className="wrap"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{children && <p style={{ maxWidth: '56ch', fontSize: '1.1rem' }}>{children}</p>}</div></section>
}
export function BookLink({ ghost, label = 'Make an enquiry' }: { ghost?: boolean; label?: string }) {
  const cls = 'btn' + (ghost ? ' ghost' : '')
  return salon.bookingUrl ? <a className={cls} href={salon.bookingUrl} target="_blank" rel="noopener noreferrer">Book now</a> : <Link className={cls} to="/contact">{label}</Link>
}
export function Cta({ title = 'Take a little time for yourself.' }: { title?: string }) {
  return <section className="sec" style={{ background: 'var(--plum)', color: '#fff' }}><div className="wrap"><h2 style={{ color: '#fff' }}>{title}</h2>
    <div className="btns"><Link className="btn" style={{ background: '#fff', color: 'var(--plum)' }} to="/contact">Get in touch</Link>
    <a className="btn ghost" style={{ color: '#fff', borderColor: '#fff' }} href={salon.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></div></div></section>
}
export function FaqList({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return <div>{items.map((f, i) => <div className="acc" key={f.q}>
    <h3 style={{ margin: 0 }}><button aria-expanded={open === i} aria-controls={`fa${i}`} onClick={() => setOpen(open === i ? null : i)}>{f.q}{open === i ? <Minus /> : <Plus />}</button></h3>
    <div id={`fa${i}`} hidden={open !== i}><p>{f.a}</p></div></div>)}</div>
}
export function Empty({ children }: { children: ReactNode }) { return <div className="empty">{children}</div> }
