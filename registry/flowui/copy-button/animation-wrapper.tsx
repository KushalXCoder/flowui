import { motion, AnimatePresence } from "motion/react";

type AnimatedLogicProps = {
    children: React.ReactNode;
    mode: "copy" | "copied";
};

const AnimationWrapper = ({ children, mode }: AnimatedLogicProps) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={mode}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default AnimationWrapper;