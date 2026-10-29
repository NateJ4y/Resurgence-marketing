import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect } from 'react'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Our work' },
  { to: '/about', label: 'About' },
  { to: '/how-we-work', label: 'How we work' },
]

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="nav-wrap">
          <Link to="/" className="brand-lockup" aria-label="Resurgence Marketing home">
            <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
            <span className="brand-wordmark">RESURGENCE<span>MARKETING</span></span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{link.label}</NavLink>
            ))}
          </nav>
          <Link to="/contact" className="nav-cta">Plan a campaign <ArrowUpRight size={16} /></Link>
          <button className="mobile-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <div id="mobile-navigation" className={menuOpen ? 'mobile-nav is-open' : 'mobile-nav'} hidden={!menuOpen}>
          <nav aria-label="Mobile navigation">
            <NavLink to="/" end>Home <span>01</span></NavLink>
            {links.map((link, index) => <NavLink key={link.to} to={link.to}>{link.label}<span>{String(index + 2).padStart(2, '0')}</span></NavLink>)}
            <NavLink to="/contact">Plan a campaign <span>→</span></NavLink>
          </nav>
          <p>Campaign thinking. Real-world execution.</p>
        </div>
      </header>
      <main id="main"><Outlet /></main>
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="brand-lockup light" aria-label="Resurgence Marketing home">
              <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
              <span className="brand-wordmark">RESURGENCE<span>MARKETING</span></span>
            </Link>
            <p>We connect brands with people through experiences worth remembering.</p>
          </div>
          <div className="footer-links"><span className="eyebrow">EXPLORE</span>{links.map((link) => <Link key={link.to} to={link.to}>{link.label}</Link>)}</div>
          <div className="footer-links"><span className="eyebrow">LET'S TALK</span><a href="mailto:admin@resurgencemarketing.co.za">admin@resurgencemarketing.co.za</a><a href="tel:+27682363608">+27 68 236 3608</a><Link to="/contact" className="footer-cta">Start a conversation <ArrowUpRight size={15} /></Link></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Resurgence Marketing</span><span>Made for real-world impact.</span><Link to="/contact">Have a campaign in mind? <ArrowUpRight size={14} /></Link></div>
      </footer>
    </>
  )
}
