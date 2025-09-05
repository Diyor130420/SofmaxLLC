import React from "react";
import "../styles/Process.css";

const STEPS = [
  {
    k: "discovery",
    title: "Discovery & scope",
    desc: "Define product specs, volumes, timelines, and target landed cost so we can map the best path.",
    icon: (
      <svg viewBox="0 0 24 24" className="proc__icon" aria-hidden="true">
        <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16.5 16.5L21 21" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    k: "validation",
    title: "Sourcing & validation",
    desc: "Shortlist factories, align samples to specs, and confirm the compliance pathway for U.S. entry.",
    icon: (
      <svg viewBox="0 0 24 24" className="proc__icon" aria-hidden="true">
        <path d="M4 4h16v12H4z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 14l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    k: "qa",
    title: "Production & QA",
    desc: "Place orders, run AQL inspections, and lock packaging & labeling before hand-off to logistics.",
    icon: (
      <svg viewBox="0 0 24 24" className="proc__icon" aria-hidden="true">
        <path d="M3 8h18M6 5h12M4 8l3 12h10l3-12" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8.5 14l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    k: "logistics",
    title: "Logistics & customs",
    desc: "Book freight, file ISF/entries, clear customs, and deliver to your warehouse or 3PL with POD.",
    icon: (
      <svg viewBox="0 0 24 24" className="proc__icon" aria-hidden="true">
        <path d="M2 16h20M4 12h14l4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="3" y="6" width="10" height="6" rx="1.2" />
      </svg>
    ),
  },
];

export default function Process({ id = "process" }) {
  return (
    <section id={id} className="proc" aria-label="How it works">
      <div className="proc__inner">
        <header className="proc__head">
          <h2 className="proc__title">How it works</h2>
          <p className="proc__sub">
            Four clear phases—connected like a timeline so you always know the next step.
          </p>
        </header>

        <ol className="proc__timeline" role="list">
          {STEPS.map((s, i) => (
            <li key={s.k} className="proc__step" data-index={i + 1}>
              <span className="proc__badge" aria-hidden="true">{i + 1}</span>
              <div className="proc__card">
                <div className="proc__iconwrap">{s.icon}</div>
                <h3 className="proc__step-title">{s.title}</h3>
                <p className="proc__desc">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
