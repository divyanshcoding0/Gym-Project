import { motion } from 'framer-motion'
import { Dumbbell, Target, Heart } from 'lucide-react'

const Trainers = () => {
  const trainers = [
    {
      name: 'Saiyam Sharma',
      specialty: 'Strength & Conditioning',
      icon: Dumbbell,
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&fit=crop',
    },
    {
      name: 'Aditya Thakur',
      specialty: 'Personal Training',
      icon: Target,
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop',
    },
    {
      name: 'Navtej Manhas',
      specialty: 'Cardio & Endurance',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop',
    },
  ]

  return (
    <section id="trainers" className="py-20 md:py-32 bg-gym-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl tracking-wider mb-4">
            OUR <span className="text-gym-red">TRAINERS</span>
          </h2>
          <div className="w-24 h-1 bg-gym-red mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Meet our team of expert trainers dedicated to helping you achieve your fitness goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gym-dark rounded-2xl overflow-hidden border border-gray-800 hover:border-gym-red transition-all duration-300 group"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gym-dark via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gym-red rounded-full mb-3">
                    <trainer.icon className="text-white w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl tracking-wider mb-2">{trainer.name}</h3>
                <p className="text-gym-red font-medium mb-4">{trainer.specialty}</p>
                <p className="text-gray-400 text-sm">
                  Certified professional with expertise in {trainer.specialty.toLowerCase()} 
                  and personalized fitness programs.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trainers
