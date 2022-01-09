import React from "react";
import "../styles/hero.css";
import peach from "../assets/Peach-amico.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-info">
            <h1>vi-linh vu</h1>
            <p>
              I am a college student studying computer science. I have an
              interest in art and web apps.
            </p>
            <button>
              <i className="far fa-star"></i>
            </button>
          </div>
          <div className="hero-img">
            <img src={peach} alt="peach"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
