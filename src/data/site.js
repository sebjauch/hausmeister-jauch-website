// Zentrale Angaben für Seitentitel, Beschreibungen und strukturierte Daten.

export const SITE_URL = "https://hausmeister-jauch.de";
export const SITE_NAME = "Hausmeisterservice Sebastian Jauch";
export const DEFAULT_TITLE = "Hausmeisterservice Sebastian Jauch – Gartenpflege & Reparaturen München Nord";
export const DEFAULT_DESCRIPTION =
  "Hausmeisterservice in Ismaning, Unterföhring & München Nord: Gartenpflege, Heckenschnitt, Objektbetreuung und Reparaturen. Jetzt kostenlos anfragen: 0174 640 31 78";
export const OG_IMAGE = "/images/vorschau.jpg";
export const FAVICON = "/images/favicon.png";
export const GOOGLE_PROFILE = "https://maps.app.goo.gl/wQS4Wnj2BYfiWz7e8";
export const GOOGLE_REVIEW = "https://g.page/r/CQBbrgcS3wrJEAE/review";
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
  areaServed: ["Ismaning", "Unterföhring", "Garching bei München", "Aschheim", "Kirchheim bei München", "Feldkirchen", "München"].map(
    (name) => ({ "@type": "City", name })
  ),
  hasMap: GOOGLE_PROFILE,
  sameAs: [
    GOOGLE_PROFILE,
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
