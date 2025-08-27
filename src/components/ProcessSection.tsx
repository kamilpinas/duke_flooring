import React from "react"

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-warm-taupe">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-charcoal-gray mb-12 font-sans">
          Your Project, Made Simple
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-5xl font-bold text-forest-green mb-4 font-sans">
              01
            </div>
            <h3 className="text-2xl font-bold text-charcoal-gray mb-2 font-sans">
              Consultation & Quote
            </h3>
            <p className="text-charcoal-gray font-serif">
              We start with a conversation. We'll visit your home, listen to
              your needs, show you samples, and provide a detailed, transparent
              estimate. Free of charge.
            </p>
          </div>
          <div>
            <div className="text-5xl font-bold text-forest-green mb-4 font-sans">
              02
            </div>
            <h3 className="text-2xl font-bold text-charcoal-gray mb-2 font-sans">
              Professional Installation
            </h3>
            <p className="text-charcoal-gray font-serif">
              Our master craftsmen handle everything with precision and care. We
              respect your home, maintain a clean workspace, and ensure every
              plank is perfectly placed.
            </p>
          </div>
          <div>
            <div className="text-5xl font-bold text-forest-green mb-4 font-sans">
              03
            </div>
            <h3 className="text-2xl font-bold text-charcoal-gray mb-2 font-sans">
              Final Walkthrough & Guarantee
            </h3>
            <p className="text-charcoal-gray font-serif">
              We're not finished until you're thrilled. We conduct a final
              walkthrough with you to ensure 100% satisfaction and back our work
              with a solid guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
