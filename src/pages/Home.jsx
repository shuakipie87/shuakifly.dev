import React from 'react';
import { projects } from '../data/content.js';

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          Hello, I'm Alex.
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          I'm a Full Stack Developer passionate about building accessible, pixel-perfect, and performant web experiences.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#projects" className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            View Work
          </a>
          <a href="mailto:hello@example.com" className="px-6 py-3 border border-slate-300 rounded-lg font-medium hover:bg-white transition-colors">
            Contact Me
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 border-t border-slate-200">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
            <p className="text-slate-500">A selection of things I've built.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-slate-600 mb-4 h-20 overflow-hidden">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-1 bg-slate-100 text-xs font-medium rounded text-slate-600">
                    {t}
                  </span>
                ))}
              </div>
              <a href={project.link} className="text-primary font-medium hover:underline">
                View Project &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}