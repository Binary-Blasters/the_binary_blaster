'use client';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const reasons = [
    { title: "⚡ Fast Delivery", desc: "Get high-quality results in record time without compromise." },
    { title: "💸 Affordable Pricing", desc: "Premium solutions at startup-friendly budgets." },
    { title: "🌍 Global Experience", desc: "We collaborate with clients across the globe." },
  ];

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-12 text-emerald-400">Why Choose Us</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {reasons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-6 border border-emerald-500 rounded-xl bg-[#112B3C] hover:bg-[#143B4C] transition-all"
          >
            <h3 className="text-2xl font-semibold mb-3 text-emerald-400">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
