"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { Stat } from "@/types";
import SpotlightCard from "./SpotlightCard";

export default function StatCard({ stat }: { stat: Stat }) {
  const { count, ref } = useCountUp(stat.value);

  return (
    <div ref={ref} className="h-full">
      <SpotlightCard className="flex flex-col justify-between p-6 h-full group hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center justify-between w-full mb-6">
          <span className="text-3xl p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700/50">
            {stat.icon}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
            CHAPTER METRIC
          </span>
        </div>
        <div>
          <div className="text-3xl sm:text-4xl font-mono font-extrabold text-foreground tracking-tight mb-1">
            {count.toLocaleString()}
            <span className="text-primary">{stat.suffix}</span>
          </div>
          <div className="text-sm text-foreground font-semibold mb-1">
            {stat.label}
          </div>
          {stat.description && (
            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed">
              {stat.description}
            </p>
          )}
        </div>
      </SpotlightCard>
    </div>
  );
}
