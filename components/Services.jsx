// components/Services.jsx
'use client';

import React, { useEffect } from 'react';
import { PenTool, Palette, Laptop } from 'lucide-react';

const services = [
  {
    title: 'Product Designer.',
    projects: '124 Projects',
    icon: <PenTool className="w-8 h-8" />,
    isActive: true,
  },
  {
    title: 'Branding Designer.',
    projects: '37 Projects',
    icon: <Palette className="w-8 h-8" />,
    isActive: false,
  },
  {
    title: 'Full Stack Developer.',
    projects: '62 Projects',
    icon: <Laptop className="w-8 h-8" />,
    isActive: false,
  },
];

export default function Services() {
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
      {/* Judul Section */}
      <h2 className="text-4xl font-bold mb-4 tracking-tight">
        My Services.
      </h2>
      <p className="text-gray-400 text-base max-w-xl mb-12 leading-relaxed">
        I help build digital products and experiences that are thoughtful, intuitive, and human-centered.
      </p>

      {/* Grid Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={`${idx * 150}`}
            className={`p-6 pt-32 pb-18 transition-all duration-300 transform ${
              service.isActive
                ? 'bg-yellow-400 text-black shadow-lg scale-105'
                : 'bg-gray-800 hover:bg-yellow-400/10 hover:shadow-md'
            }`}
          >
            {/* Ikon */}
            <div className={`mb-4 ${service.isActive ? 'text-black' : 'text-yellow-400'}`}>
              {service.icon}
            </div>

            {/* Judul Layanan */}
            <h3 className={`text-xl font-semibold mb-1 ${service.isActive ? 'text-black' : 'text-white'}`}>
              {service.title}
            </h3>

            {/* Jumlah Proyek */}
            <p className={`text-sm ${service.isActive ? 'text-black/80' : 'text-gray-400'}`}>
              {service.projects}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}