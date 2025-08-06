import React from "react"
import SEO from "../components/SEO"
import HeroSection from "../components/HeroSection"
import TrustBar from "../components/TrustBar"
import ServicesSection from "../components/ServicesSection"
import ProcessSection from "../components/ProcessSection"
import TestimonialsSection from "../components/TestimonialsSection"
import OurCommitmentSection from "../components/OurCommitmentSection"
import HomeCTA from "../components/home/HomeCTA"
import AnimatedContainer from "../components/utils/AnimatedContainer"

const HomePage: React.FC = () => {
  return (
    <main>
      <SEO
        title="Duke Flooring | Premier Hardwood, LVP, Tile & Laminate in Volo, IL"
        description="Top-rated, family-owned flooring company in Volo, IL. We specialize in expert installation of hardwood, LVP, ceramic tile, and laminate floors, plus subfloor preparation. Get your free, no-obligation estimate today!"
        canonicalUrl="https://www.dukeflooring.com/"
      />
      <AnimatedContainer animationDirection="top">
        <HeroSection />
      </AnimatedContainer>
      <AnimatedContainer animationDirection="bottom">
        <TrustBar />
      </AnimatedContainer>
      <AnimatedContainer animationDirection="bottom">
        <ServicesSection />
      </AnimatedContainer>
      <AnimatedContainer animationDirection="bottom">
        <ProcessSection />
      </AnimatedContainer>
      <AnimatedContainer animationDirection="bottom">
        <TestimonialsSection />
      </AnimatedContainer>
      <AnimatedContainer animationDirection="bottom">
        <OurCommitmentSection />
      </AnimatedContainer>
      <AnimatedContainer animationDirection="bottom">
        <HomeCTA />
      </AnimatedContainer>
    </main>
  )
}

export default HomePage
