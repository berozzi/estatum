import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './OfertyPage.module.css'
import oferty, { TYPY, CENY } from '../data/oferty.js'

function formatCena(n) {
  return n.toLocaleString('pl-PL') + ' zł'
}

function typLabel(v) {
  const t = TYPY.find(t => t.value === v)
  return t ? t.label.replace(/i$/,'') : v
}

export default function OfertyPage() {
  const [filtrTyp, setFiltrTyp] = useState('wszystkie')
  const [filtrCena, setFiltrCena] = useState('all')

  const przefiltrowane = oferty.filter(o => {
    if (filtrTyp !== 'wszystkie' && o.typ !== filtrTyp) return false
    if (filtrCena !== 'all') {
      const [min, max] = filtrCena.split('-').map(Number)
      if (o.cena < min || o.cena > max) return false
    }
    return true
  })

  return (
    <div className={styles.page}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.gridBg} />
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Oferty</p>
          <h1 className={styles.title}>
            Znajdź <em>swoje miejsce.</em>
          </h1>
          <p className={styles.sub}>
            Przeglądaj aktualne oferty mieszkań, domów, apartamentów i działek w Warszawie i okolicach.
          </p>
        </div>

        <div className={styles.filters}>
          <select
            className={styles.select}
            value={filtrTyp}
            onChange={e => setFiltrTyp(e.target.value)}
          >
            {TYPY.map(t => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>

          <select
            className={styles.select}
            value={filtrCena}
            onChange={e => setFiltrCena(e.target.value)}
          >
            {CENY.map(c => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>

        <p className={styles.wyniki}>
          Znaleziono {przefiltrowane.length} ofert{przefiltrowane.length === 1 ? '' : 'y'}
        </p>

        <div className={styles.grid}>
          {przefiltrowane.length > 0 ? przefiltrowane.map(o => (
            <Link key={o.id} to={`/oferty/${o.id}`} className={styles.card}>
              <div className={styles.image}>
                <span className={styles.badge}>{typLabel(o.typ)}</span>
                <span>🏠</span>
                <span className={styles.imageLabel}>Zdjęcie {o.tytul}</span>
              </div>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{o.tytul}</h3>
                <p className={styles.cardCena}>
                  {formatCena(o.cena)}
                  {o.typ !== 'dzialka' && <span> · {o.powierzchnia}m²</span>}
                </p>
                <p className={styles.cardLokalizacja}>📍 {o.lokalizacja}</p>
                <div className={styles.cardInfo}>
                  {o.liczba_pokoi > 0 && <span>🛏️ {o.liczba_pokoi} pokoje</span>}
                  {o.piętro && <span>🏢 piętro {o.piętro}</span>}
                  <span>📐 {o.powierzchnia}m²</span>
                </div>
              </div>
            </Link>
          )) : (
            <p className={styles.empty}>
              Brak ofert spełniających wybrane kryteria. Spróbuj zmienić filtry.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
