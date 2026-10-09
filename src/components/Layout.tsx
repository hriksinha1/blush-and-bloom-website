import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navItems, salon } from '../data/salon'
import { BookLink } from './ui'

export default function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <a href="#main" className="skip-link" onFocus={(event) => (event.currentTarget.style.left = '12px')} onBlur={(event) => (event.currentTarget.style.left = '-9999px')}>
        Skip to content
      </a>

      <header className="topbar">
        <div className="wrap topbar__inner">
          <Link to="/" className="brand-mark" aria-label="Blush and Bloom home">
            {salon.name}
          </Link>

          <nav id="nav" className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="topbar__actions">
            <span className="topbar__cta hide-mobile">
              <BookLink />
            </span>
            <button
              type="button"
              className="menu-button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="nav"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <div className="brand-mark brand-mark--light">{salon.name}</div>
            <p>{salon.tagline}</p>
          </div>

          <div>
            <h3>Explore</h3>
            <ul className="footer-list">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Follow</h3>
            <ul className="footer-list">
              <li>
                <a href={salon.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a href={salon.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              {salon.phone ? (
                <li>
                  <a href={`tel:${salon.phone}`}>{salon.phone}</a>
                </li>
              ) : null}
              {salon.email ? (
                <li>
                  <a href={`mailto:${salon.email}`}>{salon.email}</a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="wrap footer-base">
          <span>© {new Date().getFullYear()} Blush and Bloom</span>
          <Link to="/privacy">Privacy</Link>
        </div>
      </footer>
    </>
  )
}
