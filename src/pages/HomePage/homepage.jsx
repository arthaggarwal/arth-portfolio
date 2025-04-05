import React, { useRef } from "react";

// data
import introduction from "../../data/homepage/introduction";
import projects from "../../data/homepage/projects";

// components
import Icons from "./components/icons";
import ProjectCard from "./components/project_card";

// styles
import "../../App.css";
import "./homepage.css";

const HomePage = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.firstChild.offsetWidth + 16; // Card width + gap (adjust gap if necessary)
      container.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.firstChild.offsetWidth + 16; // Card width + gap (adjust gap if necessary)
      container.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="body">
      <div className="content-wrapper">
        <div className="intro">
          <div className="yappings">
            {/* ts is the short intro self part */}
            <p className="header">Arth Aggarwal</p>
            <p className="sub-header">{introduction.subHeading}</p>
            <div className="body-text-container">
              <p className="body-text">{introduction.bodyText}</p>
            </div>
            <Icons />
          </div>
          <img
            className="profile-pic"
            src={require("../../assets/placeholder.png")}
            alt="Profile"
          />
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
                  key={index} // Add a unique key for each card
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
      </div>
    </div>
  );
};

export default HomePage;
