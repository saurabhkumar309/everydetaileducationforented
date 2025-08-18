'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #6e7f80 0%, #a3b7b8 100%)", // Calm steel gray gradient representing mining earth tones
        padding: "0 0 6rem 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#2f3a3b",
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
          background: "rgba(163, 183, 183, 0.7)",
          borderRadius: "22px",
          boxShadow: "0 10px 36px rgba(163, 183, 183, 0.6)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          userSelect: "none",
          marginTop: "3rem",
          color: "#2f3a3b",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "900",
            letterSpacing: "0.12em",
            marginBottom: "0.5rem",
            textShadow: "0 2px 8px rgba(70, 85, 85, 0.6)",
          }}
        >
          Mining Engineering
        </h1>
        <div
          role="img"
          aria-label="Pickaxe and rocks icon"
          style={{
            fontSize: "3.8rem",
            marginTop: "0.7rem",
            marginBottom: "1.4rem",
            filter: "drop-shadow(2px 2px 7px rgba(107, 120, 121, 0.7))",
          }}
        >
          ⛏️🪨
        </div>
      </header>

      <main
        style={{
          maxWidth: "750px",
          margin: "auto",
          background: "rgba(246, 249, 249, 0.9)",
          borderRadius: "24px",
          boxShadow: "0 15px 50px rgba(163, 183, 183, 0.5)",
          padding: "3rem 3rem 4rem 3rem",
          color: "#3c4545",
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
              borderBottom: "3px solid #8ca0a0",
              paddingBottom: "0.6rem",
              marginBottom: "1.8rem",
              color: "#5f6a6a",
              letterSpacing: "0.05em",
            }}
          >
            About
          </h2>
          <p>
            Focuses on extraction and processing of minerals and resources.
            Mining Engineering deals with the science and technology of safely and efficiently locating, extracting, and processing valuable minerals from the earth.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.4rem",
              marginBottom: "1.3rem",
              color: "#5f6a6a",
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
              "Mineral Exploration & Evaluation",
              "Mine Planning & Design",
              "Surface & Underground Mining",
              "Mine Safety & Environment",
              "Ventilation & Ground Control",
              "Mineral Processing & Metallurgy",
              "Sustainable Mining Practices",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(140, 157, 157, 0.25)",
                  padding: "1rem 1.3rem",
                  borderRadius: "15px",
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  color: "#3c4545",
                  textAlign: "center",
                  cursor: "default",
                  userSelect: "none",
                  boxShadow: "inset 0 0 15px rgba(140, 157, 157, 0.6)",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(140, 157, 157, 0.55)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(140, 157, 157, 0.25)")
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
              color: "#5f6a6a",
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
              color: "#3c4545",
              lineHeight: "1.55",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.6rem" }}>Mining Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Geotechnical Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Mine Safety Officer</li>
            <li style={{ marginBottom: "0.6rem" }}>Mineral Processing Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Environmental Mining Consultant</li>
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
          color: "rgba(60, 69, 69, 0.7)",
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
