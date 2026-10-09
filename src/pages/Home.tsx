import { Link } from 'react-router-dom'
import { Page, BookLink, Cta, FaqList, Empty } from '../components/ui'
import { salon, faqs, gallery } from '../data/salon'
export default function Home() {
  return <Page title="Home" desc="Blush and Bloom by Diksha Gosar. A little time, just for you.">
    <section className="sec"><div className="wrap row">
      <div><p className="eyebrow">Hair · Skin · Beauty</p><h1>{salon.tagline}</h1>
        <p style={{ maxWidth: '46ch', fontSize: '1.1rem' }}>An unhurried salon experience shaped around care and calm.</p>
        <div className="btns"><BookLink /><Link className="btn ghost" to="/services">View services</Link></div></div>
      <div className="arch" role="img" aria-label="Decorative arch shape in blush" /></div></section>
    <section className="sec alt"><div className="wrap row"><h2>A softer way to get ready.</h2><p>Blush and Bloom is led by {salon.founder}. Full brand story to follow once confirmed with the salon.</p></div></section>
    <section className="sec"><div className="wrap"><h2>Services</h2><p>Ask about the current treatments and pricing.</p><BookLink ghost label="Enquire about services" /></div></section>
    <section className="sec alt"><div className="wrap"><h2>Recent work</h2>
      {gallery.length ? <div className="btns">{gallery.slice(0, 3).map(g => <img key={g.src} src={g.src} alt={g.alt} loading="lazy" width={320} style={{ borderRadius: 24 }} />)}</div>
        : <Empty>Photographs of the salon's work will appear here. See the latest on <a href={salon.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>.</Empty>}</div></section>
    <section className="sec"><div className="wrap row"><div><h2>Meet {salon.founder}</h2><p>Founder of Blush and Bloom. Biography and qualifications will be added once supplied.</p><Link to="/about">About the salon</Link></div>
      <div><h2>Find us online</h2><p><a href={salon.instagram} target="_blank" rel="noopener noreferrer">@blushandbloombydikshagosar</a> on Instagram.</p>
        {salon.address && <p>{salon.address}</p>}{salon.hours && <p>{salon.hours}</p>}</div></div></section>
    <section className="sec alt"><div className="wrap"><h2>Questions</h2><FaqList items={faqs.slice(0, 2)} /><Link to="/faq">All questions</Link></div></section>
    <Cta /></Page>
}
