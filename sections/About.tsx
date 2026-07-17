"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    icon: "🤝",
    title: "Collaboration",
    description: "Learn and grow together through peer-to-peer knowledge sharing and teamwork.",
  },
  {
    icon: "🔍",
    title: "Curiosity",
    description: "Explore new domains, ask bold questions, and never stop learning.",
  },
  {
    icon: "💙",
    title: "Community",
    description: "Be part of a supportive network of 60,000+ learners across Kerala and beyond.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-gray-50 dark:bg-darker"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mt-2 text-gray-900 dark:text-white">
            What is <span className="gradient-text">µLearn?</span>
          </h2>
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              µLearn is a synergic philosophy of education built on a culture
              of mutual learning through micro groups of peers. We believe that
              the best learning happens when curious minds come together.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              With <span className="text-primary font-bold">60,000+ learners</span> across
              Kerala and beyond, µLearn helps you break through echo chambers
              and unlock real-world opportunities through community, mentorship,
              and gamified learning.
            </p>
            <a
              href="https://mulearn.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-orange-600 hover:scale-105 transition-all duration-200"
            >
              Learn More About µLearn →
            </a>
          </motion.div>

          {/* Right - Pillar Cards */}
          <div className="flex flex-col gap-4">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-dark border border-gray-100 dark:border-gray-800 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <span className="text-3xl">{pillar.icon}</span>
                <div>
                  <h3 className="font-heading font-bold text-gray-900 dark:text-white mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
