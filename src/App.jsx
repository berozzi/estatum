import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Offer from './components/Offer'
import Why from './components/Why'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Offer />
        <Why />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
