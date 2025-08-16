// page.jsx
'use client'
import React from "react";

// Data for Engineering Streams
const engineeringStreams = [
  {
    name: "Mechanical Engineering",
    url: "/Streams/mechanical-engineering",
    color: "#ff914d",
    icon: "⚙️",
    about: "Focuses on design, manufacture & maintenance of mechanical systems."
  },
  {
    name: "Civil Engineering",
    url: "/Streams/civil-engineering",
    color: "#1e90ff",
    icon: "🏗️",
    about: "Deals with design, construction, and maintenance of infrastructure."
  },
  {
    name: "CSE (Cloud Computing)",
    url: "./Streams/Cloud-Computing",
    color: "#5d9cec",
    icon: "☁️",
    about: "Emphasizes scalable computing, cloud architecture & cloud security."
  },
  {
    name: "CSE (IoT)",
    url: "/Streams/iot",
    color: "#4dd599",
    icon: "🌐",
    about: "Integrates CS engineering with smart devices & IoT applications."
  },
  {
    name: "CSE (CSBS)",
    url: "/Streams/csbs",
    color: "#b967ff",
    icon: "💼",
    about: "Blends computer science with business systems for tech-business roles."
  },
  {
    name: "CSE Cyber Security",
    url: "/Streams/cyber-security",
    color: "#ff4d6d",
    icon: "🛡️",
    about: "Focuses on network security, ethical hacking & data privacy."
  },
  {
    name: "CSE (AI & ML)",
    url: "/Streams/ai-ml",
    color: "#ffd700",
    icon: "🤖",
    about: "Covers artificial intelligence, machine learning & deep learning."
  },
  {
    name: "Data Science",
    url: "/Streams/data-science",
    color: "#5cdb95",
    icon: "📊",
    about: "Focuses on analytics, big data, and data visualization."
  },
  {
    name: "CSE",
    url: "/Streams/cse",
    color: "#2a2a72",
    icon: "💻",
    about: "Core computer science: software, algorithms, and system design."
  },
];

// Card UI Component
const StreamCard = ({ stream }) => {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${stream.color} 0%, #fff 100%)`,
        borderRadius: "20px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        padding: "2rem 1.5rem 1.2rem 1.5rem",
        margin: "1.5rem",
        minWidth: "240px",
        maxWidth: "320px",
        flex: "1 1 300px",
        transition: "transform 0.18s linear, box-shadow 0.18s linear",
        cursor: "pointer",
        position: "relative"
      }}
      className="stream-card"
      tabIndex="0"
      onClick={() => window.open(stream.url, "_blank")}
      onKeyDown={(e) => {
        if (e.key === "Enter") window.open(stream.url, "_blank");
      }}
      aria-label={`Read more about ${stream.name}`}
    >
      <div style={{
        fontSize: "2.5rem",
        marginBottom: "1rem",
        textAlign: "center",
      }}>{stream.icon}</div>
      <div style={{
        fontWeight: 700,
        fontSize: "1.28rem",
        marginBottom: "0.5rem",
        textAlign: "center",
        color: "#222",
        letterSpacing: "0.5px",
      }}>{stream.name}</div>
      <div style={{
        fontSize: "0.98rem",
        color: "#555",
        minHeight: "42px",
        marginBottom: "1rem",
        textAlign: "center"
      }}>{stream.about}</div>
      <a
        style={{
          display: "block",
          textAlign: "center",
          background: stream.color,
          color: "#fff",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "600",
          padding: "9px 0",
          fontSize: "0.95rem",
          margin: "auto",
          transition: "background 0.18s",
          boxShadow: "0 2px 9px rgba(0,0,0,0.06)"
        }}
        href={stream.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex="-1"
        onClick={e => e.stopPropagation()}
      >
        Explore Stream
      </a>
    </div>
  );
};

// Main Page Component
export default function Page() {
  return (
    <div style={{
      background: "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
      minHeight: "100vh",
      padding: "0 0 6rem 0",
    }}>
      <header style={{
        textAlign: "center",
        padding: "2.3rem 0 1.2rem 0",
      }}>
        <h1 style={{
          fontSize: "2.5rem",
          color: "#2a2a72",
          letterSpacing: "1px",
          marginBottom: "0.4rem"
        }}>
          Top Engineering Streams in 2025
        </h1>
        <p style={{color: "#444", fontSize: "1.15rem", maxWidth: "600px", margin:"auto"}}>
          Discover the most in-demand and future-ready branches for your engineering career.
        </p>
      </header>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          maxWidth: "1240px",
          margin: "auto"
        }}
      >
        {engineeringStreams.map((stream, idx) => (
          <StreamCard key={stream.name + idx} stream={stream} />
        ))}
      </section>
      <style>
        {`
          .stream-card:hover, .stream-card:focus {
            transform: translateY(-6px) scale(1.03);
            box-shadow: 0 16px 36px rgba(0,0,0,0.13);
            outline: none;
          }
          @media (max-width: 950px) {
            section {
              flex-direction: column;
              align-items: center;
            }
          }
          `}
      </style>
    </div>
  );
}
