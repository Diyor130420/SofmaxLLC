import React from "react";
import "../styles/About.css";
import aboutImg from "../assets/about.jpg"; // add a suitable photo to /src/assets

export default function About({ id = "about" }) {
  return (
    <section id={id} className="about" aria-label="About Sofmax LLC">
      <div className="about__inner">
            <h2 className="about__title">About Us</h2>

        <div className="about__grid">
          {/* Left: single paragraph */}
          <div className="about__copy">
            <h2 className="about__title2">Sofmax LLC</h2>
            <p className="about__para">
              We help international brands launch and grow in the United States with a full go-to-market strategy. 
              From market research and channel selection to product listings, ads, fulfillment, and compliance, we align every step so your brand scales with confidence.
            </p>

            <p className="about__para">
              Our model blends marketing expertise with operational execution. 
              By combining marketplace management, performance advertising, and U.S. import support under one team, we remove friction and reduce costs. Whether you’re testing entry or expanding nationwide, Sofmax delivers clarity, speed, and results across the entire revenue journey.            </p>
          </div>

          {/* Right: photo */}
          <figure className="about__media">
            <img
              className="about__img"
              src={aboutImg}
              alt="Sofmax coordinating inspections and port logistics"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
