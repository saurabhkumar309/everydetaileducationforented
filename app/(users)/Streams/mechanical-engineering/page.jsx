'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top right, #243B55 0%, #141E30 100%)", // Dark, attractive gradient background
        padding: "0 0 6rem 0",
        fontFamily:
          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#E0E6F1", // Light text for contrast on dark background
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        userSelect: "text",
      }}
    >
      <header
        style={{
          textAlign: "center",
          padding: "3rem 1rem 2rem 1rem",
          maxWidth: "720px",
          width: "100%",
          background: "rgba(36, 59, 85, 0.7)", // Semi-transparent dark panel
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          userSelect: "none",
          marginTop: "3rem",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "900",
            letterSpacing: "0.12em",
            marginBottom: "0.5rem",
            color: "#A9C0FF", // Soft bright blue text
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.6)",
          }}
        >
          Mechanical Engineering
        </h1>
        <div
          role="img"
          aria-label="Mechanical gear icon"
          style={{
            fontSize: "3.8rem",
            marginTop: "0.7rem",
            marginBottom: "1.5rem",
            filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.8))",
          }}
        >
          ⚙️
        </div>
      </header>

      <main
        style={{
          maxWidth: "760px",
          margin: "auto",
          background: "rgba(20, 36, 61, 0.85)", // Deep navy with transparency
          borderRadius: "24px",
          boxShadow: "0 15px 50px rgba(10, 15, 30, 0.9)",
          padding: "3rem 3rem 4rem 3rem",
          color: "#D9E4FF",
          lineHeight: "1.7",
          flexGrow: 1,
          textAlign: "justify",
          userSelect: "text",
        }}
      >
        <section style={{ marginBottom: "3.2rem" }}>
          <h2
            style={{
              fontWeight: "700",
              fontSize: "1.6rem",
              borderBottom: "3px solid #4B70F5",
              paddingBottom: "0.6rem",
              marginBottom: "1.8rem",
              color: "#8BB4FF",
              letterSpacing: "0.04em",
              textShadow: "0 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "1.18rem",
              color: "#D9E4FF",
              userSelect: "text",
            }}
          >
            Mechanical engineering focuses on the design, manufacture, and
            maintenance of mechanical systems. It is one of the broadest and
            oldest branches, covering topics from automotive to robotics and energy.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.42rem",
              marginBottom: "1.4rem",
              color: "#7399FF",
              letterSpacing: "0.03em",
              textShadow: "0 1px 3px rgba(0,0,0,0.4)",
            }}
          >
            Key Areas
          </h3>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.4rem",
            }}
          >
            {[
              "Thermodynamics & Heat Transfer",
              "Manufacturing & Production",
              "Robotics & Automation",
              "Automobile Engineering",
              "Materials Science",
              "Energy Systems",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(75, 112, 243, 0.2)",
                  padding: "1rem 1.3rem",
                  borderRadius: "14px",
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  color: "#C2D1FF",
                  textAlign: "center",
                  cursor: "default",
                  userSelect: "none",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(75, 112, 243, 0.45)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(75, 112, 243, 0.2)")
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.42rem",
              marginBottom: "1.3rem",
              color: "#7399FF",
              letterSpacing: "0.03em",
              textShadow: "0 1px 3px rgba(0,0,0,0.4)",
            }}
          >
            Career Prospects
          </h3>
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "1.6rem",
              fontSize: "1.1rem",
              color: "#B9CDFF",
              lineHeight: "1.55",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.6rem" }}>Automobile Industry</li>
            <li style={{ marginBottom: "0.6rem" }}>Manufacturing Firms</li>
            <li style={{ marginBottom: "0.6rem" }}>Research & Development Labs</li>
            <li style={{ marginBottom: "0.6rem" }}>Energy Sector</li>
            <li style={{ marginBottom: "0.6rem" }}>Robotics Engineering</li>
          </ul>
        </section>
      </main>

      <footer
        style={{
          marginTop: "auto",
          padding: "2rem 1rem",
          width: "100%",
          textAlign: "center",
          fontSize: "0.9rem",
          color: "#7a8bbd",
          userSelect: "none",
          fontWeight: 500,
          letterSpacing: "0.05em",
        }}
      >
        © 2025 Engineering Streams Directory. All rights reserved.
      </footer>
    </div>
  );
}
