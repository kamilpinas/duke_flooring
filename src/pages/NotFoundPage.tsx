import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Duke Flooring</title>
      </Helmet>
      <main className="min-h-screen flex items-center justify-center bg-charcoal-gray">
        <motion.div
          className="text-center p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-9xl md:text-[12rem] font-semibold text-warm-taupe">
            404
          </h1>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-off-white">
            Page Not Found
          </h2>
          <p className="mt-6 max-w-md mx-auto text-lg font-serif text-off-white">
            Sorry, we couldn't find the page you were looking for. It might have
            been moved, or the URL was typed incorrectly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              to="/"
              className="px-8 py-3 bg-forest-green text-white font-semibold rounded-md hover:bg-green-700 transition-colors duration-300"
            >
              Return to Homepage
            </Link>
            <Link
              to="/projects"
              className="font-semibold text-off-white hover:text-forest-green transition-colors duration-300"
            >
              View Our Work →
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  )
}

export default NotFoundPage
