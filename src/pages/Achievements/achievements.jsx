import react from "react";
import Navbar from "../../components/navbar";
import "./achievements.css";
import "../../App.css";

export default function Achievements() {
  return (
    <div className="body">
      <Navbar current_page="achievements" />
      <div className="achievements">
        <p className="header">Achievements</p>
        <div className="achievements-box">
          <p className="sub-header">Achievements</p>
          <div className="box-content">
            <p>hello</p>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
