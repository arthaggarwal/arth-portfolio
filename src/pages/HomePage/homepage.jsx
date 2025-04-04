import React from "react";

// data
import introduction from "../../data/introduction";

// components

// styles
import "../../App.css";
import "./homepage.css";

const HomePage = () => {
  return (
    <div className="body">
      <div className="intro">
        <div className="yappings">
          {/* ts is the short intro self part*/}
          <p className="header">Arth Aggarwal</p>
          <p className="sub-header">{introduction.subHeading}</p>
          <p className="body-text">{introduction.bodyText}</p>
          <Icons />
        </div>
        <img
          className="profile-pic"
          src={require("../../assets/placeholder.png")}
          alt="Profile"
        />
      </div>
    </div>
  );
};

const Icons = () => {
  return (
    <div className="icons">
      <a
        href="mailto:arthaggarwal620@gmail.com"
        className="email"
        target="_blank"
      >
        <img
          src={require("../../assets/icons/icons8-email-50.png")}
          alt="email"
          className="email-icon icon"
        />
      </a>
      <a
        href="https://sg.linkedin.com/in/arth-aggarwal-293324348"
        className="linkdin"
        target="_blank"
      >
        <img
          src={require("../../assets/icons/icons8-linkedin-50.png")}
          alt="linkedin"
          className="linkdin-icon icon"
        />
      </a>
    </div>
  );
};

export default HomePage;
