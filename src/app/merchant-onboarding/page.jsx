"use client";

import React from "react";
import PolicyPage from "../../component/PolicyPage/PolicyPage";

export default function MerchantOnboarding() {
  const sections = [
    {
      id: "introduction",
      title: "1. Onboarding Framework",
      content: [
        "Welcome to the Merchant Onboarding Guidelines of Gate X Pay Technologies.",
        "We are dedicated to helping merchants configure their digital payment ecosystems safely and efficiently. This document explains the onboarding stages, document requirements, and verification SLAs to ensure a smooth transition from configuration to live transaction processing.",
      ],
    },
    {
      id: "process-steps",
      title: "2. The Onboarding Process",
      content: [
        "Transitioning from sandbox to live transaction processing involves four simple steps:",
        "1. Profile Registration: Create your business profile inside our merchant portal and select your preferred pricing model.",
        "2. Document Submission: Securely upload your business identity, bank details, and compliance records for verification.",
        "3. Integration & Testing: Configure our sandbox APIs, integrate the payment button on your website, and perform test transactions.",
        "4. Live Activation: Once our compliance team approves your KYC documents, your live API keys are activated instantly.",
      ],
    },
    {
      id: "documentation",
      title: "3. Required Documents Checklist",
      content: [
        "To satisfy regulatory standards and satisfy bank mandates, merchants must submit the following documents:",
        "Proprietorships: Proprietor's PAN card, Aadhaar card, business address proof (utility bills), and a cancelled check from your current account.",
        "Partnerships & LLPs: Partnership Deed, firm's PAN card, Certificate of Incorporation, partner identity proofs, and authorized signatory resolutions.",
        "Private Limited Companies: Certificate of Incorporation, Memorandum and Articles of Association (MOA/AOA), company PAN card, board resolution for payment collection, and director identity verifications.",
        "Website Compliance: Your e-commerce website must feature working Contact Us details, a clear Privacy Policy, Refund Policy, and Terms of Service.",
      ],
    },
    {
      id: "review-slas",
      title: "4. Compliance Vetting SLAs",
      content: [
        "Once all documentation is submitted, our risk compliance team performs business verifications:",
        "Standard Vetting: Review of business registration and KYC is completed within 24 to 48 business hours.",
        "Website Inspection: We inspect merchant website products, checkouts integrity, and compliance pages. This audit is finalized concurrently with document verification.",
        "Grievances: In case of document discrepancies or blurred uploads, our onboarding agents will contact you to rectify submissions.",
      ],
    },
    {
      id: "sandbox-rules",
      title: "5. Sandbox Integration Guidelines",
      content: [
        "Merchants are encouraged to utilize our Sandbox environment for initial development cycles:",
        "Sandbox environments allow you to trigger mock transactions, test API callbacks, and verify success/failure responses without moving real funds.",
        "Do not implement sandbox credentials or unencrypted test code directly on your production customer checkout screens.",
      ],
    },
    {
      id: "operational-mandates",
      title: "6. Operational Compliance",
      content: [
        "Upon successful activation of your live account:",
        "Merchants must maintain updated transaction logs and invoice details for all customer checkouts.",
        "You agree to cooperate with our risk committee during occasional system audits to verify that processed transactions match your onboarded business description.",
      ],
    },
  ];

  return (
    <PolicyPage
      title="Merchant Onboarding"
      lastUpdated="May 25, 2026"
      sections={sections}
    />
  );
}
