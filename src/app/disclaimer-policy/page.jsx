"use client";

import React from "react";
import PolicyPage from "../../component/PolicyPage/PolicyPage";

export default function DisclaimerPolicy() {
  const sections = [
    {
      id: "technology-service-provider",
      title: "1. Technology Service Provider Disclaimer",
      content: [
        "GateXpay operates solely as:",
        "A technology service provider",
        "CSP provider",
        "Payment aggregation platform",
        "GateXpay is not a bank, NBFC, licensed payment aggregator, or financial-regulatory authority unless explicitly stated through authorized partnerships.",
      ],
    },
    {
      id: "third-party-dependency",
      title: "2. Third-Party Dependency Disclaimer",
      content: [
        "All services available through GateXpay depend on third-party entities including:",
        "ICICI merchants",
        "Payment aggregators",
        "KYC verification providers",
        "Financial institutions",
        "Technology vendors",
        "GateXpay shall not be held responsible for:",
        "Banking disruptions",
        "Aggregator delays",
        "API integrations",
        "Service outages",
        "Partner-wide failures",
        "Regulatory restrictions",
      ],
    },
    {
      id: "no-financial-legal-advice",
      title: "3. No Financial or Legal Advice",
      content: [
        "Information provided through the platform shall not be construed as financial or legal advice.",
        "Financial advice",
        "Legal advice",
        "Investment advice",
        "Tax consultation",
      ],
    },
    {
      id: "compliance-disclaimer",
      title: "4. Compliance Disclaimer",
      content: [
        "GateXpay endeavors to remain compliant with applicable regulations, partner banking requirements, RBI framework standards, and web standard best practices.",
        "Indian facilitates access through licensed partner networks and financial ecosystem participants; regulatory responsibilities remain solely under the control of the respective regulated financial institution or authorized entity.",
      ],
    },
    {
      id: "limitation-of-liability",
      title: "5. Limitation of Relieves",
      content: [
        "Users acknowledge the inherence of any information, integration, or service as their own discretion and risk.",
      ],
    },
    {
      id: "intellectual-property",
      title: "6. Intellectual Property",
      content: [
        "All trademarks, branding, images, website content, APIs, and regulatory infrastructure remain the property of GateXpay Technologies Private Limited unless otherwise stated.",
      ],
    },
    {
      id: "company-details",
      title: "7. Company Details",
      content: [
        "GateXpay Technologies Private Limited",
        "412, Sumner Nagar, Mansarovar, Jaipur, Rajasthan - 302020",
        "Email: info@gatexway.in",
      ],
    },
  ];

  return (
    <PolicyPage
      title="Disclaimer Policy"
      lastUpdated="May 25, 2026"
      sections={sections}
      heroImage="https://cdn.builder.io/api/v1/image/assets%2F4e22ceeba4ba4ffc8fd1fd628a4c9baf%2Fee0a469ed0d14271916bbb96a533f013?format=webp&width=800&height=1200"
    />
  );
}
