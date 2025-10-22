'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 to-emerald-950 text-gray-100 text-center px-6">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-8xl font-bold text-emerald-400"
      >
        404
      </motion.h1>

      <p className="mt-4 text-xl text-gray-300">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="mt-8 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-6 py-3 rounded-lg transition"
      >
        <Home size={20} />
        Go Home
      </Link>
    </div>
  );
}
