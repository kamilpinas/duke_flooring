import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { blogPosts } from "../data/blogData"
import AnimatedContainer from "../components/utils/AnimatedContainer"

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return <div>Post not found</div>
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: post.featuredImage.src,
    datePublished: new Date(post.publishDate).toISOString(),
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Duke Flooring",
      logo: {
        "@type": "ImageObject",
        url: "https://www.dukeflooring.com/logo512.png",
      },
    },
  }

  return (
    <div>
      <Helmet>
        <title>{`${post.title} | Duke Flooring Blog`}</title>
        <meta name="description" content={post.metaDescription} />
        <link
          rel="canonical"
          href={`https://www.dukeflooring.com/blog/${post.slug}`}
        />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <AnimatedContainer animationDirection="top">
        <section className="bg-charcoal-gray py-20 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-off-white text-center">
              {post.title}
            </h1>
            <p className="text-lg sm:text-xl mt-4 max-w-7xl mx-auto text-center font-serif text-off-white">
              {`Published by ${post.author} on ${post.publishDate}`}
            </p>
          </div>
        </section>
      </AnimatedContainer>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div
          className="prose-styling"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="mt-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPostPage
