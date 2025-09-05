import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">S</span>
          <span className="footer__brand-text">Sofmax LLC</span>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer__legal">
          © {new Date().getFullYear()} Sofmax LLC · All rights reserved<br />
          Sofmax LLC arranges customs entries through licensed U.S. customs brokers
          and coordinates FDA/EPA compliance where applicable.
        </div>
      </div>
    </footer>
  );
}
