import React from "react"
import SEO from "../components/SEO"
import FAQHero from "../components/faq/FAQHero"
import FAQSection from "../components/faq/FAQSection"
import FAQCTA from "../components/faq/FAQCTA"

import { faqs } from "../data/faqData"
import AnimatedContainer from "../components/utils/AnimatedContainer"

const FAQPage: React.FC = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <main>
      <SEO
        title="FAQ | Common Flooring Questions Answered | Duke Flooring"
        description="Have questions about flooring installation cost, process, or timeline? Find clear answers from the experts at Duke Flooring."
        canonicalUrl="https://www.dukeflooring.com/faq"
        faqSchema={faqSchema}
      />
      <AnimatedContainer animationDirection="top">
        <FAQHero />
      </AnimatedContainer>
      <AnimatedContainer animationDirection="left">
        <FAQSection />
      </AnimatedContainer>
      <AnimatedContainer animationDirection="bottom">
        <FAQCTA />
      </AnimatedContainer>
    </main>
  )
}

export default FAQPage
