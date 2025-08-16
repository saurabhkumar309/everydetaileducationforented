'use client';
import { useState } from 'react';

export default function FeeCalculator() {
  // State for form inputs
  const [tuitionFee, setTuitionFee] = useState('');
  const [hostelFee, setHostelFee] = useState('');
  const [otherExpenses, setOtherExpenses] = useState('');
  const [totalFee, setTotalFee] = useState(null);

  // Handler to calculate total fee
  const calculateFee = (e) => {
    e.preventDefault();

    // Convert inputs to numbers, handle invalid inputs as 0
    const tuition = parseFloat(tuitionFee) || 0;
    const hostel = parseFloat(hostelFee) || 0;
    const others = parseFloat(otherExpenses) || 0;

    // Sum total
    const total = tuition + hostel + others;

    setTotalFee(total.toFixed(2)); // Show 2 decimals
  };

  return (
    <section className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg mt-12">
      <h2 className="text-2xl font-bold text-emerald-700 mb-6 text-center">
        💰 Approximate Fee Calculator
      </h2>
      <form onSubmit={calculateFee} className="space-y-4">
        <div>
          <label htmlFor="tuitionFee" className="block font-semibold text-gray-700 mb-1">
            Tuition Fee (per year)
          </label>
          <input
            type="number"
            id="tuitionFee"
            value={tuitionFee}
            onChange={(e) => setTuitionFee(e.target.value)}
            placeholder="e.g. 120000"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            min="0"
            required
          />
        </div>

        <div>
          <label htmlFor="hostelFee" className="block font-semibold text-gray-700 mb-1">
            Hostel Fee (per year)
          </label>
          <input
            type="number"
            id="hostelFee"
            value={hostelFee}
            onChange={(e) => setHostelFee(e.target.value)}
            placeholder="e.g. 50000"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            min="0"
            required
          />
        </div>

        <div>
          <label htmlFor="otherExpenses" className="block font-semibold text-gray-700 mb-1">
            Other Expenses (books, transport, etc.)
          </label>
          <input
            type="number"
            id="otherExpenses"
            value={otherExpenses}
            onChange={(e) => setOtherExpenses(e.target.value)}
            placeholder="e.g. 20000"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            min="0"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white font-semibold py-2 rounded-md shadow hover:bg-emerald-700 transition"
        >
          Calculate Total Fee
        </button>
      </form>

      {totalFee !== null && (
        <div className="mt-6 p-4 bg-emerald-100 text-emerald-900 rounded-md text-center font-semibold text-lg">
          Approximate Total Annual Fee: ₹ {totalFee}
        </div>
      )}
    </section>
  );
}
