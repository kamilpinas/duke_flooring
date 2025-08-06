import React from "react"
import SEO from "../components/SEO"
import ContactHero from "../components/contact/ContactHero"
import ContactDetailsSection from "../components/contact/ContactDetailsSection"
import AnimatedContainer from "../components/utils/AnimatedContainer"

const ContactPage: React.FC = () => {
  return (
    <div className="bg-off-white">
      <SEO
        title="Contact Us for a Free Flooring Estimate | Duke Flooring | Volo, IL"
        description="Ready to start your project? Contact Duke Flooring for a free, no-pressure estimate. Call us or fill out our form today!"
        canonicalUrl="https://www.dukeflooring.com/contact"
      />
      <main>
        <AnimatedContainer animationDirection="top">
          <ContactHero />
        </AnimatedContainer>
        <AnimatedContainer animationDirection="bottom">
          <ContactDetailsSection />
        </AnimatedContainer>
      </main>
    </div>
  )
}

export default ContactPage
