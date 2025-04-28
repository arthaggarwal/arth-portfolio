import React from "react";

const GlobalCard = ({ imageSrc, subheader, body }) => {
  const cardStyle = {
    background: "linear-gradient(145deg, #2a2a29, #1f1f1e)",
    width: "20vw",
    height: "30vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: "#ffffff",
    borderRadius: "12px",
    flexShrink: 0,
    padding: "15px",
    position: "relative",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "110px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "1rem",
    background: "#222",
  };

  const subheaderStyle = {
    fontSize: "1.1rem",
    fontWeight: "600",
    margin: "0",
    color: "#f0b6d5",
    marginBottom: "0.7rem",
  };

  const bodyStyle = {
    fontSize: "1rem",
    fontWeight: "400",
    margin: "0",
    color: "#d0d0d0",
    flex: 1,
  };

  return (
    <div className="global-card" style={cardStyle}>
      <img src={imageSrc} alt={subheader} style={imageStyle} />
      <div style={subheaderStyle}>{subheader}</div>
      <div style={bodyStyle}>{body}</div>
    </div>
  );
};

export default GlobalCard;
