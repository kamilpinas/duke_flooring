import React from "react"
import SEO from "../components/SEO"
import ProjectsHero from "../components/projects/ProjectsHero"
import ProjectCaseStudy from "../components/projects/ProjectCaseStudy"
import { projects } from "../data/projectData"
import ProjectsCTA from "../components/projects/ProjectsCTA"
import AnimatedContainer from "../components/utils/AnimatedContainer"

const ProjectsPage: React.FC = () => {
  return (
    <main>
      <SEO
        title="Our Work | Flooring Projects & Case Studies | Duke Flooring"
        description="View our portfolio of stunning flooring transformations in Volo and Lake County. See before & after pictures of our hardwood, LVP, and laminate installations."
        canonicalUrl="https://www.dukeflooring.com/projects"
      />
      <AnimatedContainer animationDirection="top">
        <ProjectsHero />
      </AnimatedContainer>
      <div className="py-20 space-y-20 md:space-y-32">
        {projects.map((project, index) => (
          <AnimatedContainer
            animationDirection={index % 2 === 0 ? "left" : "right"}
          >
            <ProjectCaseStudy
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          </AnimatedContainer>
        ))}
      </div>
      <AnimatedContainer animationDirection="bottom">
        <ProjectsCTA />
      </AnimatedContainer>
    </main>
  )
}

export default ProjectsPage
