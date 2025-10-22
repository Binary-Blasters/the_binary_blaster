"use client";
import { motion } from "framer-motion";
import { services } from "@/constants/data";
import * as Icons from "lucide-react";

export default function Services() {
  //  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className: string }>;

  return (
    <section className="py-24 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold mb-14 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent"
      >
        Our Expertise
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, i) => {
          const Icon = service.icon
            ? (Icons[
                service.icon as keyof typeof Icons
              ] as React.ComponentType<{ className?: string }>)
            : null;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-[#112B3C]/60 border border-emerald-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-emerald-400/60 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="text-emerald-400 text-5xl mb-4 flex justify-center">
                {Icon && <Icon />}
              </div>

              <h3 className="text-2xl font-semibold mb-3 text-emerald-300 group-hover:text-emerald-400 transition">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
