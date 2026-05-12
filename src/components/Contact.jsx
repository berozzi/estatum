import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // In production: connect to backend / emailjs / formspree
    setSent(true)
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>Kontakt</p>
          <h2 className={styles.title}>
            Porozmawiajmy<br />
            <em>o Twoich planach.</em>
          </h2>
          <p className={styles.sub}>
            Napisz do nas lub zadzwoń — odpowiadamy tego samego dnia roboczego.
          </p>

          <div className={styles.details}>
            <div className={styles.detail}>
              <span className={styles.detailIcon}>📞</span>
              <div>
                <span className={styles.detailLabel}>Telefon</span>
                <a href="tel:+48221234567" className={styles.detailValue}>+48 22 123 45 67</a>
              </div>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailIcon}>✉️</span>
              <div>
                <span className={styles.detailLabel}>Email</span>
                <a href="mailto:biuro@estatum.pl" className={styles.detailValue}>biuro@estatum.pl</a>
              </div>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailIcon}>📍</span>
              <div>
                <span className={styles.detailLabel}>Adres</span>
                <span className={styles.detailValue}>ul. Mokotowska 12, Warszawa</span>
              </div>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailIcon}>🕐</span>
              <div>
                <span className={styles.detailLabel}>Godziny</span>
                <span className={styles.detailValue}>Pon–Pt 9:00–18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
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
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jan Kowalski"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="phone">Telefon</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+48 000 000 000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Adres e-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jan@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Wiadomość</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Chciałbym kupić / sprzedać / wynająć..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className={styles.submit}>
                Wyślij wiadomość
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
