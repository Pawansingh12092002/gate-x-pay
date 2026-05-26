"use client";

import React from "react";
import PolicyPage from "../../component/PolicyPage/PolicyPage";

export default function TermsAndConditions() {
  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: [
        "Welcome to the Gate X Pay platform. These Terms & Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (\"you\", \"merchant\"), and Gate X Pay Technologies (\"we\", \"our\", \"us\"), concerning your access to and use of our payment gateway, API codes, merchant panels, and related digital solutions.",
        "By accessing our platforms, registering an account, or processing digital transactions, you acknowledge that you have read, understood, and agreed to be bound by all of these Terms of Service. If you do not agree, please immediately discontinue the use of our services.",
      ],
    },
    {
      id: "merchant-onboarding",
      title: "2. Merchant Obligations & KYC",
      content: [
        "To utilize our payment gateway, merchants must register for a business account and complete our verification process:",
        "You agree to supply accurate, current, and complete details during onboarding and to promptly update your records to maintain their validity.",
        "You must submit valid business registration, identity verifications, bank settlement credentials, and any other Know Your Customer (KYC) documentation required by financial regulators.",
        "Merchants are strictly prohibited from using our services to collect payments for unauthorized or illegal goods, prohibited services, or speculative financial instruments. Failure to comply will lead to immediate terminal suspension and legal reporting.",
      ],
    },
    {
      id: "gateway-processing",
      title: "3. Gateway & Transaction Settlements",
      content: [
        "Gate X Pay functions as an intermediary technology service provider connecting merchants, cardholders, acquiring banks, and card networks:",
        "We clear digital transactions securely but are not an bank or currency issuer. Settlement of successful transactions is processed into your registered bank account within standard settlement cycles (e.g., T+2 business days), subject to banking system uptime.",
        "We charge processing fees per successful transaction as outlined in your merchant service agreement. These fees are automatically deducted from transaction settlements.",
        "We reserve the right to temporarily freeze settlements or hold reserves in case of suspicious payment bursts, potential chargeback spikes, or compliance audits.",
      ],
    },
    {
      id: "platform-conduct",
      title: "4. System Integrity & User Conduct",
      content: [
        "Merchants and site visitors agree to use our systems in a safe, lawful manner:",
        "You will not attempt to bypass our gateway security systems, inject malicious codes, run automated database scrapers, or launch Distributed Denial of Service (DDoS) attacks against our networks.",
        "You are strictly prohibited from reverse-engineering, copying, or duplicating our payment API modules, processing engines, user interfaces, or dashboard architectures.",
        "Unauthorized use of merchant credentials or system hacks constitutes a severe breach of this agreement, resulting in criminal prosecution and immediate account termination.",
      ],
    },
    {
      id: "intellectual-property",
      title: "5. Intellectual Property Rights",
      content: [
        "All assets, branding, and materials associated with Gate X Pay are protected under trademark and intellectual property acts:",
        "All source codes, databases, site designs, graphics, proprietary APIs, algorithms, and copywritings are the exclusive property of Gate X Pay Technologies and its parent companies.",
        "Merchants are granted a limited, non-exclusive, non-transferable license to implement our payment gateway buttons and API configurations strictly for the purpose of processing valid payments.",
      ],
    },
    {
      id: "liability-limitations",
      title: "6. Limitation of Liability",
      content: [
        "Gate X Pay is provided on an \"as-is\" and \"as-available\" basis. We strive for maximum service availability but cannot guarantee uninterrupted transaction cycles:",
        "We are not liable for direct, indirect, incidental, or consequential damages resulting from transaction processing delays, merchant dashboard downtimes, or banking network failures.",
        "We do not assume liability for illegal hacks, data breaches resulting from poor merchant credential hygiene, or transaction losses driven by customer payment issues.",
        "These terms are governed by the laws of India, and any disputes will be referred to the exclusive jurisdiction of the competent courts in Jaipur, Rajasthan.",
      ],
    },
  ];

  return (
    <PolicyPage
      title="Terms & Conditions"
      lastUpdated="May 25, 2026"
      sections={sections}
    />
  );
}
