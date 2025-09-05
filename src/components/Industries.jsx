import React from "react";
import "../styles/Industries.css";

const SECTORS = [
  {
    k: "electronics",
    title: "Electronics",
    desc: "Consumer devices, accessories, and smart home—optimized listings and retail media across Amazon & Walmart.",
    icon: (
      <svg viewBox="0 0 24 24" className="ind__icon" aria-hidden="true">
        <rect x="3" y="5" width="18" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 19h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    k: "home",
    title: "Home & Kitchen",
    desc: "Cookware, storage, and countertop—retail-ready packaging, image stacks, and review strategy for velocity.",
    icon: (
      <svg viewBox="0 0 24 24" className="ind__icon" aria-hidden="true">
        <path d="M3 11l9-7 9 7v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 21v-6h6v6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    k: "furniture",
    title: "Furniture",
    desc: "Flat-pack and small furnishings—content, sizing, and fulfillment plans to reduce damage and returns.",
    icon: (
      <svg viewBox="0 0 24 24" className="ind__icon" aria-hidden="true">
        <rect x="3" y="8" width="18" height="5" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 13v5M18 13v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    k: "food",
    title: "Food Products",
    desc: "Shelf-stable and packaged foods—labeling, images, and channel strategy; FDA labeling coordinated where required.",
    icon: (
      <svg viewBox="0 0 24 24" className="ind__icon" aria-hidden="true">
        <path d="M7 15c0-3 2.5-6 5-6s5 3 5 6-2.5 6-5 6-5-3-5-6z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 3v4M9 4h6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    k: "construction",
    title: "Construction Materials",
    desc: "Tools, fixtures, and finishes—B2B/B2C listings, specs clarity, and reliable 3PL routing for bulky SKUs.",
    icon: (
      <svg viewBox="0 0 24 24" className="ind__icon" aria-hidden="true">
        <rect x="3" y="12" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10.5" y="12" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 12V9l4-2 4 2v3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    k: "apparel",
    title: "Apparel & Accessories",
    desc: "Fashion and lifestyle—brand storytelling, image stacks, and review capture to drive conversion.",
    icon: (
      <svg viewBox="0 0 24 24" className="ind__icon" aria-hidden="true">
        <path d="M7 5l5 3 5-3 3 4-4 3v7H8v-7L4 9l3-4z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export default function Industries({ id = "industries" }) {
  return (
    <section id={id} className="ind" aria-label="Categories we grow">
      <div className="ind__inner">
        <header className="ind__head">
          <h2 className="ind__title">Categories we grow</h2>
          <p className="ind__sub">
            Focus areas where Sofmax helps brands win visibility, margins, and market share in the U.S.
          </p>
        </header>

        <ul className="ind__grid" role="list">
          {SECTORS.map((s) => (
            <li className="ind__card" key={s.k}>
              <div className="ind__iconwrap" aria-hidden="true">{s.icon}</div>
              <h3 className="ind__card-title">{s.title}</h3>
              <p className="ind__desc">{s.desc}</p>
            </li>
          ))}
        </ul>

        {/* Optional: keep a light note for regulated items */}
        <div className="ind__legend" aria-live="polite">
          <strong>Note:</strong> When required, we coordinate U.S. regulatory steps (e.g., FDA labeling for foods) with licensed partners.
        </div>
      </div>
    </section>
  );
}
