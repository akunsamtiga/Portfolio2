// components/Clients.jsx
'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

const clients = [
  'ibm',
  'ibmwatson',
  'economist',
  'longreads',
  'bbcamerica',
  'medium',
  'apmg',
  'tumblr',
];

export default function Clients() {
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
      <h2 className="text-4xl font-bold mb-4 tracking-tight" data-aos="fade-up">
        Clients.
      </h2>
      <p
        className="text-gray-400 text-base max-w-xl mb-12 leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        I've had the pleasure of working with some amazing companies around the world.
      </p>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center items-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {clients.map((client, idx) => (
          <div
            key={idx}
            className="relative w-36 h-12 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay={`${idx * 50}`}
          >
            <Image
              src={`/images/${client}.png`}
              alt={client}
              fill
              className="object-contain invert"
              unoptimized
            />
          </div>
        ))}
      </div>
    </section>
  );
}