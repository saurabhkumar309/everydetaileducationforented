'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #f7971e 0%, #ffd200 50%, #f7971e 100%)", // Vibrant gold/yellow modern gradient
        padding: "0 0 6rem 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#181a13",
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
          background: "rgba(255, 255, 123, 0.17)",
          borderRadius: "22px",
          boxShadow: "0 8px 24px rgba(250, 215, 51, 0.18)",
          backdropFilter: "blur(9px)",
          WebkitBackdropFilter: "blur(9px)",
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
            color: "#d9910c",
            textShadow: "0 2px 7px rgba(255,210,0,0.18)",
          }}
        >
          Signal Processing
        </h1>
        <div
          role="img"
          aria-label="Waveform icon"
          style={{
            fontSize: "3.2rem",
            marginTop: "0.8rem",
            marginBottom: "1.5rem",
            filter: "drop-shadow(2px 2px 6px #ffd20088)",
          }}
        >
          🌊
        </div>
      </header>

      <main
        style={{
          maxWidth: "760px",
          margin: "auto",
          background: "rgba(255,249,224,0.98)",
          borderRadius: "22px",
          boxShadow: "0 12px 38px rgba(255,215,51,0.10)",
          padding: "2.5rem 2rem 3rem 2rem",
          color: "#2d2417",
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
              fontSize: "1.34rem",
              borderBottom: "3px solid #ffd200bb",
              paddingBottom: "0.5rem",
              marginBottom: "1.1rem",
              color: "#e3ad0c",
              letterSpacing: "0.05em",
              textShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "1.13rem",
              color: "#40300d",
              userSelect: "text",
            }}
          >
            Covers analog/digital signal analysis, filtering, and applications. Signal Processing enables intelligent extraction, transformation, and interpretation of information from real-world signals for use in communications, audio, image, and many more fields.
          </p>
        </section>

        <section style={{ marginBottom: "2.3rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.14rem",
              marginBottom: "1.06rem",
              color: "#ba9001",
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
              "Analog & Digital Signal Processing",
              "Fourier & Wavelet Analysis",
              "Filter Design (FIR/IIR)",
              "Audio and Image Processing",
              "Spectral Analysis",
              "Digital Communications",
              "Real-Time Implementation",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(255, 210, 0, 0.10)",
                  padding: "0.88rem 1.16rem",
                  borderRadius: "13px",
                  fontSize: "1.03rem",
                  fontWeight: 600,
                  textAlign: "center",
                  color: "#9c7600",
                  cursor: "default",
                  userSelect: "none",
                  boxShadow: "inset 0 0 10px rgba(255, 168, 44, 0.18)",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.background = "rgba(255, 210, 0, 0.25)")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.background = "rgba(255, 210, 0, 0.10)")
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
              color: "#ba9001",
              letterSpacing: "0.03em",
            }}
          >
            Career Prospects
          </h3>
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "1.4rem",
              fontSize: "1.04rem",
              color: "#5c4000",
              lineHeight: "1.5",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}>Signal Processing Engineer</li>
            <li style={{ marginBottom: "0.5rem" }}>Audio DSP Engineer</li>
            <li style={{ marginBottom: "0.5rem" }}>Image Processing Specialist</li>
            <li style={{ marginBottom: "0.5rem" }}>Communication Systems Designer</li>
            <li style={{ marginBottom: "0.5rem" }}>R&D Scientist (Signal Theory)</li>
          </ul>
        </section>
      </main>

      <footer
        style={{
          marginTop: "auto",
          padding: "1.3rem 1rem",
          width: "100%",
          textAlign: "center",
          fontSize: "0.91rem",
          color: "rgba(186, 144, 1, 0.65)",
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
