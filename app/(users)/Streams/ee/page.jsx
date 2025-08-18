'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at center, #b2fefa 0%, #0ed2f7 60%, #5ee7df 100%)", // Modern electric cyan/blue/green
        padding: "0 0 6rem 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#152830", // Deep slate for strong contrast
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
          background: "rgba(255, 255, 255, 0.17)",
          borderRadius: "22px",
          boxShadow: "0 8px 32px rgba(14, 210, 247, 0.19)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
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
            color: "#0bc1e5",
            textShadow: "0 2px 8px rgba(14,210,247,0.18)",
          }}
        >
          Electrical Engineering (EE)
        </h1>
        <div
          role="img"
          aria-label="Lightning bolt icon"
          style={{
            fontSize: "3.3rem",
            marginTop: "0.7rem",
            marginBottom: "1.5rem",
            filter: "drop-shadow(1px 1px 8px #0ed2f777)",
          }}
        >
          ⚡
        </div>
      </header>

      <main
        style={{
          maxWidth: "760px",
          margin: "auto",
          background: "rgba(255,255,255,0.96)",
          borderRadius: "22px",
          boxShadow: "0 12px 40px rgba(14,210,247,0.14)",
          padding: "2.6rem 2.4rem 3rem 2.4rem",
          color: "#164855",
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
              borderBottom: "3px solid #63e4e4",
              paddingBottom: "0.5rem",
              marginBottom: "1.1rem",
              color: "#0eb7d7",
              letterSpacing: "0.05em",
              textShadow: "0 1px 3px rgba(0,0,0,0.09)",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "1.15rem",
              color: "#164855",
              userSelect: "text",
            }}
          >
            Focuses on electric circuits, machines, power systems & automation. Electrical Engineering (EE) powers all modern infrastructure, blending energy systems, industrial automation, and control with the hardware that drives today's world.
          </p>
        </section>

        <section style={{ marginBottom: "2.8rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.19rem",
              marginBottom: "1.13rem",
              color: "#0bc1e5",
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
              gap: "1.16rem",
            }}
          >
            {[
              "Electric Circuits & Networks",
              "Electrical Machines & Drives",
              "Power Systems & Generation",
              "Control Systems & Automation",
              "Renewable Energy Technologies",
              "Power Electronics",
              "Smart Grids & IoT in Energy",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(11, 193, 229, 0.13)",
                  padding: "0.82rem 1.17rem",
                  borderRadius: "12px",
                  fontSize: "1.02rem",
                  fontWeight: 600,
                  textAlign: "center",
                  color: "#174a70",
                  cursor: "default",
                  userSelect: "none",
                  boxShadow: "inset 0 0 10px rgba(11, 193, 229, 0.11)",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.background = "rgba(11, 193, 229, 0.27)")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.background = "rgba(11, 193, 229, 0.13)")
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
              fontSize: "1.18rem",
              marginBottom: "1rem",
              color: "#0bc1e5",
              letterSpacing: "0.03em",
            }}
          >
            Career Prospects
          </h3>
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "1.5rem",
              fontSize: "1.09rem",
              color: "#164855",
              lineHeight: "1.5",
              userSelect: "text",
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}>Power Systems Engineer</li>
            <li style={{ marginBottom: "0.5rem" }}>Electrical Design Engineer</li>
            <li style={{ marginBottom: "0.5rem" }}>Automation Engineer</li>
            <li style={{ marginBottom: "0.5rem" }}>Control Systems Specialist</li>
            <li style={{ marginBottom: "0.5rem" }}>Renewable Energy Engineer</li>
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
          color: "rgba(11, 193, 229, 0.7)",
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
