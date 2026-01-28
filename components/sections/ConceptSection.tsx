'use client'

import FadeIn from '@/components/FadeIn'

const STATEMENTS = [
  { title: 'Control, not chaos', body: 'Travel should feel deliberate. Every compartment exists so you move through borders and lounges with quiet confidence.' },
  { title: 'Movement with intention', body: 'We design for those who move often. Efficiency without sacrifice. Elegance without excess.' },
  { title: 'Elegance through organization', body: 'Passports, cards, IDs, currencies—each has its place. Less friction, more presence.' },
]

export default function ConceptSection() {
  return (
    <section id="concept" className="py-24 sm:py-32 lg:py-40 bg-brand-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <p className="font-sans text-brand-gray text-caption uppercase tracking-[0.2em] mb-6">
            The Concept
          </p>
          <h2 className="font-serif text-display text-brand-black font-semibold max-w-2xl mb-16 sm:mb-24">
            Travel as control. Movement with intention.
          </h2>
        </FadeIn>

        <div className="space-y-20 sm:space-y-28">
          {STATEMENTS.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.08}>
              <div className="max-w-2xl">
                <h3 className="font-serif text-headline text-brand-charcoal font-semibold mb-4">
                  {s.title}
                </h3>
                <p className="text-brand-gray text-body leading-relaxed">
                  {s.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-24 sm:mt-32 lg:mt-40 pt-16 border-t border-brand-smoke">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="aspect-[4/5] rounded-gentle bg-brand-cream flex items-center justify-center">
                <span className="font-serif text-brand-silver/60 text-sm tracking-[0.2em] uppercase text-center px-4">
                  Editorial — philosophy
                </span>
              </div>
              <p className="text-brand-charcoal text-body max-w-lg">
                Short sections. Strong statements. Editorial spacing. No timelines, no long storytelling—just clarity.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
