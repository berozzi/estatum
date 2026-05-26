import styles from './ONasPage.module.css'

export default function ONasPage() {
  return (
    <div className={styles.page}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.gridBg} />
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>O nas</p>
          <h1 className={styles.title}>
            Nieruchomości <em>to nasza pasja.</em>
          </h1>
        </div>

        <div className={styles.intro}>
          <p>
            <strong>Estatum</strong> to butikowe biuro nieruchomości z siedzibą w Warszawie.
            Działamy na rynku od 2014 roku, łącząc kameralną atmosferę z profesjonalizmem
            dużej organizacji. Stawiamy na <strong>jakość, a nie ilość</strong> — każdy klient
            to dla nas osobna historia, nie kolejna transakcja.
          </p>
          <p>
            Nasz zespół doświadczonych pośredników zna stołeczny rynek jak własną kieszeń.
            Doradzamy rzetelnie, działamy sprawnie i dbamy o każdy detal — od pierwszego
            spotkania po podpisanie aktu notarialnego.
          </p>
        </div>

        <div className={styles.stats}>
          {[
            { num: '180+', label: 'transakcji rocznie' },
            { num: '12', label: 'lat doświadczenia' },
            { num: '98%', label: 'zadowolonych klientów' },
            { num: '4', label: 'doświadczonych agentów' },
          ].map(s => (
            <div key={s.num} className={styles.stat}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.sectionBlock}>
          <div className={styles.sectionImage}>
            <span>🏢</span>
          </div>
          <div className={styles.sectionContent}>
            <h3>Nasze biuro w sercu Warszawy</h3>
            <p>
              Znajdziesz nas przy ulicy Mokotowskiej 12, w samym centrum miasta.
              Nasz przestronny, nowoczesny salon sprzedaży to miejsce, w którym
              chętnie gościmy klientów na kawę i rozmowę o nieruchomościach.
            </p>
            <p>
              Zapraszamy od poniedziałku do piątku w godzinach 9:00–18:00.
              Po wcześniejszym umówieniu — również w weekendy.
            </p>
          </div>
        </div>

        <div className={styles.sectionBlock}>
          <div className={styles.sectionContent}>
            <h3>Nasze wartości</h3>
            <p>
              Każda transakcja to dla nas zobowiązanie. Działamy transparentnie,
              uczciwie i z pełnym zaangażowaniem. Nie stosujemy presji ani
              ukrytych opłat — budujemy relacje oparte na zaufaniu.
            </p>
          </div>
          <div className={styles.sectionImage}>
            <span>⭐</span>
          </div>
        </div>

        <div className={styles.values}>
          <h3>Co nas wyróżnia</h3>
          <div className={styles.valuesGrid}>
            {[
              { icon: '🤝', title: 'Indywidualne podejście', desc: 'Każdego klienta traktujemy wyjątkowo. Dopasowujemy strategię do Twoich potrzeb.' },
              { icon: '📊', title: 'Lokalna wiedza', desc: 'Znamy Warszawę dzielnica po dzielnicy. Wiemy, gdzie warto inwestować.' },
              { icon: '🔒', title: 'Pełna transparentność', desc: 'Żadnych ukrytych kosztów. Wszystkie warunki jasne od pierwszego dnia.' },
              { icon: '⚡', title: 'Szybkie działanie', desc: 'Reagujemy błyskawicznie. Nasi klienci nie czekają tygodniami na odpowiedź.' },
            ].map(v => (
              <div key={v.title} className={styles.valueItem}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <div>
                  <p className={styles.valueTitle}>{v.title}</p>
                  <p className={styles.valueDesc}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
