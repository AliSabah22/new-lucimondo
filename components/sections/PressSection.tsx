'use client'

import FadeIn from '@/components/FadeIn'

const LOGOS = ['Publication A', 'Publication B', 'Publication C', 'Publication D', 'Publication E']

export default function PressSection() {
  return (
    <section id="press" className="py-24 sm:py-32 lg:py-40 bg-brand-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <p className="font-sans text-brand-gray text-caption uppercase tracking-[0.2em] mb-6">
            Press
          </p>
          <h2 className="font-serif text-display text-brand-black font-semibold max-w-2xl mb-16 sm:mb-24">
            Editorial logos. Select imagery.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {LOGOS.map((name, i) => (
            <FadeIn key={name} delay={i * 0.04}>
              <div className="aspect-square rounded-gentle border border-brand-smoke flex items-center justify-center text-brand-gray text-caption uppercase tracking-wider">
                {name}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <div className="mt-20 sm:mt-28 grid sm:grid-cols-2 gap-8 lg:gap-12">
            {[1, 2].map((i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-6">
                <div className="sm:w-[40%] sm:min-w-[180px] aspect-[4/3] rounded-gentle bg-brand-cream flex items-center justify-center shrink-0">
                  <span className="font-serif text-brand-silver/60 text-caption tracking-[0.2em] uppercase">
                    Select imagery {i}
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <p className="font-serif text-headline text-brand-charcoal font-semibold mb-1">
                    Editorial feature {i}
                  </p>
                  <p className="text-brand-gray text-caption">Publication · Date</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
        <p className="mt-12 text-brand-gray text-caption uppercase tracking-[0.12em]">
          No quotes. No testimonials. No explanations.
        </p>
      </div>
    </section>
  )
}
