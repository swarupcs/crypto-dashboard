import { CTASection } from '@/components/LandingPage/CTASection'
import { FeaturesSection } from '@/components/LandingPage/FeaturesSection'
import { FooterSection } from '@/components/LandingPage/FooterSection'
import { HeaderSection } from '@/components/LandingPage/HeaderSection'
import { HeroSection } from '@/components/LandingPage/HeroSection'
import { StatsSection } from '@/components/LandingPage/StatsSection'
import { TestimonialsSection } from '@/components/LandingPage/TestimonialsSection'
import React from 'react'

export const LandingPage = () => {
  return (
    <div>
      <HeaderSection/>
      <HeroSection/>
      <FeaturesSection/>
      <StatsSection/>
      <TestimonialsSection/>
      <CTASection/>
      <FooterSection/>
    </div>
  )
}
