"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import IGCard from "@/components/IGCard";
import { interestGroups } from "@/constants";

const filters = ["All", "Tech", "Design", "Business"] as const;
type Filter = (typeof filters)[number];

export default function InterestGroups() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All"
      ? interestGroups
      : interestGroups.filter((ig) => ig.category === active);

  return (
    <section
      id="interest-groups"
      className="section-padding bg-gray-50 dark:bg-darker"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Explore Communities
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mt-2 text-gray-900 dark:text-white">
            Find Your <span className="gradient-text">Tribe</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Explore domain-specific communities where learners collaborate,
            build, and grow together.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === filter
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white dark:bg-dark border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-primary hover:text-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* IG Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((ig) => (
            <IGCard key={ig.id} ig={ig} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-12"
        >
          <a
            href="https://mulearn.org/interest-groups"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white hover:scale-105 transition-all duration-200"
          >
            View All Interest Groups →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
