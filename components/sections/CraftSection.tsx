'use client'

import FadeIn from '@/components/FadeIn'

export default function CraftSection() {
  return (
    <section id="craft" className="py-24 sm:py-32 lg:py-40 bg-brand-cream">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <p className="font-sans text-brand-gray text-caption uppercase tracking-[0.2em] mb-6">
            Craft & Materials
          </p>
          <h2 className="font-serif text-display text-brand-black font-semibold max-w-2xl mb-16 sm:mb-24">
            Quality. Build precision. Longevity.
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn delay={0.05}>
            <div className="aspect-[4/5] rounded-gentle bg-brand-white shadow-sm flex items-center justify-center">
              <span className="font-serif text-brand-silver/60 text-sm tracking-[0.2em] uppercase text-center px-4">
                Materials — detail
              </span>
            </div>
          </FadeIn>
          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <p className="text-brand-charcoal text-body max-w-lg leading-relaxed">
                We select materials for durability and quiet elegance. Each piece is built to last—no excess, no shortcuts.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-brand-gray text-body max-w-lg leading-relaxed">
                Build precision and longevity. Let visuals and restraint do the work. No specs, no measurements, no comparisons.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
