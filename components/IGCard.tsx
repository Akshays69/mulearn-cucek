"use client";

import { motion } from "framer-motion";
import { InterestGroup } from "@/types";

export default function IGCard({ ig }: { ig: InterestGroup }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative group p-6 rounded-2xl bg-white dark:bg-dark border border-gray-100 dark:border-gray-800 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      {/* Icon */}
      <span className="text-4xl mb-4 block">{ig.icon}</span>

      {/* Name */}
      <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-200">
        {ig.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
        {ig.description}
      </p>

      {/* Category badge */}
      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
        {ig.category}
      </span>

      {/* Hover overlay - Join Now */}
      <div className="absolute inset-0 flex items-center justify-center bg-dark/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl">
        <a
          href="https://app.mulearn.org"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-orange-600 hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Join Now →
        </a>
      </div>
    </motion.div>
  );
}
