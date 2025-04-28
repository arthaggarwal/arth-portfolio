import React, { useEffect, useState, useMemo } from "react";
import Navbar from "../../components/navbar";
import "./achievements.css";
import "../../App.css";
import Card from "./components/card";
import comps from "../../data/achievements/competitions";
import Footer from "../../components/footer";

const sortOptions = [
  { value: "default", label: "Default Order" },
  { value: "year", label: "Year" },
  { value: "achievement", label: "Achievement" },
  { value: "category", label: "Category" },
];

export default function Achievements() {
  const [sortBy, setSortBy] = useState("default");
  const [animating, setAnimating] = useState(false);
  const [cardsAnimating, setCardsAnimating] = useState(false);

  const sortedComps = useMemo(() => {
    if (sortBy === "default") return comps;
    const compsCopy = [...comps];
    if (sortBy === "year") {
      compsCopy.sort((a, b) => b.year.localeCompare(a.year));
    } else if (sortBy === "achievement") {
      compsCopy.sort((a, b) => Number(b.achievement) - Number(a.achievement));
    } else if (sortBy === "category") {
      compsCopy.sort((a, b) => a.category.localeCompare(b.category));
    }
    return compsCopy;
  }, [sortBy]);

  const handleSortTap = () => {
    setAnimating(true);
    setCardsAnimating(true);
    setTimeout(() => {
      setAnimating(false);
      const currentIdx = sortOptions.findIndex((opt) => opt.value === sortBy);
      const nextIdx = (currentIdx + 1) % sortOptions.length;
      setSortBy(sortOptions[nextIdx].value);
    }, 180);
  };

  useEffect(() => {
    if (cardsAnimating) {
      const timeout = setTimeout(() => setCardsAnimating(false), 350);
      return () => clearTimeout(timeout);
    }
  }, [cardsAnimating]);

  useEffect(() => {
    const header = document.querySelector(".header");
    if (header) header.classList.add("fade-title");

    const cards = document.querySelectorAll(".achievement-card");
    cards.forEach((card, i) => {
      card.style.animationDelay = `${0.3 + i * 0.1}s`;
      card.classList.add("card-animation");
    });
  }, []);

  useEffect(() => {
    if (sortBy !== "default") setCardsAnimating(true);
  }, [sortBy]);

  return (
    <div className="body">
      <Navbar current_page="achievements" />
      <div className="content-wrapper">
        <div className="achievements" style={{ marginTop: "7rem" }}>
          <div className="achievements-header-row">
            <p className="header">Achievements</p>
            <div
              className={`sort-tap-text${animating ? " sort-tap-anim" : ""}`}
              onClick={handleSortTap}
              tabIndex={0}
              role="button"
              aria-label="Change sorting order"
              style={{
                cursor: "pointer",
                userSelect: "none",
                minWidth: 220,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "flex-start",
                marginLeft: "-1.5rem",
              }}
            >
              <span className="sort-label">Sort by:</span>
              <span
                className="sort-tap-value"
                style={{ minWidth: "120px", display: "inline-block" }}
              >
                {sortOptions.find((opt) => opt.value === sortBy).label}
              </span>
            </div>
          </div>
          <div
            className={`achievements-box${
              cardsAnimating ? " cards-sort-anim" : ""
            }`}
          >
            {sortedComps.map((achievement, index) => (
              <Card key={index} {...achievement} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
