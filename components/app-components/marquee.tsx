"use client";

import { motion } from "motion/react";

const components = [
  "Auth Button",
  "Card",
  "Input",
  "Avatar",
  "Modal",
  "Badge",
  "Dropdown",
  "Tooltip",
];

interface SlantedMarqueeProps {
  duration?: number;
  reverse?: boolean;
  className?: string;
}

export const SlantedMarquee = ({
  duration = 20,
  reverse = false,
  className = "",
}: SlantedMarqueeProps) => {
  return (
    <div className={`rotate-[-45deg] w-[140%] ${className}`}>
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration,
          ease: "linear",
        }}
        className="flex gap-16 whitespace-nowrap border-y border-dashed bg-accent"
      >
        {[...components, ...components].map((item, i) => (
          <span
            key={i}
            className="text-sm tracking-wide border-x border-dashed px-8 bg-background"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};