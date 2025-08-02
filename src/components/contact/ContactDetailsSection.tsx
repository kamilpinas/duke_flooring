import React from "react"

const ContactDetailsSection: React.FC = () => {
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
                Volo, IL, United States
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="text-lg font-serif text-charcoal-gray">
                Mon - Fri: 9:00 AM - 5:00 PM
              </span>
            </li>
          </ul>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95070.00000000001!2d-88.15!3d42.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f711111111111%3A0x880f711111111111!2sVolo%2C%20IL%2C%20USA!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus"
            width="100%"
            height="350px"
            className="mt-8 rounded-lg border-2 border-warm-taupe"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location of Duke Flooring in Volo, IL"
          ></iframe>
        </div>

        {/* Right Column: Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-charcoal-gray">
            Send Us a Message
          </h2>
          <form className="space-y-6 mt-6">
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
                name="fullName"
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
                name="emailAddress"
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
                name="phoneNumber"
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
                name="howCanWeHelp"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg border border-warm-taupe focus:outline-none focus:ring-2 focus:ring-forest-green"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-forest-green text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-300"
            >
              SEND MESSAGE
            </button>
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
