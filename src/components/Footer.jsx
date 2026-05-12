import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>E</span>
            <span>statum</span>
          </div>
          <p className={styles.tagline}>Twój dom zaczyna się tutaj.</p>
        </div>

        <nav className={styles.nav}>
          <a href="#about">O nas</a>
          <a href="#offer">Oferta</a>
          <a href="#why">Dlaczego my</a>
          <a href="#contact">Kontakt</a>
        </nav>

        <p className={styles.copy}>
          © {new Date().getFullYear()} Estatum. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  )
}
