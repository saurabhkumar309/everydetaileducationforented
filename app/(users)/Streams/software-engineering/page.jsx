'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #89f7fe 0%, #66a6ff 100%)", // Bright blue gradient for tech feel
        padding: "0 0 6rem 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#1a2e4a",
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
          background: "rgba(255, 255, 255, 0.9)",
          borderRadius: "22px",
          boxShadow: "0 10px 40px rgba(102, 163, 255, 0.5)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          userSelect: "none",
          marginTop: "3rem",
          color: "#3366cc",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "900",
            letterSpacing: "0.12em",
            marginBottom: "0.5rem",
            textShadow: "0 2px 8px rgba(51, 102, 204, 0.7)",
          }}
        >
          Software Engineering
        </h1>
        <div
          role="img"
          aria-label="Laptop code icon"
          style={{
            fontSize: "3.5rem",
            marginTop: "0.7rem",
            marginBottom: "1.5rem",
            filter: "drop-shadow(1px 1px 7px rgba(102, 163, 255, 0.85))",
          }}
        >
          💻
        </div>
      </header>

      <main
        style={{
          maxWidth: "760px",
          margin: "auto",
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "22px",
          boxShadow: "0 13px 45px rgba(102, 163, 255, 0.3)",
          padding: "3rem 3rem 4rem 3rem",
          color: "#1a2e4a",
          lineHeight: "1.7",
          flexGrow: 1,
          textAlign: "justify",
          userSelect: "text",
        }}
      >
        <section style={{ marginBottom: "2.8rem" }}>
          <h2
            style={{
              fontWeight: "700",
              fontSize: "1.6rem",
              borderBottom: "3px solid #99bbff",
              paddingBottom: "0.6rem",
              marginBottom: "1.8rem",
              color: "#3377ff",
              letterSpacing: "0.05em",
              textShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "1.18rem",
              color: "#2a3a6f",
              userSelect: "text",
            }}
          >
            Focuses on methodologies for software system development. Software Engineering combines principles of computer science and engineering to design, develop, test, and maintain high-quality software products.
          </p>
        </section>

        <section style={{ marginBottom: "2.8rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.25rem",
              marginBottom: "1.2rem",
              color: "#3366cc",
              letterSpacing: "0.03em",
            }}
          >
            Key Areas
          </h3>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "1.4rem",
            }}
          >
            {[
              "Software Development Life Cycle (SDLC)",
              "Agile & Scrum Methodologies",
              "Requirements Engineering",
              "Software Testing & Quality Assurance",
              "Version Control & Collaboration",
              "Design Patterns & Architecture",
              "DevOps & Continuous Integration",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "#cce2ff",
                  padding: "1rem 1.3rem",
                  borderRadius: "14px",
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  color: "#1a2e4a",
                  textAlign: "center",
                  cursor: "default",
                  userSelect: "none",
                  boxShadow: "inset 0 0 10px rgba(102, 163, 255, 0.5)",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#99bbff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#cce2ff")
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
              fontSize: "1.25rem",
              marginBottom: "1.2rem",
              color: "#3366cc",
              letterSpacing: "0.03em",
            }}
          >
            Career Prospects
          </h3>
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "1.6rem",
              fontSize: "1.1rem",
              color: "#1a2e4a",
              lineHeight: "1.55",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.6rem" }}>Software Developer</li>
            <li style={{ marginBottom: "0.6rem" }}>Quality Assurance Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Software Architect</li>
            <li style={{ marginBottom: "0.6rem" }}>DevOps Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Project Manager</li>
          </ul>
        </section>
      </main>

      <footer
        style={{
          marginTop: "auto",
          padding: "1.8rem 1rem",
          width: "100%",
          textAlign: "center",
          fontSize: "0.9rem",
          color: "rgba(51, 102, 204, 0.7)",
          userSelect: "none",
          fontWeight: 600,
          letterSpacing: "0.045em",
        }}
      >
        © 2025 Engineering Streams Directory. All rights reserved.
      </footer>
    </div>
  );
}
