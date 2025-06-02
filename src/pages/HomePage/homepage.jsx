import React, { useRef, useEffect } from "react";

// data
import introduction from "../../data/homepage/introduction";
import projects from "../../data/homepage/projects";

// components
import Icons from "./components/icons";
import ProjectCard from "./components/project_card";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import TechStack from "./components/TechStack";

// styles
import "../../App.css";
import "./homepage.css";

const HomePage = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const intro = document.querySelector(".intro");
    if (intro) intro.classList.add("fade-in");
    const skills = document.querySelector(".skills-section");
    if (skills) skills.classList.add("fade-in-delay");
    const cards = document.querySelectorAll(".project-container .project-card");
    cards.forEach((card, i) => {
      card.style.animationDelay = `${0.3 + i * 0.15}s`;
      card.classList.add("animated-project-card");
    });
  }, []);

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.firstChild.offsetWidth + 30;
      container.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.firstChild.offsetWidth + 20;
      container.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="body">
      <Navbar current_page="home" />
      <div className="intro">
        <div className="yappings">
          <p className="header">Arth Aggarwal</p>
          <p className="sub-header">{introduction.subHeading}</p>
          <p className="body-text" style={{ width: "130%" }}>
            {introduction.bodyText}
          </p>
          <Icons />
        </div>
        <div className="profile-pic-container">
          <img
            className="profile-pic"
            src={require("../../assets/arth.jpeg")}
            alt="Profile"
            style={{ filter: "brightness(0.9)" }}
          />
          <div className="image-tint"></div>
        </div>
      </div>
      <div className="project-area">
        <p
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "1rem",
          }}
        >
          Projects I've worked on...
        </p>
        <div className="scroll-controls">
          <button className="scroll-button left" onClick={scrollLeft}>
            &#8592;
          </button>
          <div className="project-container" ref={scrollContainerRef}>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                header={project.header}
                body={project.body}
                Icon={project.Icon}
                link={project.link}
              />
            ))}
          </div>
          <button className="scroll-button right" onClick={scrollRight}>
            &#8594;
          </button>
        </div>
      </div>
      <TechStack />
      <Footer />
    </div>
  );
};

export default HomePage;
