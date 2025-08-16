'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "0 0 6rem 0",
        fontFamily:
          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#f0f4f8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <header
        style={{
          textAlign: "center",
          padding: "3rem 1rem 2rem 1rem",
          maxWidth: "720px",
          width: "100%",
          boxShadow:
            "0 4px 30px rgba(118, 75, 162, 0.3)",
          borderRadius: "14px",
          background:
            "rgba(255, 255, 255, 0.12)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          marginTop: "3rem",
          userSelect: "none",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "900",
            letterSpacing: "0.12em",
            marginBottom: "0.5rem",
            textShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          CSE (Cloud Computing)
        </h1>
        <div
          style={{
            fontSize: "3.8rem",
            marginTop: "0.5rem",
            marginBottom: "1.4rem",
            filter: "drop-shadow(2px 2px 3px rgba(0,0,0,0.3))",
          }}
          aria-label="Cloud icon"
          role="img"
        >
          ☁️
        </div>
      </header>

      <main
        style={{
          marginTop: "2rem",
          padding: "2.5rem 2.5rem 3rem 2.5rem",
          background:
            "rgba(255, 255, 255, 0.15)",
          borderRadius: "24px",
          maxWidth: "800px",
          boxShadow:
            "0 15px 45px rgba(0,0,0,0.3)",
          color: "#eef3f9",
          lineHeight: "1.65",
          userSelect: "text",
          flexGrow: 1,
        }}
      >
        <section style={{ marginBottom: "2.7rem" }}>
          <h2
            style={{
              fontWeight: "700",
              fontSize: "1.65rem",
              borderBottom: "2px solid #9a79d1",
              paddingBottom: "0.4rem",
              marginBottom: "1.3rem",
              color: "#dcd6f7",
              textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "1.15rem",
              color: "#e6e9f0",
              maxWidth: "100%",
              textAlign: "justify",
            }}
          >
            Cloud Computing covers design and development of scalable
            internet platforms, focusing on distributed computing, cloud
            architecture, and security. This stream unlocks opportunities for
            cloud-native applications, virtualization, and innovative IT
            infrastructure solutions.
          </p>
        </section>

        <section style={{ marginBottom: "2.7rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.4rem",
              marginBottom: "0.7rem",
              color: "#cbb9fc",
              textShadow: "0 1px 3px rgba(0,0,0,0.3)",
            }}
          >
            Key Areas
          </h3>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: 0,
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              "Cloud Infrastructure",
              "SaaS & PaaS Models",
              "Security in Cloud",
              "Cloud Migration",
              "Containerization & Orchestration (Docker, Kubernetes)",
              "Serverless Architectures",
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  background:
                    "rgba(255, 255, 255, 0.12)",
                  padding: "0.8rem 1rem",
                  borderRadius: "12px",
                  boxShadow:
                    "inset 0 0 10px rgba(255,255,255,0.2)",
                  fontSize: "1.04rem",
                  textAlign: "center",
                  fontWeight: "500",
                  transition:
                    "background-color 0.3s ease",
                  cursor: "default",
                  userSelect: "none",
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.3)")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.12)")
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
              fontSize: "1.4rem",
              marginBottom: "0.7rem",
              color: "#cbb9fc",
              textShadow: "0 1px 3px rgba(0,0,0,0.3)",
            }}
          >
            Career Prospects
          </h3>
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "1.3rem",
              fontSize: "1.06rem",
              color: "#e1e6f3",
              userSelect: "text",
              lineHeight: "1.5",
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}>
              Cloud Engineer
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              Cloud Solution Architect
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              DevOps Specialist
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              Cloud Administrator
            </li>
          </ul>
        </section>
      </main>

      
    </div>
  );
}
