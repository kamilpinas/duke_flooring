import fs from "fs"

const generateSitemap = () => {
  const baseUrl = "https://dukeflooring.com"
  const pages = [
    { url: "/", priority: 1.0 },
    { url: "/services", priority: 0.9 },
    { url: "/projects", priority: 0.9 },
    { url: "/about", priority: 0.8 },
    { url: "/faq", priority: 0.8 },
    { url: "/contact", priority: 0.8 },
    { url: "/gallery", priority: 0.8 },
    { url: "/blog", priority: 0.8 },
  ]

  const blogPosts = [
    "2025-flooring-trends-colors-textures-and-materials-homeowners-love",
    "hardwood-vs-vinyl-plank-vs-laminate-the-best-flooring-for-busy-families",
    "the-ultimate-pet-friendly-flooring-guide-that-still-looks-amazing",
    "2025-flooring-cost-guide-real-prices-smart-budgets-fewer-surprises",
    "waterproof-flooring-for-kitchens-and-baths-beautiful-durable-worry-free",
    "refinish-or-replace-hardwood-floors-a-straight-talk-guide-to-hardwood-floor-refinishing",
    "eco-friendly-flooring-options-sustainable-styles-youll-love-underfoot",
    "floor-care-101-exact-cleaning-routines-for-hardwood-lvp-tile-and-carpet",
    "how-to-choose-a-local-flooring-installer-you-can-trust",
    "basement-flooring-that-beats-moisture-what-really-works-and-why",
  ].map((slug) => ({
    url: `/blog/${slug}`,
    priority: 0.7,
  }))
  const allPages = [...pages, ...blogPosts]
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(({ url, priority }) => {
      return `
    <url>
      <loc>${baseUrl}${url}</loc>
      <priority>${priority}</priority>
    </url>`
    })
    .join("")}
</urlset>`

  fs.writeFileSync("public/sitemap.xml", sitemap)
}

generateSitemap()
