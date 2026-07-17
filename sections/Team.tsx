"use client";

import { motion } from "framer-motion";
import TeamCard from "@/components/TeamCard";
import { teamMembers } from "@/constants";

export default function Team() {
  return (
    <section
      id="team"
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
            The People
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mt-2 text-gray-900 dark:text-white">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            The passionate people behind µLearn CUCEK who make it all happen.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
