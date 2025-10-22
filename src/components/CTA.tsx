'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-16 px-4  text-darkBlue text-center rounded-t-3xl shadow-2xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-4"
      >
        Start Your Project Today!
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="mb-6 text-lg"
      >
        Let’s collaborate and create something impactful together.
      </motion.p>
      <Link
        href="/contact"
        className="px-8 py-3 border-2 border-emerald-400 rounded-lg font-semibold hover:bg-emerald-400/10 transition-all text-emerald-300"
      >
        Contact Us
      </Link>
    </section>
  );
}
