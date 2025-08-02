import React from "react"

const ContactHero: React.FC = () => {
  return (
    <section className="bg-charcoal-gray py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-off-white text-center">
          Get In Touch
        </h1>
        <p className="text-xl mt-4 max-w-3xl mx-auto text-center font-serif text-off-white">
          Ready for a free estimate, or just have a question? We're here to
          help. Reach out today and let's start the conversation about your
          flooring project.
        </p>
      </div>
    </section>
  )
}

export default ContactHero
