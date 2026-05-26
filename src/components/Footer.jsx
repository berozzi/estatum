import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoMark}>E</span>
            <span>statum</span>
          </Link>
          <p className={styles.tagline}>Twój dom zaczyna się tutaj.</p>
        </div>

        <nav className={styles.nav}>
          <Link to="/o-nas">O nas</Link>
          <Link to="/oferty">Oferty</Link>
          <Link to="/agenci">Agenci</Link>
          <Link to="/kontakt">Kontakt</Link>
        </nav>

        <p className={styles.copy}>
          © {new Date().getFullYear()} Estatum. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  )
}
