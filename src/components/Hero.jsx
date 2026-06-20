import { ArrowRight, Dumbbell } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gym-darker via-gym-dark to-black/90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920')] bg-cover bg-center opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Dumbbell className="text-gym-red w-12 h-12 mr-3" />
            <span className="font-display text-2xl tracking-widest text-gray-300">
              PREMIUM FITNESS CENTER
            </span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wider mb-6">
            GET FIT. <span className="text-gym-red">STAY HIT.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
            Transform your body and mind with world-class equipment, expert trainers, 
            and a community that pushes you to be your best.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group bg-gym-red hover:bg-red-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              Join Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="border-2 border-white hover:border-gym-red hover:text-gym-red text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-3 bg-gym-red rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
