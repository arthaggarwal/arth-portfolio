import React from "react";

const ExperienceCard = ({ header, body, Icon }) => {
  const cardStyle = {
    background: "linear-gradient(145deg, #2a2a29, #1f1f1e)",
    width: "202px",
    height: "260px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: "#ffffff",
    borderRadius: "12px",
    flexShrink: 0,
    padding: "15px",
    position: "relative",
  };

  const headerStyle = {
    fontSize: "1.25rem",
    fontWeight: "600",
    margin: "0",
    color: "#f0f0f0",
    height: "1.5rem",
  };

  const bodyStyle = {
    fontSize: "1rem",
    fontWeight: "400",
    margin: "0",
    marginTop: "1rem",
    color: "#d0d0d0",
    height: "3rem",
  };

  return (
    <div className="experience-card" style={cardStyle}>
      <Icon />
      <div style={headerStyle}>{header}</div>
      <div style={bodyStyle}>{body}</div>
    </div>
  );
};

export default ExperienceCard;
