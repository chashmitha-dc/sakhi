import React from 'react';

export default function SEO({ 
  title = "Sakhi Mangalore | Luxury Indian Saree Boutique", 
  description = "Discover Sakhi Mangalore, a luxury saree boutique founded by three passionate friends. Explore pure Kanchipuram silk, Banarasi brocades, bridal sarees, and festive drapes.",
  canonical = "https://sakhimangalore.com",
  image = "/images/sakhi_founders.png",
  productSchema = null
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["ClothingStore", "LocalBusiness"],
    "name": "Sakhi Mangalore",
    "description": "Luxury saree boutique in Mangalore founded by three friends. Offering handcrafted bridal, pure silk, Kanchipuram, Banarasi, and festive sarees.",
    "image": "https://sakhimangalore.com/images/sakhi_founders.png",
    "@id": "https://sakhimangalore.com",
    "url": "https://sakhimangalore.com",
    "telephone": "+919480168999",
    "priceRange": "₹₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Saraswathi Complex, Upper Bendoor, Balmatta Rd",
      "addressLocality": "Mangaluru",
      "addressRegion": "Karnataka",
      "postalCode": "575002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.8698,
      "longitude": 74.843
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "20:30"
    },
    "sameAs": [
      "https://www.instagram.com/sakhimangalore"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}
    </>
  );
}
