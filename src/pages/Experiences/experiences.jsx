import react from "react";
import Navbar from "../../components/navbar";
import "./experiences.css";
import "../../App.css";
import aboutme from "../../data/experiences/aboutme";
import ExperienceCard from "./components/experience_card";
import global_data from "../../data/experiences/global_data";
import GlobalCard from "./components/global_card";
import Footer from "../../components/footer";

export default function Experiences() {
  return (
    <div className="body">
      <Navbar current_page="experiences" />
      <div style={{ marginTop: "7rem" }}>
        <p className="header">Experiences</p>
        <div className="leadership">
          <p className="sub-header">More about me ...</p>
          <div className="experience-container">
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
          <p className="sub-header">Global Experiences</p>
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
