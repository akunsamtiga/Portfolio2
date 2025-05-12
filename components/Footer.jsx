// components/Footer.jsx
import Link from 'next/link';
import { Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-12 py-12 border-t border-gray-800">

      {/* Konten Utama */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-10">
        
        {/* Kolom Kiri - Nama & Email */}
        <div>
          <h2 className="text-3xl font-bold">Carlos Mendoza<span className="text-yellow-400">.</span></h2>
          <p className="text-gray-400 mt-4 max-w-md">
            I'm open for freelance opportunities or collaboration.
          </p>
          <Link href="mailto:hi@carlos.com" className="inline-flex items-center gap-2 text-yellow-400 font-semibold hover:underline mt-4">
            hi@carlos.com ↗
          </Link>
        </div>

        {/* Kolom Kanan - Sosial Media */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-sm uppercase tracking-wide text-gray-400">Find me on</h3>
          <div className="flex space-x-4">
            <a href="https://instagram.com " target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com " target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com " target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* Bawah Footer */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; 2025 Carlos Mendoza. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-yellow-400 transition-colors">Terms of Service</Link>
        </div>
      </div>

    </footer>
  );
}