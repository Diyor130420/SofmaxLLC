import React from "react";
import "../styles/Differentiators.css";

const items = [
  {
    title: "End-to-end U.S. launch",
    body:
      "We own the go-to-market: channels, pricing, listings, ads, and fulfillment. Import/compliance is integrated so sales aren’t delayed.",
    icon: (
      <svg viewBox="0 0 24 24" className="diff__icon" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 7v5l3 3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    proof: "Amazon · Walmart · Sofmax Marketplace · DTC",
  },
  {
    title: "SKU-level P&L transparency",
    body:
      "Decisions driven by contribution margin — not vanity metrics. Every fee, ad dollar, and landed cost is visible by SKU.",
    icon: (
      <svg viewBox="0 0 24 24" className="diff__icon" aria-hidden="true">
        <rect x="4" y="10" width="3" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10.5" y="6" width="3" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="17" y="3" width="3" height="15" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    proof: "Dashboard: landed cost · fees · ROAS · margin",
  },
  {
    title: "Listing + retail media engine",
    body:
      "Keyword research, A+ content, image stacks, review capture, and retail media that compounds — built for conversion and rank.",
    icon: (
      <svg viewBox="0 0 24 24" className="diff__icon" aria-hidden="true">
        <path d="M4 17l6-6 4 4 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="4" cy="17" r="1.2" />
        <circle cx="10" cy="11" r="1.2" />
        <circle cx="14" cy="15" r="1.2" />
        <circle cx="20" cy="9" r="1.2" />
      </svg>
    ),
    proof: "A+ content · Reviews · Sponsored Ads/DSP",
  },
  {
    title: "Fulfillment without surprises",
    body:
      "FBA prep/labels, FBM backup, and 3PL orchestration with SLAs. Inventory health and returns managed to protect margins.",
    icon: (
      <svg viewBox="0 0 24 24" className="diff__icon" aria-hidden="true">
        <rect x="3" y="7" width="18" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 11h18M9 19v-4h6v4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    proof: "FBA/FBM · 3PL routing · returns flow",
  },
  {
    title: "Compliance built-in (optional)",
    body:
      "HTS/HS guidance, admissibility, labeling, and filings coordinated via licensed U.S. brokers — aligned to your sell-through plan.",
    icon: (
      <svg viewBox="0 0 24 24" className="diff__icon" aria-hidden="true">
        <path d="M12 3l8 4v6c0 5-3 9-8 10-5-1-8-5-8-10V7l8-4z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 9v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="17" r="1" />
      </svg>
    ),
    proof: "CBP entry via licensed brokers · FDA/EPA where required",
  },
  {
    title: "Single team, fewer handoffs",
    body:
      "Sourcing, QA, compliance, marketing, and ops under one roof. Faster cycles, fewer exceptions, clearer accountability.",
    icon: (
      <svg viewBox="0 0 24 24" className="diff__icon" aria-hidden="true">
        <path d="M6 7h12M6 12h12M6 17h12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="6" cy="7" r="1.2"/><circle cx="6" cy="12" r="1.2"/><circle cx="6" cy="17" r="1.2"/>
      </svg>
    ),
    proof: "One plan · One POC · Faster feedback loops",
  },
];

export default function Differentiators({ id = "why" }) {
  return (
    <section className="diff" id={id} aria-label="Why Sofmax wins">
      <div className="diff__inner">
        <header className="diff__head">
          <h2 className="diff__title">What makes us different</h2>
          <p className="diff__sub">
            Go-to-market first. Import and compliance integrated — so U.S. sales start faster and scale with control.
          </p>
        </header>

        <ul className="diff__grid" role="list">
          {items.map((it) => (
            <li className="diff__card" key={it.title}>
              <div className="diff__iconwrap" aria-hidden="true">{it.icon}</div>
              <h3 className="diff__card-title">{it.title}</h3>
              <p className="diff__card-body">{it.body}</p>
              <div className="diff__proof">{it.proof}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
