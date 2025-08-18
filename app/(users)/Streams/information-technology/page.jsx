'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #74ebd5 0%, #acb6e5 100%)", // Soft aqua to lavender gradient
        padding: "0 0 6rem 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#1a2a4a",
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
          background: "rgba(255, 255, 255, 0.85)",
          borderRadius: "20px",
          boxShadow: "0 10px 36px rgba(172, 182, 229, 0.5)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          userSelect: "none",
          marginTop: "3rem",
          color: "#4a4a7f",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "900",
            letterSpacing: "0.12em",
            marginBottom: "0.5rem",
            textShadow: "0 2px 8px rgba(74, 74, 127, 0.7)",
          }}
        >
          Information Technology (IT)
        </h1>
        <div
          role="img"
          aria-label="Network icon"
          style={{
            fontSize: "3.5rem",
            marginTop: "0.7rem",
            marginBottom: "1.5rem",
            filter: "drop-shadow(2px 2px 5px rgba(172,182,229,0.7))",
          }}
        >
          🌐
        </div>
      </header>

      <main
        style={{
          maxWidth: "760px",
          margin: "auto",
          background: "rgba(255, 255, 255, 0.96)",
          borderRadius: "22px",
          boxShadow: "0 12px 40px rgba(172, 182, 229, 0.2)",
          padding: "3rem 3rem 4rem 3rem",
          color: "#2c2c56",
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
              fontSize: "1.55rem",
              borderBottom: "3px solid #97a7e1",
              paddingBottom: "0.6rem",
              marginBottom: "1.8rem",
              color: "#576189",
              letterSpacing: "0.05em",
              textShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "1.18rem",
              color: "#424683",
              userSelect: "text",
            }}
          >
            Emphasizes IT infrastructure, software & network management.
            Information Technology (IT) engineers design, maintain, and secure networks and systems enabling seamless data communication across organizations.
          </p>
        </section>

        <section style={{ marginBottom: "2.8rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.3rem",
              marginBottom: "1.2rem",
              color: "#6671b0",
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
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.4rem",
            }}
          >
            {[
              "Network Infrastructure",
              "System Administration",
              "Cybersecurity",
              "Cloud Computing",
              "Database Management",
              "IT Support & Services",
              "Software Deployment",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "#d4dbff",
                  padding: "1rem 1.3rem",
                  borderRadius: "14px",
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  color: "#3a3e72",
                  textAlign: "center",
                  cursor: "default",
                  userSelect: "none",
                  boxShadow: "inset 0 0 10px rgba(90,98,174,0.4)",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#a3aceb")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#d4dbff")
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
              color: "#6671b0",
              letterSpacing: "0.03em",
            }}
          >
            Career Prospects
          </h3>
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "1.6rem",
              fontSize: "1.08rem",
              color: "#4f55a6",
              lineHeight: "1.5",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.6rem" }}>Network Administrator</li>
            <li style={{ marginBottom: "0.6rem" }}>System Analyst</li>
            <li style={{ marginBottom: "0.6rem" }}>Cloud Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>IT Security Specialist</li>
            <li style={{ marginBottom: "0.6rem" }}>Software Deployment Engineer</li>
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
          color: "rgba(102, 113, 178, 0.7)",
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
