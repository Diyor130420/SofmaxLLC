import React from "react";
import "./styles/global.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Differentiators from "./components/Differentiators";
import Services from "./components/Services";
import Process from "./components/Process";
import Industries from "./components/Industries";
import About from "./components/About";
import Team from "./components/Team";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About id="about" />
      <Services id="services" />
      <Industries id="industries" />
      <Process id="process" />
      <Differentiators id="why"/>
      <Team id="team" />
      <ContactCTA id="contact" />
      <Footer /> 
    </>
  );
}

export default App;
