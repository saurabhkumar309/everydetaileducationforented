// app/blog/layout.tsx or layout.js

import React from 'react';
import '@/app/globals.css';

export default function examsLayout({ children }) {
  return (
    <html lang="en" className="font-inter">
      <body className="bg-white text-gray-800">
        <div id="blog-layout-root" className="min-h-screen flex flex-col">
          {children}
      
        
        </div>
      </body>
    </html>
  );
}
