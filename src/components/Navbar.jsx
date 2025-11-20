import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">DevPortfolio</Link>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
        </div>
      </div>
    </nav>
  );
}