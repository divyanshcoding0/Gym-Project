import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gym-darker border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl tracking-wider mb-4">
              FIT <span className="text-gym-red">HIT</span> GYM
            </h3>
            <p className="text-gray-400 mb-4">
              Transform your body and mind with world-class facilities and expert trainers.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gym-red rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="text-white w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gym-red rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="text-white w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gym-red rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="text-white w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-gym-red transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-gym-red transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#trainers" className="text-gray-400 hover:text-gym-red transition-colors">
                  Trainers
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gym-red transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-gym-red transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-gym-red transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl tracking-wider mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="text-gym-red w-5 h-5 flex-shrink-0" />
                <a href="tel:8091135143" className="hover:text-gym-red transition-colors">
                  8091135143
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="text-gym-red w-5 h-5 flex-shrink-0" />
                <a href="mailto:Divyansh0914@gmail.com" className="hover:text-gym-red transition-colors">
                  Divyansh0914@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="text-gym-red w-5 h-5 flex-shrink-0 mt-1" />
                <span>
                  Main Bazar, Gandhi Chowk,<br />
                  Hamirpur, Himachal Pradesh
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-xl tracking-wider mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>5:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>6:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>7:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © {currentYear} Fit Hit Gym. All rights reserved. | Owner: Divyansh
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
