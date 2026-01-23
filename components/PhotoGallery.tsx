'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const galleryImages = [
  { id: 1, aspect: 'square' },
  { id: 2, aspect: 'tall' },
  { id: 3, aspect: 'wide' },
  { id: 4, aspect: 'square' },
  { id: 5, aspect: 'tall' },
  { id: 6, aspect: 'wide' },
]

export default function PhotoGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-white to-primary-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Photo Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See our products in action, crafted with precision and designed for the modern traveler.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl premium-shadow hover:premium-shadow-lg transition-all duration-300 group cursor-pointer ${
                item.aspect === 'wide' ? 'md:col-span-2' : ''
              } ${
                item.aspect === 'tall' ? 'md:row-span-2' : ''
              } ${
                item.aspect === 'square' ? 'aspect-square' : 'aspect-[4/3]'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 via-primary-300 to-accent-300 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-4xl font-serif text-white">L</span>
                  </div>
                  <p className="text-white font-semibold">Lucimondo Design</p>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary-700/0 group-hover:bg-primary-700/20 transition-all duration-300" />
              
              {/* Decorative Pattern */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}