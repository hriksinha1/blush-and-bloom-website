import { useEffect, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Page, Hero, Cta, Empty } from '../components/ui'
import { gallery, salon } from '../data/salon'
export default function Gallery() {
  const [i, setI] = useState<number | null>(null); const closeRef = useRef<HTMLButtonElement>(null); const n = gallery.length
  useEffect(() => {
    if (i === null) return; closeRef.current?.focus()
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') setI(null); if (e.key === 'ArrowRight') setI(v => (v! + 1) % n); if (e.key === 'ArrowLeft') setI(v => (v! - 1 + n) % n) }
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [i, n])
  return <Page title="Gallery" desc="Gallery for Blush and Bloom."><Hero eyebrow="Gallery" title="A look inside" />
    <section className="sec"><div className="wrap">{n ? <div className="grid">{gallery.map((g, x) => <button key={g.src} onClick={() => setI(x)} aria-label={`Open: ${g.alt}`}><img src={g.src} alt={g.alt} loading="lazy" /></button>)}</div>
      : <Empty><h2>Photographs coming soon.</h2><p>See the latest work on <a href={salon.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>.</p></Empty>}</div></section>
    {i !== null && <div className="lb" role="dialog" aria-modal="true" aria-label="Image viewer"><div className="ctl">
      <button aria-label="Previous image" onClick={() => setI((i - 1 + n) % n)}><ChevronLeft /></button><button aria-label="Next image" onClick={() => setI((i + 1) % n)}><ChevronRight /></button>
      <button ref={closeRef} aria-label="Close" onClick={() => setI(null)}><X /></button></div>
      <figure style={{ margin: 0, color: '#fff', textAlign: 'center' }}><img src={gallery[i].src} alt={gallery[i].alt} /><figcaption>{gallery[i].caption}{gallery[i].demo && ' (demonstration photograph)'}</figcaption></figure></div>}
    <Cta /></Page>
}
