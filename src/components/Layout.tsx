import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { salon } from '../data/salon'
import { BookLink } from './ui'
const nav = [['/', 'Home'], ['/services', 'Services'], ['/about', 'About'], ['/gallery', 'Gallery'], ['/faq', 'FAQ'], ['/contact', 'Contact']]
export default function Layout() {
  const [open, setOpen] = useState(false); const loc = useLocation()
  useEffect(() => setOpen(false), [loc.pathname])
  return <>
    <a href="#main" className="btn" style={{ position: 'absolute', left: -999 }} onFocus={e => (e.currentTarget.style.left = '8px')} onBlur={e => (e.currentTarget.style.left = '-999px')}>Skip to content</a>
    <header className="top"><div className="wrap bar">
      <Link to="/" className="logo">{salon.name}</Link>
      <nav id="nav" className={'main' + (open ? ' open' : '')} aria-label="Main">
        {nav.map(([to, l]) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>{l}</NavLink>)}
      </nav>
      <span className="hide-m"><BookLink /></span>
      <button className="menu" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div></header>
    <main id="main"><Outlet /></main>
    <footer className="foot"><div className="wrap row">
      <div><div className="logo" style={{ color: '#fff' }}>{salon.name}</div><p>{salon.tagline}</p></div>
      <div><strong>Explore</strong><br />{nav.map(([to, l]) => <div key={to}><Link to={to}>{l}</Link></div>)}<div><Link to="/privacy">Privacy</Link></div></div>
      <div><strong>Follow</strong><br /><a href={salon.instagram} target="_blank" rel="noopener noreferrer">Instagram</a><br /><a href={salon.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
        {salon.phone && <><br /><a href={`tel:${salon.phone}`}>{salon.phone}</a></>}{salon.email && <><br /><a href={`mailto:${salon.email}`}>{salon.email}</a></>}</div>
    </div></footer></>
}
