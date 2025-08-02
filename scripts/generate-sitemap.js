const fs = require("fs")
const { projects } = require("../src/data/projectData")

const generateSitemap = () => {
  const baseUrl = "https://www.dukeflooring.com"
  const pages = [
    { url: "/", priority: 1.0 },
    { url: "/services", priority: 0.9 },
    { url: "/projects", priority: 0.9 },
    { url: "/about", priority: 0.8 },
    { url: "/faq", priority: 0.8 },
    { url: "/contact", priority: 0.8 },
    { url: "/gallery", priority: 0.8 },
  ]

  const projectUrls = projects.map((project) => ({
    url: `/projects/${project.id}`,
    priority: 0.7,
  }))

  const allUrls = [...pages, ...projectUrls]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
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
