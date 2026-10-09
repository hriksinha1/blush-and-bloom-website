import { Link } from 'react-router-dom'
import { Page } from '../components/ui'
export default function NotFound({ title = 'Page not found' }: { title?: string }) {
  return <Page title={title} desc="Page not found."><section className="sec"><div className="wrap"><p className="eyebrow">404</p><h1>{title}</h1><p>That page doesn't exist, but there's plenty to explore.</p>
    <div className="btns"><Link className="btn" to="/">Home</Link><Link className="btn ghost" to="/services">Services</Link><Link className="btn ghost" to="/contact">Contact</Link></div></div></section></Page>
}
