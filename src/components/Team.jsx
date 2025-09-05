import React from "react";
import "../styles/Team.css";

const TEAM = [
  {
    name: "Saidamin Saidkarimov",
    role: "Co-Founder & CEO",
    phone: "+1 (321) 314-7187",
    email: "Sofmax1911@outlook.com",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Isafandiyor Okhunov",
    role: "Operations Manager",
    phone: "+1 (215) 526-7137",
    email: "Isfandiyorokhunov2000@gmail.com",
    linkedin: "https://www.linkedin.com/in/isafandiyor-okhunov/",
  },
  {
    name: "Rakhmiddin Dekhkonov",
    role: "Assistant Operations Manager",
    phone: "+65 9083 0166",
    email: "dehqonovrahmiddin1@gmail.com",
    linkedin: "https://www.linkedin.com/in/rakhmiddin-dekhkonov",
  },
];

export default function Team({ id = "team" }) {
  return (
    <section id={id} className="team" aria-label="Our team">
      <div className="team__inner">
        <header className="team__head">
          <h2 className="team__title">Meet the team</h2>
          <p className="team__sub">
            Reach out directly — we keep lines open for partners and clients.
          </p>
        </header>

        <ul className="team__grid" role="list">
          {TEAM.map((m) => (
            <li className="team__card" key={m.name}>
              {/* <img src={m.photo} alt={m.name} className="team__photo" /> */}
              <h3 className="team__name">{m.name}</h3>
              <p className="team__role">{m.role}</p>
              <p className="team__phone">{m.phone}</p>

              <div className="team__links">
                <a href={`mailto:${m.email}`} className="team__icon" aria-label="Email">
                  ✉️
                </a>
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="team__icon" aria-label="LinkedIn">
                  in
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
