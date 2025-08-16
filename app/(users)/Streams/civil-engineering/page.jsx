'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #98c1d9 0%, #2e5984 100%)",
        padding: "0 0 6rem 0",
        fontFamily:
          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
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
          background: "rgba(255, 255, 255, 0.15)",
          borderRadius: "18px",
          boxShadow: "0 10px 36px rgba(46, 89, 132, 0.8)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          userSelect: "none",
          marginTop: "3rem",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "900",
            letterSpacing: "0.12em",
            marginBottom: "0.5rem",
            color: "#d9e6f2",
            textShadow: "0 2px 8px rgba(0,0,0,0.35)",
          }}
        >
          Civil Engineering
        </h1>
        <div
          role="img"
          aria-label="Building crane icon"
          style={{
            fontSize: "3.8rem",
            marginTop: "0.7rem",
            marginBottom: "1.6rem",
            filter: "drop-shadow(2px 2px 5px rgba(0,0,0,0.4))",
          }}
        >
          🏗️
        </div>
      </header>

      <main
        style={{
          maxWidth: "760px",
          margin: "auto",
          background: "rgba(255, 255, 255, 0.18)",
          borderRadius: "24px",
          boxShadow: "0 16px 48px rgba(46, 89, 132, 0.7)",
          padding: "3rem 3rem 4rem 3rem",
          color: "#dbe9f7",
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
              borderBottom: "3px solid #a8c5e8",
              paddingBottom: "0.6rem",
              marginBottom: "1.9rem",
              color: "#a6c6e8",
              textShadow: "0 1px 4px rgba(0,0,0,0.3)",
              letterSpacing: "0.04em",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "1.17rem",
              color: "#d1e2f3",
              userSelect: "text",
            }}
          >
            Civil engineering is the backbone of infrastructure development,
            focusing on the design, construction, and maintenance of essential
            physical structures such as roads, bridges, dams, and buildings.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.4rem",
              marginBottom: "1.2rem",
              color: "#a7c3ea",
              textShadow: "0 1px 3px rgba(0,0,0,0.2)",
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
              "Structural Engineering",
              "Construction Management",
              "Environmental Engineering",
              "Transportation Engineering",
              "Geotechnical Engineering",
              "Water Resources Engineering",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(168, 198, 231, 0.25)",
                  padding: "1rem 1.3rem",
                  borderRadius: "14px",
                  boxShadow: "inset 0 0 15px rgba(168, 198, 231, 0.5)",
                  fontSize: "1.04rem",
                  fontWeight: "600",
                  color: "#d9e6f7",
                  textAlign: "center",
                  cursor: "default",
                  transition: "background-color 0.3s ease",
                  userSelect: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(168, 198, 231, 0.45)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(168, 198, 231, 0.25)")
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
              marginBottom: "1.2rem",
              color: "#a7c3ea",
              textShadow: "0 1px 3px rgba(0,0,0,0.2)",
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
              color: "#d9e6f7",
              userSelect: "text",
              lineHeight: "1.55",
            }}
          >
            <li style={{ marginBottom: "0.6rem" }}>Government Sector</li>
            <li style={{ marginBottom: "0.6rem" }}>Construction Companies</li>
            <li style={{ marginBottom: "0.6rem" }}>Urban Planning</li>
            <li style={{ marginBottom: "0.6rem" }}>Project Management</li>
            <li style={{ marginBottom: "0.6rem" }}>Consulting Engineer</li>
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
          color: "rgba(255,255,255,0.65)",
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
