import { Link } from 'react-router-dom'
import { Page, PageHero, ContactDetails, ContactForm, ButtonLink, SectionHeading } from '../components/ui'

export default function Contact() {
  return (
    <Page title="Contact" desc="Contact Blush and Bloom with an enquiry or a message on social media.">
      <PageHero eyebrow="Contact" title="Say hello." intro="Send an enquiry, message the salon on social or check the latest details by Instagram or Facebook." imageId="contact-salon-editorial" />

      <section className="sec">
        <div className="wrap contact-grid">
          <div className="practical-card">
            <SectionHeading eyebrow="Reach us" title="Get in touch." />
            <ContactDetails />
            <p className="muted-copy">If the salon does not yet list a phone number or email, message on Instagram to ask about availability and the latest booking details.</p>
          </div>

          <div className="practical-card practical-card--accent">
            <SectionHeading eyebrow="Enquiry form" title="Tell us a little more." />
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="sec sec-soft">
        <div className="wrap center-block">
          <SectionHeading eyebrow="Need more info?" title="Good to know." intro="You may want to browse the service menu or read the common questions before getting in touch." align="center" />
          <div className="btns btns--center">
            <ButtonLink to="/services" variant="primary">Services</ButtonLink>
            <ButtonLink to="/faq" variant="secondary">FAQ</ButtonLink>
          </div>
        </div>
      </section>
    </Page>
  )
}
