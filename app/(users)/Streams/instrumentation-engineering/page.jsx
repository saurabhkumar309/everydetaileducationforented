'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #667eea 0%, #764ba2 100%)", // Deep blue to purple gradient for precision & tech
        padding: "0 0 6rem 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#e4e9f7",
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
          background: "rgba(118, 75, 162, 0.8)",
          borderRadius: "20px",
          boxShadow: "0 10px 36px rgba(118, 75, 162, 0.8)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          userSelect: "none",
          marginTop: "3rem",
          color: "#d6d9f7",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "900",
            letterSpacing: "0.12em",
            marginBottom: "0.5rem",
            textShadow: "0 2px 8px rgba(118, 75, 162, 0.8)",
          }}
        >
          Instrumentation Engineering
        </h1>
        <div
          role="img"
          aria-label="Gear and gauge icon"
          style={{
            fontSize: "3.5rem",
            marginTop: "0.7rem",
            marginBottom: "1.5rem",
            filter: "drop-shadow(1px 1px 7px rgba(118, 75, 162, 0.85))",
          }}
        >
          ⚙️📏
        </div>
      </header>

      <main
        style={{
          maxWidth: "760px",
          margin: "auto",
          background: "rgba(118, 75, 162, 0.15)",
          borderRadius: "22px",
          boxShadow: "0 12px 45px rgba(118, 75, 162, 0.3)",
          padding: "3rem 3rem 4rem 3rem",
          color: "#ebeefe",
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
              borderBottom: "3px solid #a38be1",
              paddingBottom: "0.6rem",
              marginBottom: "1.8rem",
              color: "#c9c9ff",
              letterSpacing: "0.05em",
              textShadow: "0 1px 4px rgba(0,0,0,0.15)",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "1.18rem",
              color: "#eaeaff",
              userSelect: "text",
            }}
          >
            Specializes in measurement, automation, and process control.
            Instrumentation Engineering designs and implements the devices and systems that monitor, control, and optimize industrial processes for efficiency and safety.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.3rem",
              marginBottom: "1.2rem",
              color: "#b8a9f5",
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
              "Sensors & Transducers",
              "Process Control Systems",
              "Automation Engineering",
              "Data Acquisition & Signal Processing",
              "Industrial Instrumentation",
              "Calibration Techniques",
              "Embedded Systems",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(163, 141, 230, 0.3)",
                  padding: "1rem 1.3rem",
                  borderRadius: "15px",
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  color: "#dedcff",
                  textAlign: "center",
                  cursor: "default",
                  userSelect: "none",
                  boxShadow: "inset 0 0 14px rgba(163, 141, 230, 0.7)",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(163, 141, 230, 0.6)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(163, 141, 230, 0.3)")
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
              color: "#b8a9f5",
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
              color: "#dedcff",
              lineHeight: "1.55",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.6rem" }}>Instrumentation Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Automation Specialist</li>
            <li style={{ marginBottom: "0.6rem" }}>Process Control Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Calibration Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Embedded Systems Developer</li>
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
          color: "rgba(218, 218, 255, 0.65)",
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
