"use client"

import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

type NumberTickerProps = {
  value: number;
  duration?: number;
};

const NumberTicker = ({ value, duration = 2 }: NumberTickerProps) => {
  const mv = useMotionValue(0);
  const hasAnimated = useRef(false);

  const rounded = useTransform(mv, (v) =>
    Math.floor(v).toLocaleString()
  );

  useEffect(() => {
    if (hasAnimated.current) {
      mv.set(value);
      return;
    }

    animate(mv, value, {
      duration,
      ease: "easeOut",
    });

    hasAnimated.current = true;
  }, [value]);

  return (
    <motion.span
      className="inline-block text-right"
      style={{ minWidth: "3ch" }}
    >
      {rounded}
    </motion.span>
  );
};

export default NumberTicker;