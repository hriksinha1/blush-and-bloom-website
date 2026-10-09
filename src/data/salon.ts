export interface Service { slug: string; name: string; description: string; image?: string; price?: string; duration?: string; verified: boolean }
export interface GalleryImage { src: string; alt: string; caption?: string; demo: boolean }
export interface Faq { q: string; a: string }
export const salon = {
  name: 'Blush and Bloom', founder: 'Diksha Gosar', tagline: 'A little time, just for you.',
  instagram: 'https://www.instagram.com/blushandbloombydikshagosar/',
  facebook: 'https://www.facebook.com/diksha.gosar.5/',
  // Set these when confirmed. Null values are hidden everywhere, never shown as broken links.
  phone: null as string | null, email: null as string | null, bookingUrl: null as string | null,
  address: null as string | null, hours: null as string | null,
}
// Add verified services here. Each entry gets /services/<slug> automatically.
export const services: Service[] = []
// Add images to public/images and list them here. demo:true labels stock photography.
export const gallery: GalleryImage[] = []
export const faqs: Faq[] = [
  { q: 'How do I book an appointment?', a: 'Booking details are being confirmed. For now, send an enquiry through the contact page or message the salon on Instagram.' },
  { q: 'What services are offered and what do they cost?', a: 'Please contact the salon for the current service list and pricing.' },
  { q: 'Where is the salon and when is it open?', a: 'Address and opening hours will be published here once confirmed. Contact the salon to check.' },
]
