import React from "react";
import "./card.css";

export default function Card({
  year,
  title,
  description,
  Icon,
  achievement,
  category,
}) {
  return (
    <div className="card achievement-card">
      <div className="icon-container">
        <Icon />
      </div>
      <div className="card-metadata">
        <span className="year">{year}</span>
        {category && <span className="category">{category}</span>}
      </div>
      <p className="title achievement-title">{title}</p>
      <p className="description">{description}</p>
    </div>
  );
}
