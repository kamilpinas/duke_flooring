import { Link } from "react-router-dom"
import { BlogPost } from "../data/blogData"

interface BlogPostCardProps {
  post: BlogPost
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="block border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-500 hover:scale-105"
    >
      <img
        src={post.featuredImage.src}
        alt={post.featuredImage.alt}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.publishDate}</p>
        <p className="text-charcoal-gray mb-4">{post.metaDescription}</p>
        <span className="text-forest-green font-semibold hover:underline">
          Read More &rarr;
        </span>
      </div>
    </Link>
  )
}

export default BlogPostCard
