"use client";

import { motion } from "framer-motion";
import { TeamMember } from "@/types";
import SpotlightCard from "./SpotlightCard";

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

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="h-full"
    >
      <SpotlightCard className="group flex flex-col items-center text-center p-6 h-full hover:-translate-y-1.5 transition-all duration-300">
        {/* Avatar Badge */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-indigo-500/20 border border-primary/30 flex items-center justify-center text-foreground font-mono font-bold text-base mb-4 group-hover:scale-110 transition-transform">
          {member.initials}
        </div>

        {/* Name */}
        <h3 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors text-base mb-1">
          {member.name}
        </h3>

        {/* Role */}
        <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-5">
          {member.role}
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-2 mt-auto">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-primary hover:border-primary/50 transition-all"
              aria-label={`${member.name} LinkedIn`}
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-primary hover:border-primary/50 transition-all"
              aria-label={`${member.name} GitHub`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
