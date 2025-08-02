import React from "react"
import { motion } from "framer-motion"
import BeforeAfterSlider from "react-before-after-slider-component"
import "react-before-after-slider-component/dist/build.css"
import { Project } from "../../data/projectData"

interface ProjectCaseStudyProps {
  project: Project
  reverse?: boolean
}

const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({
  project,
  reverse,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container mx-auto px-4"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          reverse ? "lg:grid-flow-col-dense" : ""
        }`}
      >
        {/* Left Column: Narrative */}
        <div className={`${reverse ? "lg:col-start-2" : ""}`}>
          <h2 className="text-4xl font-bold text-charcoal-gray">
            {project.title}
          </h2>
          <p className="flex items-center mt-2 text-lg text-charcoal-gray">
            <svg
              className="w-5 h-5 mr-2 text-forest-green"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {project.location}
          </p>

          <div className="mt-6 border-t border-b border-gray-200 py-4 grid grid-cols-3 gap-4 text-center">
            {project.keyInfo.map((info, index) => (
              <div key={index}>
                <p className="text-sm text-gray-500">{info.label}</p>
                <p className="font-semibold text-charcoal-gray">{info.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-6 text-charcoal-gray font-serif">
            <div>
              <h3 className="text-2xl font-bold text-charcoal-gray mb-2 font-sans">
                The Challenge
              </h3>
              <p>{project.challenge}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-charcoal-gray mb-2 font-sans">
                Our Approach
              </h3>
              <p>{project.approach}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-charcoal-gray mb-2 font-sans">
                The Transformation
              </h3>
              <p>{project.transformation}</p>
            </div>
          </div>

          {project.testimonial && (
            <blockquote className="mt-8 p-6 bg-warm-taupe rounded-lg">
              <p className="font-serif italic text-charcoal-gray">
                "{project.testimonial.quote}"
              </p>
              <cite className="block text-right mt-4 not-italic font-semibold text-charcoal-gray">
                — {project.testimonial.author}
              </cite>
            </blockquote>
          )}
        </div>

        {/* Right Column: Visual Proof */}
        <div
          className={`w-full h-auto rounded-lg overflow-hidden shadow-xl ${
            reverse ? "lg:col-start-1 lg:row-start-1" : ""
          }`}
        >
          <BeforeAfterSlider
            firstImage={{ imageUrl: project.beforeImage }}
            secondImage={{ imageUrl: project.afterImage }}
            delimiterColor="#F8F8F8"
          />
        </div>
      </div>
    </motion.section>
  )
}

export default ProjectCaseStudy
