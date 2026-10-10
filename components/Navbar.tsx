"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "@/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`w-full max-w-5xl rounded-full border transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-neutral-200 dark:border-neutral-800 shadow-lg shadow-black/5"
            : "bg-white/60 dark:bg-neutral-950/60 backdrop-blur-sm border-neutral-200/60 dark:border-neutral-800/60"
        }`}
      >
        <div className="flex items-center justify-between h-14 px-6">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-1.5 font-heading font-extrabold text-base tracking-tight"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-mono">
              µ
            </span>
            <span className="text-foreground">Learn CUCEK</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1.5 bg-neutral-100/70 dark:bg-neutral-900/70 p-1.5 rounded-full border border-neutral-200/50 dark:border-neutral-800/50">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-foreground bg-white dark:bg-neutral-800 shadow-xs font-semibold"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-foreground hover:bg-white/50 dark:hover:bg-neutral-800/50"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="https://app.mulearn.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 px-4 py-1.5 bg-foreground text-background text-xs font-medium rounded-full hover:opacity-90 transition-all duration-200"
            >
              Join Now
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-1.5 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 px-5 py-4 flex flex-col gap-3 rounded-b-3xl bg-white/95 dark:bg-neutral-950/95 backdrop-blur-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://app.mulearn.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full text-center px-4 py-2 bg-foreground text-background text-xs font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Join Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

