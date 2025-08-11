import { blogPosts } from "../data/blogData"
import BlogPostCard from "../components/BlogPostCard"
import BlogHero from "../components/blog/BlogHero"
import AnimatedContainer from "../components/utils/AnimatedContainer"

const BlogIndexPage = () => {
  return (
    <main>
      <AnimatedContainer animationDirection="top">
        <BlogHero />
      </AnimatedContainer>
      <AnimatedContainer animationDirection="bottom">
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </AnimatedContainer>
    </main>
  )
}

export default BlogIndexPage
