'use client'

import FadeIn from '@/components/FadeIn'

const ENTRIES = [
  { label: 'Campaign — movement' },
  { label: 'Campaign — elegance' },
  { label: 'Travel culture' },
  { label: 'Design & movement' },
]

export default function JournalSection() {
  return (
    <section id="journal" className="py-24 sm:py-32 lg:py-40 bg-brand-cream">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <p className="font-sans text-brand-gray text-caption uppercase tracking-[0.2em] mb-6">
            Journal
          </p>
          <h2 className="font-serif text-display text-brand-black font-semibold max-w-2xl mb-16 sm:mb-24">
            Campaign imagery. Travel culture. Movement, design, and elegance.
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {ENTRIES.map((e, i) => (
            <FadeIn key={e.label} delay={i * 0.06}>
              <article className="group">
                <div className="aspect-[4/5] rounded-gentle bg-brand-white shadow-sm flex items-center justify-center mb-4 transition-colors group-hover:bg-brand-smoke/40">
                  <span className="font-serif text-brand-silver/60 text-caption tracking-[0.2em] uppercase text-center px-4">
                    {e.label}
                  </span>
                </div>
                <p className="font-sans text-sm text-brand-charcoal tracking-wide">{e.label}</p>
              </article>
            </FadeIn>
          ))}
        </div>
        <p className="mt-10 text-brand-gray text-caption uppercase tracking-[0.12em]">
          Visual and intentional. Not a blog.
        </p>
      </div>
    </section>
  )
}
