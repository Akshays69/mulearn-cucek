"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Users, Zap, Award, Target } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

const pillars = [
  {
    num: "01",
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Micro-Group Peer Learning",
    description: "Learn in small, focused squads of 3-5 students. Work together, share knowledge, and solve real-world problems.",
  },
  {
    num: "02",
    icon: <Zap className="w-6 h-6 text-amber-500 fill-amber-500" />,
    title: "Gamified Karma Progression",
    description: "Earn Karma Points by completing Discord enabler tasks, attending workshops, and contributing to open source.",
  },
  {
    num: "03",
    icon: <Award className="w-6 h-6 text-indigo-500" />,
    title: "GTech Industry Mentorship",
    description: "Direct connection with industry leaders, tech founders, and senior engineers from top companies in Kerala.",
  },
  {
    num: "04",
    icon: <Target className="w-6 h-6 text-emerald-500" />,
    title: "Career & Placement Acceleration",
    description: "Transform academic theory into real portfolio projects, hackathon wins, and high-impact placement opportunities.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs font-mono font-semibold tracking-widest text-primary uppercase">
            // The µLearn Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mt-3 text-foreground tracking-tight">
            What is <span className="gradient-text">µLearn CUCEK?</span>
          </h2>
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left - Narrative Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between h-full"
          >
            <div>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                <span className="text-foreground font-semibold">µLearn</span> is a synergic educational movement initiated by GTech (Group of Technology Companies) in Kerala to transform traditional learning into an outcome-driven experience.
              </p>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                At <span className="text-foreground font-semibold">CUCEK</span>, our chapter empowers students to step beyond classroom walls, acquire industry-ready skills through interest groups, and earn Karma Points as a proof of competence.
              </p>
            </div>
            <div>
              <a
                href="https://mulearn.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-mono font-semibold rounded-full hover:opacity-90 transition-all duration-200 shadow-sm"
              >
                Explore µLearn Foundation
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right - Micro-interaction Pillar Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <SpotlightCard className="p-6 h-full flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700/60">
                        {pillar.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-neutral-400 dark:text-neutral-600">
                        {pillar.num}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
