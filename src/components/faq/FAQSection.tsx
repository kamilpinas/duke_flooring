import React from "react"
import { faqs } from "../../data/faqData"
import AccordionItem from "./AccordionItem"

const FAQSection: React.FC = () => {
  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
