import React from "react";
import "../styles/creations.css";
import CreationItem from "./CreationItem";

export default function Creations() {
  return (
    <div className="creations">
      <div className="container">
        <h1 className="creations-title">creations</h1>
        <div className="creations-items">
          <CreationItem
            title={"Plant Recipes"}
            desc={"A website created to host my recipes."}
            lang={"React.js, CSS, MongoDB, Express, Node.js"}
            link={""}
          />
          <CreationItem
            title={"Plant Recipes"}
            desc={"A website created to host my recipes."}
            lang={"React.js, CSS, MongoDB, Express, Node.js"}
            link={""}
          />
          <CreationItem
            title={"Plant Recipes"}
            desc={"A website created to host my recipes."}
            lang={"React.js, CSS, MongoDB, Express, Node.js"}
            link={""}
          />
        </div>
      </div>
    </div>
  );
}
