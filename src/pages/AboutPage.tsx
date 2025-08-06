import React from "react"
import AboutHero from "../components/about/AboutHero"
import FounderStorySection from "../components/about/FounderStorySection"
import ValuesSection from "../components/about/ValuesSection"
import AboutCTA from "../components/about/AboutCTA"
import SEO from "../components/SEO"
import AnimatedContainer from "../components/utils/AnimatedContainer"

const AboutPage: React.FC = () => {
  return (
    <main>
      <SEO
        title="About Duke Flooring | Your Local, Family-Owned Experts in Volo"
        description="Learn the story behind Duke Flooring, a family-owned business committed to craftsmanship, integrity, and serving the Volo, IL community."
        canonicalUrl="https://www.dukeflooring.com/about"
      />
      <AnimatedContainer animationDirection="top">
        <AboutHero />
      </AnimatedContainer>
      <AnimatedContainer animationDirection="left">
        <FounderStorySection />
      </AnimatedContainer>
      <AnimatedContainer animationDirection="right">
        <ValuesSection />
      </AnimatedContainer>
      <AnimatedContainer animationDirection="bottom">
        <AboutCTA />
      </AnimatedContainer>
    </main>
  )
}

export default AboutPage
