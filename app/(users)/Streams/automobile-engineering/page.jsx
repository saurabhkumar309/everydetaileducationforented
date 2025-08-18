'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #f5576c 0%, #f093fb 100%)", // Vibrant pink to purple gradient for energy and innovation
        padding: "0 0 6rem 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#3f1d28",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        userSelect: "text",
      }}
    >
      <header
        style={{
          textAlign: "center",
          padding: "3rem 1rem 2.2rem 1rem",
          maxWidth: "720px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.82)",
          borderRadius: "22px",
          boxShadow: "0 8px 32px rgba(240, 147, 251, 0.46)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          userSelect: "none",
          marginTop: "3rem",
          color: "#6e2648",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "900",
            letterSpacing: "0.11em",
            marginBottom: "0.5rem",
            textShadow: "0 2px 8px rgba(240, 147, 251, 0.68)",
          }}
        >
          Automobile Engineering
        </h1>
        <div
          role="img"
          aria-label="Car icon"
          style={{
            fontSize: "3.5rem",
            marginTop: "0.7rem",
            marginBottom: "1.5rem",
            filter: "drop-shadow(1px 1px 7px rgba(240, 147, 251, 0.75))",
          }}
        >
          🚗
        </div>
      </header>

      <main
        style={{
          maxWidth: "760px",
          margin: "auto",
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "22px",
          boxShadow: "0 12px 40px rgba(240, 147, 251, 0.26)",
          padding: "3rem 3rem 4rem 3rem",
          color: "#401f2e",
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
              borderBottom: "3px solid #f6aef8",
              paddingBottom: "0.6rem",
              marginBottom: "1.8rem",
              color: "#7d4372",
              letterSpacing: "0.05em",
              textShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "1.18rem",
              color: "#5a2c4f",
              userSelect: "text",
            }}
          >
            Designs, develops, tests & manufactures vehicles. Automobile Engineering covers key areas such as vehicle dynamics, engine design, manufacturing processes, and automotive electronics for innovative transportation solutions.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.25rem",
              marginBottom: "1.3rem",
              color: "#7d4372",
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
              "Vehicle Dynamics & Control",
              "Internal Combustion Engines",
              "Automotive Electronics",
              "Manufacturing & Assembly",
              "Powertrain & Drivetrain Systems",
              "Safety & Crashworthiness",
              "Electric & Hybrid Vehicles",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(246, 174, 243, 0.25)",
                  padding: "1.1rem 1.4rem",
                  borderRadius: "14px",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#652a59",
                  textAlign: "center",
                  cursor: "default",
                  userSelect: "none",
                  boxShadow: "inset 0 0 14px rgba(246, 174, 243, 0.7)",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(246, 174, 243, 0.5)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(246, 174, 243, 0.25)")
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
              marginBottom: "1.3rem",
              color: "#7d4372",
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
              color: "#5a2c4f",
              lineHeight: "1.55",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.6rem" }}>Automotive Design Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Manufacturing Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Quality Assurance Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>R&D Engineer - Electric Vehicles</li>
            <li style={{ marginBottom: "0.6rem" }}>Safety Engineer</li>
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
          color: "rgba(125, 67, 114, 0.7)",
          userSelect: "none",
          fontWeight: 600,
          letterSpacing: "0.05em",
        }}
      >
        © 2025 Engineering Streams Directory. All rights reserved.
      </footer>
    </div>
  );
}
