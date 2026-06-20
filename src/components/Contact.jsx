import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-gym-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl tracking-wider mb-4">
            CONTACT <span className="text-gym-red">US</span>
          </h2>
          <div className="w-24 h-1 bg-gym-red mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get in touch with us to start your fitness journey today
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gym-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-gym-red w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-wider mb-1">Phone</h3>
                  <a href="tel:8091135143" className="text-gray-300 hover:text-gym-red transition-colors">
                    8091135143
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gym-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-gym-red w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-wider mb-1">Email</h3>
                  <a href="mailto:Divyansh0914@gmail.com" className="text-gray-300 hover:text-gym-red transition-colors">
                    Divyansh0914@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gym-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-gym-red w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-wider mb-1">Location</h3>
                  <p className="text-gray-300">
                    Main Bazar, Gandhi Chowk,<br />
                    Hamirpur, Himachal Pradesh
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-display text-xl tracking-wider mb-2">Owner</h3>
                <p className="text-gray-300">Divyansh</p>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2722.5!2d76.5!3d31.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDQyJzAwLjAiTiA3NsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fit Hit Gym Location"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-gym-darker p-8 rounded-2xl border border-gray-800">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gym-dark border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-gym-red focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gym-dark border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-gym-red focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gym-dark border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-gym-red focus:outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gym-red hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
