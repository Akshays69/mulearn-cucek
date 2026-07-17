"use client";

import { motion } from "framer-motion";
import EventCard from "@/components/EventCard";
import { upcomingEvents } from "@/constants";

export default function Events() {
  return (
    <section
      id="events"
      className="section-padding bg-white dark:bg-dark"
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
            What's Coming
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mt-2 text-gray-900 dark:text-white">
            Upcoming <span className="gradient-text">Events</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Join us for exciting workshops, hackathons, and competitions
            designed to push your limits.
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
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://mulearn.org/events"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white hover:scale-105 transition-all duration-200"
          >
            View All Events →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
