'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #a1c4fd 0%, #c2e9fb 100%)", // Light sky blue gradient for clarity and calmness
        padding: "0 0 6rem 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#1e2d3b",
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
          background: "rgba(255, 255, 255, 0.85)",
          borderRadius: "20px",
          boxShadow: "0 10px 36px rgba(162, 210, 255, 0.5)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          userSelect: "none",
          marginTop: "3rem",
          color: "#22528f",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "900",
            letterSpacing: "0.12em",
            marginBottom: "0.5rem",
            textShadow: "0 2px 8px rgba(34, 82, 143, 0.7)",
          }}
        >
          Control Systems
        </h1>
        <div
          role="img"
          aria-label="Robot arm icon"
          style={{
            fontSize: "3.6rem",
            marginTop: "0.7rem",
            marginBottom: "1.4rem",
            filter: "drop-shadow(0 0 7px rgba(34,82,143,0.7))",
          }}
        >
          🤖
        </div>
      </header>

      <main
        style={{
          maxWidth: "760px",
          margin: "auto",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "24px",
          boxShadow: "0 15px 50px rgba(162, 210, 255, 0.3)",
          padding: "3rem 3rem 4rem 3rem",
          color: "#1e2d3b",
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
              borderBottom: "3px solid #7baaf7",
              paddingBottom: "0.6rem",
              marginBottom: "1.8rem",
              color: "#2e5091",
              letterSpacing: "0.05em",
            }}
          >
            About
          </h2>
          <p>
            Deals with automation, system dynamics and robotics. Control Systems engineering designs and manages dynamic systems for automation across industries—ensuring stability, performance & precision.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.4rem",
              marginBottom: "1.3rem",
              color: "#3d69a7",
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
              "Automatic Control Theory",
              "System Modelling & Simulation",
              "Robotics & Mechatronics",
              "PID Controllers and Optimization",
              "Sensors and Actuators",
              "Feedback Systems",
              "Industrial Automation",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "#c8daff",
                  padding: "1rem 1.4rem",
                  borderRadius: "15px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#204280",
                  textAlign: "center",
                  cursor: "default",
                  userSelect: "none",
                  boxShadow: "inset 0 0 10px rgba(64,104,173,0.25)",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#9eb9fc")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#c8daff")}
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
              marginBottom: "1.2rem",
              color: "#3d69a7",
              letterSpacing: "0.02em",
            }}
          >
            Career Prospects
          </h3>
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "1.5rem",
              fontSize: "1.05rem",
              color: "#204280",
              lineHeight: "1.55",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.6rem" }}>Control Systems Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Automation Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Robotics Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Mechatronics Specialist</li>
            <li style={{ marginBottom: "0.6rem" }}>Process Control Engineer</li>
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
          color: "#3158a1",
          userSelect: "none",
          fontWeight: 600,
          letterSpacing: "0.04em",
        }}
      >
        © 2025 Engineering Streams Directory. All rights reserved.
      </footer>
    </div>
  );
}
