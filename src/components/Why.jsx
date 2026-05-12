import styles from './Why.module.css'

const reasons = [
  { num: '01', title: 'Indywidualne podejście', desc: 'Słuchamy, doradzamy i działamy w Twoim najlepszym interesie — bez skryptów, bez wywierania presji.' },
  { num: '02', title: 'Pełna przejrzystość', desc: 'Żadnych ukrytych kosztów ani niejasnych zapisów. Prowizja ustalana z góry, warunki jasne od pierwszego dnia.' },
  { num: '03', title: 'Szybkie działanie', desc: 'Reagujemy błyskawicznie. Nasi klienci nie czekają tygodniami na odpowiedź — jesteśmy do dyspozycji.' },
  { num: '04', title: 'Lokalna wiedza', desc: 'Znamy Warszawę dzielnica po dzielnicy. Wiemy, gdzie ceny rosną i gdzie warto inwestować.' },
]

export default function Why() {
  return (
    <section className={styles.section} id="why">
      <div className={styles.inner}>
        <div className={styles.top}>
          <p className={styles.eyebrow}>Dlaczego my</p>
          <h2 className={styles.title}>Nie jesteśmy typowym biurem.</h2>
        </div>

        <div className={styles.list}>
          {reasons.map(r => (
            <div key={r.num} className={styles.item}>
              <span className={styles.num}>{r.num}</span>
              <div>
                <h3 className={styles.itemTitle}>{r.title}</h3>
                <p className={styles.itemDesc}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Przekonaj się sam — pierwsze spotkanie zawsze bez zobowiązań.
          </p>
          <a href="#contact" className={styles.ctaBtn}>Porozmawiajmy →</a>
        </div>
      </div>
    </section>
  )
}
