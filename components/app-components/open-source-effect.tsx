"use client";

import { motion } from "motion/react";

export function OpenSourceEffect() {
  return (
    <div className="flex justify-center w-full">
      <motion.svg
        viewBox="0 0 400.8 90.702"
        className="w-auto h-auto max-w-2xl"
        fill="none"
      >
      <motion.path
        d="M 234.3 72.5 L 214.9 72.5 L 206.7 43.1 L 206.3 43.1 L 198 72.5 L 178.6 72.5 L 159.3 19.7 L 180.7 19.7 L 188.7 50.9 L 189.4 50.9 L 197.7 19.7 L 217.5 19.7 L 225.5 50.9 L 226.2 50.9 L 234.3 19.7 L 253.7 19.7 L 234.3 72.5 Z M 261.1 44.8 L 261.1 3.7 L 283.2 3.7 L 283.2 44.5 Q 283.2 50.3 286.3 53.75 Q 289.4 57.2 295.3 57.2 Q 301.2 57.2 304.35 53.7 Q 307.5 50.2 307.5 44.5 L 307.5 3.7 L 329.6 3.7 L 329.6 44.8 Q 329.6 58.9 320.7 66.3 Q 311.8 73.7 295.4 73.7 Q 279 73.7 270.05 66.3 Q 261.1 58.9 261.1 44.8 Z M 0 72.5 L 0 3.7 L 55.6 3.7 L 55.6 20.2 L 22.1 20.2 L 22.1 32 L 50.9 32 L 50.9 47.8 L 22.1 47.8 L 22.1 72.5 L 0 72.5 Z M 125.9 18.5 Q 139.8 18.5 147.75 25.55 Q 155.7 32.6 155.7 46.1 Q 155.7 59.6 147.75 66.65 Q 139.8 73.7 125.9 73.7 Q 112 73.7 104.1 66.7 Q 96.2 59.7 96.2 46.1 Q 96.2 32.5 104.1 25.5 Q 112 18.5 125.9 18.5 Z M 85.9 72.5 L 66 72.5 L 66 0 L 85.9 0 L 85.9 72.5 Z M 367.5 72.5 L 345.4 72.5 L 345.4 3.7 L 367.5 3.7 L 367.5 72.5 Z M 116.1 43.3 Q 116.1 32 125.9 32 Q 135.8 32 135.8 43.3 L 135.8 49 Q 135.8 60.2 125.9 60.2 Q 116.1 60.2 116.1 49 L 116.1 43.3 Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        animate={{
          pathLength: 1,
          opacity: 1,
        }}
        transition={{
          pathLength: {
            duration: 4,
            ease: "easeInOut",
          },
          opacity: {
            duration: 0.5,
          },
        }}
      />
    </motion.svg>
    </div>
  );
}