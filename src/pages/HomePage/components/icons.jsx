import React from "react";

const Icons = () => {
  return (
    <div className="icons">
      <a
        href="mailto:arthaggarwal620@gmail.com"
        className="email"
        target="_blank"
      >
        <img
          src={require("../../../assets/icons/icons8-email-50.png")}
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
          src={require("../../../assets/icons/icons8-linkedin-50.png")}
          alt="linkedin"
          className="linkdin-icon icon"
        />
      </a>
      <a href="https://github.com/arthaggarwal" target="_blank">
        <img
          src={require("../../../assets/icons/icons8-github-logo-50.png")}
          alt="github"
          className="github-icon icon"
        />
      </a>
    </div>
  );
};

export default Icons;
