import react from "react";
import "./card.css";

export default function Card({ year, title, description, Icon, achievement }) {
  return (
    <div className="card">
      <Icon />
      <p className="year">{year}</p>
      <p className="title">{title}</p>
      <p className="achievement">{achievement}</p>
      <p className="description">{description}</p>
    </div>
  );
}
