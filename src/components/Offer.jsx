import styles from './Offer.module.css'

const services = [
  {
    icon: '🏡',
    title: 'Sprzedaż',
    desc: 'Wyceniamy, przygotowujemy dokumentację i skutecznie sprzedajemy Twoją nieruchomość w najkrótszym możliwym czasie.',
  },
  {
    icon: '🔑',
    title: 'Zakup',
    desc: 'Pomagamy znaleźć wymarzone mieszkanie lub dom — analizujemy rynek i negocjujemy w Twoim imieniu.',
  },
  {
    icon: '📋',
    title: 'Wynajem',
    desc: 'Obsługujemy zarówno właścicieli, jak i najemców. Dbamy o bezpieczne umowy i sprawny proces.',
  },
  {
    icon: '📊',
    title: 'Wycena',
    desc: 'Profesjonalna wycena nieruchomości oparta na aktualnych danych rynkowych i wieloletnim doświadczeniu.',
  },
]

export default function Offer() {
  return (
    <section className={styles.section} id="offer">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Oferta</p>
          <h2 className={styles.title}>
            Co możemy<br />dla Ciebie zrobić?
          </h2>
          <p className={styles.sub}>
            Kompleksowa obsługa nieruchomości — od pierwszego kroku do finalizacji.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.icon}>{s.icon}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
