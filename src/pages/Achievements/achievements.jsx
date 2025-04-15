import react from "react";
import Navbar from "../../components/navbar";
import "./achievements.css";
import "../../App.css";
import Card from "./components/card";
import comps from "../../data/achievements/competitions";

export default function Achievements() {
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
    </div>
  );
}
