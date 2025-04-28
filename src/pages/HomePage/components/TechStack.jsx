import React from "react";
import "../homepage.css";

const techStack = [
  {
    name: "React",
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <circle cx="20" cy="20" r="3.5" fill="#dd7596" />
        <ellipse
          cx="20"
          cy="20"
          rx="17"
          ry="7"
          stroke="#dd7596"
          strokeWidth="2"
        />
        <ellipse
          cx="20"
          cy="20"
          rx="17"
          ry="7"
          stroke="#dd7596"
          strokeWidth="2"
          transform="rotate(60 20 20)"
        />
        <ellipse
          cx="20"
          cy="20"
          rx="17"
          ry="7"
          stroke="#dd7596"
          strokeWidth="2"
          transform="rotate(120 20 20)"
        />
      </svg>
    ),
  },
  {
    name: "Node.js",
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <polygon
          points="20,4 36,12 36,28 20,36 4,28 4,12"
          stroke="#dd7596"
          strokeWidth="2"
          fill="#181818"
        />
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          fill="#dd7596"
          fontSize="12"
          fontFamily="monospace"
          dy=".3em"
        >
          JS
        </text>
      </svg>
    ),
  },
  {
    name: "Python",
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <rect x="7" y="10" width="26" height="10" rx="5" fill="#dd7596" />
        <rect
          x="7"
          y="20"
          width="26"
          height="10"
          rx="5"
          fill="#181818"
          stroke="#dd7596"
          strokeWidth="2"
        />
        <circle cx="13" cy="15" r="1.5" fill="#181818" />
        <circle cx="27" cy="25" r="1.5" fill="#dd7596" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <rect
          x="6"
          y="6"
          width="28"
          height="28"
          rx="6"
          fill="#181818"
          stroke="#dd7596"
          strokeWidth="2"
        />
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          fill="#dd7596"
          fontSize="13"
          fontFamily="monospace"
          dy=".3em"
        >
          JS
        </text>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <rect
          x="6"
          y="6"
          width="28"
          height="28"
          rx="6"
          fill="#181818"
          stroke="#dd7596"
          strokeWidth="2"
        />
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          fill="#dd7596"
          fontSize="13"
          fontFamily="monospace"
          dy=".3em"
        >
          JS
        </text>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <rect
          x="6"
          y="6"
          width="28"
          height="28"
          rx="6"
          fill="#181818"
          stroke="#dd7596"
          strokeWidth="2"
        />
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          fill="#dd7596"
          fontSize="13"
          fontFamily="monospace"
          dy=".3em"
        >
          JS
        </text>
      </svg>
    ),
  },
];

const TechStack = () => (
  <div className="skills-section">
    <h2 className="skills-header">Tech Stack</h2>
    <div className="skills-icons">
      {techStack.map((tech) => (
        <div className="skill-item" key={tech.name}>
          {tech.svg}
          <span className="skill-label">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default TechStack;
