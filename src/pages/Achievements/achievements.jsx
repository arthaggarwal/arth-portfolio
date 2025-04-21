import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import "./achievements.css";
import "../../App.css";
import Card from "./components/card";
import comps from "../../data/achievements/competitions";
import Footer from "../../components/footer";

export default function Achievements() {
  useEffect(() => {
    // Animate header with fade in
    const header = document.querySelector(".header");
    if (header) header.classList.add("fade-title");

    // Animate achievement cards with staggered entrance
    const cards = document.querySelectorAll(".achievement-card");
    cards.forEach((card, i) => {
      card.style.animationDelay = `${0.3 + i * 0.1}s`;
      card.classList.add("card-animation");
    });
  }, []);

  return (
    <div className="body">
      <Navbar current_page="achievements" />
      <div className="content-wrapper">
        <div className="achievements" style={{ marginTop: "7rem" }}>
          <p className="header">Achievements</p>
          <div className="achievements-box">
            {comps.map((achievement, index) => (
              <Card key={index} {...achievement} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
