import { Page, Hero } from '../components/ui'
export default function Privacy() {
  return <Page title="Privacy" desc="Privacy information."><Hero eyebrow="Privacy" title="Privacy information" />
    <section className="sec"><div className="wrap" style={{ maxWidth: 720 }}><h2>Your information</h2><p>This website has no accounts and does not send form data anywhere. The enquiry form is not yet connected to a service.</p>
      <h2>Third-party links</h2><p>Links to Instagram and Facebook are governed by those services' own policies.</p>
      <h2>To be confirmed</h2><p>A full policy covering any analytics, booking tools or data handling will be added once the salon confirms how enquiries are processed.</p></div></section></Page>
}
