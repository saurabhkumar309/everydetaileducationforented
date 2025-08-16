'use client'
import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top right, #91eae4 0%, #86a8e7 100%)",
        padding: "0 0 6rem 0",
        fontFamily: "'Poppins', sans-serif",
        color: "#f1f7ff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        userSelect: "text",
      }}
    >
      <header
        style={{
          textAlign: "center",
          padding: "3.2rem 1rem 2rem 1rem",
          maxWidth: "720px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.15)",
          borderRadius: "14px",
          boxShadow: "0 8px 30px rgba(20, 70, 110, 0.3)",
          backdropFilter: "blur(11px)",
          WebkitBackdropFilter: "blur(11px)",
          userSelect: "none",
          marginTop: "4rem",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "900",
            letterSpacing: "0.14em",
            marginBottom: "0.5rem",
            color: "#0c1f3f",
            textShadow: "0 3px 10px rgba(0,0,0,0.25)",
          }}
        >
          Data Science
        </h1>
        <div
          style={{
            fontSize: "4rem",
            marginTop: "0.7rem",
            marginBottom: "1.7rem",
            filter: "drop-shadow(2px 2px 5px rgba(13,35,60,0.5))",
          }}
          aria-label="Bar chart icon"
          role="img"
        >
          📊
        </div>
      </header>

      <main
        style={{
          marginTop: "2rem",
          padding: "3rem 2.5rem 3.5rem 2.5rem",
          background: "rgba(15, 40, 75, 0.85)",
          borderRadius: "24px",
          maxWidth: "770px",
          boxShadow: "0 20px 60px rgba(10, 30, 70, 0.7)",
          color: "#cfe1f2",
          lineHeight: "1.7",
          flexGrow: 1,
          textAlign: "justify",
        }}
      >
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontWeight: "700",
              fontSize: "1.6rem",
              borderBottom: "3px solid #62d2a2",
              paddingBottom: "0.6rem",
              marginBottom: "2rem",
              color: "#a0d9c1",
              textShadow: "0 2px 6px rgba(0,0,0,0.4)",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "1.18rem",
              maxWidth: "100%",
              color: "#d5e2ef",
              userSelect: "text",
            }}
          >
            Data Science is the art and science of extracting meaningful insights
            from large and complex datasets using advanced analytics,
            machine learning techniques, and rich visualizations. It empowers
            data-driven decision-making across industries and domains.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "1.42rem",
              marginBottom: "1rem",
              color: "#4adb9e",
              textShadow: "0 1px 4px rgba(0,0,0,0.4)",
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
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.4rem",
            }}
          >
            {[
              "Data Analytics",
              "Machine Learning & AI",
              "Big Data Engineering",
              "Data Visualization",
              "Statistical Modeling",
              "Data Mining",
              "Predictive Analytics",
              "Data Wrangling",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  background: "rgba(98, 210, 158, 0.2)",
                  padding: "1.1rem 1.3rem",
                  borderRadius: "14px",
                  boxShadow: "inset 0 0 14px rgba(98, 210, 158, 0.5)",
                  fontSize: "1.07rem",
                  textAlign: "center",
                  fontWeight: "600",
                  color: "#a6f0cb",
                  transition: "background-color 0.3s ease",
                  cursor: "default",
                  userSelect: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(98, 210, 158, 0.45)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(98, 210, 158, 0.2)")
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
              marginBottom: "1rem",
              color: "#4adb9e",
              textShadow: "0 1px 4px rgba(0,0,0,0.4)",
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
              color: "#d0eadb",
              userSelect: "text",
              lineHeight: "1.55",
            }}
          >
            <li style={{ marginBottom: "0.6rem" }}>Data Scientist</li>
            <li style={{ marginBottom: "0.6rem" }}>Machine Learning Engineer</li>
            <li style={{ marginBottom: "0.6rem" }}>Data Analyst</li>
            <li style={{ marginBottom: "0.6rem" }}>Business Intelligence Expert</li>
            <li style={{ marginBottom: "0.6rem" }}>Big Data Engineer</li>
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
          color: "rgba(255,255,255,0.65)",
          userSelect: "none",
          fontWeight: 500,
          letterSpacing: "0.05em",
        }}
      >
        © 2025 Engineering Streams Directory. All rights reserved.
      </footer>
    </div>
  );
}
