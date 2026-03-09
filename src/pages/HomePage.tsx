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

import { Helmet } from "react-helmet-async"

const HomePage: React.FC = () => {
  return (
    <main>
      <Helmet>
        <link rel="prefetch" href="/services" />
        <link rel="prefetch" href="/gallery" />
      </Helmet>
      <SEO
        title="Duke Flooring | Hardwood, LVP, Tile, Carpet & Laminate in Chicagoland, IL"
        description="Top-rated, family-owned flooring company in Chicagoland, IL. We specialize in expert installation of hardwood, LVP, carpet, ceramic tile, and laminate floors, plus subfloor preparation. Get your free, no-obligation estimate today!"
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
