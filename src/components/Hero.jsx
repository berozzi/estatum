import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.bg}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.grid} />
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>Biuro nieruchomości · Warszawa</div>

        <h1 className={styles.headline}>
          Twój dom<br />
          <em>zaczyna się tutaj.</em>
        </h1>

        <p className={styles.sub}>
          Pomagamy kupować, sprzedawać i wynajmować nieruchomości — z pełnym zaangażowaniem, bez zbędnych formalności.
        </p>

        <div className={styles.actions}>
          <a href="#contact" className={styles.btnPrimary}>Skontaktuj się z nami</a>
          <a href="#offer" className={styles.btnGhost}>Przeglądaj ofertę →</a>
        </div>
      </div>

      {/* <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNum}>180+</span>
          <span className={styles.statLabel}>transakcji rocznie</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.statNum}>12</span>
          <span className={styles.statLabel}>lat doświadczenia</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.statNum}>98%</span>
          <span className={styles.statLabel}>zadowolonych klientów</span>
        </div>
      </div> */}
    </section>
  )
}
