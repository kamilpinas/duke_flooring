import React from "react"
import SEO from "../components/SEO"
import AnimatedContainer from "../components/utils/AnimatedContainer"

const PrivacyPolicyPage: React.FC = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.dukeflooring.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Privacy Policy",
      },
    ],
  }

  return (
    <div className="bg-charcoal-gray">
      <SEO
        title="Privacy Policy | Duke Flooring | Volo, IL"
        description="Learn about Duke Flooring's privacy practices. We are committed to protecting your personal data."
        canonicalUrl="https://www.dukeflooring.com/privacy-policy"
        breadcrumbSchema={breadcrumbSchema}
      />
      <main className="container mx-auto px-8 py-16 ">
        <AnimatedContainer animationDirection="top">
          <h1 className="text-4xl font-bold text-off-white-gray mb-8">
            Privacy Policy
          </h1>
        </AnimatedContainer>
        <AnimatedContainer animationDirection="bottom">
          <div className="prose-styling max-w-none text-off-white">
            <p>
              <strong>Effective Date: August 12, 2025</strong>
            </p>
            <p>
              Duke Flooring ("we," "our," or "us") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website dukeflooring.com, including any other media form, media
              channel, mobile website, or mobile application related or
              connected thereto (collectively, the "Site"). Please read this
              privacy policy carefully. If you do not agree with the terms of
              this privacy policy, please do not access the Site.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us
              when you express an interest in obtaining information about us or
              our products and services, when you participate in activities on
              the Site, or otherwise when you contact us.
            </p>
            <p>
              The personal information that we collect depends on the context of
              your interactions with us and the Site, the choices you make and
              the products and features you use. The personal information we
              collect can include the following:
            </p>
            <ul>
              <li>
                <strong>Contact Data:</strong> We collect your full name, email
                address, and phone number when you submit an inquiry through our
                contact form.
              </li>
              <li>
                <strong>Communication Data:</strong> We collect the content of
                your messages and any other information you choose to provide in
                your communications with us.
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use personal information collected via our Site for a variety
              of business purposes described below. We process your personal
              information for these purposes in reliance on our legitimate
              business interests, in order to enter into or perform a contract
              with you, with your consent, and/or for compliance with our legal
              obligations. We indicate the specific processing grounds we rely
              on next to each purpose listed below.
            </p>
            <ul>
              <li>To respond to your inquiries and offer our services.</li>
              <li>
                To send you administrative information, such as changes to our
                terms, conditions, and policies.
              </li>
              <li>To improve our website and your experience.</li>
            </ul>

            <h2>3. Disclosure of Your Information</h2>
            <p>
              We may share your information with third parties that perform
              services for us or on our behalf, including email delivery
              services. We do not sell, rent, or trade your personal information
              with third parties for their promotional purposes.
            </p>
            <ul>
              <li>
                <strong>EmailJS:</strong> We use EmailJS to facilitate the
                sending of emails from our contact form. Your name, email, phone
                number, and message content are transmitted through EmailJS's
                servers for this purpose. You can review EmailJS's privacy
                policy on their official website.
              </li>
              <li>
                <strong>Google Maps:</strong> Our website embeds Google Maps for
                location services. When you view pages with Google Maps, Google
                may collect information about your location and usage. This data
                collection is governed by Google's Privacy Policy.
              </li>
            </ul>

            <h2>4. Data Retention</h2>
            <p>
              We retain your personal information only for as long as is
              necessary for the purposes set out in this privacy policy, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting, or other legal requirements).
            </p>

            <h2>5. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have the following rights
              concerning your personal information:
            </p>
            <ul>
              <li>
                <strong>Right to Access:</strong> You have the right to request
                copies of your personal data.
              </li>
              <li>
                <strong>Right to Rectification:</strong> You have the right to
                request that we correct any information you believe is
                inaccurate or complete information you believe is incomplete.
              </li>
              <li>
                <strong>Right to Erasure:</strong> You have the right to request
                that we erase your personal data, under certain conditions.
              </li>
              <li>
                <strong>Right to Restrict Processing:</strong> You have the
                right to request that we restrict the processing of your
                personal data, under certain conditions.
              </li>
              <li>
                <strong>Right to Object to Processing:</strong> You have the
                right to object to our processing of your personal data, under
                certain conditions.
              </li>
              <li>
                <strong>Right to Data Portability:</strong> You have the right
                to request that we transfer the data that we have collected to
                another organization, or directly to you, under certain
                conditions.
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the
              contact details provided below.
            </p>

            <h2>6. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable, and no method of data transmission
              can be guaranteed against any interception or other type of
              misuse.
            </p>

            <h2>7. Children's Privacy</h2>
            <p>
              Our Site is not intended for children under the age of 13. We do
              not knowingly collect personally identifiable information from
              children under 13. If you are a parent or guardian and you learn
              that your child has provided us with personal information, please
              contact us.
            </p>

            <h2>8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <p>
              Email: ew.dukeflooring@gmail.com
              <br />
              Phone: +1 224-283-7930
              <br />
              Address: Volo, IL, United States
            </p>
          </div>
        </AnimatedContainer>
      </main>
    </div>
  )
}

export default PrivacyPolicyPage
