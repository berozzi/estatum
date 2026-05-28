import { Link } from 'react-router-dom'
import styles from './AgenciPage.module.css'
import agenci from '../data/agenci.js'
import oferty from '../data/oferty.js'
import { TYPY } from '../data/oferty.js'

function formatCena(n) {
  return n.toLocaleString('pl-PL') + ' zł'
}

function typLabel(v) {
  const t = TYPY.find(t => t.value === v)
  return t ? t.label : v
}

export default function AgenciPage() {
  return (
    <div className={styles.page}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.gridBg} />
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Zespół</p>
          <h1 className={styles.title}>
            Poznaj <em>naszych agentów.</em>
          </h1>
          <p className={styles.sub}>
            Każdy z naszych agentów to ekspert w swojej dziedzinie. Doradzimy Ci najlepiej.
          </p>
        </div>

        <div className={styles.list}>
          {agenci.map(a => {
            const ofertyAgenta = oferty.filter(o => a.oferty_ids.includes(o.id))

            return (
              <div key={a.id} className={styles.agentCard}>
                <div className={styles.agentTop}>
                  <div className={styles.photo}><img src={a.zdjecie} alt={`${a.imie} ${a.nazwisko}`} /></div>
                  <div className={styles.agentInfo}>
                    <h2 className={styles.agentName}>
                      {a.imie} {a.nazwisko}
                    </h2>
                    <p className={styles.agentTitle}>{a.tytul}</p>
                    <p className={styles.agentDesc}>{a.opis}</p>
                    <div className={styles.agentContact}>
                      <a href={`tel:${a.telefon}`}>📞 {a.telefon}</a>
                      <a href={`mailto:${a.email}`}>✉️ {a.email}</a>
                    </div>
                  </div>
                </div>

                {ofertyAgenta.length > 0 && (
                  <div className={styles.ofertyAgent}>
                    <p className={styles.ofertyLabel}>Oferty agenta ({ofertyAgenta.length})</p>
                    <div className={styles.ofertyGrid}>
                      {ofertyAgenta.map(o => (
                        <Link key={o.id} to={`/oferty/${o.id}`} className={styles.ofertaMini}>
                          <p className={styles.ofertaMiniTyp}>{typLabel(o.typ)}</p>
                          <p className={styles.ofertaMiniTytul}>{o.tytul}</p>
                          <p className={styles.ofertaMiniCena}>{formatCena(o.cena)}</p>
                          <p className={styles.ofertaMiniLokalizacja}>📍 {o.lokalizacja}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
