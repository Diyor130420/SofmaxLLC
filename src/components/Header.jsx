import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on hash change (e.g., when clicking an in-page anchor)
  useEffect(() => {
    const onHash = () => setMenuOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__inner">
        {/* Brand */}
        <a href="/" className="header__brand" aria-label="Sofmax LLC home">
          {/* If you have a logo image, replace the text with <img ... /> */}
          <span className="header__logo">S</span>
          <span className="header__brand-text">Sofmax LLC</span>
        </a>

        {/* Desktop nav */}
        <nav className="header__nav" aria-label="Primary">
          <ul className="header__list">
            {NAV_LINKS.map((item) => (
              <li className="header__item" key={item.href}>
                <a className="header__link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA (desktop) */}
        <div className="header__cta">
          <a className="button button--primary" href="#contact">
            Get A Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`header__toggle ${menuOpen ? "is-open" : ""}`}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="header__toggle-bar" />
          <span className="header__toggle-bar" />
          <span className="header__toggle-bar" />
        </button>
      </div>

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        className={`header__mobile ${menuOpen ? "header__mobile--open" : ""}`}
      >
        <nav aria-label="Mobile">
          <ul className="header__mobile-list">
            {NAV_LINKS.map((item) => (
              <li className="header__mobile-item" key={item.href}>
                <a className="header__mobile-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
            <li className="header__mobile-item">
              <a className="button button--primary button--block" href="#contact">
                Get A Quote
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
