import React from "react"

const ProjectsHero: React.FC = () => {
  return (
    <section className="bg-charcoal-gray py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-off-white text-center">
          Stories in Every Grain
        </h1>
        <p className="text-lg sm:text-xl mt-4 max-w-3xl mx-auto text-center font-serif text-off-white">
          A floor is more than a surface; it's the foundation of a home's story.
          Scroll down to explore our detailed project showcases and see how we
          turn challenges into triumphs.
        </p>
      </div>
    </section>
  )
}

export default ProjectsHero
