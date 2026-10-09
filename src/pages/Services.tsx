import { Link, useParams } from 'react-router-dom'
import { Page, Hero, BookLink, Cta, Empty } from '../components/ui'
import { services } from '../data/salon'
import NotFound from './NotFound'
export function Services() {
  return <Page title="Services" desc="Services at Blush and Bloom."><Hero eyebrow="Services" title="Treatments, tailored to you">Get in touch for the current service list.</Hero>
    <section className="sec"><div className="wrap">{services.length
      ? services.map(s => <div key={s.slug} className="acc" style={{ padding: '24px 0' }}><h2><Link to={`/services/${s.slug}`}>{s.name}</Link></h2><p>{s.description}</p>{s.price && <p>{s.price}</p>}</div>)
      : <Empty><h2>Our service list is on its way.</h2><p>Ask us about what's currently offered.</p><BookLink /></Empty>}</div></section><Cta /></Page>
}
export function ServiceDetail() {
  const { slug } = useParams(); const s = services.find(x => x.slug === slug)
  if (!s) return <NotFound title="Service not found" />
  const related = services.filter(x => x.slug !== s.slug).slice(0, 3)
  return <Page title={s.name} desc={s.description}><Hero eyebrow="Service" title={s.name}>{s.description}</Hero>
    <section className="sec"><div className="wrap"><nav aria-label="Breadcrumb"><Link to="/">Home</Link> / <Link to="/services">Services</Link> / {s.name}</nav>
      {s.image && <img src={s.image} alt={s.name} style={{ maxWidth: '100%', borderRadius: 24 }} />}{s.price && <p>Price: {s.price}</p>}{s.duration && <p>Duration: {s.duration}</p>}
      <BookLink />{related.length > 0 && <><h2>Related</h2>{related.map(r => <div key={r.slug}><Link to={`/services/${r.slug}`}>{r.name}</Link></div>)}</>}</div></section><Cta /></Page>
}
