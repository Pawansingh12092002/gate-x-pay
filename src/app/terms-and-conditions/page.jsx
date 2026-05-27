"use client";

import React from "react";
import Header from "../../component/header/Header";
import "../../css/PrivacyPolicyCustom.css";

const termsSections = [
  {
    title: "1. Acceptance of Terms",
    intro: "Welcome to the Gate X Pay platform. These Terms & Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (\"you\", \"merchant\"), and Gate X Pay Technologies (\"we\", \"our\", \"us\"), concerning your access to and use of our payment gateway, API codes, merchant panels, and related digital solutions.",
    body: "By accessing our platforms, registering an account, or processing digital transactions, you acknowledge that you have read, understood, and agreed to be bound by all of these Terms of Service. If you do not agree, please immediately discontinue the use of our services.",
  },
  {
    title: "2. Merchant Obligations & KYC",
    intro: "To utilize our payment gateway, merchants must register for a business account and complete our verification process:",
    items: [
      "You agree to supply accurate, current, and complete details during onboarding and to promptly update your records to maintain their validity",
      "You must submit valid business registration, identity verifications, bank settlement credentials, and any other Know Your Customer (KYC) documentation required by financial regulators",
      "Merchants are strictly prohibited from using our services to collect payments for unauthorized or illegal goods, prohibited services, or speculative financial instruments",
    ],
  },
  {
    title: "3. Gateway & Transaction Settlements",
    intro: "Gate X Pay functions as an intermediary technology service provider connecting merchants, cardholders, acquiring banks, and card networks:",
    items: [
      "We clear digital transactions securely but are not a bank or currency issuer",
      "Settlement of successful transactions is processed into your registered bank account within standard settlement cycles (e.g., T+2 business days), subject to banking system uptime",
      "We charge processing fees per successful transaction as outlined in your merchant service agreement",
      "We reserve the right to temporarily freeze settlements or hold reserves in case of suspicious payment bursts, potential chargeback spikes, or compliance audits",
    ],
  },
  {
    title: "4. System Integrity & User Conduct",
    intro: "Merchants and site visitors agree to use our systems in a safe, lawful manner:",
    items: [
      "You will not attempt to bypass our gateway security systems, inject malicious codes, run automated database scrapers, or launch Distributed Denial of Service (DDoS) attacks",
      "You are strictly prohibited from reverse-engineering, copying, or duplicating our payment API modules, processing engines, user interfaces, or dashboard architectures",
      "Unauthorized use of merchant credentials or system hacks constitutes a severe breach of this agreement",
    ],
  },
  {
    title: "5. Intellectual Property Rights",
    intro: "All assets, branding, and materials associated with Gate X Pay are protected under trademark and intellectual property acts:",
    items: [
      "All source codes, databases, site designs, graphics, proprietary APIs, algorithms, and copywritings are the exclusive property of Gate X Pay Technologies and its parent companies",
      "Merchants are granted a limited, non-exclusive, non-transferable license to implement our payment gateway buttons and API configurations strictly for the purpose of processing valid payments",
    ],
  },
  {
    title: "6. Limitation of Liability",
    intro: "Gate X Pay is provided on an \"as-is\" and \"as-available\" basis. We strive for maximum service availability but cannot guarantee uninterrupted transaction cycles:",
    items: [
      "We are not liable for direct, indirect, incidental, or consequential damages resulting from transaction processing delays, merchant dashboard downtimes, or banking network failures",
      "We do not assume liability for illegal hacks, data breaches resulting from poor merchant credential hygiene, or transaction losses driven by customer payment issues",
      "These terms are governed by the laws of India, and any disputes will be referred to the exclusive jurisdiction of the competent courts in Jaipur, Rajasthan",
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <main className="gxp-privacy-layout-custom">
      <Header />

      <section className="gxp-privacy-hero-custom" aria-labelledby="terms-title">
        <img src="/Group%201036%20(9).png" alt="Terms and Conditions" className="gxp-privacy-hero-image" />
      </section>

      <section className="gxp-privacy-container-custom">
        <article className="gxp-privacy-card-custom">
          <p className="gxp-privacy-intro-custom">
            At GateXpay, operated by GateXpay Technologies Private Limited, we are committed to providing transparent payment processing services and maintaining clear terms of use for all merchants and users of our platform.
          </p>

          <address className="gxp-privacy-company-info-custom">
            <strong>GateXpay Technologies Private Limited</strong>
            412, Sumner Nagar, Mansarovar, Jaipur, Rajasthan - 302020
            <br />
            Email: info@gateXpay.in
          </address>

          {termsSections.map((section) => (
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
            </section>
          ))}

          <div className="gxp-privacy-footer-info-custom">
            <strong>For inquiries regarding our Terms & Conditions:</strong>
            <a href="mailto:info@gateXpay.in">info@gateXpay.in</a>
          </div>
        </article>
      </section>
    </main>
  );
}
