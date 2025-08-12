import { Suspense, lazy } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTop from "./components/utils/ScrollToTop"
import CookieConsentBanner from "./components/utils/CookieConsentBanner"

// Lazy load pages
const HomePage = lazy(() => import("./pages/HomePage"))
const ServicesPage = lazy(() => import("./pages/ServicesPage"))
const ContactPage = lazy(() => import("./pages/ContactPage"))
const GalleryPage = lazy(() => import("./pages/GalleryPage"))
const AboutPage = lazy(() => import("./pages/AboutPage"))
const FAQPage = lazy(() => import("./pages/FAQPage"))
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"))
const BlogIndexPage = lazy(() => import("./pages/BlogIndexPage"))
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"))
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"))
const TermsOfServicePage = lazy(() => import("./pages/TermsOfServicePage"))

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-forest-green"></div>
  </div>
)

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-off-white">
        <Header />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Footer />
        <CookieConsentBanner />
      </div>
    </Router>
  )
}

export default App
