import React, { useState, useEffect, useRef, useCallback } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence, Variants } from "framer-motion"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const menuRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback(() => {
    if (isOpen) {
      setIsOpen(false)
    }
    const offset = window.scrollY
    if (offset > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }, [isOpen])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  

  const linkClass = (path: string) =>
    `relative transition-colors duration-300 ${
      scrolled ? "text-charcoal-gray" : "text-off-white"
    } after:absolute after:bottom-0 after:left-0 after:h-[2px] ${
      scrolled ? "after:bg-charcoal-gray" : "after:bg-off-white"
    } after:transition-all after:duration-300 ${
      location.pathname === path
        ? "font-bold after:w-full"
        : "after:w-0 hover:after:w-full"
    }`

  const mobileLinkClass = (path: string) =>
    `relative transition-colors duration-300 text-charcoal-gray after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-charcoal-gray after:transition-all after:duration-300 ${
      location.pathname === path && !path.includes("#")
        ? "font-bold after:w-full"
        : "after:w-0 hover:after:w-full"
    }`

  const menuVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        scrolled ? "bg-off-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="h-10">
          <img
            src={scrolled ? "/logo_black.webp" : "/logo_white.webp"}
            alt="Duke Flooring Logo"
            className="h-full w-auto transition-all duration-300"
            loading="lazy"
          />
        </Link>
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className={linkClass("/")}>
            HOME
          </Link>
          <Link to="/services" className={linkClass("/services")}>
            SERVICES
          </Link>
          <Link to="/gallery" className={linkClass("/gallery")}>
            GALLERY
          </Link>
          <Link to="/projects" className={linkClass("/projects")}>
            PROJECTS
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            ABOUT
          </Link>
          <Link to="/faq" className={linkClass("/faq")}>
            FAQ
          </Link>
          <Link to="/contact" className={linkClass("/contact")}>
            CONTACT
          </Link>
        </nav>
        <Link
          to="/contact"
          className={`hidden lg:inline-block px-6 py-2 rounded-lg font-semibold transition-colors duration-300 uppercase ${"bg-forest-green text-white hover:bg-[#244c25]"}`}
        >
          GET FREE ESTIMATE
        </Link>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Open Menu">
            <svg
              className={`w-6 h-6 ${
                scrolled ? "text-charcoal-gray" : "text-off-white"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-off-white/95 backdrop-blur-lg rounded-lg shadow-lg p-4 border border-white/20"
          >
            <nav className="flex flex-col items-center space-y-5 py-4">
              <Link
                to="/"
                className={mobileLinkClass("/")}
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
              <Link
                to="/services"
                className={mobileLinkClass("/services")}
                onClick={() => setIsOpen(false)}
              >
                SERVICES
              </Link>
              <Link
                to="/gallery"
                className={mobileLinkClass("/gallery")}
                onClick={() => setIsOpen(false)}
              >
                GALLERY
              </Link>
              <Link
                to="/projects"
                className={mobileLinkClass("/projects")}
                onClick={() => setIsOpen(false)}
              >
                PROJECTS
              </Link>
              <Link
                to="/about"
                className={mobileLinkClass("/about")}
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                to="/faq"
                className={mobileLinkClass("/faq")}
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className={mobileLinkClass("/contact")}
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
              <Link
                to="/contact"
                className="mt-4 w-full text-center bg-forest-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#244c25] transition-colors duration-300 uppercase"
                onClick={() => setIsOpen(false)}
              >
                GET FREE ESTIMATE
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header