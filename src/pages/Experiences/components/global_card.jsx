import React from "react";

const GlobalCard = ({ imageSrc, subheader, body }) => {
  const cardStyle = {
    background: "linear-gradient(145deg, #2a2a29, #1f1f1e)",
    width: "289px",
    height: "250px",
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

  const imageContainerStyle = {
    width: "100%",
    height: "110px",
    position: "relative",
    marginBottom: "1rem",
    borderRadius: "8px",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    background: "#222",
    filter: "brightness(0.9)", // Slightly darkens the image (made lighter)
  };

  const imageTintStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.15)", // Black overlay with 15% opacity (made lighter)
    pointerEvents: "none", // Allows clicking through to the image
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
      <div style={imageContainerStyle}>
        <img src={imageSrc} alt={subheader} style={imageStyle} />
        <div style={imageTintStyle}></div>
      </div>
      <div style={subheaderStyle}>{subheader}</div>
      <div style={bodyStyle}>{body}</div>
    </div>
  );
};

export default GlobalCard;
