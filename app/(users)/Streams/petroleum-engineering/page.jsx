'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #ff9966 0%, #ff5e62 100%)", // Warm orange to red gradient for energy and resource extraction
        padding: "0 0 6rem 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#3a1c1c",
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
          borderRadius: "22px",
          boxShadow: "0 8px 32px rgba(255, 94, 98, 0.45)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          userSelect: "none",
          marginTop: "3rem",
          color: "#b74444",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "900",
            letterSpacing: "0.12em",
            marginBottom: "0.5rem",
            textShadow: "0 2px 8px rgba(183, 68, 68, 0.6)",
          }}
        >
          Petroleum Engineering
        </h1>
        <div
          role="img"
          aria-label="Oil rig icon"
          style={{
            fontSize: "3.6rem",
            marginTop: "0.7rem",
            marginBottom: "1.4rem",
            filter: "drop-shadow(2px 2px 7px rgba(255, 94, 98, 0.85))",
          }}
        >
          🛢️
        </div>
      </header>

      <main
        style={{
          maxWidth: "760px",
          margin: "auto",
          background: "rgba(255, 255, 255, 0.94)",
          borderRadius: "24px",
          boxShadow: "0 15px 50px rgba(255, 94, 98, 0.4)",
          padding: "3rem 3rem 4rem 3rem",
          color: "#542a2a",
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
              borderBottom: "3px solid #ff7b74",
              paddingBottom: "0.6rem",
              marginBottom: "1.8rem",
              color: "#b74444",
              letterSpacing: "0.05em",
              textShadow: "0 1px 4px rgba(0,0,0,0.1)",
            }}
          >
            About
          </h2>
          <p>
            Deals with exploration and extraction of oil and gas resources.
            Petroleum Engineering involves the application of engineering principles to locate reservoirs, drill wells, and efficiently produce hydrocarbons while managing safety and environmental concerns.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.4rem",
              marginBottom: "1.3rem",
              color: "#b74444",
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
              "Reservoir Engineering",
              "Drilling Engineering",
              "Production Engineering",
              "Petrophysics",
              "Enhanced Oil Recovery",
              "Well Logging & Analysis",
              "Environmental & Safety Management",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(255, 123, 116, 0.3)",
                  padding: "1rem 1.3rem",
                  borderRadius: "15px",
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  color: "#6a2d2d",
                  textAlign: "center",
                  cursor: "default",
                  userSelect: "none",
                  boxShadow: "inset 0 0 15px rgba(255, 123, 116, 0.7)",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255, 123, 116, 0.55)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(255, 123, 116, 0.3)")
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
              color: "#b74444",
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
              color: "#6a2d2d",
              lineHeight: "1.55",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.7rem" }}>Reservoir Engineer</li>
            <li style={{ marginBottom: "0.7rem" }}>Drilling Engineer</li>
            <li style={{ marginBottom: "0.7rem" }}>Production Engineer</li>
            <li style={{ marginBottom: "0.7rem" }}>Petrophysicist</li>
            <li style={{ marginBottom: "0.7rem" }}>Health, Safety & Environment Specialist</li>
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
          color: "rgba(103, 45, 45, 0.7)",
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
