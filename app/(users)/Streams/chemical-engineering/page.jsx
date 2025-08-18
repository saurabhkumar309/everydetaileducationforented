'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #a8edea 0%, #fed6e3 100%)", // Soft teal to blush pink gradient
        padding: "0 0 6rem 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#3a3a3a",
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
          background: "rgba(255, 255, 255, 0.75)",
          borderRadius: "22px",
          boxShadow: "0 8px 32px rgba(253, 214, 229, 0.4)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          userSelect: "none",
          marginTop: "3rem",
          color: "#6a4f4d",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "900",
            letterSpacing: "0.12em",
            marginBottom: "0.5rem",
            textShadow: "0 2px 6px rgba(253, 214, 229, 0.6)",
          }}
        >
          Chemical Engineering
        </h1>
        <div
          role="img"
          aria-label="Chemical flask icon"
          style={{
            fontSize: "3.5rem",
            marginTop: "0.7rem",
            marginBottom: "1.5rem",
            filter: "drop-shadow(1px 1px 6px rgba(253, 214, 229, 0.7))",
          }}
        >
          ⚗️
        </div>
      </header>

      <main
        style={{
          maxWidth: "760px",
          margin: "auto",
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "22px",
          boxShadow: "0 12px 40px rgba(253, 214, 229, 0.3)",
          padding: "3rem 3rem 4rem 3rem",
          color: "#5a3f3a",
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
              borderBottom: "3px solid #f6ccd9",
              paddingBottom: "0.6rem",
              marginBottom: "1.8rem",
              color: "#a56763",
              letterSpacing: "0.05em",
              textShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "1.18rem",
              color: "#5a3f3a",
              userSelect: "text",
            }}
          >
            Applies chemical principles to manufacturing and production.
            Chemical Engineering involves transforming raw materials into valuable products through chemical processes, optimizing safety, and sustainability in industries like pharmaceuticals, energy, and materials.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.25rem",
              marginBottom: "1.3rem",
              color: "#a56763",
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
              "Process Engineering",
              "Chemical Reaction Engineering",
              "Thermodynamics & Heat Transfer",
              "Materials Science",
              "Environmental Engineering",
              "Safety & Risk Management",
              "Biochemical Engineering",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(246, 204, 209, 0.4)",
                  padding: "1.1rem 1.4rem",
                  borderRadius: "14px",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#7f544f",
                  textAlign: "center",
                  cursor: "default",
                  userSelect: "none",
                  boxShadow: "inset 0 0 14px rgba(246, 204, 209, 0.7)",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.background = "rgba(246, 204, 209, 0.7)")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.background = "rgba(246, 204, 209, 0.4)")
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
              color: "#a56763",
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
              color: "#6b4946",
              lineHeight: "1.55",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.6rem" }}>Process Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Production Manager</li>
            <li style={{ marginBottom: "0.6rem" }}>Quality Control Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Safety Specialist</li>
            <li style={{ marginBottom: "0.6rem" }}>Environmental Consultant</li>
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
          color: "rgba(165, 103, 99, 0.7)",
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
