import React from "react"
import SEO from "../components/SEO"
import GalleryHero from "../components/gallery/GalleryHero"
import GalleryGrid from "../components/gallery/GalleryGrid"
import GalleryCTA from "../components/gallery/GalleryCTA"
import AnimatedContainer from "../components/utils/AnimatedContainer"

const GalleryPage: React.FC = () => {
  return (
    <div className="bg-off-white">
      <SEO
        title="Our Work | Flooring Photo Gallery | Duke Flooring"
        description="Browse our gallery of high-quality flooring installations. See photos of our LVP, hardwood, and laminate work in the Volo, IL area."
        canonicalUrl="https://www.dukeflooring.com/gallery"
      />
      <main>
        <AnimatedContainer animationDirection="top">
          <GalleryHero />
        </AnimatedContainer>
        <AnimatedContainer animationDirection="left">
          <GalleryGrid />
        </AnimatedContainer>
        <AnimatedContainer animationDirection="bottom">
          <GalleryCTA />
        </AnimatedContainer>
      </main>
    </div>
  )
}

export default GalleryPage
