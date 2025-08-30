// app/blog/layout.tsx or layout.js

import React from 'react';
import '@/app/globals.css';

export default function examsLayout({ children }) {
  return (
 <>
        <div id="blog-layout-root" className="min-h-screen flex flex-col">
          {children}
      
        
        </div>
    </>
  );
}
