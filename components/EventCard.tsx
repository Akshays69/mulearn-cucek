"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Event } from "@/types";

export default function EventCard({ event, index }: { event: Event; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-6 rounded-2xl bg-white dark:bg-dark border border-gray-100 dark:border-gray-800 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Bottom border / card glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

      {/* Top row - badge */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <span
          className={`px-3 py-1 text-xs font-bold rounded-full ${
            event.mode === "Online"
              ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
              : "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
          }`}
        >
          {event.mode}
        </span>
        <span className="text-xs text-gray-400 font-medium">µLearn CUCEK</span>
      </div>

      {/* Event name */}
      <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-200 relative z-10">
        {event.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 relative z-10">
        {event.description}
      </p>

      {/* Date and location */}
      <div className="flex flex-col gap-2 mb-6 relative z-10">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="w-4 h-4 text-primary" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <MapPin className="w-4 h-4 text-primary" />
          <span>{event.mode === "Online" ? "Virtual Event" : "CUCEK Campus"}</span>
        </div>
      </div>

      {/* Register button */}
      <a
        href={event.registerLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-orange-600 hover:scale-105 transition-all duration-200 shadow-md shadow-primary/20 relative z-10"
      >
        Register Now →
      </a>
    </motion.div>
  );
}
