import { cn } from "@/lib/utils"
import { motion } from "motion/react";

export const Divider = ({ type, className }: { type: string, className?: string }) => {
  return (
    <>
      <motion.div
        initial={{ translateX: "-100%" }}
        animate={{ translateX: "0%" }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
        className={cn(`
            pointer-events-none
            relative
            w-screen
            left-1/2
            -translate-x-1/2
            h-4
            overflow-hidden
            bg-background
            border-y border-dashed border-gray-400 dark:border-zinc-800
          `, className)}
        style={{
          width: type === "full" ? "100%" : "100vw"
        }}
      />
    </>
  )
}