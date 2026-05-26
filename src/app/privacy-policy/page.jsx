"use client";

import React from "react";
import PolicyPage from "../../component/PolicyPage/PolicyPage";

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: [
        "Welcome to Gate X Pay Technologies (\"we\", \"our\", \"us\"). We respect your privacy and are committed to protecting your personal data.",
        "This Privacy Policy explains how we collect, use, store, and share information about you when you visit our website, register as a merchant, or utilize our payment processing services and applications. By engaging with our platform, you consent to the data practices described in this document.",
      ],
    },
    {
      id: "data-collection",
      title: "2. Information We Collect",
      content: [
        "To provide our payment processing services effectively, we collect several categories of information:",
        "Personal Information: Name, email address, phone number, physical address, and government-issued identification numbers (e.g., PAN card, Aadhaar details) required for business verification and onboarding.",
        "Financial & Merchant Data: Bank account details, transaction records, settlement credentials, business registration documents, and billing history.",
        "Transaction Data: Payment method details, card brands, payment tokens, billing details, and timestamps of transaction operations processed through our gateways.",
        "Technical & Usage Data: IP address, device fingerprints, browser types, operating systems, geographic location data, and user interaction logs, collected automatically to identify and prevent fraudulent behaviors.",
      ],
    },
    {
      id: "use-of-data",
      title: "3. How We Use Your Data",
      content: [
        "We use the collected information to power our secure payment infrastructure and improve your merchant experience, including:",
        "Processing customer transactions and verifying payment routing protocols.",
        "Fulfilling regulatory compliance obligations, including Know Your Customer (KYC) and Anti-Money Laundering (AML) standards.",
        "Detecting, preventing, and mitigating security threats, chargebacks, and fraudulent payment activities in real time.",
        "Managing your merchant profile, issuing transaction payouts, and processing settlements.",
        "Providing technical support and sending critical updates about our API services, systems, and terms.",
      ],
    },
    {
      id: "data-disclosure",
      title: "4. Information Disclosure & Sharing",
      content: [
        "Gate X Pay Technologies does not sell, rent, or trade your personal data to third parties. We share data only with authorized entities to complete transactions and satisfy legal duties:",
        "Financial Partners: Acquiring banks, payment card networks (Visa, Mastercard, RuPay), and financial intermediaries necessary to execute payment clearings.",
        "Compliance & Regulatory Authorities: Government bodies, law enforcement agencies, or compliance officers when required by financial laws or explicit court orders.",
        "Service Providers: Trusted IT partners, security auditors, and database infrastructure providers who operate under strict confidentiality agreements to help optimize our platform.",
      ],
    },
    {
      id: "security-protocols",
      title: "5. Data Security Protocols",
      content: [
        "We employ military-grade security systems to keep your personal and financial information fully protected:",
        "All data transmissions are encrypted using robust Secure Sockets Layer (SSL) and Transport Layer Security (TLS 1.3) protocols.",
        "Sensors and payment details are stored using highly secure 256-bit AES encryption standards.",
        "Our infrastructure operates in strict compliance with Payment Card Industry Data Security Standard (PCI-DSS) Level 1 guidelines, ensuring the highest benchmark of cardholder security.",
      ],
    },
    {
      id: "your-rights",
      title: "6. Your Rights & Compliance",
      content: [
        "In accordance with local information technology rules and financial acts, you possess legal rights regarding your information:",
        "You can inspect the records we hold and request corrections to any outdated or inaccurate details.",
        "You can request the deletion of your account (subject to regulatory holding periods for financial transactions).",
        "You can withdraw your consent for future data processing, though this may prevent you from using our payment platforms.",
        "For any privacy inquiries or to exercise your rights, please reach out to our grievance committee at info@gatecode.in.",
      ],
    },
  ];

  return (
    <PolicyPage
      title="Privacy Policy"
      lastUpdated="May 25, 2026"
      sections={sections}
    />
  );
}
