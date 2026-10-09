export const SHOW_DEMO_LABELS = true

export const salon = {
  name: 'Blush and Bloom',
  founder: 'Diksha Gosar',
  tagline: 'A little time, just for you.',
  description:
    'Blush and Bloom is a warm, reflective salon experience built around soft beauty rituals, calm service and personal attention.',
  instagram: 'https://www.instagram.com/blushandbloombydikshagosar/',
  facebook: 'https://www.facebook.com/diksha.gosar.5/',
  phone: null as string | null,
  email: null as string | null,
  bookingUrl: null as string | null,
  address: null as string | null,
  hours: null as string | null,
}

export const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
] as const

export const footerGroups = [
  { heading: 'Explore', links: navItems },
  { heading: 'Follow', links: [
      { to: salon.instagram, label: 'Instagram', external: true },
      { to: salon.facebook, label: 'Facebook', external: true },
      { to: '/privacy', label: 'Privacy', external: false },
    ] },
] as const

export { services } from './services'
export { galleryItems as gallery } from './gallery'
export { faqList as faqs, faqGroups } from './faqs'
export type { FaqGroup, FaqItem } from './faqs'
export type { Service } from './services'
export type { GalleryItem } from './gallery'

export const siteUrl = 'https://blushbloom-sepia.vercel.app'

