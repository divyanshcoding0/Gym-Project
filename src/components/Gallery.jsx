import { motion } from 'framer-motion'

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1534367610401-9f5ed6818088?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop',
  ]

  return (
    <section id="gallery" className="py-20 md:py-32 bg-gym-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl tracking-wider mb-4">
            OUR <span className="text-gym-red">GALLERY</span>
          </h2>
          <div className="w-24 h-1 bg-gym-red mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Take a look at our world-class facilities and energizing atmosphere
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl aspect-[3/2] group cursor-pointer"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gym-red/0 group-hover:bg-gym-red/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
