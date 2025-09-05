import React from "react";
import "../styles/Services.css";

// Services.jsx
const SERVICES = [
  {
    key: "market-entry",
    title: "Market Entry Strategy",
    desc: "Pricing, channel mix (Amazon, Walmart, DTC), and regulatory gates so your first U.S. units land with traction.",
    icon: (
      <svg viewBox="0 0 24 24" className="svc__icon" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6v6l4 2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    key: "catalog",
    title: "Catalog & Listing Ops",
    desc: "Keyword research, A+ content, image stacks, review capture, and MAP policy setup across marketplaces.",
    icon: (
      <svg viewBox="0 0 24 24" className="svc__icon" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 8h8M8 12h5M8 16h6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    key: "ads",
    title: "Performance Marketing",
    desc: "Sponsored ads, DSP, and retail media with SKU-level P&L so you scale what’s profitable.",
    icon: (
      <svg viewBox="0 0 24 24" className="svc__icon" aria-hidden="true">
        <path d="M4 17l6-6 4 4 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="4" cy="17" r="1.2" fill="currentColor"/>
        <circle cx="10" cy="11" r="1.2" fill="currentColor"/>
        <circle cx="14" cy="15" r="1.2" fill="currentColor"/>
        <circle cx="20" cy="9" r="1.2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    key: "fulfillment",
    title: "Fulfillment & 3PL",
    desc: "FBA/prep, FBM backup, and 3PL orchestration with SLAs, returns handling, and inventory health.",
    icon: (
      <svg viewBox="0 0 24 24" className="svc__icon" aria-hidden="true">
        <rect x="3" y="7" width="18" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 11h18M9 19v-4h6v4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    key: "compliance",
    title: "Compliance & Import (Optional)",
    desc: "HTS/HS guidance, admissibility, customs filings via licensed brokers, and labeling — built into your launch plan.",
    icon: (
      <svg viewBox="0 0 24 24" className="svc__icon" aria-hidden="true">
        <path d="M12 3l8 4v6c0 5-3 9-8 10-5-1-8-5-8-10V7l8-4z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 9v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="17" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    key: "analytics",
    title: "Analytics & Unit Economics",
    desc: "Landed cost, fees, ad spend, and contribution margin dashboards to guide pricing and reorder cadence.",
    icon: (
      <svg viewBox="0 0 24 24" className="svc__icon" aria-hidden="true">
        <rect x="4" y="10" width="3" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10.5" y="6" width="3" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="17" y="3" width="3" height="15" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
];


export default function Services({ id = "services" }) {
  return (
    <section id={id} className="svc" aria-label="Core services">
      <div className="svc__inner">
        <header className="svc__head">
          <h2 className="svc__title">Core services</h2>
          <p className="svc__sub">
            Deliverables that move your PO from quote to delivery with fewer surprises.
          </p>
        </header>

        <ul className="svc__grid" role="list">
          {SERVICES.map((s) => (
            <li className="svc__card" key={s.key}>
              <div className="svc__iconwrap" aria-hidden="true">{s.icon}</div>
              <h3 className="svc__card-title">{s.title}</h3>
              <p className="svc__desc">{s.desc}</p>
            </li>
          ))}
        </ul>

        <div className="svc__note">
          Sofmax LLC arranges customs entries through licensed U.S. customs brokers and
          coordinates FDA/EPA compliance where applicable.
        </div>
      </div>
    </section>
  );
}
