import React, { useState, useRef } from "react"
import emailjs from "@emailjs/browser"

const ContactDetailsSection: React.FC = () => {
  const form = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (form.current) {
      emailjs
        .sendForm(
          "service_c1bog92",
          "template_gzhtshq",
          form.current,
          "oUlGigdTEbg1eXPti"
        )
        .then(
          () => {
            gtag("event", "conversion", {
              send_to: "AW-17532303657/wxVcCKOwjJYbEKnyhqhB",
            })
            setSubmissionStatus("success")
            setIsSubmitting(false)
            form.current?.reset()
          },
          (error) => {
            console.log("FAILED...", error.text)
            setSubmissionStatus("error")
            setIsSubmitting(false)
          }
        )
    }
  }

  return (
    <section className="bg-off-white px-8 py-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Column: Information & Map */}
        <div>
          <h2 className="text-3xl font-bold text-charcoal-gray">
            Contact Information
          </h2>
          <ul className="space-y-6 mt-6">
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-forest-green mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684L10.5 9l2.5-2.5L15 9l-2.5 2.5L15 14l-2.5 2.5L10.5 14l-1.776 4.316A1 1 0 018.28 21H5a2 2 0 01-2-2V5z"
                ></path>
              </svg>
              <span className="text-lg font-serif text-charcoal-gray">
                +1 224-283-7930
              </span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-forest-green mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7m-18 0h18"
                ></path>
              </svg>
              <span className="text-lg font-serif text-charcoal-gray">
                ew.dukeflooring@gmail.com
              </span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-forest-green mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <span className="text-lg font-serif text-charcoal-gray">
                Chicagoland, IL, United States
              </span>
            </li>
          </ul>

          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1Iz-FrzLOzYYUzggHqyZv5auFno8eSJk&ehbc=2E312F&noprof=1"
            width="100%"
            height="350px"
            className="mt-8 rounded-lg border-2 border-warm-taupe"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location of Duke Flooring in Chicagoland, IL"
          ></iframe>
        </div>

        {/* Right Column: Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-charcoal-gray">
            Send Us a Message
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6 mt-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-lg font-semibold text-charcoal-gray mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="user_name"
                required
                className="w-full px-4 py-3 rounded-lg border border-warm-taupe focus:outline-none focus:ring-2 focus:ring-forest-green"
              />
            </div>
            <div>
              <label
                htmlFor="emailAddress"
                className="block text-lg font-semibold text-charcoal-gray mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="emailAddress"
                name="user_email"
                required
                className="w-full px-4 py-3 rounded-lg border border-warm-taupe focus:outline-none focus:ring-2 focus:ring-forest-green"
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-lg font-semibold text-charcoal-gray mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="user_phone"
                className="w-full px-4 py-3 rounded-lg border border-warm-taupe focus:outline-none focus:ring-2 focus:ring-forest-green"
              />
            </div>
            <div>
              <label
                htmlFor="howCanWeHelp"
                className="block text-lg font-semibold text-charcoal-gray mb-2"
              >
                How can we help you?
              </label>
              <textarea
                id="howCanWeHelp"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg border border-warm-taupe focus:outline-none focus:ring-2 focus:ring-forest-green"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-forest-green text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-300 disabled:bg-gray-400"
            >
              {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
            </button>
            {submissionStatus === "success" && (
              <p className="text-center text-green-600 mt-4">
                Thank you for your message! We'll be in touch shortly.
              </p>
            )}
            {submissionStatus === "error" && (
              <div>
                {" "}
                <p className=" text-red-600 mt-4">
                  Something went wrong. Please try again later or contact us
                  directly on:.
                </p>
                <p className="flex items-center text-center text-red-600 mt-4">
                  <svg
                    className="w-6 h-6 mr-3 text-red-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a
                    href="tel:+12242837930"
                    className="hover:text-white transition-colors"
                  >
                    (224) 283-7930
                  </a>
                </p>
                <p className="flex items-center  text-center text-red-600 mt-4">
                  <svg
                    className="w-6 h-6 mr-3 text-red-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a
                    href="mailto:ew.dukeflooring@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    ew.dukeflooring@gmail.com
                  </a>
                </p>
              </div>
            )}
            <p className="text-sm text-center text-charcoal-gray mt-4">
              We respect your privacy and will never share your information.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactDetailsSection
