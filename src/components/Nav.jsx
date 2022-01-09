import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/nav.css";

export default function Nav() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    });
  }, []);

  return (
    <nav>
      <div className="container">
        <div className="nav">
          <p className="logo">vi-linh</p>
          <div className="nav-menu">
            <ul className={(isMobile && navActive) ? "nav-links open" : "nav-links"}>
              <li className="nav-link">
                <Link to="home">home</Link>
              </li>
              <li className="nav-link">
                <Link to="about">about</Link>
              </li>
              <li className="nav-link">
                <Link to="projects">projects</Link>
              </li>
              <li className="nav-link">
                <Link to="contact">contact</Link>
              </li>
            </ul>
            {isMobile && (
              <div onClick={() => setNavActive(!navActive)} className="burg">
                <i className="fas fa-ellipsis-v"></i>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
