import { useMemo, useState } from 'react'
import { Page, PageHero, SectionHeading, CategoryFilter, GalleryGrid, Lightbox, ButtonLink, CtaBand } from '../components/ui'
import { galleryItems } from '../data/gallery'

export default function Gallery() {
  const categories = ['All', ...new Set(galleryItems.map((item) => item.category))]
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return galleryItems
    return galleryItems.filter((item) => item.category === selectedCategory)
  }, [selectedCategory])

  return (
    <Page title="Gallery" desc="Gallery for Blush and Bloom. Illustrative salon imagery and beauty details.">
      <PageHero eyebrow="Gallery" title="A look inside." intro="A warm editorial selection of salon moments and beauty details." imageId="salon-interior-ambience" />

      <section className="sec sec-soft">
        <div className="wrap">
          <SectionHeading eyebrow="Browse" title="Illustrative photography." intro="Each image is a stock-style placeholder until the salon supplies its own final library." />
          <CategoryFilter items={categories} value={selectedCategory} onChange={setSelectedCategory} />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <GalleryGrid items={filteredItems} onSelect={(index) => setSelectedIndex(index)} />
        </div>
      </section>

      {selectedIndex !== null && filteredItems[selectedIndex] ? (
        <Lightbox items={filteredItems} selectedIndex={selectedIndex} onClose={() => setSelectedIndex(null)} />
      ) : null}

      <section className="sec sec-soft">
        <div className="wrap center-block">
          <SectionHeading eyebrow="Follow along" title="More inspiration online." intro="See the latest styling and beauty updates on Instagram or send an enquiry directly." align="center" />
          <div className="btns btns--center">
            <ButtonLink href="https://www.instagram.com/blushandbloombydikshagosar/" external variant="primary">Instagram</ButtonLink>
            <ButtonLink to="/contact" variant="secondary">Contact</ButtonLink>
          </div>
        </div>
      </section>

      <CtaBand />
    </Page>
  )
}
