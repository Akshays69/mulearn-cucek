"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import IGCard from "@/components/IGCard";
import { interestGroups } from "@/constants";

const filters = ["All", "Tech", "AI & Data", "Design", "Business"] as const;
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
      className="section-padding relative border-t border-neutral-200/60 dark:border-neutral-800/60"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header & Micro-interaction Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-mono font-semibold tracking-widest text-primary uppercase">
              // Domain Micro-Communities
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold mt-3 text-foreground tracking-tight">
              Find Your <span className="gradient-text">Interest Group</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-2 max-w-xl">
              Join peer learning channels, earn Karma Points by completing enabler tasks, and build real-world skills.
            </p>
          </motion.div>

          {/* Micro-interaction Animated Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap gap-1 p-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 self-start md:self-auto shadow-inner"
          >
            {filters.map((filter) => {
              const isActive = active === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActive(filter)}
                  className={`relative px-4 py-2 rounded-full text-xs font-mono font-medium transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-white dark:text-neutral-900"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-neutral-900 dark:bg-white rounded-full z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{filter}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* IG Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((ig) => (
            <IGCard key={ig.id} ig={ig} />
          ))}
        </motion.div>

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
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-foreground text-xs font-mono font-semibold rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-200"
          >
            Explore All 16+ Interest Groups on µLearn Discord
            <ArrowUpRight className="w-3.5 h-3.5 text-primary" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
