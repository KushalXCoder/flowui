"use client"

import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { RefObject, useEffect, useRef } from "react";

type NumberTickerProps = {
  value: number;
  duration?: number;
  hasNumberAnimated: RefObject<boolean>;
};

const NumberTicker = ({ value, duration = 2, hasNumberAnimated }: NumberTickerProps) => {
  const mv = useMotionValue(0);

  const rounded = useTransform(mv, (v) =>
    Math.floor(v).toLocaleString()
  )

  useEffect(() => {
    // Check if the number has already animated
    if(hasNumberAnimated.current) {
      mv.set(value);
      rounded.set(value.toString());
      return;
    }
    // Animate the number
    animate(mv, value, {
      duration,
      ease: "easeOut",
    });

    hasNumberAnimated.current = true;
  }, [value])

  return (
    <motion.span
      className="inline-block text-right"
      style={{ minWidth: "3ch" }}
    >
      {rounded}
    </motion.span>
  )
}

export default NumberTicker;