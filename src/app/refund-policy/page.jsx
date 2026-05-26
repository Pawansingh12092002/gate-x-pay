"use client";

import React from "react";
import PolicyPage from "../../component/PolicyPage/PolicyPage";

export default function RefundPolicy() {
  const sections = [
    {
      id: "scope",
      title: "1. Policy Scope",
      content: [
        "This Refund & Cancellation Policy governs customer refunds, cancellation processes, and credit operations for all digital payments executed through the Gate X Pay gateway interfaces.",
        "As a leading payment processor, Gate X Pay Technologies helps process transactions securely. We work closely with acquiring banks, credit card companies, UPI providers, and merchants to execute legitimate refund requests transparently.",
      ],
    },
    {
      id: "initiation",
      title: "2. Refund Initiation Process",
      content: [
        "If a customer requires a refund for a transaction, the process operates as follows:",
        "The customer must contact the respective merchant from whom they purchased the product or service to file a return/refund request.",
        "Merchants review requests against their unique business cancellation policies. Once a merchant approves a refund, they trigger a transaction reversal command through their Gate X Pay merchant panel.",
        "Gate X Pay cannot directly initiate customer refunds without explicit merchant authorization or regulatory arbitration mandates.",
      ],
    },
    {
      id: "timelines",
      title: "3. Refund Settlement Timelines",
      content: [
        "Once a refund command is authorized by the merchant, our automated system routes the funds back to the buyer's original payment source:",
        "Credit Cards / Debit Cards: The refund is sent back to the issuing card company, usually reflecting in the customer's billing statement within 5 to 7 business days.",
        "UPI Payments: Funds are credited directly back to the linked UPI bank account, typically within 24 to 48 hours.",
        "Net Banking / Wallet Payments: Reversals are routed through the respective banking gateway, settling within 3 to 5 business days.",
        "Please note that actual settlement speeds depend on banking networks and clearing houses, which are outside the direct control of Gate X Pay.",
      ],
    },
    {
      id: "cancellation",
      title: "4. Cancellation Guidelines",
      content: [
        "For subscription services, digital tokens, or scheduled recurring checkouts:",
        "Customers can cancel recurring transaction schedules at any time before the billing cycle by using their client profile or merchant contact options.",
        "In the event of a successful cancellation, further automated transactions will cease immediately. Any prior successful subscription fees remain subject to the merchant's specific refund rules.",
      ],
    },
    {
      id: "chargebacks",
      title: "5. Chargebacks & Payment Disputes",
      content: [
        "If a customer detects an unauthorized charge on their card or banking records, they can raise a formal dispute or chargeback with their bank:",
        "Gate X Pay coordinates actively between issuing banks and merchants to settle disputes. We supply digital proof of transaction processing, KYC records, and delivery details to resolve claims fairly.",
        "Merchants agree to assume complete financial liability for chargebacks resulting from fraudulent transaction breaches or failures to deliver services.",
      ],
    },
    {
      id: "grievances",
      title: "6. Grievances & Resolution",
      content: [
        "If an approved refund has not been credited to your payment source within 10 business days, or you have questions about payment statuses, please contact us:",
        "Email our customer support at info@gatecode.in with the exact transaction date, amount, and payment ID.",
        "Our customer support will investigate with the corresponding acquiring banking partners and resolve the issue within 72 business hours.",
      ],
    },
  ];

  return (
    <PolicyPage
      title="Refund Policy"
      lastUpdated="May 25, 2026"
      sections={sections}
    />
  );
}
