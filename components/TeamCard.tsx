"use client";

import { motion } from "framer-motion";
import { TeamMember } from "@/types";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function TeamCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-dark border border-gray-100 dark:border-gray-800 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-heading font-extrabold text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {member.initials}
      </div>

      {/* Name */}
      <h3 className="font-heading font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-200">
        {member.name}
      </h3>

      {/* Role */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-4">
        {member.role}
      </p>

      {/* LinkedIn */}
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white text-gray-500 dark:text-gray-400 transition-all duration-200"
      >
        <LinkedinIcon className="w-4 h-4" />
      </a>
    </motion.div>
  );
}
