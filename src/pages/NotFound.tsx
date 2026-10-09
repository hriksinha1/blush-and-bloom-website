import { Link } from 'react-router-dom'
import { Page, ButtonLink, Photo } from '../components/ui'
import { getImageById } from '../data/images'

export default function NotFound({ title = 'Page not found' }: { title?: string }) {
  const heroImage = getImageById('salon-interior-ambience')

  return (
    <Page title={title} desc="Page not found.">
      <section className="sec not-found">
        <div className="wrap not-found__grid">
          <div className="not-found__content">
            <p className="eyebrow">404</p>
            <h1>{title}</h1>
            <p className="lede">That page does not exist, but there is plenty to explore across the site.</p>
            <div className="btns">
              <ButtonLink to="/" variant="primary">Home</ButtonLink>
              <ButtonLink to="/services" variant="secondary">Services</ButtonLink>
              <ButtonLink to="/gallery" variant="secondary">Gallery</ButtonLink>
            </div>
          </div>
          <div className="photo-shell not-found__media">
            {heroImage ? <Photo image={heroImage} loading="eager" fetchPriority="high" objectPosition={heroImage.focal ?? '50% 40%'} /> : null}
          </div>
        </div>
      </section>
    </Page>
  )
}
