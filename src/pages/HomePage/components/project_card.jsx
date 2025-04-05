import react from "react";
import "../homepage.css";

const ProjectCard = ({ header, body, Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="project-card">
        {Icon && <Icon />}
        <div className="project-header">{header}</div>
        <div className="project-body">{body}</div>
      </div>
    </a>
  );
};

export default ProjectCard;
