"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type ChangingTextProps = {
    initialText: string;
    finalText: string;
    className?: string;
    variant?: "default" | "blur";
    blurValue?: number;
    speed?: number;
};

const ChangingText = ({
    initialText,
    finalText,
    className,
    variant = "default",
    blurValue = 4,
    speed = 0.3,
} : ChangingTextProps) => {
    const [mode, setMode] = useState<"initial" | "final">("initial");
    return (
        <AnimatePresence mode="wait">
            <motion.h1
                key={mode}
                className={cn(className)}
                initial={{ opacity: 0, x: -20, filter: variant === "blur" ? `blur(${blurValue}px)` : "none" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: 20, filter: variant === "blur" ? `blur(${blurValue}px)` : "none" }}
                transition={{ duration: speed }}
                onMouseEnter={() => setMode("final")}
                onMouseLeave={() => setMode("initial")}
            >
                {mode === "initial" ? initialText : finalText}
            </motion.h1>
        </AnimatePresence>
    )
}

export default ChangingText;