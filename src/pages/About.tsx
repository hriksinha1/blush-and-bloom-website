import { Link } from 'react-router-dom'
import { Page, PageHero, SectionHeading, ButtonLink, CtaBand, Photo } from '../components/ui'
import { salon } from '../data/salon'
import { getImageById } from '../data/images'

const editorials = ['salon-about-editorial', 'salon-interior-ambience'].map((id) => getImageById(id)).filter(Boolean)

export default function About() {
  return (
    <Page title="About" desc="About Blush and Bloom and founder Diksha Gosar.">
      <PageHero eyebrow="About" title="Unhurried, by design." intro="Blush and Bloom is rooted in a calm, considered approach to beauty and personal care." imageId="salon-about-editorial" />

      <section className="sec">
        <div className="wrap founder-grid founder-grid--story">
          <div className="founder-spot founder-spot--large">
            <div className="founder-spot__badge">DG</div>
          </div>
          <div>
            <p className="eyebrow">The founder</p>
            <h2>{salon.founder}</h2>
            <p>
              The founder profile will be completed with a fuller biography and story once the salon confirms the final copy. Until then, the brand remains grounded in soft, personal beauty and a calm salon atmosphere.
            </p>
          </div>
        </div>
      </section>

      <section className="sec sec-soft">
        <div className="wrap split-text">
          <div>
            <SectionHeading eyebrow="Our approach" title="Beauty that feels personal." />
            <p>
              Blush and Bloom is shaped around slow rituals, warm welcome and a sense of ease that makes every appointment feel like time well spent. The aim is to create a beauty experience that feels thoughtful to the individual, not rushed or formulaic.
            </p>
            <p>
              The salon is built on a quiet confidence: gentle care, refined styling and an atmosphere that lets clients settle in and feel themselves again.
            </p>
          </div>
          <div className="info-panel">
            <h3>Explore more</h3>
            <ul className="check-list">
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap editorial-stack">
          {editorials.map((image) => (
            <div key={image.id} className="editorial-stack__card">
              <Photo image={image} loading="lazy" objectPosition={image.focal ?? '50% 44%'} />
            </div>
          ))}
        </div>
      </section>

      <section className="sec sec-soft">
        <div className="wrap center-block">
          <SectionHeading eyebrow="Next steps" title="Take a little time for yourself." intro="Explore the service menu, browse the gallery or send an enquiry." align="center" />
          <div className="btns btns--center">
            <ButtonLink to="/services" variant="primary">View services</ButtonLink>
            <ButtonLink to="/gallery" variant="secondary">See gallery</ButtonLink>
          </div>
        </div>
      </section>

      <CtaBand />
    </Page>
  )
}
