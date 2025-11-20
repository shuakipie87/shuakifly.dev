export const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard built with React and Recharts to visualize sales data.",
    tech: ["React", "Tailwind", "Recharts"],
    link: "#"
  },
  {
    id: 2,
    title: "Task Manager API",
    description: "A robust RESTful API for managing tasks, users, and authentication.",
    tech: ["Node.js", "Express", "MongoDB"],
    link: "#"
  },
  {
    id: 3,
    title: "AI Image Generator",
    description: "A frontend interface connecting to OpenAI DALL-E to generate images from text prompts.",
    tech: ["React", "OpenAI API", "Vite"],
    link: "#"
  }
];

export const posts = [
  {
    id: "getting-started-with-react",
    title: "Getting Started with React 18",
    date: "2023-10-15",
    excerpt: "Learn the basics of React 18 and its new concurrency features.",
    content: `
# Getting Started with React 18

React 18 introduces several new features that fundamentally change how we build applications. The most notable addition is **Concurrent Mode**.

## Key Features

1. **Automatic Batching**: Fewer renders for better performance.
2. **Transitions**: Distinguishing between urgent and non-urgent updates.
3. **Suspense on the Server**: Improved server-side rendering performance.

\`\`\`jsx
import { useState, useTransition } from 'react';

function App() {
  const [isPending, startTransition] = useTransition();
  // ...
}
\`\`\`

Stay tuned for more deep dives!`
  },
  {
    id: "why-markdown",
    title: "Why I Use Markdown for Blogging",
    date: "2023-11-02",
    excerpt: "Markdown is a lightweight markup language with plain text formatting syntax.",
    content: `
# Why Markdown?

Markdown is portable, platform-independent, and easy to read even when not rendered. It's perfect for developers.

## Benefits

- **Simplicity**: Focus on writing, not formatting.
- **Portability**: Works on GitHub, VS Code, and many CMSs.
- **Code Highlighting**: Native support for code blocks.

> "Simplicity is the ultimate sophistication." - Leonardo da Vinci
    `
  }
];