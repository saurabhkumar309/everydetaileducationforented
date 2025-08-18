// 'use client';
// import { useState } from 'react';

// export default function FeeCalculator() {
//   // State for form inputs
//   const [tuitionFee, setTuitionFee] = useState('');
//   const [hostelFee, setHostelFee] = useState('');
//   const [otherExpenses, setOtherExpenses] = useState('');
//   const [totalFee, setTotalFee] = useState(null);

//   // Handler to calculate total fee
//   const calculateFee = (e) => {
//     e.preventDefault();

//     // Convert inputs to numbers, handle invalid inputs as 0
//     const tuition = parseFloat(tuitionFee) || 0;
//     const hostel = parseFloat(hostelFee) || 0;
//     const others = parseFloat(otherExpenses) || 0;

//     // Sum total
//     const total = tuition + hostel + others;

//     setTotalFee(total.toFixed(2)); // Show 2 decimals
//   };

//   return (
//     <section className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg mt-12">
//       <h2 className="text-2xl font-bold text-emerald-700 mb-6 text-center">
//         💰 Approximate Fee Calculator
//       </h2>
//       <form onSubmit={calculateFee} className="space-y-4">
//         <div>
//           <label htmlFor="tuitionFee" className="block font-semibold text-gray-700 mb-1">
//             Tuition Fee (per year)
//           </label>
//           <input
//             type="number"
//             id="tuitionFee"
//             value={tuitionFee}
//             onChange={(e) => setTuitionFee(e.target.value)}
//             placeholder="e.g. 120000"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
//             min="0"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="hostelFee" className="block font-semibold text-gray-700 mb-1">
//             Hostel Fee (per year)
//           </label>
//           <input
//             type="number"
//             id="hostelFee"
//             value={hostelFee}
//             onChange={(e) => setHostelFee(e.target.value)}
//             placeholder="e.g. 50000"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
//             min="0"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="otherExpenses" className="block font-semibold text-gray-700 mb-1">
//             Other Expenses (books, transport, etc.)
//           </label>
//           <input
//             type="number"
//             id="otherExpenses"
//             value={otherExpenses}
//             onChange={(e) => setOtherExpenses(e.target.value)}
//             placeholder="e.g. 20000"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
//             min="0"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-emerald-600 text-white font-semibold py-2 rounded-md shadow hover:bg-emerald-700 transition"
//         >
//           Calculate Total Fee
//         </button>
//       </form>

//       {totalFee !== null && (
//         <div className="mt-6 p-4 bg-emerald-100 text-emerald-900 rounded-md text-center font-semibold text-lg">
//           Approximate Total Annual Fee: ₹ {totalFee}
//         </div>
//       )}
//     </section>
//   );
// }
"use client";
import React, { useState } from "react";

export default function TodoPage() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, input.trim()]);
    setInput("");
  };

  const removeTask = (idx) => {
    setTasks(tasks.filter((_, i) => i !== idx));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Awesome To Do List</h1>
      <form onSubmit={addTask} style={styles.form}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What do you want to do?"
          style={styles.input}
        />
        <button type="submit" style={styles.addButton}>Add</button>
      </form>

      <ul style={styles.list}>
        {tasks.length === 0 && <p style={styles.noTasks}>No tasks yet. Add something!</p>}
        {tasks.map((task, idx) => (
          <li key={idx} style={styles.listItem}>
            <span style={styles.taskText}>{task}</span>
            <button onClick={() => removeTask(idx)} style={styles.deleteButton}>
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#f0f4f8",
    maxWidth: 480,
    margin: "3rem auto",
    padding: "2rem 2.5rem",
    borderRadius: 12,
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#2c3e50",
    marginBottom: "1.5rem",
  },
  form: {
    display: "flex",
    gap: 12,
    marginBottom: 24,
  },
  input: {
    flex: 1,
    padding: "12px 16px",
    fontSize: "1rem",
    borderRadius: 8,
    border: "2px solid #d1d9e6",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  addButton: {
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    padding: "12px 28px",
    fontSize: "1rem",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: "600",
    transition: "background-color 0.3s ease",
  },
  list: {
    listStyleType: "none",
    paddingLeft: 0,
  },
  listItem: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: "12px 16px",
    marginBottom: 12,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1.1rem",
    color: "#34495e",
  },
  taskText: {
    maxWidth: "85%",
    wordBreak: "break-word",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    border: "none",
    borderRadius: 6,
    color: "white",
    fontSize: "1.2rem",
    lineHeight: "1rem",
    cursor: "pointer",
    padding: "4px 10px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  noTasks: {
    textAlign: "center",
    color: "#7f8c8d",
    fontStyle: "italic",
  },
};
