import react from "react";

export default function Navbar({ current_page }) {
  const nav_item = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    color: "#fff",
    fontFamily: "Poppins",
    transition: "color 0.3s ease",
    fontWeight: "500",
  };

  return (
    <div
      className="nav-container navbar"
      style={{
        display: "flex",
        gap: "1vw",
        backgroundColor: "rgba(50, 50, 50, 0.7)",
        position: "fixed",
        top: "1rem",
        width: "20%",
        height: "5%",
        borderRadius: "20px",
        alignItems: "center",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        justifyContent: "space-around",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
        marginBottom: "1rem",
        zIndex: 1000,
      }}
    >
      <a
        href="/"
        style={{
          ...nav_item,
          color: current_page === "home" ? "#DD7596" : "#fff",
        }}
        onMouseOver={(e) => (e.target.style.color = "#DD7596")}
        onMouseOut={(e) =>
          (e.target.style.color = current_page === "home" ? "#DD7596" : "#fff")
        }
      >
        Home
      </a>
      {/*       <a
        href="/experiences"
        style={{
          ...nav_item,
          color: current_page === "experiences" ? "#DD7596" : "#fff",
        }}
        onMouseOver={(e) => (e.target.style.color = "#DD7596")}
        onMouseOut={(e) =>
          (e.target.style.color =
            current_page === "experiences" ? "#DD7596" : "#fff")
        }
      >
        Experiences
      </a> */}
      <a
        href="/achievements"
        style={{
          ...nav_item,
          color: current_page === "achievements" ? "#DD7596" : "#fff",
        }}
        onMouseOver={(e) => (e.target.style.color = "#DD7596")}
        onMouseOut={(e) =>
          (e.target.style.color =
            current_page === "achievements" ? "#DD7596" : "#fff")
        }
      >
        Achievements
      </a>
    </div>
  );
}
