'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #243949 0%, #517fa4 100%)", // Deep steel blue tones
        padding: "0 0 6rem 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#f0f4f8",
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
          background: "rgba(81, 127, 164, 0.7)", // Semi-transparent steel blue
          borderRadius: "22px",
          boxShadow: "0 10px 36px rgba(65, 127, 164, 0.6)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          userSelect: "none",
          marginTop: "3rem",
          color: "#e6f0fc",
        }}
      >
        <h1
          style={{
            fontSize: "2.75rem",
            fontWeight: "900",
            letterSpacing: "0.12em",
            marginBottom: "0.5rem",
            textShadow: "0 3px 8px rgba(0,0,0,0.4)",
          }}
        >
          Power Systems
        </h1>
        <div
          role="img"
          aria-label="Electric tower icon"
          style={{
            fontSize: "3.7rem",
            marginTop: "0.7rem",
            marginBottom: "1.4rem",
            filter: "drop-shadow(2px 2px 5px rgba(0,0,0,0.5))",
          }}
        >
          ⚡
        </div>
      </header>

      <main
        style={{
          maxWidth: "760px",
          margin: "auto",
          background: "rgba(36, 57, 73, 0.85)", // Dark transparent overlay
          borderRadius: "24px",
          boxShadow: "0 18px 60px rgba(81,127,164,0.7)",
          padding: "3rem 3rem 4rem 3rem",
          color: "#c9d9f6",
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
              borderBottom: "3px solid #7fc2ff",
              paddingBottom: "0.6rem",
              marginBottom: "1.8rem",
              color: "#9ebfea",
              letterSpacing: "0.05em",
              textShadow: "0 1px 4px rgba(0,0,0,0.3)",
            }}
          >
            About
          </h2>
          <p style={{ fontSize: "1.18rem", color: "#d0dbf8" }}>
            Focuses on electric power generation, transmission, and distribution. Power Systems engineering ensures reliable, efficient delivery of electricity from power plants to consumers, encompassing renewable and traditional energy sources.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.42rem",
              marginBottom: "1.2rem",
              color: "#7eb6ff",
              textShadow: "0 1px 3px rgba(0,0,0,0.25)",
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
              "Power Generation Technologies",
              "High Voltage Transmission",
              "Electrical Distribution Systems",
              "Renewable Energy Integration",
              "Smart Grids & Automation",
              "Protection & Control Systems",
              "Power System Analysis",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(127, 194, 255, 0.2)",
                  padding: "1rem 1.4rem",
                  borderRadius: "16px",
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  color: "#bfdcff",
                  textAlign: "center",
                  cursor: "default",
                  userSelect: "none",
                  boxShadow: "inset 0 0 14px rgba(127,194,255,0.5)",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(127, 194, 255, 0.5)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(127, 194, 255, 0.2)")
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
              marginBottom: "1.2rem",
              color: "#7eb6ff",
              textShadow: "0 1px 3px rgba(0,0,0,0.25)",
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
              color: "#c9d9f6",
              lineHeight: "1.52",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.6rem" }}>Power System Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Electrical Transmission Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Renewable Energy Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Grid Automation Specialist</li>
            <li style={{ marginBottom: "0.6rem" }}>Electric Utility Consultant</li>
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
          color: "rgba(191, 220, 255, 0.7)",
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
