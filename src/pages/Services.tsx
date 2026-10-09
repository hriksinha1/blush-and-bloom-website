import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Page, PageHero, Breadcrumbs, ButtonLink, CtaBand, Empty, ServiceCard, SectionHeading } from '../components/ui'
import { BookLink } from '../components/ui'
import { getImageById } from '../data/images'
import { faqList } from '../data/faqs'
import { services } from '../data/services'
import NotFound from './NotFound'

export function Services() {
  const categories = ['All', ...new Set(services.map((service) => service.category))]
  const [selectedCategory, setSelectedCategory] = useState('All')

  const visibleServices = useMemo(() => {
    if (selectedCategory === 'All') return services
    return services.filter((service) => service.category === selectedCategory)
  }, [selectedCategory])

  return (
    <Page title="Services" desc="Services at Blush and Bloom. A warm selection of salon experiences and beauty rituals.">
      <PageHero eyebrow="Services" title="Treatments, tailored to you." intro="Explore a gentle, considered selection of beauty services designed around comfort and personal style." imageId="salon-interior-hero" />

      <section className="sec sec-soft">
        <div className="wrap">
          <SectionHeading eyebrow="Service menu" title="Choose the kind of care you need." intro="The current service list is intentionally simple while the salon confirms the final menu and pricing." />
          <CategoryFilter items={categories} value={selectedCategory} onChange={setSelectedCategory} />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          {visibleServices.length ? (
            <div className="card-grid card-grid--services">
              {visibleServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          ) : (
            <Empty>
              <h2>Our service list is on its way.</h2>
              <p>Ask us about what is currently available and how we can help.</p>
              <BookLink />
            </Empty>
          )}
        </div>
      </section>

      <section className="sec sec-soft">
        <div className="wrap booking-panel">
          <div>
            <p className="eyebrow">Booking</p>
            <h2>Questions before you book?</h2>
          </div>
          <div className="booking-panel__actions">
            <BookLink />
            <ButtonLink to="/faq" variant="secondary">Read FAQs</ButtonLink>
          </div>
        </div>
      </section>

      <CtaBand />
    </Page>
  )
}

export function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((entry) => entry.slug === slug)

  if (!service) {
    return <NotFound title="Service not found" />
  }

  const related = services
    .filter((entry) => entry.slug !== service.slug)
    .sort((left, right) => Number(left.category === service.category) - Number(right.category === service.category))
    .slice(0, 3)

  const image = getImageById(service.image) ?? getImageById('salon-interior-hero')
  const matchingFaqs = faqList.filter((item) => item.q.toLowerCase().includes(service.name.toLowerCase().split(' ')[0].toLowerCase()))

  return (
    <Page title={service.name} desc={service.description}>
      <div className="wrap page-shell">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.name }]} />
      </div>

      <section className="sec service-detail-hero">
        <div className="wrap service-detail-hero__grid">
          <div className="service-detail-hero__content">
            <p className="eyebrow">Service</p>
            <h1>{service.name}</h1>
            <p className="lede">{service.description}</p>
            <div className="list-inline">
              {service.price ? <span>{service.price}</span> : null}
              {service.duration ? <span>{service.duration}</span> : null}
            </div>
            <div className="btns">
              <BookLink />
              <ButtonLink to="/services" variant="secondary">Back to services</ButtonLink>
            </div>
          </div>
          <div className="service-detail-hero__media">
            {image ? <div className="photo-shell"><img src={image.src} alt={image.alt} loading="eager" style={{ objectFit: 'cover', width: '100%', height: '100%' }} /></div> : null}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split-text">
          <div>
            <SectionHeading eyebrow="Overview" title="A service designed around ease." />
            <p>{service.longDescription ?? service.description}</p>
          </div>
          {service.includes && service.includes.length ? (
            <div className="info-panel">
              <h3>Includes</h3>
              <ul className="check-list">
                {service.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      {related.length ? (
        <section className="sec sec-soft">
          <div className="wrap">
            <SectionHeading eyebrow="Related services" title="Continue exploring." />
            <div className="card-grid card-grid--compact">
              {related.map((entry) => (
                <ServiceCard key={entry.slug} service={entry} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {matchingFaqs.length ? (
        <section className="sec">
          <div className="wrap">
            <SectionHeading eyebrow="Questions" title="Relevant FAQs." />
            <div className="faq-block">
              {matchingFaqs.slice(0, 2).map((item) => (
                <div key={item.q} className="faq-item faq-item--compact">
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand />
    </Page>
  )
}

function CategoryFilter({ items, value, onChange }: { items: string[]; value: string; onChange: (next: string) => void }) {
  return (
    <div className="category-filter" role="tablist" aria-label="Category filter">
      {items.map((item) => (
        <button key={item} type="button" role="tab" aria-selected={value === item} className={value === item ? 'is-active' : ''} onClick={() => onChange(item)}>
          {item}
        </button>
      ))}
    </div>
  )
}
