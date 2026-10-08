// Zentrale Angaben für Seitentitel, Beschreibungen und strukturierte Daten.

export const SITE_URL = "https://hausmeister-jauch.de";
export const SITE_NAME = "Hausmeisterservice Sebastian Jauch";
export const DEFAULT_TITLE = "Hausmeisterservice Sebastian Jauch – Gartenpflege & Reparaturen München Nord";
export const DEFAULT_DESCRIPTION =
  "Premium Hausmeisterservice für erstklassige Garten- und Objektpflege mit architektonischem Fokus.";
export const OG_IMAGE = "/images/744b80371_ChatGPTImage10Juni202615_54_43.png";
export const FAVICON = "/images/6bf64c176_websiteicon.png";
export const GA_ID = "G-4JZQ49X87R";

export const LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  telephone: "+49 174 6403178",
  email: "info@hausmeister-jauch.de",
  image: `${SITE_URL}${OG_IMAGE}`,
  priceRange: "€€",
  description:
    "Hausmeisterservice Sebastian Jauch – zuverlässiger Ansprechpartner für Gartenpflege, Objektbetreuung, Instandhaltungsarbeiten und kleinere Reparaturen rund um Haus, Wohnung und Grundstück. Leistungen umfassen unter anderem Heckenschnitt, Rasenpflege, Strauchschnitt, Grundstückspflege, Holzarbeiten, Montagearbeiten und Reparaturen.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Zacherlstraße 12",
    postalCode: "85737",
    addressLocality: "Ismaning",
    addressCountry: "DE",
  },
  areaServed: [
    { "@type": "City", name: "Ismaning" },
    { "@type": "City", name: "München" },
  ],
  sameAs: [
    "https://www.instagram.com/hausmeisterjauch/",
    "https://www.facebook.com/profile.php?id=61593692862061",
  ],
  serviceType: [
    "Hausmeisterservice",
    "Gartenpflege",
    "Heckenschnitt",
    "Rasenpflege",
    "Strauchschnitt",
    "Objektbetreuung",
    "Grundstückspflege",
    "Holzarbeiten",
    "Instandhaltungsarbeiten",
    "Kleinreparaturen",
    "Montagearbeiten",
  ],
};
