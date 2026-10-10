"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import EventCard from "@/components/EventCard";
import { upcomingEvents } from "@/constants";

export default function Events() {
  return (
    <section
      id="events"
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
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            // What's Coming Up
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight">
            Upcoming <span className="gradient-text">Events & Hackathons</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3 max-w-xl">
            Participate in flagship hackathons, technical workshops, and Discord enabler sessions to earn Karma Points and build your portfolio.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
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
            href="https://mulearn.org/events"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-foreground text-xs font-mono font-semibold rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-200"
          >
            View State-Wide µLearn Events Calendar
            <ArrowUpRight className="w-3.5 h-3.5 text-primary" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
