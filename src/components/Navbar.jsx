import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const links = [
    { label: 'Strona główna', to: '/' },
    { label: 'Oferty', to: '/oferty' },
    { label: 'Agenci', to: '/agenci' },
    { label: 'O nas', to: '/o-nas' },
    { label: 'Kontakt', to: '/kontakt' },
  ]

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link to="/" className={styles.logo}>
        <span className={styles.logoMark}>E</span>
        <span className={styles.logoText}>statum</span>
      </Link>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l.to}>
            <Link to={l.to} onClick={() => setMenuOpen(false)}>{l.label}</Link>
          </li>
        ))}
        <li>
          <Link to="/kontakt" className={styles.cta} onClick={() => setMenuOpen(false)}>
            Umów spotkanie
          </Link>
        </li>
      </ul>

      <button
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
        onClick={() => setMenuOpen(p => !p)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
