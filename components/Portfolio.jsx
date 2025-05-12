// components/Portfolio.jsx
'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'BeServer.',
    category: 'Branding, Product',
    image: '/images/p1.jpg',
    heightClass: 'h-[280px] md:h-[360px]',
    objectPosition: 'object-center',
  },
  {
    title: 'Seone.',
    category: 'Product, Development',
    image: '/images/p2.jpg',
    heightClass: 'h-[360px] md:h-[480px]',
    objectPosition: 'object-top',
  },
  {
    title: 'Energetic Tumbler.',
    category: 'Product, Development',
    image: '/images/p3.jpg',
    heightClass: 'h-[240px] md:h-[320px]',
    objectPosition: 'object-center',
  },
];

export default function Portfolio() {
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
      <div className="mb-16 max-w-xl">
        <p
          className="text-sm uppercase tracking-wide text-gray-400 mb-2"
          data-aos="fade-up"
        >
          — Portfolio
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold leading-tight mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          All Creative Works, <br /> Selected Projects.
        </h2>
        <p
          className="text-gray-400 text-base mb-6 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I choose selected projects to show based on idea, visual, and execution.
        </p>
        <Link
          href="#portfolio"
          className="text-yellow-400 font-semibold text-sm hover:underline"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Explore more ↗
        </Link>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="400">
        {projects.map((project, idx) => (
          <div key={idx} className="group" data-aos="fade-up" data-aos-delay={`${idx * 100}`}>
            <div className={`relative w-full ${project.heightClass} rounded-lg overflow-hidden shadow-xl mb-4 group-hover:shadow-2xl transition-all duration-500`}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={`object-cover ${project.objectPosition} transform group-hover:scale-105 transition-transform duration-700`}
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-sm text-gray-400">{project.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}