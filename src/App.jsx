import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/homepage";
import Experiences from "./pages/Experiences/experiences";
import Achievements from "./pages/Achievements/achievements";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
