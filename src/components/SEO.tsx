import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  faqSchema?: any;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonicalUrl, faqSchema }) => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "FlooringStore",
    "name": "Duke Flooring",
    "image": "https://www.dukeflooring.com/logo.png",
    "@id": "https://www.dukeflooring.com",
    "url": "https://www.dukeflooring.com",
    "telephone": "+1-224-283-7930",
    "email": "ew.dukeflooring@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Volo",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "42.333912",
      "longitude": "-88.163414"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "42.333912",
        "longitude": "-88.163414"
      },
      "geoRadius": "40233"
    },
    "sameAs": [
      "https://www.facebook.com/your-profile",
      "https://www.instagram.com/your-profile"
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
