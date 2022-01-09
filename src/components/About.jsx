import React from "react";
import "../styles/about.css";
import studying from "../assets/Studying-bro.png";

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-title">about</h1>
            <p className="about-desc">
              Hi there! My name is Vi-Linh Vu and I am currently a first year
              student majoring in Computer Science at California Polytechnic
              State University in San Luis Obispo (aka Cal Poly SLO)! I'm
              currently interested in full-stack development and am trying to
              learn front-end and back-end via online resources and side
              projects.
            </p>
          </div>

          <div className="about-img">
            <a href="https://storyset.com/education" target="_blank">
              <img src={studying} alt="student" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
