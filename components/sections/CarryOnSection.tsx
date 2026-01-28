'use client'

import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import { SHOPIFY_BASE_URL } from '@/lib/config'

const FEATURES = [
  { title: 'Passport organization', line: 'Dedicated slots. Ready at hand.' },
  { title: 'Card & ID control', line: 'Secure. Accessible. No fumbling.' },
  { title: 'Currency separation', line: 'Multiple currencies, clearly divided.' },
]

export default function CarryOnSection() {
  return (
    <section id="carry-on" className="py-24 sm:py-32 lg:py-40 bg-brand-cream">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <p className="font-sans text-brand-gray text-caption uppercase tracking-[0.2em] mb-6">
            The Carry-On
          </p>
          <h2 className="font-serif text-display text-brand-black font-semibold max-w-2xl mb-12">
            Editorial product showcase.
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <FadeIn delay={0.05}>
            <div className="aspect-[4/5] rounded-gentle bg-brand-white shadow-sm flex items-center justify-center overflow-hidden">
              <span className="font-serif text-brand-silver/60 text-sm tracking-[0.2em] uppercase text-center px-4">
                Product — carry-on
              </span>
            </div>
          </FadeIn>
          <div className="space-y-12">
            {FEATURES.map((f, i) => (
              <FadeIn key={f.title} delay={0.1 + i * 0.06}>
                <div>
                  <h3 className="font-sans text-sm font-medium text-brand-charcoal tracking-wide mb-2">
                    {f.title}
                  </h3>
                  <p className="text-brand-gray text-body">{f.line}</p>
                </div>
              </FadeIn>
            ))}
            <FadeIn delay={0.28}>
              <Link
                href={SHOPIFY_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex font-sans text-caption uppercase tracking-[0.18em] text-brand-charcoal hover:text-brand-black transition-colors"
              >
                Acquire
              </Link>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.15}>
          <div className="mt-24 sm:mt-32 aspect-[21/9] rounded-gentle bg-brand-charcoal flex items-center justify-center">
            <span className="font-serif text-brand-silver/50 text-sm tracking-[0.2em] uppercase">
              Product detail — full bleed
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
