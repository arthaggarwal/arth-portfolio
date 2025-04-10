import react from "react";
import Navbar from "../../components/navbar";
import "./experiences.css";
import "../../App.css";

export default function Experiences() {
  return (
    <div className="body">
      <Navbar current_page="experiences" />
      <div className="leadership">
        <p className="header">Experiences</p>
        <div className="leadership-box">
          <p className="sub-header">Leadership</p>
          <div className="box-content">
            <p>hello</p>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
