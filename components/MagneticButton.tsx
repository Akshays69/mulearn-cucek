"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  asAnchor = false,
  href,
  target,
  rel,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.25;
    const y = (e.clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      <div className={`relative group overflow-hidden ${className}`}>
        {/* Shimmer Border Light Micro-interaction */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-indigo-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xs" />
        <div className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </div>
      </div>
    </motion.div>
  );

  if (asAnchor && href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} {...props} className="inline-block bg-transparent border-0 p-0 cursor-pointer">
      {content}
    </button>
  );
}
