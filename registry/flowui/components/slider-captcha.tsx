"use client";

import { cn } from "@/lib/utils";
import { IconNode, LucideIcon, Puzzle } from "lucide-react";
import { motion } from "motion/react";
import { ReactNode, useEffect, useRef, useState } from "react";

type SliderCaptchaProps = {
    className?: string,
    puzzleClassName?: string,
    targetClassName?: string,
    puzzleIcon?: React.ReactNode;
    tolerance?: number,
    handleDrag?: () => void,
    onSuccess?: () => void,
    onFailure?: () => void,
};

export const SliderCaptcha = ({
    className,
    puzzleClassName,
    targetClassName,
    puzzleIcon,
    tolerance = 5,
    handleDrag,
    onSuccess,
    onFailure,
}: SliderCaptchaProps) => {
    // Tracking the position of the target
    const [xPos, setXPos] = useState<number>(0);

    // Refs for the target, puzzle, and container elements
    const targetRef = useRef<HTMLDivElement>(null);
    const puzzleRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Generate the icon
    const Icon = puzzleIcon || <Puzzle className="size-4" />;

    // Defaut drag end handler
    const handleDragEnd = () => {
        if (handleDrag) handleDrag();
        else {
            if (containerRef.current) {
                // Get the positions of the target and the puzzle
                const target = targetRef.current;
                const puzzle = puzzleRef.current;

                if (target && puzzle) {
                    // Calculate the bounding rectangles of both elements
                    const targetRect = target.getBoundingClientRect();
                    const puzzleRect = puzzle.getBoundingClientRect();

                    // Check if the puzzle is within the tolerance range of the target
                    const isAligned = Math.abs(targetRect.left - puzzleRect.left) <= tolerance &&
                        Math.abs(targetRect.right - puzzleRect.right) <= tolerance;

                    if (isAligned) {
                        if (onSuccess) onSuccess();
                        else alert("Verification successful!");
                    } else {
                        if (onFailure) onFailure();
                        else alert("Verification failed. Please try again.");
                    }
                }
            }
        }
    };

    // Random position assignment for the target
    useEffect(() => {
        const container = containerRef.current;
        const target = targetRef.current;

        if (container && target instanceof HTMLElement) {
            const max = container.offsetWidth - target.offsetWidth;
            const random = Math.random() * max;

            setXPos(random);
        }
    }, []);
    return (
        <div
            className={cn(
                "flex items-center border rounded-4xl px-1 py-2",
                className
            )}
        >
            <div
                ref={containerRef}
                className="relative h-full w-full flex justify-center items-center"
            >
                <motion.div
                    ref={puzzleRef}
                    className={cn(
                        "absolute left-0 flex justify-center items-center size-8 rounded-full border cursor-grab hover:bg-accent transition-colors z-10",
                        puzzleClassName
                    )}
                    drag="x"
                    dragConstraints={containerRef}
                    dragElastic={0}
                    dragMomentum={false}
                    onDragEnd={handleDragEnd}
                >
                    {Icon}
                </motion.div>
                <div
                    ref={targetRef}
                    className={cn(
                        "absolute size-8 border border-dashed rounded-2xl hover:border-gray-400 transition-colors",
                        targetClassName
                    )}
                    style={{
                        left: xPos,
                    }}
                >
                </div>
            </div>
        </div>
    )
}