import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gym-darker/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="font-display text-3xl tracking-wider text-white">
            FIT <span className="text-gym-red">HIT</span> GYM
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-gym-red transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gym-red hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gym-darker/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-gym-red transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-gym-red hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
