"use client";

import React from "react";
import PolicyPage from "../../component/PolicyPage/PolicyPage";

export default function GrievanceRedressal() {
  const sections = [
    {
      id: "objective",
      title: "1. Objective",
      content: [
        "Welcome to the Grievance Redressal Policy of Gate X Pay Technologies. Our primary objective is to resolve merchant and customer concerns in a fair, swift, and highly transparent manner.",
        "We are dedicated to offering exceptional payment solutions, but we acknowledge that disputes or technical errors can sometimes arise. This grievance matrix is established to address and resolve any complaints within strict SLA timelines.",
      ],
    },
    {
      id: "escalation-level-1",
      title: "2. Level 1 - Customer Support",
      content: [
        "If you encounter any payment delays, merchant settlement issues, or general service questions, your first contact point is our Level 1 support team:",
        "Email Support: Please send an email outlining your complaint to info@gatecode.in. Include transaction reference numbers, dates, amounts, and screenshots if available.",
        "Ticket Support: Log in to your Gate X Pay merchant panel and open a support ticket under the Help Desk tab.",
        "Response SLA: Our support team will acknowledge your query within 24 hours and aim to resolve general inquiries within 3 business days.",
      ],
    },
    {
      id: "escalation-level-2",
      title: "3. Level 2 - Nodal Support Officer",
      content: [
        "If the Level 1 support response does not resolve your concern, or if you do not receive a reply within 5 business days, you can escalate the matter to Level 2:",
        "Escalation Channel: Email nodal@gatecode.in with your original ticket number and details of your unresolved issue.",
        "Role: The Nodal Support Officer will re-evaluate the technical records, transaction tokens, and payment routing trails associated with your case.",
        "Response SLA: Level 2 grievances are acknowledged within 48 hours and resolved within 7 business days.",
      ],
    },
    {
      id: "escalation-level-3",
      title: "4. Level 3 - Principal Grievance Officer",
      content: [
        "For complex, high-value transaction disputes, unresolved system issues, or compliance challenges, you may escalate to Level 3:",
        "Principal Officer Contact: Send a formal written email to grievance.officer@gatecode.in or write to our corporate headquarters: 412, Sumer Nagar, Mansarovar, Jaipur, 302020.",
        "Response SLA: Level 3 complaints undergo thorough forensic auditing and are resolved within a maximum timeline of 15 to 30 business days as per regulatory compliance mandates.",
      ],
    },
    {
      id: "chargebacks-escalation",
      title: "5. Special Refund Escalations",
      content: [
        "Please note that for third-party consumer transaction refunds, settlements are subject to standard bank clearing cycles. Gate X Pay acts as the processing gateway and cannot unilaterally draw funds from merchant reserves without valid dispute verification.",
        "If a refund is verified and approved but remains delayed by the issuing banking network beyond 10 working days, our Nodal Officer will directly coordinate with the banking partner to speed up the credit process.",
      ],
    },
    {
      id: "disclaimer",
      title: "6. Regulatory Mandates",
      content: [
        "This grievance redressal system operates in full alignment with the guidelines issued by the Reserve Bank of India (RBI) and the Ministry of Electronics and Information Technology (MeitY) for online payment intermediaries.",
      ],
    },
  ];

  return (
    <PolicyPage
      title="Grievance Redressal"
      lastUpdated="May 25, 2026"
      sections={sections}
    />
  );
}
