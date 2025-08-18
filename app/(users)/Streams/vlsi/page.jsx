'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #e0c3fc 0%, #8ec5fc 100%)", // Soft violet to blue for tech/chip vibe
        padding: "0 0 6rem 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#192046",
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
          background: "rgba(255, 255, 255, 0.19)",
          borderRadius: "22px",
          boxShadow: "0 8px 32px rgba(142, 197, 252, 0.21)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          userSelect: "none",
          marginTop: "3rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.7rem",
            fontWeight: "900",
            letterSpacing: "0.13em",
            marginBottom: "0.5rem",
            color: "#6943a2",
            textShadow: "0 2px 9px rgba(142, 197, 252, 0.19)",
          }}
        >
          VLSI Design
        </h1>
        <div
          role="img"
          aria-label="Microchip icon"
          style={{
            fontSize: "3.3rem",
            marginTop: "0.8rem",
            marginBottom: "1.4rem",
            filter: "drop-shadow(1px 1px 7px rgba(142,197,252,0.22))",
          }}
        >
          🖲️
        </div>
      </header>

      <main
        style={{
          maxWidth: "760px",
          margin: "auto",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "22px",
          boxShadow: "0 13px 40px rgba(142,197,252,0.13)",
          padding: "2.6rem 2.4rem 3rem 2.4rem",
          color: "#2b2352",
          lineHeight: "1.7",
          flexGrow: 1,
          textAlign: "justify",
          userSelect: "text",
        }}
      >
        <section style={{ marginBottom: "2.4rem" }}>
          <h2
            style={{
              fontWeight: "700",
              fontSize: "1.35rem",
              borderBottom: "3px solid #8ec5fc",
              paddingBottom: "0.5rem",
              marginBottom: "1.1rem",
              color: "#6843a2",
              letterSpacing: "0.05em",
              textShadow: "0 1px 3px rgba(0,0,0,0.09)",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "1.12rem",
              color: "#232342",
              userSelect: "text",
            }}
          >
            Covers semiconductor fabrication, circuit and chip design.
            VLSI Design is central to creating modern integrated circuits—combining millions of transistors into a single microchip for use in computers, phones, and embedded systems.
          </p>
        </section>

        <section style={{ marginBottom: "2.4rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.13rem",
              marginBottom: "1.05rem",
              color: "#6943a2",
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
              gap: "1.18rem",
            }}
          >
            {[
              "Semiconductor Fabrication",
              "Digital & Analog Circuit Design",
              "Physical Layout & Mask Creation",
              "Chip Level Verification & Testing",
              "CMOS Technology",
              "System-On-Chip (SoC) Design",
              "EDA Tools Usage",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(142,197,252,0.19)",
                  padding: "0.83rem 1.18rem",
                  borderRadius: "12px",
                  fontSize: "1.01rem",
                  fontWeight: 600,
                  textAlign: "center",
                  color: "#344170",
                  cursor: "default",
                  userSelect: "none",
                  boxShadow: "inset 0 0 10px rgba(818,168,220,0.17)",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.background = "rgba(142,197,252,0.36)")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.background = "rgba(142,197,252,0.19)")
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
              fontSize: "1.13rem",
              marginBottom: "1rem",
              color: "#6943a2",
              letterSpacing: "0.03em",
            }}
          >
            Career Prospects
          </h3>
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "1.5rem",
              fontSize: "1.04rem",
              color: "#393873",
              lineHeight: "1.5",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}>VLSI Design Engineer</li>
            <li style={{ marginBottom: "0.5rem" }}>Semiconductor Process Engineer</li>
            <li style={{ marginBottom: "0.5rem" }}>Physical Design Engineer</li>
            <li style={{ marginBottom: "0.5rem" }}>EDA Tool Specialist</li>
            <li style={{ marginBottom: "0.5rem" }}>Chip Verification Engineer</li>
          </ul>
        </section>
      </main>

      <footer
        style={{
          marginTop: "auto",
          padding: "1.3rem 1rem",
          width: "100%",
          textAlign: "center",
          fontSize: "0.89rem",
          color: "rgba(104, 67, 162, 0.7)",
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
