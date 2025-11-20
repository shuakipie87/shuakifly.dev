import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 mt-auto">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} DevPortfolio. Built with React & Tailwind.</p>
      </div>
    </footer>
  );
}