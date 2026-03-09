import React from "react"
import SEO from "../components/SEO"
import ServicesHero from "../components/services/ServicesHero"
import ServiceDetail from "../components/services/ServiceDetail"
import WhyChooseUsSection from "../components/services/WhyChooseUsSection"
import GallerySection from "../components/services/GallerySection"
import ServicesCTA from "../components/services/ServicesCTA"
import AnimatedContainer from "../components/utils/AnimatedContainer"

const ServicesPage: React.FC = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.dukeflooring.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
      },
    ],
  }

  return (
    <div className="bg-off-white">
      <SEO
        title="Our Flooring Services | Hardwood, LVP, Tile, Carpet & Stairs | Duke Flooring"
        description="Explore our expert flooring services in Lake County. From timeless hardwood to durable LVP, plush carpet, ceramic tile, and custom staircases, we deliver artisan quality."
        canonicalUrl="https://www.dukeflooring.com/services"
        breadcrumbSchema={breadcrumbSchema}
      />
      <main>
        <AnimatedContainer animationDirection="top">
          <ServicesHero />
        </AnimatedContainer>
        <div className="space-y-20 md:space-y-32 py-16">
          <AnimatedContainer animationDirection="left">
            <ServiceDetail
              title="Luxury Vinyl Plank (LVP)"
              description="LVP offers the best of all worlds: the stunning, realistic appearance of natural wood with 100% waterproof performance and superior scratch resistance. It's the modern, worry-free solution for any room in your home."
              benefits={[
                "100% Waterproof",
                "Highly Scratch-Resistant",
                "Endless Style Options",
                "Quiet & Comfortable Underfoot",
              ]}
              imageUrl="lvp"
              reverse={false}
            />
          </AnimatedContainer>
          <AnimatedContainer animationDirection="right">
            <ServiceDetail
              title="Pre-finished Hardwood"
              description="Experience the timeless elegance and value of authentic hardwood without the lengthy on-site finishing process. Our pre-finished planks arrive ready to install, ensuring a faster, cleaner project with a durable, factory-applied finish."
              benefits={[
                "Adds Significant Real Estate Value",
                "Authentic Natural Beauty",
                "Faster & Cleaner Installation",
                "Extremely Durable Finish",
              ]}
              imageUrl="hardwood"
              reverse={true}
            />
          </AnimatedContainer>
          <AnimatedContainer animationDirection="left">
            <ServiceDetail
              title="Laminate Flooring"
              description="A highly durable and budget-friendly option that convincingly mimics the look of more expensive materials. With its tough top layer, laminate is an excellent choice for high-traffic areas and homes with pets and children."
              benefits={[
                "Exceptional Value",
                "Superior Dent & Fade Resistance",
                "Easy to Clean & Maintain",
                "Wide Variety of Designs",
              ]}
              imageUrl="laminate"
              reverse={false}
            />
          </AnimatedContainer>
          <AnimatedContainer animationDirection="right">
            <ServiceDetail
              title="Stair Installation"
              description="Your stairs are a central feature of your home. We create a beautiful, seamless flow by expertly matching your new floors to your staircase."
              benefits={[
                "Creates a Cohesive Home Design",
                "Improves Safety & Sturdiness",
                "Customized to Your Style",
                "Expert Craftsmanship on Complex Angles",
              ]}
              imageUrl="stairs"
              reverse={true}
            />
          </AnimatedContainer>
          <AnimatedContainer animationDirection="left">
            <ServiceDetail
              title="Subfloor Leveling & Preparation"
              description="A perfect floor requires a perfect foundation. We provide expert subfloor leveling and preparation to ensure a flawless, durable, and long-lasting installation for any type of flooring. This critical first step involves assessing, cleaning, and correcting any imperfections in your subfloor, which is essential for the longevity and appearance of your new floors."
              benefits={[
                "Eliminates dips and high spots",
                "Prevents future flooring problems",
                "Essential for a professional finish",
                "Improves floor stability and longevity",
              ]}
              imageUrl="subflooring"
              reverse={false}
            />
          </AnimatedContainer>
          <AnimatedContainer animationDirection="right">
            <ServiceDetail
              title="Ceramic Tile Installation"
              description="From classic kitchens to modern bathrooms, we provide precise and beautiful ceramic tile installation. Our meticulous approach ensures perfect grout lines and a durable, water-resistant finish that enhances any space."
              benefits={[
                "Water and stain resistant",
                "Extremely durable and long-lasting",
                "Endless design and style possibilities",
                "Ideal for kitchens, bathrooms, and entryways",
              ]}
              imageUrl="tiles"
              reverse={true}
            />
          </AnimatedContainer>
          <AnimatedContainer animationDirection="left">
            <ServiceDetail
              title="Carpet Installation"
              description="Transform your space with the warmth and comfort of expertly installed carpet. We provide professional installation services for your chosen carpet, ensuring a perfect fit and long-lasting comfort for bedrooms, living areas, and beyond."
              benefits={[
                "Professional labor for a perfect fit",
                "Excellent sound insulation",
                "Safe, non-slip surface",
                "Warmth and comfort underfoot",
              ]}
              imageUrl="gallery30"
              reverse={false}
            />
          </AnimatedContainer>
        </div>
        <AnimatedContainer animationDirection="bottom">
          <WhyChooseUsSection />
        </AnimatedContainer>
        <AnimatedContainer animationDirection="bottom">
          <GallerySection />
        </AnimatedContainer>
        <AnimatedContainer animationDirection="bottom">
          <ServicesCTA />
        </AnimatedContainer>
      </main>
    </div>
  )
}

export default ServicesPage
