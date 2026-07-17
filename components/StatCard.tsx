"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { Stat } from "@/types";

export default function StatCard({ stat }: { stat: Stat }) {
  const { count, ref } = useCountUp(stat.value);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group"
    >
      <span className="text-4xl mb-3">{stat.icon}</span>
      <span className="text-3xl md:text-4xl font-heading font-extrabold text-primary">
        {count.toLocaleString()}{stat.suffix}
      </span>
      <span className="text-sm text-gray-400 mt-1 font-medium">
        {stat.label}
      </span>
    </div>
  );
}
