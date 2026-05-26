import { useParams, Link } from 'react-router-dom'
import styles from './OfertaPage.module.css'
import oferty, { TYPY } from '../data/oferty.js'
import agenci from '../data/agenci.js'

function formatCena(n) {
  return n.toLocaleString('pl-PL') + ' zł'
}

function typLabel(v) {
  const t = TYPY.find(t => t.value === v)
  return t ? t.label : v
}

export default function OfertaPage() {
  const { id } = useParams()
  const o = oferty.find(o => o.id === Number(id))
  const agent = o ? agenci.find(a => a.id === o.agent_id) : null

  if (!o) {
    return (
      <div className={styles.page}>
        <div className={styles.inner}>
          <Link to="/oferty" className={styles.back}>← Powrót do ofert</Link>
          <p style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--gray)' }}>
            Oferta nie została znaleziona.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.inner}>
        <Link to="/oferty" className={styles.back}>← Powrót do ofert</Link>

        <div className={styles.card}>
          <div className={styles.image}>
            <span className={styles.imageBadge}>{typLabel(o.typ)}</span>
            <span>🏠</span>
            <span className={styles.imageLabel}>Zdjęcie poglądowe</span>
          </div>

          <div className={styles.body}>
            <div className={styles.header}>
              <h1 className={styles.title}>{o.tytul}</h1>
              <span className={styles.cena}>{formatCena(o.cena)}</span>
            </div>

            <p className={styles.meta}>
              <span className={styles.metaItem}>
                📍 <span className={styles.metaValue}>{o.lokalizacja}</span>
              </span>
              <span className={styles.metaItem}>
                📐 <span className={styles.metaValue}>{o.powierzchnia} m²</span>
              </span>
              {o.liczba_pokoi > 0 && (
                <span className={styles.metaItem}>
                  🛏️ <span className={styles.metaValue}>{o.liczba_pokoi} pokoje</span>
                </span>
              )}
              {o.piętro && (
                <span className={styles.metaItem}>
                  🏢 <span className={styles.metaValue}>piętro {o.piętro}</span>
                </span>
              )}
            </p>

            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Typ nieruchomości</span>
                <span className={styles.detailValue}>{typLabel(o.typ)}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Powierzchnia</span>
                <span className={styles.detailValue}>{o.powierzchnia} m²</span>
              </div>
              {o.liczba_pokoi > 0 && (
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Liczba pokoi</span>
                  <span className={styles.detailValue}>{o.liczba_pokoi}</span>
                </div>
              )}
              {o.piętro && (
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Piętro</span>
                  <span className={styles.detailValue}>{o.piętro}</span>
                </div>
              )}
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Data dodania</span>
                <span className={styles.detailValue}>{o.data_dodania}</span>
              </div>
            </div>

            <p className={styles.opis}>{o.opis}</p>

            {agent && (
              <div className={styles.agentSection}>
                <div className={styles.agentAvatar}>👤</div>
                <div className={styles.agentInfo}>
                  <p className={styles.agentLabel}>Agent prowadzący</p>
                  <p className={styles.agentName}>{agent.imie} {agent.nazwisko}</p>
                  <p className={styles.agentContact}>{agent.telefon} · {agent.email}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
