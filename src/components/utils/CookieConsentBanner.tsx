import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const COOKIE_CONSENT_KEY = "duke_flooring_cookie_consent"

const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined")
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-charcoal-gray text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-3 md:mb-0 md:mr-4">
          We use cookies to ensure you get the best experience on our website.
          By clicking "Accept", you consent to the use of all cookies. If you
          click "Decline", essential cookies will still be used, but
          non-essential cookies will be disabled. For more information, please
          read our{" "}
          <Link
            to="/privacy-policy"
            className="text-forest-green brightness-150 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex space-x-3">
          <button
            onClick={handleAccept}
            className="bg-forest-green text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition-colors duration-300"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-700 transition-colors duration-300"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsentBanner
