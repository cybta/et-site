import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Sectors & Clients', to: '/sectors-clients' },
  { label: 'Portfolio', to: '/project-portfolio' },
  { label: 'Credibility', to: '/institutional-credibility' },
  { label: 'Downloads', to: '/download-center' },
  { label: 'Storage', to: '/storage-expertise' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header id="siteHeader" className={scrolled || menuOpen ? 'scrolled' : ''}>
      <div className="wrap nav-row">
        <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="#E0BD72" strokeWidth="1.4" />
            <path d="M20 2C20 2 27 10 27 20C27 30 20 38 20 38C20 38 13 30 13 20C13 10 20 2 20 2Z" stroke="#E0BD72" strokeWidth="1.2" />
            <path d="M2 20H38" stroke="#E0BD72" strokeWidth="1.2" />
            <path d="M5 11.5H35" stroke="#E0BD72" strokeWidth="0.8" opacity="0.6" />
            <path d="M5 28.5H35" stroke="#E0BD72" strokeWidth="0.8" opacity="0.6" />
          </svg>
          <span className="logo-text">Earth<span>Technologies</span></span>
        </NavLink>

        <nav>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="nav-right">
          <div className="social-icons" aria-label="Social media links">
            <a href="#" aria-label="Facebook"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" /></svg></a>
            <a href="#" aria-label="Instagram"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2.4.27 3.2.55a6.5 6.5 0 0 1 2.4 1.55 6.5 6.5 0 0 1 1.55 2.4c.28.8.5 2 .55 3.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.27 2.4-.55 3.2a6.5 6.5 0 0 1-1.55 2.4 6.5 6.5 0 0 1-2.4 1.55c-.8.28-2 .5-3.2.55-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-2.4-.27-3.2-.55a6.5 6.5 0 0 1-2.4-1.55 6.5 6.5 0 0 1-1.55-2.4c-.28-.8-.5-2-.55-3.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.27-2.4.55-3.2A6.5 6.5 0 0 1 4.37 1.5 6.5 6.5 0 0 1 6.77.0c.8-.28 2-.5 3.2-.55C11.27 2.2 11.67 2.2 12 2.2Zm0 1.8c-3.15 0-3.52 0-4.76.07-1.04.05-1.6.22-1.97.36-.5.2-.85.43-1.22.8-.37.37-.6.72-.8 1.22-.14.37-.3.93-.36 1.97C2.8 9.66 2.8 10.03 2.8 13.18s0 3.52.07 4.76c.05 1.04.22 1.6.36 1.97.2.5.43.85.8 1.22.37.37.72.6 1.22.8.37.14.93.3 1.97.36 1.24.06 1.61.07 4.76.07s3.52 0 4.76-.07c1.04-.05 1.6-.22 1.97-.36.5-.2.85-.43 1.22-.8.37-.37.6-.72.8-1.22.14-.37.3-.93.36-1.97.06-1.24.07-1.61.07-4.76s0-3.52-.07-4.76c-.05-1.04-.22-1.6-.36-1.97a3.3 3.3 0 0 0-.8-1.22 3.3 3.3 0 0 0-1.22-.8c-.37-.14-.93-.3-1.97-.36-1.24-.06-1.61-.07-4.76-.07Zm0 4.6a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8Zm0 1.8a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Zm5.6-2a1.26 1.26 0 1 1 0 2.52 1.26 1.26 0 0 1 0-2.52Z" /></svg></a>
            <a href="#" aria-label="LinkedIn"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.5 4.78 5.8V21h-4v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.8h-4V9Z" /></svg></a>
          </div>
          <a href="#contact" className="nav-cta">Get a Quote</a>
          <button
            className="menu-btn"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.6" /></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.6" /></svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <nav>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>
          <a href="#contact" className="nav-cta mobile-cta" onClick={() => setMenuOpen(false)}>Get a Quote</a>
        </div>
      )}
    </header>
  );
}
