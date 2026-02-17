import { motion } from "motion/react";

export const Animations = () => {
    return (
        <>
            <motion.div
                initial={{ translateX: "-100%" }}
                animate={{ translateX: "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 1.2 }}
                className="absolute top-0 left-0 w-full h-px origin-left border-t border-dashed border-gray-600 dark:border-zinc-800"
            />
            <motion.div
                initial={{ translateX: "100%" }}
                animate={{ translateX: "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 1.2 }}
                className="absolute bottom-0 left-0 w-full h-px origin-left border-b border-dashed border-gray-600 dark:border-zinc-800"
            />
            <motion.div
                initial={{ translateY: "-100%" }}
                animate={{ translateY: "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 2.4 }}
                className="absolute left-0 top-0 h-full w-px origin-top border-l border-dashed border-gray-400 dark:border-zinc-800"
            />
            <motion.div
                initial={{ translateY: "100%" }}
                animate={{ translateY: "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 2.4 }}
                className="absolute right-0 top-0 h-full w-px origin-top border-r border-dashed border-gray-400 dark:border-zinc-800"
            />
        </>
    )
}