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
          <Link to="hero" smooth>
            <i className="logo far fa-star"></i>
          </Link>
          <div className="nav-menu">
            <ul
              className={isMobile && navActive ? "nav-links open" : "nav-links"}
            >
              {/* only toggle nav if clicked link while mobile */}
              <li tabIndex="2" className="nav-link">
                <Link
                  onClick={isMobile && (() => setNavActive(!navActive))}
                  to="about"
                  smooth
                >
                  about
                </Link>
              </li>
              <li tabIndex="3" className="nav-link">
                <Link
                  onClick={isMobile && (() => setNavActive(!navActive))}
                  to="creations"
                  smooth
                >
                  creations
                </Link>
              </li>
              <li tabIndex="4" className="nav-link">
                <Link
                  onClick={isMobile && (() => setNavActive(!navActive))}
                  to="contact"
                  smooth
                >
                  contact
                </Link>
              </li>
            </ul>
            {isMobile && (
              <div
                tabIndex="0"
                onClick={() => setNavActive(!navActive)}
                onKeyDown={() => setNavActive(!navActive)}
                className="burg"
              >
                <i className="fas fa-ellipsis-v"></i>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
