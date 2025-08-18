'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #043927 0%, #185a43 70%, #2e8b57 100%)", // Deep ocean green gradient
        padding: "0 0 6rem 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#d3ebe2",
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
          background: "rgba(14, 50, 37, 0.85)",
          borderRadius: "22px",
          boxShadow: "0 10px 36px rgba(28, 103, 85, 0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          userSelect: "none",
          marginTop: "3rem",
          color: "#b4e1d1",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "900",
            letterSpacing: "0.12em",
            marginBottom: "0.7rem",
            textShadow: "0 3px 10px rgba(180, 225, 209, 0.7)",
          }}
        >
          Marine Engineering
        </h1>
        <div
          role="img"
          aria-label="Ship icon"
          style={{
            fontSize: "3.8rem",
            marginBottom: "1.5rem",
            filter: "drop-shadow(2px 2px 7px rgba(180, 225, 209, 0.9))",
          }}
        >
          🚢
        </div>
      </header>

      <main
        style={{
          maxWidth: "760px",
          margin: "auto",
          background: "rgba(38, 89, 75, 0.85)",
          borderRadius: "24px",
          boxShadow: "0 18px 60px rgba(14, 50, 37, 0.85)",
          padding: "3rem 3rem 4rem 3rem",
          color: "#c4e4d9",
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
              borderBottom: "3px solid #52a787",
              paddingBottom: "0.6rem",
              marginBottom: "1.8rem",
              color: "#8ed6bb",
              letterSpacing: "0.05em",
            }}
          >
            About
          </h2>
          <p>
            Design and maintenance of ships, submarines, and marine systems. Marine Engineering combines mechanical, electrical, and systems engineering to ensure the efficient, safe, and sustainable operation of maritime vessels and offshore structures.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.4rem",
              marginBottom: "1.3rem",
              color: "#7cc2a4",
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
              "Ship Design & Construction",
              "Propulsion & Power Systems",
              "Marine Electrical Systems",
              "Navigation & Communication Systems",
              "Maintenance & Repair",
              "Offshore Engineering",
              "Marine Safety Systems",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(82, 167, 135, 0.25)",
                  padding: "1rem 1.3rem",
                  borderRadius: "15px",
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  color: "#bbdfd0",
                  textAlign: "center",
                  cursor: "default",
                  userSelect: "none",
                  boxShadow: "inset 0 0 15px rgba(82, 167, 135, 0.6)",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(82, 167, 135, 0.55)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(82, 167, 135, 0.25)")
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
              color: "#7cc2a4",
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
              color: "#c4e4d9",
              lineHeight: "1.55",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.7rem" }}>Marine Engineer</li>
            <li style={{ marginBottom: "0.7rem" }}>Naval Architect</li>
            <li style={{ marginBottom: "0.7rem" }}>Offshore Engineer</li>
            <li style={{ marginBottom: "0.7rem" }}>Ship Maintenance Specialist</li>
            <li style={{ marginBottom: "0.7rem" }}>Maritime Safety Officer</li>
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
          color: "rgba(188, 223, 208, 0.7)",
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
