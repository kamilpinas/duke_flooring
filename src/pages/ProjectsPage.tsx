import React from "react";
import SEO from "../components/SEO";
import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectCaseStudy from "../components/projects/ProjectCaseStudy"
import { projects } from "../data/projectData"
import ProjectsCTA from "../components/projects/ProjectsCTA"

const ProjectsPage: React.FC = () => {
  return (
    <main>
      <SEO 
        title="Our Work | Flooring Projects & Case Studies | Duke Flooring"
        description="View our portfolio of stunning flooring transformations in Volo and Lake County. See before & after pictures of our hardwood, LVP, and laminate installations."
        canonicalUrl="https://www.dukeflooring.com/projects"
      />
      <ProjectsHero />
      <div className="py-20 space-y-20 md:space-y-32">
        {projects.map((project, index) => (
          <ProjectCaseStudy
            key={project.id}
            project={project}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
      <ProjectsCTA />
    </main>
  )
}

export default ProjectsPage
