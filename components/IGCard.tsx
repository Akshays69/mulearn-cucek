"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Users, Zap } from "lucide-react";
import { InterestGroup } from "@/types";
import SpotlightCard from "./SpotlightCard";

export default function IGCard({ ig }: { ig: InterestGroup }) {
  return (
    <SpotlightCard className="group p-6 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300">
      <div>
        {/* Top bar with Category Badge & Karma Tag */}
        <div className="flex items-center justify-between mb-4 gap-2">
          <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-full bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
            {ig.category}
          </span>
          {ig.karmaReward && (
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
              <Zap className="w-3 h-3 fill-amber-500 text-amber-500" />
              {ig.karmaReward}
            </span>
          )}
        </div>

        {/* Icon & Name */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700/60 shrink-0">
            {ig.icon}
          </span>
          <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">
            {ig.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
          {ig.description}
        </p>

        {/* Topics Pills */}
        {ig.topics && ig.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {ig.topics.map((topic) => (
              <span
                key={topic}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-100/80 dark:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400 border border-neutral-200/50 dark:border-neutral-800"
              >
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer Info & Action */}
      <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between">
        {ig.membersCount && (
          <span className="inline-flex items-center gap-1 text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <Users className="w-3.5 h-3.5 text-neutral-400" />
            {ig.membersCount} Learners
          </span>
        )}

        <a
          href="https://app.mulearn.org"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-primary hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
        >
          Join Channel
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </SpotlightCard>
  );
}
