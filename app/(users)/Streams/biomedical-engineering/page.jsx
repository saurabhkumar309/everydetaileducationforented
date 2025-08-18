'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #89f7fe 0%, #66a6ff 100%)", // Soft blue gradient for calm and trust
        padding: "0 0 6rem 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#102a43",
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
          background: "rgba(255, 255, 255, 0.9)",
          borderRadius: "22px",
          boxShadow: "0 10px 36px rgba(102, 163, 255, 0.5)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          userSelect: "none",
          marginTop: "3rem",
          color: "#205375",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "900",
            letterSpacing: "0.12em",
            marginBottom: "0.5rem",
            textShadow: "0 2px 8px rgba(32, 83, 117, 0.7)",
          }}
        >
          Biomedical Engineering
        </h1>
        <div
          role="img"
          aria-label="Medical microscope icon"
          style={{
            fontSize: "3.5rem",
            marginTop: "0.7rem",
            marginBottom: "1.5rem",
            filter: "drop-shadow(1px 1px 7px rgba(102, 163, 255, 0.85))",
          }}
        >
          🔬
        </div>
      </header>

      <main
        style={{
          maxWidth: "760px",
          margin: "auto",
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "22px",
          boxShadow: "0 12px 45px rgba(102, 163, 255, 0.3)",
          padding: "3rem 3rem 4rem 3rem",
          color: "#1e3246",
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
              borderBottom: "3px solid #99bbff",
              paddingBottom: "0.6rem",
              marginBottom: "1.8rem",
              color: "#49759c",
              letterSpacing: "0.05em",
              textShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "1.18rem",
              color: "#2a466a",
              userSelect: "text",
            }}
          >
            Applies engineering to healthcare, medical devices & diagnostics.
            Biomedical Engineering combines engineering principles with biological sciences to develop innovative solutions that improve patient care, medical equipment, and diagnostic technologies.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.3rem",
              marginBottom: "1.2rem",
              color: "#49759c",
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
              gap: "1.6rem",
            }}
          >
            {[
              "Medical Device Development",
              "Biomechanics & Prosthetics",
              "Diagnostic Imaging",
              "Biomedical Signal Processing",
              "Rehabilitation Engineering",
              "Tissue Engineering",
              "Healthcare Informatics",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "#d6e4ff",
                  padding: "1rem 1.3rem",
                  borderRadius: "14px",
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  color: "#2a466a",
                  textAlign: "center",
                  cursor: "default",
                  userSelect: "none",
                  boxShadow: "inset 0 0 15px rgba(102, 163, 255, 0.5)",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#a4bbf7")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#d6e4ff")
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
              color: "#49759c",
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
              color: "#2a466a",
              lineHeight: "1.55",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.6rem" }}>Biomedical Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Medical Device Designer</li>
            <li style={{ marginBottom: "0.6rem" }}>Clinical Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Rehabilitation Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Research Scientist</li>
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
          color: "rgba(73, 117, 156, 0.7)",
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
