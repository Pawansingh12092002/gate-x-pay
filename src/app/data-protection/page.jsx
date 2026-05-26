"use client";

import React from "react";
import PolicyPage from "../../component/PolicyPage/PolicyPage";

export default function DataProtection() {
  const sections = [
    {
      id: "introduction",
      title: "1. Policy Statement",
      content: [
        "Welcome to the Data Protection Policy of Gate X Pay Technologies. Protecting the confidentiality, security, and integrity of personal data is essential to our transaction processing operations.",
        "We enforce robust administrative, technical, and physical safeguards in full compliance with local Information Technology Acts and international data protection standards (including GDPR principles) to protect data against unauthorized leakage, modifications, or thefts.",
      ],
    },
    {
      id: "processing-principles",
      title: "2. Data Processing Principles",
      content: [
        "We handle personal and transactional data in strict accordance with the following core principles:",
        "Lawfulness & Transparency: We process data fairly, lawfully, and transparently, ensuring that merchants and consumers are fully informed about data usages.",
        "Purpose Limitation: We collect data solely to execute secure transactions, complete KYC verifications, prevent fraud, and comply with bank audit rules.",
        "Data Minimization: We restrict collection strictly to the details required to process payments and verify identities safely.",
        "Accuracy: We maintain accurate records and offer merchants direct dashboard options to correct or update account details easily.",
      ],
    },
    {
      id: "database-security",
      title: "3. Database Safeguards",
      content: [
        "Our hosting databases employ high-grade cryptographic controls to prevent digital data breaches:",
        "All data at rest, including settlement numbers, transaction records, and profile details, is secured using AES-256 bit encryption keys.",
        "All data in transit is encrypted using Secure Sockets Layer (SSL) and Transport Layer Security (TLS 1.3) protocols.",
        "We deploy micro-segmented network configurations, Web Application Firewalls (WAF), and automated intrusion prevention systems to defend our processing engines constantly.",
      ],
    },
    {
      id: "retention",
      title: "4. Data Retention Limits",
      content: [
        "Gate X Pay Technologies retains personal data strictly for as long as necessary to complete payment processing or fulfill regulatory financial compliance rules:",
        "General transaction logs and merchant identity verifications are retained in accordance with bank records retention guidelines.",
        "Upon the expiration of legal retention requirements, all associated digital data is securely wiped, anonymized, or purged from our production servers.",
      ],
    },
    {
      id: "merchant-responsibilities",
      title: "5. Merchant Data Responsibilities",
      content: [
        "Merchants who integrate Gate X Pay on their platforms also act as data processors for their respective consumers:",
        "You must display a clear, legally compliant Privacy Policy on your web portals outlining what customer details you collect.",
        "You agree to implement secure checkout channels and avoid saving sensitive payment card records, CVV codes, or full magnetic stripes on your own servers.",
      ],
    },
    {
      id: "user-rights",
      title: "6. User Data Rights",
      content: [
        "Under data protection rules, you hold direct rights to access and manage your personal database files:",
        "You can request a copy of the personal details hosted on our servers by contacting us.",
        "You can request the deletion or correction of incomplete records, subject to regulatory holding limits for financial transaction verifications.",
        "Email our Data Protection Committee at security@gatecode.in for any inquiries.",
      ],
    },
  ];

  return (
    <PolicyPage
      title="Data Protection"
      lastUpdated="May 25, 2026"
      sections={sections}
    />
  );
}
