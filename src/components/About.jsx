import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.imageWrap}>
            <div className={styles.imagePlaceholder}>
              <div className={styles.imageInner}>
                <span className={styles.imageIcon}>Miejsce na zdjęcie</span>
                <p className={styles.imageCaption}>Nasze biuro · ul. Mokotowska 12, Warszawa</p>
              </div>
            </div>
            <div className={styles.accent} />
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.eyebrow}>O nas</p>
          <h2 className={styles.title}>
            Nieruchomości<br />
            <em>to nasza pasja.</em>
          </h2>
          <p className={styles.body}>
            Estatum to butikowe biuro nieruchomości działające na rynku warszawskim od ponad 12 lat. Stawiamy na indywidualne podejście — każdy klient to dla nas osobna historia, nie kolejna transakcja.
          </p>
          <p className={styles.body}>
            Nasz zespół doświadczonych pośredników zna rynek jak własną kieszeń. Doradzamy rzetelnie, działamy sprawnie i dbamy o każdy detal — od pierwszego spotkania po podpisanie umowy.
          </p>
          <div className={styles.pill}>
            <span>📍</span> Obsługujemy całą Warszawę i okolice
          </div>
        </div>
      </div>
    </section>
  )
}
