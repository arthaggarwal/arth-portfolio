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
      className="nav-container"
      style={{
        display: "flex",
        gap: "1vw",
        backgroundColor: "rgba(50, 50, 50, 0.7)",
        position: "fixed",
        top: "1rem",
        width: "30%",
        height: "5%",
        borderRadius: "20px",
        alignItems: "center",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        justifyContent: "space-around",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
        marginBottom: "1rem",
      }}
    >
      <a
        href="/"
        style={{
          ...nav_item,
          color: current_page === "home" ? "#ce4a7e" : "#fff",
        }}
        onMouseOver={(e) => (e.target.style.color = "#ce4a7e")}
        onMouseOut={(e) =>
          (e.target.style.color = current_page === "home" ? "#ce4a7e" : "#fff")
        }
      >
        Home
      </a>
      <a
        href=""
        style={{
          ...nav_item,
          color: current_page === "experiences" ? "#ce4a7e" : "#fff",
        }}
        onMouseOver={(e) => (e.target.style.color = "#ce4a7e")}
        onMouseOut={(e) =>
          (e.target.style.color =
            current_page === "experiences" ? "#ce4a7e" : "#fff")
        }
      >
        Experiences
      </a>
      <a
        href=""
        style={{
          ...nav_item,
          color: current_page === "achievements" ? "#ce4a7e" : "#fff",
        }}
        onMouseOver={(e) => (e.target.style.color = "#ce4a7e")}
        onMouseOut={(e) =>
          (e.target.style.color =
            current_page === "achievements" ? "#ce4a7e" : "#fff")
        }
      >
        Achievements
      </a>
    </div>
  );
}
