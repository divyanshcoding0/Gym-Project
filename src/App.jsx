import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Trainers from './components/Trainers'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gym-darker">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <About />
      <Trainers />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
