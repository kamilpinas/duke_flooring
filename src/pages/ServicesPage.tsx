import React from "react"
import SEO from "../components/SEO"
import ServicesHero from "../components/services/ServicesHero"
import ServiceDetail from "../components/services/ServiceDetail"
import WhyChooseUsSection from "../components/services/WhyChooseUsSection"
import GallerySection from "../components/services/GallerySection"
import ServicesCTA from "../components/services/ServicesCTA"

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-off-white">
      <SEO
        title="Our Flooring Services | Hardwood, LVP & Stairs | Duke Flooring"
        description="Explore our expert flooring services in Lake County. From timeless pre-finished hardwood to durable LVP and custom staircases, we deliver artisan quality."
        canonicalUrl="https://www.dukeflooring.com/services"
      />
      <main>
        <ServicesHero />
        <div className="space-y-20 md:space-y-32 py-16">
          <ServiceDetail
            title="Luxury Vinyl Plank (LVP)"
            description="LVP offers the best of all worlds: the stunning, realistic appearance of natural wood with 100% waterproof performance and superior scratch resistance. It's the modern, worry-free solution for any room in your home."
            benefits={[
              "100% Waterproof",
              "Highly Scratch-Resistant",
              "Endless Style Options",
              "Quiet & Comfortable Underfoot",
            ]}
            imageUrl="lvp.webp"
            reverse={false}
          />
          <ServiceDetail
            title="Pre-finished Hardwood"
            description="Experience the timeless elegance and value of authentic hardwood without the lengthy on-site finishing process. Our pre-finished planks arrive ready to install, ensuring a faster, cleaner project with a durable, factory-applied finish."
            benefits={[
              "Adds Significant Real Estate Value",
              "Authentic Natural Beauty",
              "Faster & Cleaner Installation",
              "Extremely Durable Finish",
            ]}
            imageUrl="hardwood.webp"
            reverse={true}
          />
          <ServiceDetail
            title="Laminate Flooring"
            description="A highly durable and budget-friendly option that convincingly mimics the look of more expensive materials. With its tough top layer, laminate is an excellent choice for high-traffic areas and homes with pets and children."
            benefits={[
              "Exceptional Value",
              "Superior Dent & Fade Resistance",
              "Easy to Clean & Maintain",
              "Wide Variety of Designs",
            ]}
            imageUrl="laminate.webp"
            reverse={false}
          />
          <ServiceDetail
            title="Stair Installation"
            description="Your stairs are a central feature of your home. We create a beautiful, seamless flow by expertly matching your new floors to your staircase."
            benefits={[
              "Creates a Cohesive Home Design",
              "Improves Safety & Sturdiness",
              "Customized to Your Style",
              "Expert Craftsmanship on Complex Angles",
            ]}
            imageUrl="stairs.webp"
            reverse={true}
          />
          <ServiceDetail
            title="Subfloor Leveling"
            description="A perfect floor requires a perfect foundation. We provide expert subfloor leveling and preparation to ensure a flawless, durable, and long-lasting installation for any type of flooring."
            benefits={[
              "Eliminates dips and high spots",
              "Prevents future flooring problems",
              "Essential for a professional finish",
              "Improves floor stability and longevity",
            ]}
            imageUrl="subflooring.webp"
            reverse={false}
          />
          <ServiceDetail
            title="Ceramic Tile Installation"
            description="From classic kitchens to modern bathrooms, we provide precise and beautiful ceramic tile installation. Our meticulous approach ensures perfect grout lines and a durable, water-resistant finish that enhances any space."
            benefits={[
              "Water and stain resistant",
              "Extremely durable and long-lasting",
              "Endless design and style possibilities",
              "Ideal for kitchens, bathrooms, and entryways",
            ]}
            imageUrl="tiles.webp"
            reverse={true}
          />
        </div>
        <WhyChooseUsSection />
        <GallerySection />
        <ServicesCTA />
      </main>
    </div>
  )
}

export default ServicesPage
