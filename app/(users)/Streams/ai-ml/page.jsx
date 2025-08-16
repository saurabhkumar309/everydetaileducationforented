'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at center, #ffafbd 0%, #ffc3a0 100%)",
        padding: "0 0 6rem 0",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        color: "#322f3d",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        userSelect: "text",
      }}
    >
      <header
        style={{
          background: "rgba(255, 255, 255, 0.85)",
          padding: "3rem 1rem 2rem 1rem",
          width: "100%",
          maxWidth: "720px",
          borderRadius: "18px",
          boxShadow: "0 12px 40px rgba(255,140,105,0.4)",
          textAlign: "center",
          marginTop: "4rem",
          userSelect: "none",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "900",
            color: "#c64a7c",
            marginBottom: "0.6rem",
            letterSpacing: "0.15em",
            textShadow: "0 2px 6px rgba(198,74,124,0.7)",
          }}
        >
          CSE (AI & ML)
        </h1>
        <div
          role="img"
          aria-label="Robot icon"
          style={{
            fontSize: "4rem",
            marginTop: "0.5rem",
            filter: "drop-shadow(1px 1px 5px rgba(198,74,124,0.7))",
          }}
        >
          🤖
        </div>
      </header>

      <main
        style={{
          marginTop: "2.5rem",
          background: "rgba(255, 255, 255, 0.9)",
          borderRadius: "24px",
          maxWidth: "760px",
          padding: "3rem 3rem 4rem 3rem",
          boxShadow: "0 18px 50px rgba(198,74,124,0.3)",
          color: "#4a415f",
          lineHeight: "1.65",
          flexGrow: 1,
          userSelect: "text",
          textAlign: "justify",
        }}
      >
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontWeight: "700",
              fontSize: "1.55rem",
              borderBottom: "3px solid #df7599",
              paddingBottom: "0.6rem",
              marginBottom: "1.5rem",
              color: "#a23c6c",
              textShadow: "0 1px 4px rgba(0,0,0,0.2)",
              letterSpacing: "0.03em",
            }}
          >
            About
          </h2>
          <p style={{ fontSize: "1.15rem", color: "#573049" }}>
            This stream focuses on artificial intelligence, machine learning,
            natural language processing, and deep learning to build intelligent
            systems capable of learning and reasoning like humans.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.4rem",
              marginBottom: "1rem",
              color: "#a86895",
              textShadow: "0 1px 3px rgba(0,0,0,0.15)",
              letterSpacing: "0.02em",
            }}
          >
            Key Areas
          </h3>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.3rem",
            }}
          >
            {[
              "Machine Learning Algorithms",
              "Neural Networks",
              "AI in Robotics",
              "Natural Language Processing",
              "Computer Vision",
              "Reinforcement Learning",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(223, 117, 153, 0.15)",
                  padding: "1rem 1.3rem",
                  borderRadius: "14px",
                  boxShadow: "inset 0 0 12px rgba(223,117,153,0.5)",
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#753a62",
                  textAlign: "center",
                  cursor: "default",
                  transition: "background-color 0.3s ease",
                  userSelect: "none",
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.background =
                    "rgba(223, 117, 153, 0.35)")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.background =
                    "rgba(223, 117, 153, 0.15)")
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
              marginBottom: "1rem",
              color: "#a86895",
              textShadow: "0 1px 3px rgba(0,0,0,0.15)",
              letterSpacing: "0.02em",
            }}
          >
            Career Prospects
          </h3>
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "1.5rem",
              fontSize: "1.1rem",
              color: "#7a4b72",
              lineHeight: "1.55",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.7rem" }}>
              AI/ML Engineer
            </li>
            <li style={{ marginBottom: "0.7rem" }}>
              Data Scientist
            </li>
            <li style={{ marginBottom: "0.7rem" }}>
              AI Researcher
            </li>
            <li style={{ marginBottom: "0.7rem" }}>
              Robotics Engineer
            </li>
            <li style={{ marginBottom: "0.7rem" }}>
              NLP Specialist
            </li>
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
          color: "rgba(119, 50, 94, 0.75)",
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
