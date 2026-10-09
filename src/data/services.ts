export type Service = {
  slug: string
  name: string
  category: string
  description: string
  longDescription?: string
  image: string
  price?: string
  duration?: string
  includes?: string[]
  demo: boolean
}

export const services: Service[] = [
  {
    slug: 'signature-styling',
    name: 'Signature styling',
    category: 'Hair styling',
    description: 'Thoughtful styling for everyday polish, occasion looks, and a little extra confidence.',
    longDescription:
      'A personalised styling service that balances shape, texture and finish to create a look that feels effortless and easy to maintain. It is designed for clients who want a polished, considered result without the pressure of a rigid beauty brief.',
    image: 'salon-interior-hero',
    demo: true,
  },
  {
    slug: 'colour-refresh',
    name: 'Colour refresh',
    category: 'Hair colour',
    description: 'A soft, tailored refresh for tone, depth and brightness with a natural finish.',
    longDescription:
      'A colour service focused on healthy-looking tone and brightness, with subtle dimension and a finish that sits naturally with your everyday look. The experience is tailored around your preferences, skin tone and maintenance goals.',
    image: 'hair-colour-detail',
    demo: true,
  },
  {
    slug: 'makeup-glow',
    name: 'Makeup glow',
    category: 'Makeup',
    description: 'Lightweight, fresh makeup suited to events, evenings out, and soft everyday radiance.',
    longDescription:
      'This service is shaped around natural skin and a refined finish, keeping the application fresh and comfortable. It is ideal for clients wanting a polished look that feels effortless from midday through evening.',
    image: 'makeup-brushes-closeup',
    demo: true,
  },
  {
    slug: 'bridal-prep',
    name: 'Bridal prep',
    category: 'Bridal',
    description: 'A calm, considered beauty service for moments that deserve a little extra care.',
    longDescription:
      'Bridal prep is designed to create a relaxed, considered experience and a look that feels aligned with the occasion. It is a flexible service that can be shaped around your plans, comfort and aesthetic preferences.',
    image: 'bridal-hair-editorial',
    demo: true,
  },
  {
    slug: 'skin-and-bloom',
    name: 'Skin & glow',
    category: 'Skin and beauty',
    description: 'Gentle, restorative treatments that help skin feel refreshed, hydrated and balanced.',
    longDescription:
      'This service brings a slower, comfortable beauty ritual to the skin, with an emphasis on softness, hydration and an easy, healthy finish. It is intended for clients looking for a calm, elevated treatment without overcomplication.',
    image: 'skincare-facial-detail',
    demo: true,
  },
  {
    slug: 'nail-care',
    name: 'Nail care',
    category: 'Nails',
    description: 'A polished, easy manicure care ritual with a clean, understated finish.',
    longDescription:
      'Nail care is tailored to those who want a tidy, refined finish that feels easy to live in. The service keeps the look clean, polished and quietly elegant while staying flexible to personal taste and routines.',
    image: 'nail-care-detail',
    demo: true,
  },
]
