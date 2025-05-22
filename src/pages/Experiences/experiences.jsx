import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import "./experiences.css";
import "../../App.css";
import aboutme from "../../data/experiences/aboutme";
import ExperienceCard from "./components/experience_card";
import global_data from "../../data/experiences/global_data";
import GlobalCard from "./components/global_card";
import Footer from "../../components/footer";

export default function Experiences() {
  useEffect(() => {
    const headers = document.querySelectorAll(".header, .sub-header");
    headers.forEach((header, i) => {
      header.style.animationDelay = `${0.3 + i * 0.2}s`;
      header.classList.add("animated-header");
    });

    const expCards = document.querySelectorAll(".experience-card");
    expCards.forEach((card, i) => {
      card.style.animationDelay = `${0.5 + i * 0.15}s`;
      card.classList.add("animate-card");
    });

    const globalCards = document.querySelectorAll(".global-card");
    globalCards.forEach((card, i) => {
      card.style.animationDelay = `${0.7 + i * 0.15}s`;
      card.classList.add("animate-card");
    });
  }, []);

  return (
    <div className="body">
      <Navbar current_page="experiences" />
      <div className="about-content" style={{ marginTop: "7rem" }}>
        <p className="header">Experiences</p>
        <div className="leadership">
          <p className="sub-header">More about me ...</p>
          <div className="about-container">
            {aboutme.map((experience, index) => (
              <ExperienceCard
                key={index}
                header={experience.title}
                body={experience.description}
                Icon={experience.Icon}
              />
            ))}
          </div>
        </div>
        <div className="global-experiences">
          <p className="sub-header">Highlights</p>
          <div className="experience-container">
            {global_data.map((experience, index) => (
              <GlobalCard
                key={index}
                imageSrc={experience.imageSrc}
                subheader={experience.title}
                body={experience.description}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
