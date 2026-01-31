import { cn } from "@/lib/utils"
import { motion } from "motion/react";

export const Divider = ({ type, className } : { type: string, className?: string }) => {
    return (
      <>
        <motion.div
          initial={{ translateX: "-100%" }}
          animate={{ translateX: "0%" }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}      
          className={cn(`
            pointer-events-none
            absolute
            inset-x-0
            left-1/2
            -translate-x-1/2
            h-4
            overflow-hidden
            border-y border-dashed border-gray-400
            z-10

            before:content-['']
            before:absolute
            before:inset-y-0
            before:left-[-100vw]
            before:w-[200vw]
          `, className)}
          style={{
            width: type === "full" ? "100%" : "100vw"
          }}
        />
      </>
    )
}