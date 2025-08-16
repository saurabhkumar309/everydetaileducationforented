'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at center, #1a2a6c 0%, #b21f1f 70%, #fdbb2d 100%)", // Modern vibrant dark blue to warm sunset gradient
        padding: "0 0 6rem 0",
        fontFamily:
          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#faf6fb",
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
          maxWidth: "700px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderRadius: "20px",
          boxShadow: "0 10px 36px rgba(161, 140, 209, 0.6)",
          userSelect: "none",
          marginTop: "3rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "900",
            letterSpacing: "0.11em",
            marginBottom: "0.5rem",
            color: "#faf6fb",
            textShadow: "0 2px 10px rgba(0,0,0,0.8)",
          }}
        >
          CSE (Cyber Security)
        </h1>
        <div
          role="img"
          aria-label="Shield icon"
          style={{
            fontSize: "3.8rem",
            marginTop: "0.7rem",
            marginBottom: "1.4rem",
            filter: "drop-shadow(1px 1px 7px rgba(161,140,209,0.9))",
          }}
        >
          🛡️
        </div>
      </header>

      <main
        style={{
          maxWidth: "750px",
          margin: "auto",
          background: "rgba(0,0,0,0.45)", // Semi-transparent dark background for strong contrast
          borderRadius: "24px",
          boxShadow: "0 15px 50px rgba(161,140,209,0.7)",
          padding: "3rem 2.8rem 3.5rem 2.8rem",
          color: "#e0dff0",
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
              color: "#c9b9e6",
              borderBottom: "3px solid #ab8fd8",
              paddingBottom: "0.6rem",
              marginBottom: "1.7rem",
              textShadow: "0 1px 4px rgba(0,0,0,0.35)",
              letterSpacing: "0.05em",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "1.14rem",
              maxWidth: "100%",
              color: "#ccc6e8",
              userSelect: "text",
            }}
          >
            Cyber Security protects digital assets, systems, networks, and
            programs from cyber attacks and unauthorized access by employing
            risk mitigation techniques and data privacy strategies. It is
            crucial in the digital age where security threats constantly
            evolve.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.36rem",
              marginBottom: "1rem",
              color: "#b8aaee",
              textShadow: "0 1px 3px rgba(0,0,0,0.25)",
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
              "Ethical Hacking",
              "Cryptography",
              "Incident Response",
              "Risk Assessment",
              "Security Compliance",
              "Malware Analysis",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(171, 143, 216, 0.35)",
                  padding: "1rem 1.3rem",
                  borderRadius: "14px",
                  boxShadow: "inset 0 0 14px rgba(171,143,216,0.7)",
                  fontSize: "1.03rem",
                  fontWeight: "600",
                  color: "#ddd9f1",
                  textAlign: "center",
                  cursor: "default",
                  transition: "background-color 0.3s ease",
                  userSelect: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(171, 143, 216, 0.6)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(171, 143, 216, 0.35)")
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
              color: "#b8aaee",
              textShadow: "0 1px 3px rgba(0,0,0,0.25)",
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
              color: "#ddd9f1",
              userSelect: "text",
              lineHeight: "1.52",
            }}
          >
            <li style={{ marginBottom: "0.6rem" }}>Security Analyst</li>
            <li style={{ marginBottom: "0.6rem" }}>Penetration Tester</li>
            <li style={{ marginBottom: "0.6rem" }}>Network Administrator</li>
            <li style={{ marginBottom: "0.6rem" }}>Security Consultant</li>
            <li style={{ marginBottom: "0.6rem" }}>Forensic Analyst</li>
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
