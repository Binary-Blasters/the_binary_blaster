'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
            Binary Blasters
          </h1>
        </div>
        <p className="text-2xl sm:text-4xl font-semibold mb-6 text-emerald-300">
          Blasting Ideas into Digital Reality
        </p>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Transform your vision into stunning web & mobile applications. We craft digital solutions for ambitious startups and growing businesses worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all transform hover:scale-105 text-white"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-emerald-400 rounded-lg font-semibold hover:bg-emerald-400/10 transition-all text-emerald-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}