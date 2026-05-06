/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <motion.svg 
      viewBox="0 0 100 100" 
      fill="currentColor" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <path d="M50 15 L18 50 L35 90 L50 15 Z" />
      <path d="M50 15 L82 50 L65 90 L50 15 Z" />
    </motion.svg>
  );
}
