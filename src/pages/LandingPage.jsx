import React from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Creations from "../components/Creations";
import About from "../components/About";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Creations />
      <Footer />
    </div>
  );
}
