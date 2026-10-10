"use client";

import { motion } from "framer-motion";
import StatCard from "@/components/StatCard";
import { stats } from "@/constants";

export default function Stats() {
  return (
    <section
      id="stats"
      className="section-padding relative border-t border-neutral-200/60 dark:border-neutral-800/60"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs font-mono font-semibold tracking-widest text-primary uppercase">
            // Chapter Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mt-3 text-foreground tracking-tight">
            µLearn CUCEK in <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3 max-w-xl">
            Empowering students with industry-grade skills, active learning squads, and gamified progress across CUCEK.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
