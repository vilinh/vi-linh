import React from "react";
import "../styles/creationitem.css";

export default function CreationItem({ title, desc, lang }) {
  return (
    <div className="creation-item">
      <div className="creation-icon">
        <i className="star far fa-star"></i>
      </div>
      <div className="creation-title">{title}</div>
      <p className="creation-desc">{desc}</p>
      <p className="creation-lang">{lang}</p>
    </div>
  );
}
