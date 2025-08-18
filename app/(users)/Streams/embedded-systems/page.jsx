'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #f7ff00 0%, #db36a4 100%)", // Modern energetic yellow to pink gradient
        padding: "0 0 6rem 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#22222a",
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
          background: "rgba(255, 255, 255, 0.22)",
          borderRadius: "22px",
          boxShadow: "0 8px 32px rgba(219, 54, 164, 0.21)",
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
            letterSpacing: "0.1em",
            marginBottom: "0.5rem",
            color: "#C7107A",
            textShadow: "0 2px 9px rgba(219, 54, 164, 0.21)",
          }}
        >
          Embedded Systems
        </h1>
        <div
          role="img"
          aria-label="Microchip icon"
          style={{
            fontSize: "3.3rem",
            marginTop: "0.8rem",
            marginBottom: "1.5rem",
            filter: "drop-shadow(1px 1px 7px rgba(247,255,0,0.20))",
          }}
        >
          🖥️
        </div>
      </header>

      <main
        style={{
          maxWidth: "760px",
          margin: "auto",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "22px",
          boxShadow: "0 13px 40px rgba(219,54,164,0.09)",
          padding: "2.6rem 2.4rem 3rem 2.4rem",
          color: "#3a253c",
          lineHeight: "1.7",
          flexGrow: 1,
          textAlign: "justify",
          userSelect: "text",
        }}
      >
        <section style={{ marginBottom: "2.2rem" }}>
          <h2
            style={{
              fontWeight: "700",
              fontSize: "1.35rem",
              borderBottom: "3px solid #db36a4",
              paddingBottom: "0.5rem",
              marginBottom: "1.1rem",
              color: "#A0086B",
              letterSpacing: "0.05em",
              textShadow: "0 1px 3px rgba(0,0,0,0.08)",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "1.11rem",
              color: "#391742",
              userSelect: "text",
            }}
          >
            Focuses on microcontrollers, hardware-software integration.
            Embedded Systems is the foundation of intelligent devices, blending real-time computing with electronics for applications in automotive, medical devices, robotics, and consumer electronics.
          </p>
        </section>

        <section style={{ marginBottom: "2.4rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.11rem",
              marginBottom: "1.05rem",
              color: "#C7107A",
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
              gap: "1.18rem",
            }}
          >
            {[
              "Microcontrollers & Processors",
              "Realtime Operating Systems (RTOS)",
              "Embedded C/C++ Programming",
              "Sensor Integration",
              "Hardware-Software Co-Design",
              "IoT Device Firmware",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(219, 54, 164, 0.18)",
                  padding: "0.83rem 1.12rem",
                  borderRadius: "11px",
                  fontSize: "1.01rem",
                  fontWeight: 600,
                  textAlign: "center",
                  color: "#740346",
                  cursor: "default",
                  userSelect: "none",
                  boxShadow: "inset 0 0 10px rgba(233, 151, 211, 0.18)",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.background = "rgba(219, 54, 164, 0.32)")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.background = "rgba(219, 54, 164, 0.18)")
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
              fontSize: "1.12rem",
              marginBottom: "1rem",
              color: "#C7107A",
              letterSpacing: "0.03em",
            }}
          >
            Career Prospects
          </h3>
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "1.5rem",
              fontSize: "1.03rem",
              color: "#532041",
              lineHeight: "1.5",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}>Embedded Systems Engineer</li>
            <li style={{ marginBottom: "0.5rem" }}>Firmware Developer</li>
            <li style={{ marginBottom: "0.5rem" }}>IoT Product Designer</li>
            <li style={{ marginBottom: "0.5rem" }}>Automotive Systems Engineer</li>
            <li style={{ marginBottom: "0.5rem" }}>Control Systems Engineer</li>
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
          color: "rgba(219, 54, 164, 0.7)",
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
