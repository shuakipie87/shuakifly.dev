import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { posts } from '../data/content.js';

export default function Post() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <Link to="/blog" className="text-primary hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="py-12 max-w-3xl mx-auto">
      <Link to="/blog" className="text-sm text-slate-500 hover:text-primary mb-8 inline-block">
        &larr; Back to all posts
      </Link>
      
      <article>
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold mb-4">{post.title}</h1>
          <time className="text-slate-500">{post.date}</time>
        </header>
        
        <div className="prose prose-lg prose-slate max-w-none">
          <Markdown>{post.content}</Markdown>
        </div>
      </article>
    </div>
  );
}