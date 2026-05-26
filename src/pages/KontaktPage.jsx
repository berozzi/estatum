import { useState } from 'react'
import styles from './KontaktPage.module.css'

const TOPICS = [
  { value: '', label: 'Wybierz temat...' },
  { value: 'kupno', label: 'Chcę kupić nieruchomość' },
  { value: 'sprzedaz', label: 'Chcę sprzedać nieruchomość' },
  { value: 'wynajem', label: 'Chcę wynająć nieruchomość' },
  { value: 'wycena', label: 'Potrzebuję wyceny' },
  { value: 'inwestycja', label: 'Inwestycja' },
  { value: 'inne', label: 'Inne zapytanie' },
]

export default function KontaktPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', topic: '', message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className={styles.page}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.gridBg} />
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Kontakt</p>
          <h1 className={styles.title}>
            Porozmawiajmy <em>o Twoich planach.</em>
          </h1>
        </div>

        <div className={styles.grid}>
          <div>
            <p className={styles.sub}>
              Napisz do nas lub zadzwoń — odpowiadamy tego samego dnia roboczego.
            </p>

            <div className={styles.details}>
              {[
                { icon: '📞', label: 'Telefon', value: '+48 22 123 45 67', href: 'tel:+48221234567' },
                { icon: '✉️', label: 'Email', value: 'biuro@estatum.pl', href: 'mailto:biuro@estatum.pl' },
                { icon: '📍', label: 'Adres', value: 'ul. Mokotowska 12, Warszawa' },
                { icon: '🕐', label: 'Godziny', value: 'Pon–Pt 9:00–18:00' },
              ].map(d => (
                <div key={d.label} className={styles.detail}>
                  <span className={styles.detailIcon}>{d.icon}</span>
                  <div>
                    <span className={styles.detailLabel}>{d.label}</span>
                    {d.href ? (
                      <a href={d.href} className={styles.detailValue}>{d.value}</a>
                    ) : (
                      <span className={styles.detailValue}>{d.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.social}>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">in</a>
            </div>
          </div>

          <div>
            {sent ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>✓</span>
                <h3>Dziękujemy!</h3>
                <p>Odezwiemy się najszybciej jak to możliwe.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name">Imię i nazwisko</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Jan Kowalski"
                      value={form.name} onChange={handleChange} required
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phone">Telefon</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="+48 000 000 000"
                      value={form.phone} onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">Adres e-mail</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="jan@example.com"
                    value={form.email} onChange={handleChange} required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="topic">Temat</label>
                  <select
                    id="topic" name="topic"
                    value={form.topic} onChange={handleChange} required
                  >
                    {TOPICS.map(t => (
                      <option key={t.value} value={t.value} disabled={t.value === ''}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Wiadomość</label>
                  <textarea
                    id="message" name="message" rows={5}
                    placeholder="Opisz czego dotyczy Twoje zapytanie..."
                    value={form.message} onChange={handleChange} required
                  />
                </div>

                <button type="submit" className={styles.submit}>
                  Wyślij zapytanie
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
