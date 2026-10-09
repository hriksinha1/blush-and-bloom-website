import { Page, PageHero, SectionHeading } from '../components/ui'

export default function Privacy() {
  return (
    <Page title="Privacy" desc="Privacy information for Blush and Bloom.">
      <PageHero eyebrow="Privacy" title="Privacy information." intro="A transparent summary of how the site currently handles information and what remains to be confirmed." imageId="floral-beauty-flatlay" />

      <section className="sec">
        <div className="wrap privacy-layout">
          <div>
            <SectionHeading eyebrow="What the site does" title="No accounts and no connected booking system." />
            <p>
              This website does not currently have accounts, user logins, or a connected booking system. The contact form is a front-end experience only and is not connected to a server, CRM or booking backend.
            </p>
            <p>
              Any information entered into the form is only used to validate the entry on the page itself. Nothing is sent or stored by the site at this stage.
            </p>
          </div>

          <div>
            <SectionHeading eyebrow="Third-party links" title="Links to social platforms." />
            <p>
              Links to Instagram and Facebook are external links to those services. Their own privacy and data practices apply once you leave this website.
            </p>
            <p>
              This site may also use a production domain and standard social metadata, but it does not currently run analytics, tracking or a data collection service.
            </p>
          </div>

          <div>
            <SectionHeading eyebrow="To be confirmed" title="Future details may change." />
            <ul className="check-list">
              <li>Whether the salon wants to store form submissions.</li>
              <li>Whether a booking system or email service is added later.</li>
              <li>Whether the final privacy policy includes analytics, cookies or retargeting.</li>
            </ul>
          </div>
        </div>
      </section>
    </Page>
  )
}
