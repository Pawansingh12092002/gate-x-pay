// navData.js — All navbar content, links, and config

export const NAV_LINKS = [
  {
    id: "home",
    label: "Home",
    href: "#/",
    iconSrc: "/1.png",
    hasDropdown: false,
  },
  {
    id: "services",
    label: "Services",
    href: "#/services",
    iconSrc: "/2.png",
    hasDropdown: true,
    dropdown: [
      { label: "Payment Gateway",   href: "#/services/gateway",        icon: "💳" },
      { label: "Tokenization",      href: "#/services/tokenization",   icon: "🔐" },
      { label: "Fraud Detection",   href: "#/services/fraud",          icon: "🛡️" },
      { label: "Analytics",         href: "#/services/analytics",      icon: "📊" },
    ],
  },
  {
    id: "about",
    label: "About Us",
    href: "#/about",
    iconSrc: "/3.png",
    hasDropdown: false,
  },
  {
    id: "blog",
    label: "Blog",
    href: "#/blog",
    iconSrc: "/4.png",
    hasDropdown: false,
  },
];

export const NAV_CTA = {
  label: "Contact Us",
  href: "#/contact",
  icon: "phone",
};

export const BRAND = {
  name: "gate X pay",
  tagline: "CONNECT · PAY · INNOVATE",
  logoSrc: null, // set to image path if using an image logo
};
