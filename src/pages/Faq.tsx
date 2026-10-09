import { Link } from 'react-router-dom'
import { Page, PageHero, FaqList, ButtonLink, CtaBand, SectionHeading } from '../components/ui'
import { faqGroups } from '../data/faqs'

export default function Faq() {
  return (
    <Page title="FAQ" desc="Frequently asked questions for Blush and Bloom.">
      <PageHero eyebrow="FAQ" title="Good to know." intro="A few practical answers to common questions about the salon, booking and the current service experience." imageId="salon-interior-hero" />

      <section className="sec">
        <div className="wrap">
          <SectionHeading eyebrow="Questions" title="Helpful answers." />
          <FaqList groups={faqGroups} />
        </div>
      </section>

      <section className="sec sec-soft">
        <div className="wrap center-block">
          <SectionHeading eyebrow="Still unsure?" title="Ask the salon directly." intro="For anything not yet confirmed, the best next step is to get in touch through Instagram or the contact form." align="center" />
          <div className="btns btns--center">
            <ButtonLink to="/contact" variant="primary">Contact</ButtonLink>
            <ButtonLink to="/services" variant="secondary">Services</ButtonLink>
          </div>
        </div>
      </section>

      <CtaBand />
    </Page>
  )
}
