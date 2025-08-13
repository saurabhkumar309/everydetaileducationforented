'use client';
import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  // Your WhatsApp number in international format without + or spaces
  const phoneNumber = '919430018930';  // Replace with your actual number

  // Optional default message when chat is opened
  const defaultMessage = 'Hello! I need assistance with admissions.';

  // WhatsApp chat URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  // Toggles widget open state (optional if you want a popup else direct link)
  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Button */}
      <div
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 cursor-pointer bg-green-500 hover:bg-green-600 transition-colors duration-300 rounded-full p-4 shadow-lg flex items-center justify-center"
        onClick={() => window.open(whatsappUrl, '_blank', 'noopener,noreferrer')}
      >
        <FaWhatsapp className="text-white text-3xl" aria-hidden="true" />
        {/* Optionally, add animation or tooltip here */}
      </div>

      {/* Optional Chat Popup UI (hidden by default)
          Uncomment and expand if you want an expandable chat box
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 bg-white rounded-lg shadow-lg p-4 w-64">
          <p className="mb-2 text-green-700 font-semibold">Chat with us on WhatsApp</p>
          <button
            className="text-green-500 underline"
            onClick={() => window.open(whatsappUrl, '_blank', 'noopener,noreferrer')}
          >
            Start Chat
          </button>
          <button
            className="mt-4 text-sm text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      )}
      */}
    </>
  );
}
