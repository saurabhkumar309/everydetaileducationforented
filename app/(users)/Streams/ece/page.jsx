'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #ffecd2 0%, #fcb69f 100%)", // Soft orange-peach modern gradient
        padding: "0 0 6rem 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#25232e", // Rich dark text for excellent contrast
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
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "22px",
          boxShadow: "0 8px 32px rgba(252, 182, 159, 0.35)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
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
            color: "#e2714b",
            textShadow: "0 2px 9px rgba(252, 182, 159, 0.27)",
          }}
        >
          Electronics & Communication (ECE)
        </h1>
        <div
          role="img"
          aria-label="Integrated circuit icon"
          style={{
            fontSize: "3.3rem",
            marginTop: "0.7rem",
            marginBottom: "1.5rem",
            filter: "drop-shadow(1px 1px 7px rgba(252, 182, 159, 0.7))",
          }}
        >
          📡
        </div>
      </header>

      <main
        style={{
          maxWidth: "760px",
          margin: "auto",
          background: "rgba(255,255,255,0.93)",
          borderRadius: "22px",
          boxShadow: "0 12px 40px rgba(252,182,159,0.12)",
          padding: "2.7rem 2.4rem 3rem 2.4rem",
          color: "#4b3826",
          lineHeight: "1.7",
          flexGrow: 1,
          textAlign: "justify",
          userSelect: "text",
        }}
      >
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontWeight: "700",
              fontSize: "1.45rem",
              borderBottom: "3px solid #fcab7a",
              paddingBottom: "0.5rem",
              marginBottom: "1.1rem",
              color: "#e2714b",
              letterSpacing: "0.05em",
              textShadow: "0 1px 3px rgba(0,0,0,0.09)",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "1.15rem",
              color: "#54371c",
              userSelect: "text",
            }}
          >
            Covers electronics, telecommunications, and embedded systems.
            Electronics & Communication (ECE) focuses on creating, analyzing, and improving devices and communication infrastructure that connect our world—from chips to satellites and IoT.
          </p>
        </section>

        <section style={{ marginBottom: "2.7rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.22rem",
              marginBottom: "1.1rem",
              color: "#e2714b",
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
              gap: "1.2rem",
            }}
          >
            {[
              "Analog & Digital Electronics",
              "Communication Systems",
              "Microprocessors & Embedded Systems",
              "Wireless & Mobile Communication",
              "Signal Processing",
              "VLSI & Chip Design",
              "Television & Satellite",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(252, 171, 122, 0.20)",
                  padding: "0.92rem 1.19rem",
                  borderRadius: "13px",
                  fontSize: "1.04rem",
                  fontWeight: 600,
                  textAlign: "center",
                  color: "#9b5c32",
                  cursor: "default",
                  userSelect: "none",
                  boxShadow: "inset 0 0 14px rgba(253, 152, 81, 0.31)",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.background = "rgba(252, 171, 122, 0.42)")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.background = "rgba(252, 171, 122, 0.20)")
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
              fontSize: "1.22rem",
              marginBottom: "1rem",
              color: "#e2714b",
              letterSpacing: "0.03em",
            }}
          >
            Career Prospects
          </h3>
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "1.5rem",
              fontSize: "1.06rem",
              color: "#6e3c19",
              lineHeight: "1.5",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}>Electronics Engineer</li>
            <li style={{ marginBottom: "0.5rem" }}>Telecom Engineer</li>
            <li style={{ marginBottom: "0.5rem" }}>Embedded System Developer</li>
            <li style={{ marginBottom: "0.5rem" }}>VLSI Design Engineer</li>
            <li style={{ marginBottom: "0.5rem" }}>Signal Processing Engineer</li>
          </ul>
        </section>
      </main>

      <footer
        style={{
          marginTop: "auto",
          padding: "1.4rem 1rem",
          width: "100%",
          textAlign: "center",
          fontSize: "0.9rem",
          color: "rgba(253, 171, 122, 0.65)",
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
