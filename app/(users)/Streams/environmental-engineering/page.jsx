'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #2e8b57 0%, #98fb98 100%)", // Fresh green gradient reflecting environment and sustainability
        padding: "0 0 6rem 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#1d3c2d",
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
          boxShadow: "0 8px 32px rgba(152, 251, 152, 0.45)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          userSelect: "none",
          marginTop: "3rem",
          color: "#2f5731",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "900",
            letterSpacing: "0.12em",
            marginBottom: "0.5rem",
            textShadow: "0 2px 6px rgba(47, 87, 49, 0.5)",
          }}
        >
          Environmental Engineering
        </h1>
        <div
          role="img"
          aria-label="Leaf icon"
          style={{
            fontSize: "3.5rem",
            marginTop: "0.7rem",
            marginBottom: "1.5rem",
            filter: "drop-shadow(1px 1px 6px rgba(152, 251, 152, 0.8))",
          }}
        >
          🍃
        </div>
      </header>

      <main
        style={{
          maxWidth: "760px",
          margin: "auto",
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "22px",
          boxShadow: "0 12px 40px rgba(152, 251, 152, 0.3)",
          padding: "3rem 3rem 4rem 3rem",
          color: "#2e4d33",
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
              borderBottom: "3px solid #9ee691",
              paddingBottom: "0.6rem",
              marginBottom: "1.8rem",
              color: "#528d5b",
              letterSpacing: "0.05em",
              textShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "1.18rem",
              color: "#3b5c3b",
              userSelect: "text",
            }}
          >
            Focuses on sustainable solutions for environmental challenges.
            Environmental Engineering develops innovative approaches to protect ecosystems, manage waste, control pollution, and safeguard public health through science and engineering principles.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.3rem",
              marginBottom: "1.2rem",
              color: "#528d5b",
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
              "Water & Wastewater Treatment",
              "Air Pollution Control",
              "Solid & Hazardous Waste Management",
              "Environmental Impact Assessment",
              "Sustainable Design & Green Technology",
              "Soil Remediation",
              "Renewable Energy Systems",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(158, 230, 145, 0.4)",
                  padding: "1rem 1.3rem",
                  borderRadius: "15px",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "#2e5230",
                  textAlign: "center",
                  cursor: "default",
                  userSelect: "none",
                  boxShadow: "inset 0 0 14px rgba(158, 230, 145, 0.7)",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(158, 230, 145, 0.7)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(158, 230, 145, 0.4)")
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
              fontSize: "1.3rem",
              marginBottom: "1.2rem",
              color: "#528d5b",
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
              color: "#3b5c3b",
              lineHeight: "1.55",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.6rem" }}>Environmental Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Waste Management Specialist</li>
            <li style={{ marginBottom: "0.6rem" }}>Air Quality Analyst</li>
            <li style={{ marginBottom: "0.6rem" }}>Sustainability Consultant</li>
            <li style={{ marginBottom: "0.6rem" }}>Water Resource Manager</li>
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
          color: "rgba(82, 141, 91, 0.7)",
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
