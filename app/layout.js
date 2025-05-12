// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import { Geist_Mono } from 'next/font/google';
import 'aos/dist/aos.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata = {
  title: 'Carlos Mendoza — Product Designer',
  description: 'Product Designer & Full Stack Developer based in California.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-gray-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}