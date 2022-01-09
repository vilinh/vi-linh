import React from "react";
import "../styles/creationitem.css";

export default function CreationItem({ title, desc, lang }) {
  return (
    <div className="creation-item">
      <div className="creation-icons">
        <i className="icon star far fa-star"></i>
        <i className="icon fas fa-link"></i>
      </div>
      <div className="creation-title">{title}</div>
      <p className="creation-desc">{desc}</p>
      <p className="creation-lang">{lang}</p>
    </div>
  );
}
