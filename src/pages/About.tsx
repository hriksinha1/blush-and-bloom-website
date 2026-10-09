import { Link } from 'react-router-dom'
import { Page, Hero, Cta } from '../components/ui'
import { salon } from '../data/salon'
export default function About() {
  return <Page title="About" desc="About Blush and Bloom and founder Diksha Gosar."><Hero eyebrow="About" title="Unhurried, by design">Blush and Bloom is the salon of {salon.founder}.</Hero>
    <section className="sec"><div className="wrap row"><div><h2>The founder</h2><p>{salon.founder}'s story, training and approach will be added here once supplied.</p></div>
      <div><h2>Our approach</h2><p>Details to be confirmed with the salon. In the meantime, explore <Link to="/services">services</Link> or the <Link to="/gallery">gallery</Link>.</p></div></div></section><Cta /></Page>
}
