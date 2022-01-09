import React from "react";
import "../styles/hero.css";
import peach from "../assets/Peach-amico.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-info">
            <h1 className="hero-title">vi-linh vu</h1>
            <p className="hero-desc">
              I am a college student studying computer science. I have an
              interest in art and web apps.
            </p>
            <div className="hero-icons">
              <button>
                <a href="mailto:vlvu@calpoly.edu">
                  <i className="fas fa-envelope"></i>
                </a>
              </button>
              <button>
                <a href="https://github.com/vilinh" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </button>
              <button>
                <a
                  href="https://www.linkedin.com/in/vi-linh-vu-a35734194/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="hero-img">
            <img src={peach} alt="peach"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
