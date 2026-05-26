"use client";

import React from "react";
import PolicyPage from "../../component/PolicyPage/PolicyPage";

export default function VendorDisclaimer() {
  const sections = [
    {
      id: "third-party-scope",
      title: "1. Scope of Integration",
      content: [
        "Welcome to the Vendor & Third-Party Disclaimer of Gate X Pay Technologies.",
        "Our payment platforms interface dynamically with third-party software, acquirers, hosting providers, merchant websites, and various web plugins (e.g., WooCommerce, Shopify, Magento, custom APIs) to facilitate payment processing. This disclaimer explains our limitations regarding these external services.",
      ],
    },
    {
      id: "platform-compatibility",
      title: "2. Compatibility & Software Plugins",
      content: [
        "While Gate X Pay provides robust software development kits (SDKs) and integration plugins to assist merchants, we do not guarantee uninterrupted compatibility with custom website modifications, outdated server stacks, or unverified third-party software components.",
        "Merchants are solely responsible for ensuring that their systems are properly updated, configured, and tested in our Sandbox environment before deploying payment gateways live.",
      ],
    },
    {
      id: "network-dependencies",
      title: "3. Banking & Acquirer Networks",
      content: [
        "Gate X Pay functions as a payment intermediary and tech infrastructure provider. The actual execution of transaction clearings depends entirely on external entities including issuing banks, acquiring institutions, card associations (Visa, Mastercard, RuPay), and National Payments Corporation of India (NPCI) networks.",
        "We are not liable for transaction dropouts, processing delays, or settlement failures driven by server outrages, API changes, or technical issues within these external banking networks.",
      ],
    },
    {
      id: "hosting-services",
      title: "4. Infrastructure & Hosting Vendors",
      content: [
        "Our digital platforms and databases are hosted on enterprise-grade cloud server infrastructures provided by third-party hosting vendors.",
        "While we deploy rigorous load-balancing and redundancy measures, we do not assume legal liability for network latency, server downtimes, or communication drops caused by global web failures, under-sea fiber cuts, or cloud provider routing anomalies.",
      ],
    },
    {
      id: "merchant-obligations",
      title: "5. Merchant Responsibility for End-Users",
      content: [
        "Merchants remain entirely responsible for their products, services, delivery timelines, and customer interactions.",
        "Gate X Pay is not an arbitrator for consumer-merchant business disputes. We do not endorse, inspect, or warrant the quality, safety, or legality of items marketed by vendors integrating our payment buttons.",
      ],
    },
    {
      id: "security-responsibilities",
      title: "6. Security Limits",
      content: [
        "We enforce high-grade security systems on our servers. However, merchants are solely responsible for securing their own customer endpoints, e-commerce servers, admin dashboard passwords, and API secret keys.",
        "Gate X Pay disclaims all liability for data losses, customer card thefts, or account compromises arising from merchant security failures or weak website security protocols.",
      ],
    },
  ];

  return (
    <PolicyPage
      title="Vendor Disclaimer"
      lastUpdated="May 25, 2026"
      sections={sections}
    />
  );
}
