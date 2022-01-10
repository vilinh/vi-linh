import React, { useState } from "react";
import "../styles/hero.css";
import peach from "../assets/Peach-amico.png";
import { Link } from "react-scroll";
// import { useSpring, animated } from "react-spring";

export default function Hero() {
  // const props = useSpring({
  //   to: { marginBottom: 0, opacity: 1 },
  //   from: { marginBottom: -500, opacity: 0 },
  //   config: { duration: 600 },
  // });

  // const animateImage = useSpring({
  //   to: { y: 0 },
  //   from: { y: -25 },
  //   config: { duration: 1500 },
  //   loop: { reverse: true },
  // });

  return (
    <div className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-info">
            <h1 className="hero-title">vi-linh</h1>
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
                <a href="https://github.com/vilinh">
                  <i className="fab fa-github"></i>
                </a>
              </button>
              <button>
                <a href="https://www.linkedin.com/in/vi-linh-vu-a35734194/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </button>
            </div>
          </div>

          <div className="hero-img">
            <a href="https://storyset.com/">
              <img src={peach} alt="peach"></img>
            </a>
          </div>

          <div className="star-icons">
            <Link to="about" smooth>
              <i className="star-icon  far fa-star"></i>
            </Link>
            <Link to="creations" smooth>
              <i className="star-icon  far fa-star"></i>
            </Link>
            <Link to="contact" smooth>
              <i className="star-icon  far fa-star"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
