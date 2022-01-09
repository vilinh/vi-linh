import React from "react";
import "../styles/creations.css";
import CreationItem from "./CreationItem";
import creations from "../assets/creationsdata";

export default function Creations() {
  return (
    <div className="creations">
      <div className="container">
        <h1 className="creations-title">creations</h1>
        <div className="creations-items">
          {creations.map((creation) => (
            <CreationItem
              key={creation.title}
              title={creation.title}
              desc={creation.desc}
              lang={creation.lang}
              link={creation.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
