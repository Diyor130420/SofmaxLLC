import React from "react";
import "../styles/Hero.css";
import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="hero" aria-label="Sofmax value proposition">
      <div className="hero__media" aria-hidden="true">
        <img className="hero__img" src={heroImg} alt="" />
        <div className="hero__scrim" />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">U.S. Import Partner</p>
          <h1 className="hero__title">
            Launch & sell in the U.S. — we handle go-to-market end to end.
          </h1>
          <p className="hero__sub">
            Sofmax helps international brands enter the United States and grow sales: market fit,
            listings, ads, fulfillment, and compliance.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#contact">
              Get a launch plan
            </a>
            <a className="button button--ghost" href="#services" aria-label="Learn more about Sofmax">
              See how it works
            </a>
          </div>

          <ul className="hero__proof" aria-label="Regulatory and quality capabilities">
            <li className="hero__proof-item">CBP filings</li>
            <li className="hero__proof-item">FDA/EPA where applicable</li>
            <li className="hero__proof-item">AQL inspections</li>
            <li className="hero__proof-item">Landed-cost forecasts</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
