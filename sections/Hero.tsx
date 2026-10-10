"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Zap, Trophy, Users, Sparkles } from "lucide-react";
import FlowShader from "@/components/FlowShader";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden bg-background"
    >
      {/* Signature WebGL Flow Shader Backdrop */}
      <FlowShader />

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Live Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-medium mb-8 backdrop-blur-md shadow-xs"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
          <span>Official µLearn Campus Chapter @ CUCEK</span>
          <span className="text-neutral-300 dark:text-neutral-700">|</span>
          <span className="text-primary font-bold inline-flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Active Chapter
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight leading-[1.08] mb-6 text-foreground"
        >
          Empowering the Next Generation of <span className="gradient-text">Learners</span>
        </motion.h1>

        {/* Official Hero Sentence from mulearn.org */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-10 leading-relaxed font-sans"
        >
          µLearn is a synergic philosophy of education built on a culture of mutual learning through micro groups of peers. At CUCEK, we empower curious minds to connect, innovate, and grow together.
        </motion.p>

        {/* Micro-interaction CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <MagneticButton
            asAnchor
            href="https://app.mulearn.org"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary text-white font-medium text-sm rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Join µLearn CUCEK</span>
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton
            asAnchor
            href="#interest-groups"
            className="px-8 py-4 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-foreground font-medium text-sm rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Explore Interest Groups</span>
          </MagneticButton>
        </motion.div>

        {/* Monospace Micro-interaction Stats Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 px-8 py-4 rounded-3xl bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 backdrop-blur-md shadow-xs"
        >
          <div className="flex items-center gap-2.5">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-base font-mono font-bold text-foreground">60,000+</span>
            <span className="text-xs text-neutral-500 font-medium">Statewide Learners</span>
          </div>

          <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700 font-mono">/</span>

          <div className="flex items-center gap-2.5">
            <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-base font-mono font-bold text-foreground">48,500+</span>
            <span className="text-xs text-neutral-500 font-medium">Karma Points</span>
          </div>

          <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700 font-mono">/</span>

          <div className="flex items-center gap-2.5">
            <Trophy className="w-4 h-4 text-indigo-500" />
            <span className="text-base font-mono font-bold text-foreground">#8 Rank</span>
            <span className="text-xs text-neutral-500 font-medium">Kerala Chapter</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-neutral-400 dark:text-neutral-600 cursor-pointer"
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="w-5 h-5 hover:text-primary transition-colors" />
        </a>
      </motion.div>
    </section>
  );
}
