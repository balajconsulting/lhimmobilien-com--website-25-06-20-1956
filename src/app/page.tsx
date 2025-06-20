import React from 'react'
import NavigationSection from '../components/NavigationSection'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import ContactSection from '../components/ContactSection'
import FooterSection from '../components/FooterSection'
import CallToActionSection from '../components/CallToActionSection'
import CallToActionSection from '../components/CallToActionSection'
import WhatsAppIntegrationSection from '../components/WhatsAppIntegrationSection'
import PartnersSection from '../components/PartnersSection'
import VideoSection from '../components/VideoSection'
import PreiseSection from '../components/PreiseSection'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Generated from: https://lhimmobilien.com/ */}
      {/* Business Type: IMMOBILIEN */}
      
      <NavigationSection />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
      <CallToActionSection />
      <CallToActionSection />
      <WhatsAppIntegrationSection />
      <PartnersSection />
      <VideoSection />
      <PreiseSection />
    </main>
  )
}