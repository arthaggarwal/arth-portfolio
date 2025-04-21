import React from "react";
import "./card.css";

export default function Card({ year, title, description, Icon, achievement }) {
  return (
    <div className="card achievement-card">
      <div className="icon-container">
        <Icon />
      </div>
      <p className="year">{year}</p>
      <p className="title achievement-title">{title}</p>
      <p className="description">{description}</p>
    </div>
  );
}
