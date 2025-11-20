import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/content.js';

export default function Blog() {
  return (
    <div className="py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Writing</h1>
      <div className="space-y-10">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <Link to={`/blog/${post.id}`} className="block">
              <div className="flex items-baseline justify-between mb-2">
                <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <span className="text-sm text-slate-400 shrink-0 ml-4">{post.date}</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {post.excerpt}
              </p>
              <span className="inline-block mt-2 text-primary font-medium text-sm group-hover:underline">
                Read more
              </span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}