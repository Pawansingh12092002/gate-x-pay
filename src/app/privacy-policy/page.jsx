"use client";

import React from "react";
import Header from "../../component/header/Header";
import "../../css/PrivacyPolicyCustom.css";

const policySections = [
  {
    title: "1. Information We Collect",
    intro: "We may collect:",
    items: [
      "Name, mobile number, email address",
      "Business and company information",
      "PAN, Aadhaar, GST, and KYC-related documents",
      "Bank account details",
      "Device, browser, IP address, and usage data",
      "Transaction-related information",
    ],
  },
  {
    title: "2. Purpose of Data Collection",
    intro: "We collect information for:",
    items: [
      "KYC and merchant onboarding",
      "Payment processing assistance",
      "Fraud prevention and risk management",
      "API integrations and technical support",
      "Regulatory compliance",
      "Service improvement and analytics",
    ],
  },
  {
    title: "3. Data Sharing",
    intro: "GateXPay may share data with:",
    items: [
      "Banking partners",
      "Payment aggregators",
      "Licensed financial institutions",
      "KYC and verification providers",
      "Government or regulatory authorities when legally required",
    ],
    note: "We do not sell personal data to third parties.",
  },
  {
    title: "4. Data Security",
    intro: "We implement commercially reasonable safeguards including:",
    items: [
      "SSL/TLS encryption",
      "Restricted access controls",
      "Secure cloud infrastructure",
      "Monitoring and fraud detection systems",
    ],
  },
  {
    title: "5. Cookies & Tracking",
    body: "Our website may use cookies and analytics technologies to improve user experience and platform performance.",
  },
  {
    title: "6. Data Retention",
    body: "Data may be retained as required under applicable Indian laws, compliance obligations, and contractual requirements.",
  },
  {
    title: "7. User Rights",
    intro: "Data may be retained as required under Users may request:",
    items: [
      "Data correction",
      "Account updates",
      "Limited deletion requests subject to legal obligations",
    ],
  },
  {
    title: "8. Limitation",
    body: "GateXPay acts as a technology service provider and CSP platform facilitating access to third-party financial and fintech services.",
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="gxp-privacy-layout-custom">
      <Header />

      <section className="gxp-privacy-hero-custom" aria-labelledby="privacy-policy-title">
        <img src="/Group 1008.png" alt="Privacy Policy" className="gxp-privacy-hero-image" />
      </section>

      <section className="gxp-privacy-container-custom">
        <article className="gxp-privacy-card-custom">
          <p className="gxp-privacy-intro-custom">
            At GateXpay, operated by GateXpay Technologies Private Limited, we are committed to protecting user privacy and maintaining the confidentiality of customer information.
          </p>

          <address className="gxp-privacy-company-info-custom">
            <strong>GateXpay Technologies Private Limited</strong>
            412, Sumner Nagar, Mansarovar, Jaipur, Rajasthan - 302020
            <br />
            Email: info@gateXpay.in
          </address>

          {policySections.map((section) => (
            <section key={section.title} className="gxp-privacy-section-custom">
              <h2 className="gxp-privacy-section-title-custom">{section.title}</h2>
              {section.intro && <p>{section.intro}</p>}
              {section.body && <p>{section.body}</p>}
              {section.items && (
                <ul className="gxp-privacy-list-custom">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.note && <p className="gxp-privacy-note-custom">{section.note}</p>}
            </section>
          ))}

          <div className="gxp-privacy-footer-info-custom">
            <strong>For privacy concerns:</strong>
            <a href="mailto:info@gateXpay.in">info@gateXpay.in</a>
          </div>
        </article>
      </section>
    </main>
  );
}
