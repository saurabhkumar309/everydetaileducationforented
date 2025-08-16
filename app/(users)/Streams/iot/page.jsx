'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at center, #00c6ff 0%, #0072ff 100%)", // Bright electric blue to deep blue radial gradient for modern tech look
        padding: "0 0 6rem 0",
        fontFamily:
          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#e0eaff", // Soft light text for contrast
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
          background: "rgba(255, 255, 255, 0.12)",
          borderRadius: "18px",
          boxShadow: "0 10px 38px rgba(0, 114, 255, 0.5)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          userSelect: "none",
          marginTop: "3.5rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "900",
            letterSpacing: "0.13em",
            marginBottom: "0.5rem",
            color: "#cce0ff",
            textShadow: "0 2px 9px rgba(0, 114, 255, 0.85)",
          }}
        >
          CSE (Internet of Things)
        </h1>
        <div
          role="img"
          aria-label="Globe icon"
          style={{
            fontSize: "3.7rem",
            marginTop: "0.7rem",
            marginBottom: "1.5rem",
            filter: "drop-shadow(1px 1px 7px rgba(0,114,255,0.85))",
          }}
        >
          🌐
        </div>
      </header>

      <main
        style={{
          maxWidth: "760px",
          margin: "auto",
          background: "rgba(10, 33, 65, 0.75)", // Dark transparent overlay for contrast
          borderRadius: "26px",
          boxShadow: "0 18px 60px rgba(0, 114, 255, 0.6)",
          padding: "3rem 3rem 4rem 3rem",
          color: "#d6e6ff",
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
              borderBottom: "3px solid #66b1ff",
              paddingBottom: "0.6rem",
              marginBottom: "1.8rem",
              color: "#9ec9ff",
              letterSpacing: "0.05em",
              textShadow: "0 1px 4px rgba(0,0,0,0.3)",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "1.18rem",
              color: "#cce0ff",
              userSelect: "text",
            }}
          >
            IoT blends computer science and electronics to enable connectivity and
            intelligent communication among devices and everyday objects,
            revolutionizing how data is collected, analyzed, and used to automate
            tasks and improve efficiency.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.42rem",
              marginBottom: "1.2rem",
              color: "#8fbfff",
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
              "Sensor Networks",
              "Embedded Systems",
              "Smart Devices",
              "Wireless Communication",
              "IoT Security",
              "Edge Computing",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(102, 177, 255, 0.3)",
                  padding: "1rem 1.4rem",
                  borderRadius: "15px",
                  boxShadow: "inset 0 0 20px rgba(102, 177, 255, 0.7)",
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  textAlign: "center",
                  cursor: "default",
                  color: "#cce4ff",
                  transition: "background-color 0.3s ease",
                  userSelect: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(102, 177, 255, 0.6)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(102, 177, 255, 0.3)")
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
              fontSize: "1.42rem",
              marginBottom: "1.2rem",
              color: "#8fbfff",
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
              color: "#c8dbff",
              lineHeight: "1.55",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.7rem" }}>IoT Developer</li>
            <li style={{ marginBottom: "0.7rem" }}>Embedded Systems Engineer</li>
            <li style={{ marginBottom: "0.7rem" }}>Automation Engineer</li>
            <li style={{ marginBottom: "0.7rem" }}>IoT Security Specialist</li>
            <li style={{ marginBottom: "0.7rem" }}>IoT Solution Architect</li>
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
          color: "rgba(204, 224, 255, 0.7)",
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
