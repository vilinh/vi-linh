import React from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Creations from "../components/Creations";

export default function LandingPage() {
  return (
    <div>
      <Nav />
      <Hero />
      <Creations />
    </div>
  );
}
