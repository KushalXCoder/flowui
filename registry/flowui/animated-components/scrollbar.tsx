"use client";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { motion, useScroll, useSpring } from "motion/react";
import { ComponentProps } from "react";

type ScrollbarProps = {
    className?: string;
    type?: "default" | "spring";
    scrollPosition?: "X" | "Y";
} & ComponentProps<typeof motion.div>;

// Different variants based on different props
const scrollbarVariants = cva("fixed z-50", {
  variants: {
    scrollPosition: {
      X: "top-0 left-0 h-1 w-full",
      Y: "top-0 right-0 w-1 h-full",
    },
  },
});

const Scrollbar = ({
    className,
    type = "default",
    scrollPosition = "X",
    ...props
} : ScrollbarProps) => {
    // Get the X and Y scroll progress
    const { scrollXProgress, scrollYProgress } = useScroll();
    const progress = scrollPosition === "X" ? scrollYProgress : scrollXProgress;

    // Get the spring value
    const springValue = useSpring(progress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Get the value based on the type used by the user
    const value = type === "spring" ? springValue : progress;

    // Get the style
    const style = scrollPosition === "X" ? { scaleX: value, originX: 0 } : { scaleY: value, originY: 0 };
    return (
        <motion.div
            className={cn(
                scrollbarVariants({ scrollPosition }),
                "bg-blue-500",
                className
            )}
            style={style}
            {...props}
        >
        </motion.div>
    )
}

export default Scrollbar;