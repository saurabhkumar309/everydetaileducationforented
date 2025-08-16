'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #7b4397 0%, #dc2430 100%)",
        padding: "0 0 6rem 0",
        fontFamily: "'Montserrat', sans-serif",
        color: "#f5e9ff",
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
          width: "100%",
          maxWidth: "720px",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.15)",
          boxShadow: "0 8px 40px rgba(220, 36, 48, 0.6)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          userSelect: "none",
          marginTop: "4rem",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "900",
            letterSpacing: "0.14em",
            marginBottom: "0.7rem",
            textShadow: "0 2px 8px rgba(220, 36, 48, 0.6)",
            color: "#fcc7d7",
          }}
        >
          CSE (Business Systems)
        </h1>
        <div
          role="img"
          aria-label="Briefcase icon"
          style={{
            fontSize: "4rem",
            marginTop: "0.6rem",
            filter: "drop-shadow(2px 2px 7px rgba(220, 36, 48, 0.7))",
          }}
        >
          💼
        </div>
      </header>

      <main
        style={{
          marginTop: "2.5rem",
          maxWidth: "780px",
          padding: "3rem 3rem 4rem 3rem",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "28px",
          boxShadow: "0 20px 70px rgba(220, 36, 48, 0.45)",
          lineHeight: "1.68",
          color: "#fce9f3",
          userSelect: "text",
          flexGrow: 1,
          textAlign: "justify",
        }}
      >
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontWeight: "700",
              fontSize: "1.7rem",
              borderBottom: "3px solid rgba(252, 199, 215, 0.6)",
              paddingBottom: "0.6rem",
              marginBottom: "2rem",
              color: "#ecb8c6",
              textShadow: "0 1px 4px rgba(0,0,0,0.2)",
              letterSpacing: "0.04em",
            }}
          >
            About
          </h2>
          <p style={{ fontSize: "1.18rem", color: "#f8dfe7" }}>
            CSE (Business Systems) is an interdisciplinary branch combining
            software development with business analytics and management
            principles, enabling the building of systems that improve business
            workflows and decision-making.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.45rem",
              marginBottom: "1.2rem",
              color: "#f7bac1",
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
              gap: "1.5rem",
            }}
          >
            {[
              "Database Management",
              "ERP & Business Analytics",
              "Project Management",
              "Business Process Modeling",
              "Systems Analysis",
              "Enterprise Software Solutions",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(252, 199, 215, 0.3)",
                  padding: "1rem 1.4rem",
                  borderRadius: "16px",
                  boxShadow: "inset 0 0 15px rgba(252, 199, 215, 0.4)",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  textAlign: "center",
                  color: "#fce5eb",
                  cursor: "default",
                  transition: "background-color 0.3s ease",
                  userSelect: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(252, 199, 215, 0.55)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(252, 199, 215, 0.3)")
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
              fontSize: "1.45rem",
              marginBottom: "1.2rem",
              color: "#f7bac1",
              textShadow: "0 1px 3px rgba(0,0,0,0.15)",
              letterSpacing: "0.02em",
            }}
          >
            Career Prospects
          </h3>
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "1.6rem",
              fontSize: "1.1rem",
              color: "#fce5eb",
              lineHeight: "1.6",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.65rem" }}>Business Analyst</li>
            <li style={{ marginBottom: "0.65rem" }}>Software Consultant</li>
            <li style={{ marginBottom: "0.65rem" }}>Systems Manager</li>
            <li style={{ marginBottom: "0.65rem" }}>Business Systems Analyst</li>
            <li style={{ marginBottom: "0.65rem" }}>ERP Specialist</li>
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
          color: "rgba(252, 199, 215, 0.75)",
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
