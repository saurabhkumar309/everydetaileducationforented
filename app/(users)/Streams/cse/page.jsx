'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #a0c0ff 0%, #5a68d1 70%)",
        padding: "0 0 6rem 0",
        fontFamily: "'Poppins', sans-serif",
        color: "#f5f7ff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <header
        style={{
          textAlign: "center",
          padding: "3rem 1rem 2rem 1rem",
          maxWidth: "720px",
          width: "100%",
          background:
            "rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          userSelect: "none",
          marginTop: "3rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "900",
            letterSpacing: "0.12em",
            marginBottom: "0.4rem",
            textShadow: "0 2px 8px rgba(0,0,0,0.4)"
          }}
        >
          Computer Science Engineering (CSE)
        </h1>
        <div
          style={{
            fontSize: "3.9rem",
            marginTop: "0.5rem",
            marginBottom: "1.5rem",
            filter: "drop-shadow(2px 2px 5px rgba(0,0,0,0.4))",
          }}
          aria-label="Laptop icon"
          role="img"
        >
          💻
        </div>
      </header>

      <main
        style={{
          marginTop: "2rem",
          padding: "3rem 2.5rem 3.5rem 2.5rem",
          background: "rgba(14, 22, 47, 0.85)",
          borderRadius: "24px",
          maxWidth: "760px",
          boxShadow: "0 20px 60px rgba(15, 30, 66, 0.7)",
          color: "#dde6f7",
          lineHeight: "1.7",
          userSelect: "text",
          flexGrow: 1,
          textAlign: "justify",
        }}
      >
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontWeight: "700",
              fontSize: "1.6rem",
              borderBottom: "3px solid #6f85ff",
              paddingBottom: "0.5rem",
              marginBottom: "1.8rem",
              color: "#aab4f8",
              textShadow: "0 1px 3px rgba(0,0,0,0.6)",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "1.15rem",
              color: "#dde6f7",
              maxWidth: "100%",
              textAlign: "left",
            }}
          >
            Computer Science Engineering (CSE) explores the core principles of
            computing, software development, and system design. This stream
            prepares students to innovate in software engineering, algorithms,
            and advanced programming paradigms.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.4rem",
              marginBottom: "0.9rem",
              color: "#8798f0",
              textShadow: "0 1px 3px rgba(0,0,0,0.5)",
            }}
          >
            Key Areas
          </h3>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.2rem",
            }}
          >
            {[
              "Software Development",
              "Algorithms & Data Structures",
              "Systems Programming",
              "Operating Systems",
              "Database Systems",
              "Computer Networks",
              "Software Architecture",
              "Cloud Computing Basics",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(111, 133, 255, 0.25)",
                  padding: "0.9rem 1.2rem",
                  borderRadius: "14px",
                  boxShadow: "inset 0 0 10px rgba(111,133,255,0.5)",
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  color: "#e2e8f9",
                  transition: "background-color 0.25s ease",
                  cursor: "default",
                  textAlign: "center",
                  userSelect: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(111, 133, 255, 0.45)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(111, 133, 255, 0.25)")
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
              marginBottom: "0.9rem",
              color: "#8798f0",
              textShadow: "0 1px 3px rgba(0,0,0,0.5)",
            }}
          >
            Career Prospects
          </h3>
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "1.4rem",
              fontSize: "1.06rem",
              color: "#d9e2ff",
              userSelect: "text",
              lineHeight: "1.5",
            }}
          >
            <li style={{ marginBottom: "0.6rem" }}>
              Software Engineer
            </li>
            <li style={{ marginBottom: "0.6rem" }}>
              System Architect
            </li>
            <li style={{ marginBottom: "0.6rem" }}>
              QA Engineer
            </li>
            <li style={{ marginBottom: "0.6rem" }}>
              DevOps Engineer
            </li>
            <li style={{ marginBottom: "0.6rem" }}>
              Cloud Developer
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
          color: "rgba(255,255,255,0.65)",
          userSelect: "none",
          fontWeight: 500,
          letterSpacing: "0.06em",
        }}
      >
        © 2025 Engineering Streams Directory. All rights reserved.
      </footer>
    </div>
  );
}
