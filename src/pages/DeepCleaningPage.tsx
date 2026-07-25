import React from "react"
import SEO from "../components/SEO"
import DeepCleaningHero from "../components/cleaning/DeepCleaningHero"
import DeepCleaningIntro from "../components/cleaning/DeepCleaningIntro"
import DeepCleaningBenefits from "../components/cleaning/DeepCleaningBenefits"
import BonaSection from "../components/cleaning/BonaSection"
import DeepCleaningProcess from "../components/cleaning/DeepCleaningProcess"
import DeepCleaningCTA from "../components/cleaning/DeepCleaningCTA"
import AnimatedContainer from "../components/utils/AnimatedContainer"

const DeepCleaningPage: React.FC = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.dukeflooring.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Deep Cleaning",
      },
    ],
  }

  return (
    <main>
      <SEO
        title="Hard Floor Deep Cleaning with Bona | Duke Flooring"
        description="Professional deep cleaning for hardwood, vinyl, laminate & tile floors in Lake County and surrounding areas. We use GREENGUARD Gold certified Bona Deep Clean & the Bona Power Scrubber. Get 20% off your first cleaning!"
        canonicalUrl="https://www.dukeflooring.com/deep-cleaning"
        breadcrumbSchema={breadcrumbSchema}
      />
      <AnimatedContainer animationDirection="top">
        <DeepCleaningHero />
      </AnimatedContainer>
      <AnimatedContainer animationDirection="left">
        <DeepCleaningIntro />
      </AnimatedContainer>
      <AnimatedContainer animationDirection="bottom">
        <DeepCleaningBenefits />
      </AnimatedContainer>
      <AnimatedContainer animationDirection="bottom">
        <BonaSection />
      </AnimatedContainer>
      <AnimatedContainer animationDirection="bottom">
        <DeepCleaningProcess />
      </AnimatedContainer>
      <AnimatedContainer animationDirection="bottom">
        <DeepCleaningCTA />
      </AnimatedContainer>
    </main>
  )
}

export default DeepCleaningPage
