import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Minus, Plus, X } from 'lucide-react'
import { siteUrl, salon, SHOW_DEMO_LABELS, faqs } from '../data/salon'
import type { FaqItem } from '../data/faqs'
import type { Service } from '../data/services'
import { getImageById, imageManifest } from '../data/images'
import { Photo } from './Photo'

export function Page({
  title,
  desc,
  children,
  image = '/og-image.jpg',
}: {
  title: string
  desc: string
  children: ReactNode
  image?: string
}) {
  const location = useLocation()

  useEffect(() => {
    document.title = `${title} | ${salon.name}`
    const descriptionMeta = document.querySelector('meta[name="description"]')
    descriptionMeta?.setAttribute('content', desc)

    const canonical = document.querySelector('link[rel="canonical"]') ?? document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    canonical.setAttribute('href', `${siteUrl}${location.pathname}`)
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonical)
    }

    const ogTitle = document.querySelector('meta[property="og:title"]') ?? document.createElement('meta')
    ogTitle.setAttribute('property', 'og:title')
    ogTitle.setAttribute('content', `${title} | ${salon.name}`)
    if (!document.querySelector('meta[property="og:title"]')) document.head.appendChild(ogTitle)

    const ogDescription = document.querySelector('meta[property="og:description"]') ?? document.createElement('meta')
    ogDescription.setAttribute('property', 'og:description')
    ogDescription.setAttribute('content', desc)
    if (!document.querySelector('meta[property="og:description"]')) document.head.appendChild(ogDescription)

    const ogImage = document.querySelector('meta[property="og:image"]') ?? document.createElement('meta')
    ogImage.setAttribute('property', 'og:image')
    ogImage.setAttribute('content', `${siteUrl}${image}`)
    if (!document.querySelector('meta[property="og:image"]')) document.head.appendChild(ogImage)

    const twitterImage = document.querySelector('meta[name="twitter:image"]') ?? document.createElement('meta')
    twitterImage.setAttribute('name', 'twitter:image')
    twitterImage.setAttribute('content', `${siteUrl}${image}`)
    if (!document.querySelector('meta[name="twitter:image"]')) document.head.appendChild(twitterImage)

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [desc, image, location.pathname, title])

  return <>{children}</>
}

export function Hero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: ReactNode
}) {
  return (
    <section className="sec sec-soft">
      <div className="wrap narrow">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {children ? <p className="lede">{children}</p> : null}
      </div>
    </section>
  )
}

export function ButtonLink({
  to,
  href,
  children,
  variant = 'primary',
  className = '',
  external = false,
}: {
  to?: string
  href?: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'on-dark'
  className?: string
  external?: boolean
}) {
  const classes = `btn btn-${variant} ${className}`.trim()

  if (href) {
    return (
      <a className={classes} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    )
  }

  return <button type="button" className={classes}>{children}</button>
}

export function BookLink({
  ghost,
  label = 'Make an enquiry',
}: {
  ghost?: boolean
  label?: string
}) {
  const cls = ghost ? 'btn btn-secondary' : 'btn btn-primary'

  if (salon.bookingUrl) {
    return (
      <a className={cls} href={salon.bookingUrl} target="_blank" rel="noopener noreferrer">
        Book now
      </a>
    )
  }

  return (
    <Link className={cls} to="/contact">
      {label}
    </Link>
  )
}

export function DemoLabel() {
  if (!SHOW_DEMO_LABELS) return null
  return <span className="demo-label">Illustrative content</span>
}

export function CtaBand({
  title = 'Take a little time for yourself.',
  imageId = 'contact-salon-editorial',
}: {
  title?: string
  imageId?: string
}) {
  const image = getImageById(imageId) ?? imageManifest[0]

  return (
    <section className="cta-band sec">
      <div className="cta-band__inner">
        <div className="cta-band__image">
          <Photo image={image} loading="lazy" fetchPriority="low" objectPosition="50% 35%" />
        </div>
        <div className="cta-band__content">
          <p className="eyebrow eyebrow--light">Next steps</p>
          <h2>{title}</h2>
          <div className="btns">
            <ButtonLink to="/contact" variant="primary">Get in touch</ButtonLink>
            <ButtonLink href={salon.instagram} variant="on-dark" external>
              Instagram
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
}: {
  eyebrow: string
  title: string
  intro?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  intro,
  imageId,
  variant = 'split',
}: {
  eyebrow: string
  title: string
  intro?: string
  imageId: string
  variant?: 'split' | 'full'
}) {
  const image = getImageById(imageId) ?? imageManifest[0]

  return (
    <section className={`page-hero page-hero--${variant}`}>
      <div className="wrap page-hero__grid">
        <div className="page-hero__content">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {intro ? <p className="lede">{intro}</p> : null}
        </div>
        <div className="page-hero__media">
          <div className="photo-shell">
            <Photo image={image} loading="eager" fetchPriority="high" objectPosition={image.focal ?? '50% 44%'} />
          </div>
        </div>
      </div>
    </section>
  )
}

export function Empty({ children }: { children: ReactNode }) {
  return <div className="empty-box">{children}</div>
}

export function FaqList({
  items,
  groups,
}: {
  items?: FaqItem[]
  groups?: Array<{ topic: string; items: FaqItem[] }>
}) {
  const data = useMemo(() => {
    if (groups && groups.length > 0) {
      return groups.flatMap((group) =>
        group.items.map((item, index) => ({
          key: `${group.topic}-${index}`,
          group: group.topic,
          ...item,
        })),
      )
    }
    return (items ?? []).map((item, index) => ({ key: `faq-${index}`, item }))
  }, [groups, items])

  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="faq-list">
      {data.map((entry, index) => {
        const question = 'item' in entry ? entry.item.q : entry.q
        const answer = 'item' in entry ? entry.item.a : entry.a
        const key = 'key' in entry ? entry.key : `faq-${index}`

        return (
          <div className="faq-item" key={key}>
            <h3>
              <button
                type="button"
                className="faq-item__button"
                aria-expanded={open === index}
                aria-controls={`faq-panel-${index}`}
                onClick={() => setOpen(open === index ? null : index)}
              >
                <span>{question}</span>
                {open === index ? <Minus size={18} /> : <Plus size={18} />}
              </button>
            </h3>
            <div id={`faq-panel-${index}`} hidden={open !== index} className="faq-item__panel">
              <p>{answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function ServiceCard({ service }: { service: Service }) {
  const image = getImageById(service.image) ?? imageManifest[0]

  return (
    <article className="service-card">
      <div className="service-card__media">
        <Photo image={image} loading="lazy" objectPosition={image.focal ?? '50% 45%'} />
      </div>
      <div className="service-card__body">
        {SHOW_DEMO_LABELS && <DemoLabel />}
        <p className="card-kicker">{service.category}</p>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <div className="service-card__meta">
          {service.price ? <span>{service.price}</span> : null}
          {service.duration ? <span>{service.duration}</span> : null}
        </div>
        <ButtonLink to={`/services/${service.slug}`} variant="secondary">View detail</ButtonLink>
      </div>
    </article>
  )
}

export function CategoryFilter({
  items,
  value,
  onChange,
}: {
  items: string[]
  value: string
  onChange: (nextValue: string) => void
}) {
  return (
    <div className="category-filter" role="tablist" aria-label="Category filter">
      {items.map((item) => (
        <button
          key={item}
          type="button"
          role="tab"
          aria-selected={value === item}
          aria-pressed={value === item}
          className={value === item ? 'is-active' : ''}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export function GalleryGrid({
  items,
  onSelect,
}: {
  items: Array<{ id: string; imageId: string; caption?: string; demo: boolean }>
  onSelect: (index: number) => void
}) {
  return (
    <div className="gallery-grid">
      {items.map((item, index) => {
        const image = getImageById(item.imageId) ?? imageManifest[0]
        return (
          <button type="button" key={item.id} className="gallery-tile" onClick={() => onSelect(index)} aria-label={`Open gallery image ${index + 1}`}>
            <Photo image={image} loading="lazy" objectPosition={image.focal ?? '50% 50%'} />
            {item.caption ? <span className="gallery-tile__caption">{item.caption}</span> : null}
          </button>
        )
      })}
    </div>
  )
}

export function Lightbox({
  items,
  selectedIndex,
  onClose,
}: {
  items: Array<{ id: string; imageId: string; caption?: string; demo: boolean }>
  selectedIndex: number
  onClose: () => void
}) {
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const previousFocus = useRef<HTMLElement | null>(null)

  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement | null
    closeButtonRef.current?.focus()
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') {
        const next = (selectedIndex + 1) % items.length
        const target = overlayRef.current?.querySelectorAll<HTMLButtonElement>('[data-nav="next"]')[0]
        target?.click()
        if (target) {
          event.preventDefault()
        }
      }
      if (event.key === 'ArrowLeft') {
        const prev = (selectedIndex - 1 + items.length) % items.length
        const target = overlayRef.current?.querySelectorAll<HTMLButtonElement>('[data-nav="prev"]')[0]
        target?.click()
        if (target) {
          event.preventDefault()
        }
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
      previousFocus.current?.focus()
    }
  }, [items.length, onClose, selectedIndex])

  const current = items[selectedIndex]
  const image = getImageById(current.imageId) ?? imageManifest[0]

  const goTo = (direction: number) => {
    const nextIndex = (selectedIndex + direction + items.length) % items.length
    const nextButton = document.querySelector<HTMLButtonElement>(`[data-gallery-index="${nextIndex}"]`)
    nextButton?.click()
  }

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer" ref={overlayRef}>
      <div className="lightbox__controls">
        <button type="button" data-nav="prev" aria-label="Previous image" onClick={() => goTo(-1)}>
          <ChevronLeft size={18} />
        </button>
        <button type="button" data-nav="next" aria-label="Next image" onClick={() => goTo(1)}>
          <ChevronRight size={18} />
        </button>
        <button type="button" ref={closeButtonRef} aria-label="Close image viewer" onClick={onClose}>
          <X size={18} />
        </button>
      </div>
      <figure className="lightbox__figure">
        <div className="lightbox__media">
          <Photo image={image} loading="eager" fetchPriority="high" objectPosition={image.focal ?? '50% 50%'} />
        </div>
        <figcaption>
          <span className="lightbox__caption">{current.caption ?? image.alt}</span>
          <span className="lightbox__counter">{selectedIndex + 1} / {items.length}</span>
          <span className="lightbox__tag">Illustrative photograph</span>
        </figcaption>
      </figure>
    </div>
  )
}

export function Breadcrumbs({
  items,
}: {
  items: Array<{ label: string; to?: string }>
}) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`}>
          {index > 0 ? <span className="breadcrumbs__separator">/</span> : null}
          {item.to ? <Link to={item.to}>{item.label}</Link> : <span>{item.label}</span>}
        </span>
      ))}
    </nav>
  )
}

export function ContactDetails() {
  const details = [
    salon.phone ? { label: 'Phone', value: salon.phone, href: `tel:${salon.phone}` } : null,
    salon.email ? { label: 'Email', value: salon.email, href: `mailto:${salon.email}` } : null,
    salon.address ? { label: 'Address', value: salon.address, href: undefined } : null,
    salon.hours ? { label: 'Opening hours', value: salon.hours, href: undefined } : null,
  ].filter(Boolean) as Array<{ label: string; value: string; href?: string }>

  if (!details.length && !(salon.instagram || salon.facebook)) {
    return null
  }

  return (
    <div className="contact-details">
      {salon.instagram ? (
        <p>
          <strong>Instagram</strong>
          <br />
          <a href={salon.instagram} target="_blank" rel="noopener noreferrer">
            @blushandbloombydikshagosar
          </a>
        </p>
      ) : null}
      {salon.facebook ? (
        <p>
          <strong>Facebook</strong>
          <br />
          <a href={salon.facebook} target="_blank" rel="noopener noreferrer">
            Diksha Gosar
          </a>
        </p>
      ) : null}
      {details.map((detail) => (
        <p key={detail.label}>
          <strong>{detail.label}</strong>
          <br />
          {detail.href ? (
            <a href={detail.href}>{detail.value}</a>
          ) : (
            <span>{detail.value}</span>
          )}
        </p>
      ))}
    </div>
  )
}

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const nextErrors: Record<string, string> = {}

    const name = String(form.get('name') ?? '').trim()
    const email = String(form.get('email') ?? '').trim()
    const message = String(form.get('message') ?? '').trim()

    if (!name) nextErrors.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Please enter a valid email address.'
    if (message.length < 5) nextErrors.message = 'Please write a short message.'

    setErrors(nextErrors)
    setStatus(Object.keys(nextErrors).length === 0 ? 'success' : 'idle')
  }

  return (
    <form className="stack-form" noValidate onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} />
        {errors.name ? <span id="contact-name-error" className="error-message">{errors.name}</span> : null}
      </div>

      <div className="field">
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} />
        {errors.email ? <span id="contact-email-error" className="error-message">{errors.email}</span> : null}
      </div>

      <div className="field">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows={5} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} />
        {errors.message ? <span id="contact-message-error" className="error-message">{errors.message}</span> : null}
      </div>

      <button type="submit" className="btn btn-primary">Check enquiry</button>

      {status === 'success' ? (
        <p role="status" className="form-status">
          Your details look valid, but this form is not connected to a backend yet, so nothing has been sent. Please message the salon on Instagram for the latest availability.
        </p>
      ) : null}
    </form>
  )
}

export function InstagramStrip() {
  const photos = [
    'salon-interior-ambience',
    'salon-styling-stations',
    'makeup-brushes-closeup',
    'floral-beauty-flatlay',
    'bridal-hair-editorial',
    'skincare-facial-detail',
  ]
    .map((id) => getImageById(id) ?? imageManifest[0])
    .filter(Boolean)

  return (
    <div className="instagram-strip">
      {photos.map((image) => (
        <div key={image.id} className="instagram-strip__tile">
          <Photo image={image} loading="lazy" objectPosition={image.focal ?? '50% 35%'} />
        </div>
      ))}
      <div className="instagram-strip__cta">
        <p>Follow along on Instagram</p>
        <ButtonLink href={salon.instagram} external variant="secondary">Visit profile</ButtonLink>
      </div>
    </div>
  )
}

export { faqs }

