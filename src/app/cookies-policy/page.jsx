"use client";

import React from "react";
import PolicyPage from "../../component/PolicyPage/PolicyPage";

export default function CookiesPolicy() {
  const sections = [
    {
      id: "definition",
      title: "1. What are Cookies",
      content: [
        "Cookies are small textual files saved by your browser on your computer or mobile device when you visit our website or load our payment gateway interfaces.",
        "They are widely used to ensure websites function correctly, preserve user logins, provide highly optimized navigation speeds, and deliver anonymous performance analytics to system developers.",
      ],
    },
    {
      id: "types-used",
      title: "2. Types of Cookies We Use",
      content: [
        "Gate X Pay Technologies uses three main classes of cookies:",
        "Essential Cookies: These are strictly required to operate our core payment engines. They preserve session states, authenticate your merchant log-ins, and secure transaction handshakes. Without these cookies, digital checkouts cannot be executed safely.",
        "Performance & Analytics Cookies: These cookies compile anonymous metrics on page loads, server performance bottlenecks, and user navigation paths, helping us improve system efficiency.",
        "Security Cookies: Specifically deployed to detect fraudulent terminal activities, check IP behaviors, and prevent automated brute-force attacks on payment interfaces.",
      ],
    },
    {
      id: "customization",
      title: "3. User Preferences & Functional Cookies",
      content: [
        "Functional cookies allow our platform to recognize your preferences and remember details to customize your dashboard layout:",
        "They store details such as your default dashboard language, default currency viewing, or preferred payment options inside client checkout modules.",
        "These cookies ensure that when you revisit the Gate X Pay merchant panel, you receive a seamless, premium interface without having to re-configure settings.",
      ],
    },
    {
      id: "third-party",
      title: "4. Third-Party Integrations",
      content: [
        "In some instances, we implement trusted third-party analytics trackers to examine platform performance:",
        "For example, we may use Google Analytics to compile secure, aggregated user demographics and general site traffic. These third-party services deploy their own cookies under their own privacy protocols.",
        "We never share credit card details, customer bank records, personal identity numbers, or merchant transaction secrets with external analytics trackers.",
      ],
    },
    {
      id: "management",
      title: "5. Managing Your Preferences",
      content: [
        "You hold complete power to adjust, reject, or wipe cookies saved on your local systems:",
        "You can manage your preferences by editing your browser settings. Every standard browser (Chrome, Safari, Firefox, Edge) provides direct settings to reject or delete cookies.",
        "Please note that if you reject essential cookies, our secure checkout modules will fail to store state, meaning you will not be able to execute digital checkouts or log in to the merchant panel.",
      ],
    },
    {
      id: "contact",
      title: "6. Inquiry Information",
      content: [
        "If you require further details regarding our use of cookies or have suggestions to enhance user data control, please contact our team:",
        "Email us at info@gatecode.in with the subject line \"Cookies Policy inquiry\".",
        "Our data security team will respond to your queries within 5 working days.",
      ],
    },
  ];

  return (
    <PolicyPage
      title="Cookies Policy"
      lastUpdated="May 25, 2026"
      sections={sections}
    />
  );
}
