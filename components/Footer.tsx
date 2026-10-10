"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Copy, Check, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Interest Groups", href: "#interest-groups" },
  { label: "Blog", href: "https://gtechmulearn.medium.com/" },
  { label: "Contact", href: "#contact" },
];

const bePartOf = [
  { label: "Campus", href: "https://mulearn.org" },
  { label: "Students", href: "https://app.mulearn.org" },
  { label: "Mentors", href: "https://mulearn.org" },
  { label: "Companies", href: "https://mulearn.org" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/gtechmulearn/",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/mulearn.official/",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/c/mulearn",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/gtechmulearn",
  },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@mulearn.org");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative pt-12 pb-8 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* rbp-portfolio Signature Contact Block */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative rounded-3xl bg-neutral-900 text-white p-8 sm:p-12 md:p-16 mb-16 overflow-hidden border border-neutral-800"
      >
        {/* Subtle grid background lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono font-semibold tracking-widest text-primary uppercase">
              // Get In Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold mt-3 tracking-tight text-white leading-tight">
              Ready to break the <br />
              <span className="text-neutral-400">echo chamber with us?</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-4 max-w-xl leading-relaxed font-sans">
              Join 60,000+ learners across Kerala. Reach out directly or start your peer-to-peer learning journey today.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            {/* Interactive Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 hover:border-neutral-500 transition-all group cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-xs sm:text-sm font-mono text-neutral-200">
                  info@mulearn.org
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </span>
            </button>

            <a
              href="https://app.mulearn.org"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white text-neutral-900 font-medium text-xs sm:text-sm hover:bg-neutral-100 transition-all shadow-sm"
            >
              Join µLearn Campus Chapter
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-200 dark:border-neutral-800">
        {/* Column 1 - Brand info */}
        <div>
          <a href="#home" className="flex items-center gap-1.5 font-heading font-extrabold text-lg tracking-tight mb-4">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-mono">
              µ
            </span>
            <span className="text-foreground">Learn CUCEK</span>
          </a>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            Official µLearn campus chapter at Cochin University College of Engineering Kuttanad (CUCEK). Empowering learners through community-driven education.
          </p>
          <div className="flex items-start gap-2 text-xs text-neutral-500 font-mono">
            <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>CUCEK Campus, Pulincunnoo, Alappuzha, Kerala - 688504</span>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-neutral-400 mb-4 font-mono">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors font-sans"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Be Part of Us */}
        <div>
          <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-neutral-400 mb-4 font-mono">
            Be Part of Us
          </h4>
          <ul className="flex flex-col gap-2.5">
            {bePartOf.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors inline-flex items-center gap-1 font-sans"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Connect */}
        <div>
          <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-neutral-400 mb-4 font-mono">
            Connect
          </h4>
          <div className="flex flex-wrap gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400 hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all font-mono"
              >
                {social.label}
                <ArrowUpRight className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-neutral-500 dark:text-neutral-400">
        <span>© 2025 µLearn Foundation. All rights reserved.</span>
        <span>Made with ❤️ by <strong className="text-foreground font-semibold">AKSHAY S</strong> & µLearn CUCEK Team</span>
      </div>
    </footer>
  );
}

