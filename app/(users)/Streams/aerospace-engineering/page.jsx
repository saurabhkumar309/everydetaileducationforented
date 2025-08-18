'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #0f2027 0%, #203a43 50%, #2c5364 100%)", // Deep space blue gradient reflecting aerospace
        padding: "0 0 6rem 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#cfd8e6",
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
          background: "rgba(44, 83, 100, 0.85)",
          borderRadius: "20px",
          boxShadow: "0 10px 36px rgba(32, 83, 100, 0.8)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          userSelect: "none",
          marginTop: "3rem",
          color: "#a1c6e7",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "900",
            letterSpacing: "0.12em",
            marginBottom: "0.7rem",
            textShadow: "0 3px 10px rgba(161,198,231,0.8)",
          }}
        >
          Aerospace Engineering
        </h1>
        <div
          role="img"
          aria-label="Rocket icon"
          style={{
            fontSize: "3.8rem",
            marginBottom: "1.5rem",
            filter: "drop-shadow(2px 2px 7px rgba(161,198,231,0.9))",
          }}
        >
          🚀
        </div>
      </header>

      <main
        style={{
          maxWidth: "760px",
          margin: "auto",
          background: "rgba(32, 58, 73, 0.85)",
          borderRadius: "24px",
          boxShadow: "0 18px 60px rgba(44, 83, 100, 0.85)",
          padding: "3rem 3rem 4rem 3rem",
          color: "#d0dced",
          lineHeight: "1.7",
          flexGrow: 1,
          textAlign: "justify",
          userSelect: "text",
        }}
      >
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontWeight: "700",
              fontSize: "1.6rem",
              borderBottom: "3px solid #7aa7d6",
              paddingBottom: "0.6rem",
              marginBottom: "1.8rem",
              color: "#a1c6e7",
              letterSpacing: "0.05em",
            }}
          >
            About
          </h2>
          <p>
            Focuses on design & development of aircraft and spacecraft. 
            Aerospace Engineering specializes in the science and technology that enables atmospheric and space flight, covering aerodynamics, propulsion, materials, avionics, and systems engineering.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.4rem",
              marginBottom: "1.3rem",
              color: "#89abe3",
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
              gap: "1.5rem",
            }}
          >
            {[
              "Aerodynamics",
              "Propulsion Systems",
              "Flight Mechanics & Stability",
              "Avionics & Navigation",
              "Structural Design & Materials",
              "Spacecraft Design",
              "Systems Integration & Testing",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(138, 167, 209, 0.25)",
                  padding: "1rem 1.3rem",
                  borderRadius: "15px",
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  color: "#d0dced",
                  textAlign: "center",
                  cursor: "default",
                  userSelect: "none",
                  boxShadow: "inset 0 0 15px rgba(138, 167, 209, 0.6)",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(138, 167, 209, 0.55)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(138, 167, 209, 0.25)")
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
              fontSize: "1.4rem",
              marginBottom: "1.4rem",
              color: "#89abe3",
              letterSpacing: "0.03em",
            }}
          >
            Career Prospects
          </h3>
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "1.5rem",
              fontSize: "1.1rem",
              color: "#d0dced",
              lineHeight: "1.55",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.7rem" }}>Aerospace Engineer</li>
            <li style={{ marginBottom: "0.7rem" }}>Flight Systems Analyst</li>
            <li style={{ marginBottom: "0.7rem" }}>Propulsion Engineer</li>
            <li style={{ marginBottom: "0.7rem" }}>Avionics Specialist</li>
            <li style={{ marginBottom: "0.7rem" }}>Spacecraft Designer</li>
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
          color: "rgba(192, 208, 231, 0.7)",
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
