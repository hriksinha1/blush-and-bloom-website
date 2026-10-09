import { Link } from 'react-router-dom'
import { Page, BookLink, ButtonLink, CtaBand, DemoLabel, FaqList, InstagramStrip, Photo, SectionHeading, ServiceCard, ContactDetails } from '../components/ui'
import { salon } from '../data/salon'
import { faqs } from '../data/salon'
import { galleryItems } from '../data/gallery'
import { services } from '../data/services'
import { getImageById } from '../data/images'

const heroImage = getImageById('salon-interior-hero')
const introImage = getImageById('salon-about-editorial')
const ambienceImage = getImageById('salon-interior-ambience')

export default function Home() {
  return (
    <Page title="Home" desc="Blush and Bloom by Diksha Gosar. A little time, just for you.">
      <section className="hero-panel sec">
        <div className="wrap hero-panel__grid">
          <div className="hero-panel__content">
            <p className="eyebrow">Hair · Skin · Beauty</p>
            <h1>{salon.tagline}</h1>
            <p className="lede">An unhurried salon experience shaped around care, comfort and considered beauty rituals.</p>
            <div className="btns">
              <BookLink />
              <ButtonLink to="/services" variant="secondary">View services</ButtonLink>
            </div>
          </div>

          <div className="hero-panel__media">
            {heroImage ? (
              <div className="photo-shell photo-shell--feature">
                <Photo image={heroImage} loading="eager" fetchPriority="high" objectPosition={heroImage.focal ?? '50% 45%'} />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="sec sec-soft">
        <div className="wrap introduction-grid">
          <div>
            <SectionHeading eyebrow="About the salon" title="A softer way to get ready." intro="Blush and Bloom is guided by a warm, personal approach to beauty and self-care." />
            <p>
              The salon is shaped around a calm, considered experience where you can slow down and feel looked after. The brand celebrates soft rituals, thoughtful styling and a welcoming sense of ease.
            </p>
            <Link to="/about" className="text-link">About the salon</Link>
          </div>
          <div className="photo-shell">
            {introImage ? <Photo image={introImage} loading="lazy" objectPosition={introImage.focal ?? '50% 42%'} /> : null}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHeading eyebrow="Services" title="Thoughtful beauty, tailored to you." intro="A few selected examples of the salon experience, designed to feel personal and unhurried." align="center" />
          <div className="card-grid card-grid--services">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="section-action">
            <ButtonLink to="/services" variant="secondary">See all services</ButtonLink>
          </div>
        </div>
      </section>

      <section className="sec sec-soft">
        <div className="wrap">
          <div className="section-header-row">
            <SectionHeading eyebrow="Recent work" title="Illustrative salon moments." intro="A curated preview of the kind of atmosphere and styling story the salon can bring to the page." />
            <DemoLabel />
          </div>

          <div className="gallery-collage">
            {galleryItems.slice(0, 6).map((item, index) => {
              const image = getImageById(item.imageId) ?? getImageById('salon-interior-hero')
              if (!image) return null
              return (
                <div key={item.id} className={`gallery-collage__item gallery-collage__item--${index + 1}`}>
                  <Photo image={image} loading="lazy" objectPosition={image.focal ?? '50% 50%'} />
                </div>
              )
            })}
          </div>

          <div className="section-action">
            <ButtonLink to="/gallery" variant="secondary">View gallery</ButtonLink>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHeading eyebrow="Our approach" title="Soft, welcoming, considered." intro="A salon experience built around ease, detail and a little extra time for yourself." align="center" />
          <div className="principles-grid">
            {['Unhurried', 'Considered', 'Welcoming', 'Balanced'].map((principle, index) => (
              <article key={principle} className="principle-card">
                <span className="principle-card__index">0{index + 1}</span>
                <h3>{principle}</h3>
                <p>
                  {index === 0 && 'A gentler rhythm that makes the experience feel easy from arrival to finish.'}
                  {index === 1 && 'Every detail is designed to feel thoughtful, polished and personal.'}
                  {index === 2 && 'A welcoming atmosphere that keeps the focus on comfort and confidence.'}
                  {index === 3 && 'Beauty that feels balanced, natural and entirely your own.'}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-soft">
        <div className="wrap founder-grid">
          <div className="founder-spot">
            <div className="founder-spot__badge">DG</div>
          </div>
          <div>
            <p className="eyebrow">Founder</p>
            <h2>{salon.founder}</h2>
            <p>
              The founder profile will be completed with her final biography and story once confirmed, but the salon’s guiding spirit is rooted in a warm, personal beauty experience.
            </p>
            <Link to="/about" className="text-link">Read the salon story</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap image-caption-panel">
          {ambienceImage ? (
            <div className="image-caption-panel__media">
              <Photo image={ambienceImage} loading="lazy" objectPosition={ambienceImage.focal ?? '50% 35%'} />
              <div className="image-caption-panel__overlay">
                <span>Salon ambience</span>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="sec sec-soft">
        <div className="wrap">
          <SectionHeading eyebrow="Instagram" title="A quiet beauty story, shared with care." intro="Follow the latest inspiration and salon updates on the official profile." align="center" />
          <InstagramStrip />
        </div>
      </section>

      <section className="sec">
        <div className="wrap practical-grid">
          <div className="practical-card">
            <SectionHeading eyebrow="Practical information" title="Message us to ask about availability." />
            <ContactDetails />
            <Link to="/contact" className="text-link">Use the contact form</Link>
          </div>
          <div className="practical-card practical-card--accent">
            <SectionHeading eyebrow="Questions" title="Helpful answers to common queries." />
            <FaqList items={faqs.slice(0, 3)} />
            <Link to="/faq" className="text-link">Read all FAQs</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </Page>
  )
}
