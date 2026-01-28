'use client'

import FadeIn from '@/components/FadeIn'

const CONTEXTS = [
  { title: 'Airports', copy: 'From check-in to gate. Efficiency, ease, confidence.' },
  { title: 'Lounges', copy: 'Quiet. Organized. Everything where it belongs.' },
  { title: 'Border crossings', copy: 'Documents ready. Movement effortless.' },
]

export default function MovementSection() {
  return (
    <section id="movement" className="py-24 sm:py-32 lg:py-40 bg-brand-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <p className="font-sans text-brand-gray text-caption uppercase tracking-[0.2em] mb-6">
            Designed for Movement
          </p>
          <h2 className="font-serif text-display text-brand-black font-semibold max-w-2xl mb-20 sm:mb-28">
            The bag in motion.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {CONTEXTS.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.08}>
              <div className="group">
                <div className="aspect-[3/4] rounded-gentle bg-brand-cream mb-6 flex items-center justify-center transition-colors group-hover:bg-brand-smoke/60">
                  <span className="font-serif text-brand-silver/60 text-caption tracking-[0.2em] uppercase text-center px-4">
                    {c.title}
                  </span>
                </div>
                <h3 className="font-serif text-headline text-brand-charcoal font-semibold mb-3">
                  {c.title}
                </h3>
                <p className="text-brand-gray text-body">{c.copy}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-24 sm:mt-32 aspect-[21/9] rounded-gentle bg-brand-charcoal flex items-center justify-center">
            <span className="font-serif text-brand-silver/50 text-sm tracking-[0.2em] uppercase">
              Lifestyle — movement
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
