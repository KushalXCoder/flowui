"use client";

import { motion } from "motion/react";

const components = [
  "Auth Buttons",
  "Changing Text",
  "Speaker",
  "Lift Button",
  "Debounced Input",
  "Scrollbar",
  "File Select",
  "Password Input",
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
  const repeatedComponents = [...components, ...components];

  return (
    <div className={`-rotate-45 overflow-hidden ${className}`}>
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration,
          ease: "linear",
        }}
        className="flex gap-16 whitespace-nowrap border-y border-dashed bg-accent w-fit"
      >
        {repeatedComponents.map((item, i) => (
          <span
            key={i}
            className="text-sm tracking-wide border-x border-dashed px-8 py-1 bg-background shrink-0"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};