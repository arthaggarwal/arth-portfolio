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

export default HomePage;
