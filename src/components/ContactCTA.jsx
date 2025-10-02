import React, { useState } from "react";
import "../styles/ContactCTA.css";

export default function ContactCTA({ id = "contact" }) {
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success'

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 650); // replace with real API later
  }

  return (
    <section id={id} className="cta" aria-label="Get a U.S. launch plan">
      <div className="cta__inner">
        <header className="cta__head">
          <div className="cta__eyebrow">Replies within 1 business day</div>
          <h2 className="cta__title">Get a quote</h2>
          <p className="cta__sub">
            Tell us your product and goals. We’ll return a channel plan, budget ranges, and
            first-90-day milestones. Import & compliance are built in, as needed.
          </p>
        </header>

        {status === "success" ? (
          <div className="cta__success" role="status" aria-live="polite">
            <div className="cta__success-icon" aria-hidden="true">✓</div>
            <h3>Request received</h3>
            <p>Thanks! We’ll reply from <strong>info@sofmax.us</strong> shortly.</p>
            <button className="button button--ghost" onClick={() => setStatus("idle")}>
              Start another request
            </button>
          </div>
        ) : (
          <form className="cta__form" onSubmit={handleSubmit} noValidate>
            <div className="cta__grid">
              <div className="cta__field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" autoComplete="name" required />
              </div>

              <div className="cta__field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required />
              </div>

              <div className="cta__field">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" autoComplete="organization" />
              </div>

              <div className="cta__field">
                <div className="cta__labelrow">
                  <label htmlFor="phone">Phone</label>
                  <span className="cta__hint">Optional</span>
                </div>
                <input id="phone" name="phone" type="tel" autoComplete="tel" />
              </div>

              <div className="cta__field">
                <label htmlFor="category">Product category</label>
                <select id="category" name="category" defaultValue="">
                  <option value="" disabled>Select a category</option>
                  <option>Electronics</option>
                  <option>Home & Kitchen</option>
                  <option>Furniture</option>
                  <option>Food Products</option>
                  <option>Construction Materials</option>
                  <option>Apparel & Accessories</option>
                  <option>Other</option>
                </select>
              </div>

             

             

            

            </div>

            <div className="cta__consent">
              By submitting, you agree we may contact you about this request. We never sell your data.
            </div>

            <button
              type="submit"
              className="button button--primary cta__submit"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Submitting…" : "Get a quote"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
