// components/Testimonial.jsx
'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

export default function Testimonial() {
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
      <div
        className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
        data-aos="fade-up"
      >
        {/* Foto */}
        <div
          className="w-36 h-36 md:w-40 md:h-40 relative rounded-lg overflow-hidden shadow-xl group"
          data-aos="zoom-in"
        >
          <Image
            src="/images/profile4.jpg"
            alt="Jared Warner"
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Testimoni */}
        <div data-aos="fade-left" data-aos-delay="200">
          <p className="text-gray-300 text-base md:text-lg italic mb-6 relative pl-8 leading-relaxed">
            <span className="absolute -left-2 top-0 text-4xl md:text-5xl text-yellow-400 opacity-70">“</span>
            Amazing! At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.
          </p>
          <h3 className="font-semibold text-lg md:text-xl text-white mb-1">Jared Warner</h3>
          <p className="text-sm text-gray-400 mb-6">CEO at Company</p>

          {/* Carousel indicator */}
          <div className="flex space-x-2.5">
            <span className="w-6 h-1.5 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-1.5 bg-gray-600 rounded-full"></span>
            <span className="w-3 h-1.5 bg-gray-600 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
}