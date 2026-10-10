"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowUpRight, Zap } from "lucide-react";
import { Event } from "@/types";
import SpotlightCard from "./SpotlightCard";

export default function EventCard({ event, index }: { event: Event; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <SpotlightCard className="group flex flex-col justify-between p-6 h-full hover:-translate-y-1.5 transition-all duration-300">
        <div>
          {/* Top row status badges */}
          <div className="flex items-center justify-between mb-4 gap-2">
            <span
              className={`px-2.5 py-1 text-[11px] font-mono font-medium rounded-full ${
                event.mode === "Online"
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                  : event.mode === "Hybrid"
                  ? "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20"
                  : "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
              }`}
            >
              {event.mode}
            </span>

            {event.karmaPoints && (
              <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                +{event.karmaPoints} Karma
              </span>
            )}
          </div>

          {/* Event name */}
          <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
            {event.name}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
            {event.description}
          </p>

          {/* Details row */}
          <div className="flex flex-col gap-2 mb-6 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>{event.location || (event.mode === "Online" ? "Virtual Event" : "CUCEK Campus")}</span>
            </div>
          </div>
        </div>

        {/* Register CTA */}
        <a
          href={event.registerLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-semibold rounded-xl hover:opacity-90 transition-all shadow-xs group-hover:scale-[1.01]"
        >
          Register Now
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </SpotlightCard>
    </motion.div>
  );
}
