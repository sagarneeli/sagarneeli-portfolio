"use client";

import { motion } from "framer-motion";

type LogoProps = {
  size?: number;
  className?: string;
};

// Minimal, initials-based monogram with subtle gradient ring
export function Logo({ size = 32, className = "" }: LogoProps) {
  const s = size;
  return (
    <motion.svg
      width={s}
      height={s}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      aria-label="Sagar Neeli monogram"
    >
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>

      {/* Outer minimal ring */}
      <circle
        cx="32"
        cy="32"
        r="21"
        fill="none"
        stroke="url(#grad)"
        strokeWidth="2.25"
      />

      {/* Clean SN monogram using simple geometry */}
      {/* N */}
      <path
        d="M20 42 V22 L42 42 V22"
        fill="none"
        stroke="url(#grad)"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* S (two simple arcs) */}
      <path
        d="M44 24 C 36 18, 28 18, 28 24 C 28 28, 44 28, 44 32 C 44 38, 36 38, 28 32"
        fill="none"
        stroke="url(#grad)"
        strokeWidth="2.75"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}


