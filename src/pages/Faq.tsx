import { Link } from 'react-router-dom'
import { Page, Hero, FaqList, Cta } from '../components/ui'
import { faqs } from '../data/salon'
export default function Faq() {
  return <Page title="FAQ" desc="Frequently asked questions."><Hero eyebrow="FAQ" title="Good to know" />
    <section className="sec"><div className="wrap"><FaqList items={faqs} /><p>More questions? <Link to="/contact">Contact us</Link> or see <Link to="/services">services</Link>.</p></div></section><Cta /></Page>
}
