'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SHOPIFY_BASE_URL } from '@/lib/config'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end">
      <div
        className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/95 via-brand-charcoal to-brand-stone"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8H16c-4.4 0-8-3.6-8-8V16z' fill='none' stroke='%23fff' stroke-width='1'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-xl aspect-[4/3] rounded-gentle bg-brand-stone/40 flex items-center justify-center overflow-hidden">
          <span className="font-serif text-brand-silver/50 text-sm tracking-[0.2em] uppercase">
            Full-bleed hero — carry-on
          </span>
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 sm:px-8 lg:px-12 pb-20 sm:pb-28 lg:pb-36">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          className="font-serif text-display text-brand-white font-semibold max-w-xl mb-5"
        >
          Move with intention.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-brand-silver/90 text-body max-w-md mb-10"
        >
          Effortless, organized travel. One carry-on for passports, cards, IDs, and currencies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <Link
            href={SHOPIFY_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-caption uppercase tracking-[0.18em] text-brand-white hover:text-brand-warm transition-colors"
          >
            Enter the Collection
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
