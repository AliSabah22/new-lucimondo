'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600">
                Have questions about our products? We'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '(647) 221-9300',
                  href: 'tel:+16472219300',
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'info@lucimondo.com',
                  href: 'mailto:info@lucimondo.com',
                },
                {
                  icon: MapPin,
                  title: 'Location',
                  content: 'Toronto, Canada',
                  href: '#',
                },
              ].map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-start space-x-4 p-6 rounded-2xl bg-primary-50 hover:bg-primary-100 transition-all group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center text-white group-hover:bg-primary-800 transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12 premium-shadow"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-700 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-700 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-700 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-primary-700 text-white rounded-xl font-semibold hover:bg-primary-800 transition-all premium-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}