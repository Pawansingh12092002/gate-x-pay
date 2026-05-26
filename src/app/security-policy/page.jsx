"use client";

import React from "react";
import PolicyPage from "../../component/PolicyPage/PolicyPage";

export default function SecurityPolicy() {
  const sections = [
    {
      id: "mission",
      title: "1. Security Commitment",
      content: [
        "At Gate X Pay Technologies, protecting customer transaction data and merchant financial records is our highest operational priority.",
        "We implement enterprise-grade security protocols, automated threat detection models, and robust system configurations to ensure every transaction remains safe, encrypted, and compliant with international standards.",
      ],
    },
    {
      id: "pci-compliance",
      title: "2. PCI-DSS Level 1 Standards",
      content: [
        "Gate X Pay operates in complete alignment with the Payment Card Industry Data Security Standard (PCI-DSS) Level 1 requirements, which represents the gold standard in payment card security:",
        "We ensure that cardholder data is securely transmitted, processed, and tokenized under strict access controls.",
        "Our databases do not store raw CVV codes, card PIN numbers, or full magnetic stripe details, drastically reducing card exposure risks.",
        "Annual security audits and penetration tests are performed by certified external Qualified Security Assessors (QSAs) to maintain PCI compliance.",
      ],
    },
    {
      id: "encryption",
      title: "3. Advanced Encryption & Routing",
      content: [
        "We employ military-grade encryption systems to secure every connection point across our network:",
        "All data routing between consumers, merchants, and our payment gateways is encrypted using Transport Layer Security (TLS 1.3) protocols.",
        "Stored sensitive records and databases are protected using high-grade 256-bit AES encryption.",
        "We utilize tokenization technologies to convert credit card details into unique, secure digital tokens, ensuring sensitive data is never exposed during transaction flows.",
      ],
    },
    {
      id: "mfa-access",
      title: "4. Multi-Factor Authentication",
      content: [
        "To prevent credential theft and shield merchant dashboards from unauthorized operations:",
        "Merchant logins and administrative portals enforce mandatory Multi-Factor Authentication (MFA) or secure email OTPs.",
        "Our system monitors user sessions and automatically terminates active connections in the event of prolonged inactivity.",
        "Every key administrative action (such as modifying bank accounts, payout schedules, or issuing large refunds) requires dual-factor confirmation.",
      ],
    },
    {
      id: "monitoring",
      title: "5. Real-Time Security Operations",
      content: [
        "We deploy comprehensive, continuous threat monitoring tools across our entire web infrastructure:",
        "Our platforms are protected by premium Web Application Firewalls (WAF) to detect, block, and mitigate cross-site scripting (XSS), SQL injections, and brute-force attempts.",
        "Automated Intrusion Detection Systems (IDS) scan server logs constantly to identify anomalous access patterns.",
        "Real-time fraud engines evaluate risk metrics (device fingerprint, IP integrity, transactional velocity) for every payment processed through our systems.",
      ],
    },
    {
      id: "reporting",
      title: "6. Vulnerability Disclosure & Audit",
      content: [
        "We collaborate actively with independent cybersecurity researchers to keep our platforms impenetrable:",
        "If you discover a potential vulnerability, weak configuration, or logic flaw in our systems, we encourage you to report it to us immediately.",
        "Please email detailed reports directly to security@gatecode.in. We review submissions within 48 hours and work diligently to fix validated flaws.",
      ],
    },
  ];

  return (
    <PolicyPage
      title="Security Policy"
      lastUpdated="May 25, 2026"
      sections={sections}
    />
  );
}
