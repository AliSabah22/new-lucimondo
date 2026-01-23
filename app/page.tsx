'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import PhotoGallery from '@/components/PhotoGallery'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <AboutSection />
      <FeaturedProducts />
      <PhotoGallery />
      <ContactSection />
      <Footer />
    </main>
  )
}