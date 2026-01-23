'use client'

import { motion } from 'framer-motion'
import { Award, Heart, Users, Globe } from 'lucide-react'

export default function AboutSection() {
  const values = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Handcrafted with the finest materials and attention to detail',
    },
    {
      icon: Heart,
      title: 'Crafted with Care',
      description: 'Every wallet is designed with the traveler in mind',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our top priority',
    },
    {
      icon: Globe,
      title: 'Worldwide Ready',
      description: 'Designed for travelers exploring the globe',
    },
  ]

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-primary-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
              About Lucimondo Designs
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are passionate about creating premium travel accessories that combine 
              functionality with elegant design. Our leather travel wallets are crafted 
              for the modern traveler who values both style and organization.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 20+ country currency inserts, our wallets are designed to keep 
              you organized no matter where your travels take you. Each piece is 
              meticulously crafted using premium leather and attention to detail that 
              sets us apart.
            </p>
            <motion.a
              href="#shop"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-700 text-white rounded-full font-semibold hover:bg-primary-800 transition-all premium-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Our Products</span>
            </motion.a>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden premium-shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 via-primary-300 to-accent-300 flex items-center justify-center">
                <div className="text-center p-12">
                  <Globe className="mx-auto mb-6 text-white" size={100} strokeWidth={1} />
                  <p className="text-white text-xl font-semibold">Crafted for Travelers</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white premium-shadow hover:premium-shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="text-primary-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}