'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV } from '@/lib/config'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAnchorClick = () => setOpen(false)

  const light = !scrolled
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-white/90 backdrop-blur-md border-b border-brand-smoke/60' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        <a
          href="#"
          className={`font-serif text-xl lg:text-2xl font-semibold tracking-tight transition-colors ${
            light ? 'text-brand-white hover:text-brand-cream' : 'text-brand-black hover:text-brand-charcoal'
          }`}
        >
          Lucimondo
        </a>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {NAV.filter((n) => n.name !== 'Home').map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm tracking-wide transition-colors ${
                light ? 'text-brand-silver hover:text-brand-white' : 'text-brand-gray hover:text-brand-black'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`lg:hidden transition-colors ${light ? 'text-brand-white' : 'text-brand-black'}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-brand-smoke/60 bg-brand-white/95 backdrop-blur-md">
          <nav className="max-w-[1200px] mx-auto px-6 sm:px-8 py-6 flex flex-col gap-4">
            {NAV.filter((n) => n.name !== 'Home').map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm tracking-wide text-brand-gray hover:text-brand-black transition-colors py-1"
                onClick={handleAnchorClick}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
