// components/Blog.jsx
'use client';

import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    date: 'Feb 28',
    title: 'Let this be a lesson to you',
  },
  {
    date: 'Feb 14',
    title: 'How do you use time tracking for projects?',
  },
  {
    date: 'Feb 7',
    title: 'Ego and empathy in design',
  },
];

export default function Blog() {
  // Inisialisasi AOS
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({ duration: 800, once: true });
    };
    initAOS();
  }, []);

  return (
    <section
      className="bg-gray-900 text-white px-6 md:px-12 py-20 border-t border-gray-800"
      data-aos="fade-up"
    >
      {/* Header */}
      <div className="mb-12 max-w-xl">
        <p
          className="text-sm uppercase tracking-wide text-gray-400 mb-2"
          data-aos="fade-up"
        >
          — Blog
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold leading-tight mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          What’s new? <br /> My blog and news.
        </h2>
        <p
          className="text-gray-400 text-base mb-8 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I write about design process, product thinking, and how to build great experiences.
        </p>
      </div>

      {/* Posts */}
      <div className="space-y-6" data-aos="fade-up" data-aos-delay="300">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between group pb-4 border-b border-gray-800 group-hover:border-gray-700 transition-colors"
          >
            <div>
              <p className="text-xs text-gray-500 mb-1">{post.date} — Blog</p>
              <h3 className="text-sm md:text-base font-medium text-white group-hover:text-yellow-400 transition-colors">
                {post.title}
              </h3>
            </div>
            <ArrowRight className="w-4 h-4 text-yellow-400 shrink-0 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}