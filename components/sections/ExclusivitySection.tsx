'use client'

import FadeIn from '@/components/FadeIn'

export default function ExclusivitySection() {
  return (
    <section id="exclusivity" className="py-24 sm:py-32 lg:py-40 bg-brand-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <p className="font-sans text-brand-gray text-caption uppercase tracking-[0.2em] mb-6">
            Exclusivity
          </p>
          <h2 className="font-serif text-display text-brand-black font-semibold max-w-2xl mb-16 sm:mb-24">
            Limited production. Controlled distribution.
          </h2>
        </FadeIn>

        <div className="max-w-2xl space-y-8">
          <FadeIn delay={0.05}>
            <p className="text-brand-charcoal text-body leading-relaxed">
              We produce in small runs. Access is intentional. Not designed for everyone.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-brand-gray text-body leading-relaxed">
              Selective, not promotional. Scarcity and status through restraint.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <div className="mt-24 sm:mt-32 aspect-[21/9] rounded-gentle bg-brand-charcoal flex items-center justify-center">
            <span className="font-serif text-brand-silver/50 text-sm tracking-[0.2em] uppercase">
              Editorial — exclusivity
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
