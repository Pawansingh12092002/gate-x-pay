"use client";

import React from "react";
import PolicyPage from "../../component/PolicyPage/PolicyPage";

export default function ProhibitedActivities() {
  const sections = [
    {
      id: "introduction",
      title: "1. Policy Overview",
      content: [
        "To maintain regulatory compliance and secure our payment ecosystems, Gate X Pay Technologies enforces strict rules regarding prohibited merchant business activities.",
        "This Prohibited Activities Policy outlines the categories of businesses, products, and services that are strictly restricted from integrating our payment gateways. Attempting to process payments for these sectors will lead to immediate merchant profile closure.",
      ],
    },
    {
      id: "strictly-prohibited",
      title: "2. Prohibited Business Sectors",
      content: [
        "Merchants may not utilize Gate X Pay to facilitate payments, settlements, or transaction clearings for any of the following fields:",
        "Illegal Drugs & Narcotics: Direct or indirect sale of banned pharmaceuticals, prescription medications without valid licenses, psychotropic substances, or illegal narcotics.",
        "Weapons & Explosives: Sale of firearms, military equipment, ammunition, fireworks, explosives, or hazardous chemicals.",
        "Unlicensed Financial Services: Peer-to-peer cryptocurrency exchanges, unregulated investment schemes, get-rich-quick programs, binary options, or unlicensed currency conversions.",
        "Adult Content: High-risk adult entertainment services, escort agencies, sexually explicit digital products, or unlicensed matrimonial bureaus.",
        "Counterfeit Items: Unauthorized replicas, trademark-infringing goods, pirated digital courses, or decoders for premium television services.",
      ],
    },
    {
      id: "prohibited-practices",
      title: "3. Banned Transaction Practices",
      content: [
        "In addition to specific business sectors, we strictly prohibit the following transaction operations:",
        "Double-dipping or processing credit card transactions to issue cash advances or personal loans (card-to-cash schemes).",
        "Utilizing merchant profiles to route transaction payouts for unverified sister concerns or third-party entities.",
        "Deliberately modifying terminal details or business descriptions to bypass bank fraud triggers.",
        "Initiating fake purchases or test transactions using stolen payment cards or banking credentials.",
      ],
    },
    {
      id: "consequences",
      title: "4. Account Review & Consequences",
      content: [
        "Gate X Pay deploys automated risk engines and manual security analysts to audit merchant behaviors continuously:",
        "In the event of a verified violation, we reserve the right to instantly freeze payouts, suspend merchant dashboard access, and withhold outstanding settlement reserves.",
        "We coordinate directly with banking partners, acquirers, and card networks (Visa, Mastercard, RuPay) to flag non-compliant merchants globally.",
      ],
    },
    {
      id: "legal-reporting",
      title: "5. Legal Escalations",
      content: [
        "In cases involving absolute illegal practices, money laundering attempts, or organized credit card fraud rings, Gate X Pay Technologies will actively report merchant identity details and transaction records to law enforcement agencies and cybercrime authorities.",
      ],
    },
    {
      id: "contact",
      title: "6. Inquiry & Pre-Approval",
      content: [
        "If you are unsure whether your business model complies with our acceptable usage guidelines, please reach out to our risk division at risk@gatecode.in for pre-approval before initiating system integrations.",
      ],
    },
  ];

  return (
    <PolicyPage
      title="Prohibited Activities"
      lastUpdated="May 25, 2026"
      sections={sections}
    />
  );
}
