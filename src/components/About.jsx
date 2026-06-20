import { motion } from 'framer-motion'
import { Award, Users, Zap, Shield } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Expert Trainers',
      description: 'Certified professionals with years of experience in fitness and bodybuilding',
    },
    {
      icon: Zap,
      title: 'Modern Equipment',
      description: 'State-of-the-art machines and free weights for all fitness levels',
    },
    {
      icon: Users,
      title: 'Supportive Community',
      description: 'Join a family of motivated individuals who push each other to succeed',
    },
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'Clean, well-maintained facility with proper safety protocols',
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-gym-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl tracking-wider mb-4">
            ABOUT <span className="text-gym-red">US</span>
          </h2>
          <div className="w-24 h-1 bg-gym-red mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            At Fit Hit Gym, we believe fitness is not just about building muscles—it's about 
            building confidence, discipline, and a healthier lifestyle. Our mission is to provide 
            you with the best facilities, guidance, and motivation to achieve your fitness goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gym-darker p-8 rounded-2xl border border-gray-800 hover:border-gym-red transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gym-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gym-red/20 transition-colors">
                <feature.icon className="text-gym-red w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl tracking-wider mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-gym-red to-red-700 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="font-display text-3xl md:text-4xl tracking-wider mb-4">
            WHY CHOOSE FIT HIT GYM?
          </h3>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-6">
            We're not just a gym—we're your partner in fitness. With personalized training plans, 
            nutrition guidance, and 24/7 access, we ensure nothing stands between you and your goals.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-gym-red px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default About
