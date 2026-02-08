import { motion, AnimatePresence } from "motion/react";

type AnimatedLogicProps = {
    children: React.ReactNode;
    mode: "copy" | "copied";
};

const AnimationWrapper = ({ children, mode }: AnimatedLogicProps) => {
    return (
        <AnimatePresence mode="wait">
            <motion.span
                key={mode}
                className="absolute"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
            >
                {children}
            </motion.span>
        </AnimatePresence>
    )
}

export default AnimationWrapper;