import { motion } from 'framer-motion'
import { Dumbbell, Heart, Users, Target, Zap, Clock } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: 'Weight Training',
      description: 'Build strength and muscle with our comprehensive free weights and machines area',
    },
    {
      icon: Heart,
      title: 'Cardio Training',
      description: 'Improve endurance with treadmills, ellipticals, bikes, and rowing machines',
    },
    {
      icon: Target,
      title: 'Strength & Conditioning',
      description: 'Athletic performance enhancement with functional training equipment',
    },
    {
      icon: Users,
      title: 'Personal Training',
      description: 'One-on-one sessions with certified trainers for personalized guidance',
    },
    {
      icon: Zap,
      title: 'Group Sessions',
      description: 'Energizing group classes including HIIT, yoga, and circuit training',
    },
    {
      icon: Clock,
      title: '24/7 Access',
      description: 'Train anytime with round-the-clock access to all facilities',
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-gym-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl tracking-wider mb-4">
            OUR <span className="text-gym-red">SERVICES</span>
          </h2>
          <div className="w-24 h-1 bg-gym-red mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive fitness solutions designed to help you reach your goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gym-darker p-8 rounded-2xl border border-gray-800 hover:border-gym-red transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gym-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gym-red/20 transition-colors">
                <service.icon className="text-gym-red w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl tracking-wider mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-block bg-gym-red hover:bg-red-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
