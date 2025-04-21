import React from "react";

const footerStyle = {
  width: "60vw",
  textAlign: "center",
  padding: "1rem 0",
  background: "#1c1c1bff", // matches your card backgrounds
  color: "#fff",
  fontSize: "1rem",
  marginTop: "3rem",
  letterSpacing: "0.5px",
};

export default function Footer() {
  return (
    <footer style={footerStyle}>
      Made by Arth Aggarwal with <span style={{ color: "#DD7596" }}>♥</span>
    </footer>
  );
}
