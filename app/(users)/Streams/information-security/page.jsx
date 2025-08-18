'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #2c5364 0%, #203a43 70%, #0f2027 100%)", // Dark blue-green gradient for serious security vibe
        padding: "0 0 6rem 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#d1d9e6",
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
          background: "rgba(44, 83, 100, 0.8)",
          borderRadius: "20px",
          boxShadow: "0 10px 36px rgba(12, 42, 57, 0.7)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          userSelect: "none",
          marginTop: "3rem",
          color: "#a2b9c9",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "900",
            letterSpacing: "0.12em",
            marginBottom: "0.5rem",
            textShadow: "0 2px 8px rgba(15,47,63,0.9)",
          }}
        >
          Information Security
        </h1>
        <div
          role="img"
          aria-label="Shield lock icon"
          style={{
            fontSize: "3.8rem",
            marginTop: "0.7rem",
            marginBottom: "1.4rem",
            filter: "drop-shadow(1px 1px 7px rgba(162, 191, 214, 0.8))",
          }}
        >
          🛡️
        </div>
      </header>

      <main
        style={{
          maxWidth: "750px",
          margin: "auto",
          background: "rgba(20, 51, 67, 0.85)",
          borderRadius: "24px",
          boxShadow: "0 15px 50px rgba(32, 58, 73, 0.9)",
          padding: "3rem 2.8rem 3.5rem 2.8rem",
          color: "#cfd8e6",
          lineHeight: "1.7",
          flexGrow: 1,
          textAlign: "justify",
          userSelect: "text",
        }}
      >
        <section style={{ marginBottom: "3.4rem" }}>
          <h2
            style={{
              fontWeight: "700",
              fontSize: "1.55rem",
              color: "#8fb3c9",
              borderBottom: "3px solid #5e8fa0",
              paddingBottom: "0.6rem",
              marginBottom: "1.7rem",
              textShadow: "0 1px 4px rgba(0,0,0,0.3)",
              letterSpacing: "0.05em",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "1.14rem",
              maxWidth: "100%",
              color: "#b0c1d3",
              userSelect: "text",
            }}
          >
            Focuses on network, data, and application security. Information Security involves protecting sensitive information from unauthorized access, modification, and disruptions to ensure confidentiality, integrity, and availability.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.36rem",
              marginBottom: "1rem",
              color: "#7fa2ba",
              textShadow: "0 1px 3px rgba(0,0,0,0.18)",
              letterSpacing: "0.03em",
            }}
          >
            Key Areas
          </h3>
          <ul
            style={{
              listStyle: "none",
              paddingLeft: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "1.4rem",
            }}
          >
            {[
              "Network Security",
              "Data Encryption",
              "Access Control",
              "Application Security",
              "Incident Response",
              "Risk Assessment",
              "Security Auditing",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(94, 143, 160, 0.25)",
                  padding: "1rem 1.3rem",
                  borderRadius: "14px",
                  boxShadow: "inset 0 0 12px rgba(94,143,160,0.5)",
                  fontSize: "1.03rem",
                  fontWeight: "600",
                  color: "#d1d9e6",
                  textAlign: "center",
                  cursor: "default",
                  transition: "background-color 0.3s ease",
                  userSelect: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(94, 143, 160, 0.45)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(94, 143, 160, 0.25)")
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
              fontSize: "1.36rem",
              marginBottom: "1rem",
              color: "#7fa2ba",
              textShadow: "0 1px 3px rgba(0,0,0,0.18)",
              letterSpacing: "0.03em",
            }}
          >
            Career Prospects
          </h3>
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "1.5rem",
              fontSize: "1.07rem",
              color: "#cfd8e6",
              userSelect: "text",
              lineHeight: "1.52",
            }}
          >
            <li style={{ marginBottom: "0.6rem" }}>Security Analyst</li>
            <li style={{ marginBottom: "0.6rem" }}>Cybersecurity Specialist</li>
            <li style={{ marginBottom: "0.6rem" }}>Network Security Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Information Security Manager</li>
            <li style={{ marginBottom: "0.6rem" }}>Forensics Expert</li>
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
          color: "rgba(209, 217, 230, 0.65)",
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
