// page.jsx
'use client'
import React from "react";

// Data for Engineering Streams
const engineeringStreams = [
 // IT & Related
 {
    name: "CSE",
    url: "/Streams/cse",
    color: "#2a2a72",
    icon: "💻",
    about: "Core computer science: software, algorithms, and system design."
  }, 
 {
    name: "Information Technology (IT)",
    url: "/Streams/information-technology",
    color: "#3a86ff",
    icon: "🖥️",
    about: "Emphasizes IT infrastructure, software & network management."
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
        name: "Software Engineering",
        url: "/Streams/software-engineering",
        icon: "💾",
        color: "#3a86ff",
        about: "Focuses on methodologies for software system development."
      },
      {
        name: "Information Security",
        url: "/Streams/information-security",
        icon: "🛡️",
        color: "#3a86ff",
        about: "Focuses on network, data, and application security."
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
  
  // EC/EE/EEE and related
  {
    name: "Electronics & Communication (ECE)",
    url: "/Streams/ece",
    color: "#f54260",
    icon: "📡",
    about: "Covers electronics, telecommunications, and embedded systems."
  },
   {
        name: "Embedded Systems",
        url: "/Streams/embedded-systems",
        color: "#f54260",
        icon: "📟",
        about: "Focuses on microcontrollers, hardware-software integration."
      },
      {
        name: "VLSI Design",
        url: "/Streams/vlsi",
        color: "#f54260",
        icon: "🔲",
        about: "Covers semiconductor fabrication, circuit and chip design."
      },
      {
        name: "Signal Processing",
        url: "/Streams/signal-processing",
        color: "#f54260",
        icon: "🎚️",
        about: "Covers analog/digital signal analysis, filtering, and applications."
      },
  {
    name: "Electrical Engineering (EE)",
    url: "/Streams/ee",
    color: "#f7b32b",
    icon: "🔌",
    about: "Focuses on electric circuits, machines, power systems & automation."
  },
  {
        name: "Power Systems",
        url: "/Streams/power-systems",
        color: "#f7b32b",
        icon: "⚡",
        about: "Focuses on electric power generation, transmission, and distribution."
      },
      {
        name: "Control Systems",
        url: "/Streams/control-systems",
        color: "#f7b32b",
        icon: "🎛️",
        about: "Deals with automation, system dynamics and robotics."
      },
  {
    name: "Electrical & Electronics Engineering (EEE)",
    url: "/Streams/eee",
    color: "#1abc9c",
    icon: "⚡",
    about: "Combines electrical systems with electronics and control engineering."
  },
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
 
  // Others
  {
    name: "Chemical Engineering",
    url: "/Streams/chemical-engineering",
    color: "#fb3640",
    icon: "⚗️",
    about: "Applies chemical principles to manufacturing and production."
  },
  {
    name: "Biotechnology",
    url: "/Streams/biotechnology",
    color: "#00b894",
    icon: "🧬",
    about: "Integrates biology with technology for pharmaceuticals & research."
  },

  {
    name: "Biomedical Engineering",
    url: "/Streams/biomedical-engineering",
    color: "#ff758f",
    icon: "🦾",
    about: "Applies engineering to healthcare, medical devices & diagnostics."
  },
  {
    name: "Aerospace Engineering",
    url: "/Streams/aerospace-engineering",
    color: "#2962ff",
    icon: "✈️",
    about: "Focuses on design & development of aircraft and spacecraft."
  },
  {
    name: "Automobile Engineering",
    url: "/Streams/automobile-engineering",
    color: "#c0b283",
    icon: "🚗",
    about: "Designs, develops, tests & manufactures vehicles."
  },
  {
    name: "Mechatronics Engineering",
    url: "/Streams/mechatronics",
    color: "#9b59b6",
    icon: "🤖",
    about: "Integrates mechanics, electronics, and computing for automation."
  },
  {
    name: "Environmental Engineering",
    url: "/Streams/environmental-engineering",
    color: "#43aa8b",
    icon: "🌱",
    about: "Focuses on sustainable solutions for environmental challenges."
  },
  {
    name: "Instrumentation Engineering",
    url: "/Streams/instrumentation-engineering",
    color: "#7766c6",
    icon: "📈",
    about: "Specializes in measurement, automation, and process control."
  },
  {
    name: "Mining Engineering",
    url: "/Streams/mining-engineering",
    color: "#838b8b",
    icon: "⛏️",
    about: "Focuses on extraction and processing of minerals and resources."
  },
  {
    name: "Marine Engineering",
    url: "/Streams/marine-engineering",
    color: "#0096c7",
    icon: "🚢",
    about: "Design and maintenance of ships, submarines, and marine systems."
  },
  {
    name: "Petroleum Engineering",
    url: "/Streams/petroleum-engineering",
    color: "#8d5524",
    icon: "🛢️",
    about: "Deals with exploration and extraction of oil and gas resources."
  }
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
          marginBottom: "0.4rem",
          marginTop: "4.5rem",
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
