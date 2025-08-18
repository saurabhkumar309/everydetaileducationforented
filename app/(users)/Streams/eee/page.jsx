'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #e0f7fa 0%, #80deea 100%)", // Soft aqua to light teal gradient
        padding: "0 0 6rem 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#05474d",
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
          background: "rgba(255, 255, 255, 0.9)",
          borderRadius: "22px",
          boxShadow: "0 8px 32px rgba(128, 222, 234, 0.35)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          userSelect: "none",
          marginTop: "3rem",
          color: "#00796b",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "900",
            letterSpacing: "0.11em",
            marginBottom: "0.5rem",
            textShadow: "0 2px 8px rgba(0, 151, 143, 0.3)",
          }}
        >
          Electrical & Electronics Engineering (EEE)
        </h1>
        <div
          role="img"
          aria-label="Electric plug icon"
          style={{
            fontSize: "3.5rem",
            marginTop: "0.7rem",
            marginBottom: "1.5rem",
            filter: "drop-shadow(1px 1px 7px rgba(0, 151, 143, 0.5))",
          }}
        >
          🔌
        </div>
      </header>

      <main
        style={{
          maxWidth: "760px",
          margin: "auto",
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "22px",
          boxShadow: "0 12px 44px rgba(128, 222, 234, 0.2)",
          padding: "2.8rem 2.6rem 3.5rem 2.6rem",
          color: "#004d40",
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
              fontSize: "1.45rem",
              borderBottom: "3px solid #4db6ac",
              paddingBottom: "0.5rem",
              marginBottom: "1.2rem",
              color: "#00796b",
              letterSpacing: "0.04em",
              textShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "1.15rem",
              color: "#004d40",
              userSelect: "text",
            }}
          >
            Combines electrical systems with electronics and control engineering.
            Electrical & Electronics Engineering (EEE) covers generation, distribution of electrical power, as well as electronic devices and automation controls.
          </p>
        </section>

        <section style={{ marginBottom: "2.8rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.2rem",
              marginBottom: "1.1rem",
              color: "#00796b",
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
              "Power Generation & Distribution",
              "Electronic Circuit Design",
              "Control Systems & Automation",
              "Microelectronics & Semiconductor Devices",
              "Signal Processing",
              "Renewable Energy Systems",
              "Instrumentation & Measurements",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "#b2dfdb",
                  padding: "1rem 1.3rem",
                  borderRadius: "14px",
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  color: "#004d40",
                  textAlign: "center",
                  cursor: "default",
                  userSelect: "none",
                  boxShadow: "inset 0 0 10px rgba(77,182,172,0.5)",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#80cbc4")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#b2dfdb")
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
              fontSize: "1.2rem",
              marginBottom: "1.2rem",
              color: "#00796b",
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
              color: "#004d40",
              lineHeight: "1.55",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.6rem" }}>Electrical Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Electronics Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Control Systems Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Automation Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Renewable Energy Engineer</li>
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
          color: "rgba(0, 77, 64, 0.7)",
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
