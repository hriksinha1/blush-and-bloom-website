export type GalleryItem = {
  id: string
  imageId: string
  category: string
  caption?: string
  demo: boolean
}

export const galleryItems: GalleryItem[] = [
  { id: 'interior-1', imageId: 'salon-interior-ambience', category: 'Interior', caption: 'Warm, soft light and a considered salon mood.', demo: true },
  { id: 'interior-2', imageId: 'salon-mirror-detail', category: 'Interior', caption: 'A calm styling moment with reflective details.', demo: true },
  { id: 'hair-1', imageId: 'salon-styling-stations', category: 'Hair', caption: 'A clean, editorial styling station.', demo: true },
  { id: 'hair-2', imageId: 'bridal-hair-editorial', category: 'Hair', caption: 'Soft bridal styling inspiration.', demo: true },
  { id: 'colour-1', imageId: 'hair-colour-detail', category: 'Colour', caption: 'A close-up of depth, tone and shine.', demo: true },
  { id: 'beauty-1', imageId: 'makeup-brushes-closeup', category: 'Beauty', caption: 'A beauty detail with texture and warmth.', demo: true },
  { id: 'beauty-2', imageId: 'floral-beauty-flatlay', category: 'Beauty', caption: 'Blush-toned styling details and florals.', demo: true },
  { id: 'skin-1', imageId: 'skincare-facial-detail', category: 'Skin', caption: 'A soft skincare moment with gentle texture.', demo: true },
  { id: 'nails-1', imageId: 'nail-care-detail', category: 'Nails', caption: 'Minimal, polished nails in a warm neutral finish.', demo: true },
  { id: 'salon-1', imageId: 'salon-chair-detail', category: 'Salon', caption: 'A relaxed salon atmosphere built around comfort.', demo: true },
]
