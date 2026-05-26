"use client";

import React from "react";
import PolicyPage from "../../component/PolicyPage/PolicyPage";

export default function DisclaimerPolicy() {
  const sections = [
    {
      id: "information",
      title: "1. General Information Only",
      content: [
        "All information, documentation, tools, and technical resources displayed on the Gate X Pay platforms are hosted strictly for general informational and payment enabling purposes.",
        "While we strive to publish accurate, current, and verified business insights, Gate X Pay Technologies makes no representations or warranties of any kind regarding the completeness or reliability of the site data.",
      ],
    },
    {
      id: "warranties",
      title: "2. No Express or Implied Warranties",
      content: [
        "Our digital platforms, payment gateways, APIs, and dashboard tools are provided strictly on an \"as-is\" and \"as-available\" basis:",
        "We make no warranties, express or implied, including but not limited to the continuous, uninterrupted availability of transaction routing paths, the complete absence of systemic server lags, or the immediate correction of minor software anomalies.",
        "Payment gateway uptime is contingent on global banking networks, acquiring channels, credit card company networks, and local telecom lines. We disclaim all warranties concerning delays driven by these external dependencies.",
      ],
    },
    {
      id: "third-party",
      title: "3. Third-Party Web Links",
      content: [
        "Our website or payment screens may contain direct hyperlinks pointing to external websites, acquiring bank consoles, or merchant platforms:",
        "These external websites are operated independently by third parties. Gate X Pay does not inspect, verify, endorse, or assume any financial or legal liability for the content, privacy protocols, or transactions executed on external sites.",
      ],
    },
    {
      id: "business-risk",
      title: "4. Business & Financial Risks",
      content: [
        "Operating digital sales and processing merchant transactions involves inherent business risks including chargebacks, payment frauds, and regulatory updates:",
        "Merchants using Gate X Pay are solely responsible for monitoring cardholder frauds, managing product delivery quality, and maintaining financial reserve balances to address chargebacks.",
        "Gate X Pay Technologies is not responsible for financial losses, lost business profits, or reputational damages arising from payment disputes or operational interruptions.",
      ],
    },
    {
      id: "modifications",
      title: "5. Platform Modifications & Uptime",
      content: [
        "Gate X Pay reserves the absolute right to revise, update, modify, or temporarily suspend any aspect of the payment gateway, merchant dashboards, API formats, or service fees at our discretion:",
        "We will attempt to send maintenance notices to registered merchants before executing system upgrades. However, emergency security patches may be deployed instantly without prior alerts.",
      ],
    },
    {
      id: "jurisdiction",
      title: "6. Jurisdiction & Legal Compliance",
      content: [
        "This Disclaimer Policy is governed by the Information Technology Acts and laws of India:",
        "Any legal disputes, arbitrations, or claims raised against Gate X Pay Technologies relative to these policies are subject to the exclusive jurisdiction of the competent courts in Jaipur, Rajasthan, India.",
        "If you have questions about this disclaimer, please contact us at info@gatecode.in.",
      ],
    },
  ];

  return (
    <PolicyPage
      title="Disclaimer Policy"
      lastUpdated="May 25, 2026"
      sections={sections}
    />
  );
}
