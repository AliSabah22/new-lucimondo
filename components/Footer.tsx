'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { LEGAL, REGIONS } from '@/lib/config'

const INSTAGRAM_URL = 'https://instagram.com'

export default function Footer() {
  const [regionIndex, setRegionIndex] = useState(0)
  const [email, setEmail] = useState('')
  const region = REGIONS[regionIndex]

  return (
    <footer className="border-t border-brand-smoke bg-brand-cream">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-sans text-brand-gray text-caption uppercase tracking-[0.18em] mb-3">
              Invite-only newsletter
            </p>
            <p className="text-brand-charcoal text-body mb-6 max-w-sm">
              Access to limited releases, early arrivals, and editorial content.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="flex-1 min-w-0 px-4 py-3 rounded-soft bg-brand-white border border-brand-smoke text-brand-black placeholder:text-brand-silver text-sm focus:outline-none focus:border-brand-charcoal transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-soft bg-brand-black text-brand-white text-sm tracking-wide hover:bg-brand-charcoal transition-colors whitespace-nowrap"
              >
                Request invite
              </button>
            </form>
          </div>

          <div className="lg:col-span-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-charcoal hover:text-brand-black text-sm tracking-wide transition-colors"
            >
              <Instagram size={16} />
              Instagram
            </a>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:justify-end gap-8">
            <div>
              <p className="text-brand-gray text-caption uppercase tracking-[0.12em] mb-3">
                Region / currency
              </p>
              <select
                value={regionIndex}
                onChange={(e) => setRegionIndex(Number(e.target.value))}
                className="bg-transparent text-brand-charcoal text-sm border-none focus:outline-none focus:ring-0 cursor-pointer rounded-soft py-1 pr-6"
              >
                {REGIONS.map((r, i) => (
                  <option key={r.label} value={i}>
                    {r.label} ({r.currency})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p className="text-brand-gray text-caption uppercase tracking-[0.12em] mb-3">
                Legal
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                {LEGAL.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-brand-charcoal hover:text-brand-black text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-brand-smoke">
          <p className="text-brand-silver text-caption">
            © {new Date().getFullYear()} Lucimondo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
