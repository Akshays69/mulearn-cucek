"use client";

import { motion } from "framer-motion";
import TeamCard from "@/components/TeamCard";
import { teamMembers } from "@/constants";

export default function Team() {
  return (
    <section
      id="team"
      className="section-padding relative border-t border-neutral-200/60 dark:border-neutral-800/60"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs font-mono font-semibold tracking-widest text-primary uppercase">
            // Chapter Leadership
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mt-3 text-foreground tracking-tight">
            Meet the <span className="gradient-text">CUCEK Executive Team</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3 max-w-xl">
            The student enablers driving peer learning, technical workshops, and community events at CUCEK.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
