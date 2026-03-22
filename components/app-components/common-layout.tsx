"use client";

import { motion } from "motion/react";
import { Navbar } from "./navbar/navbar";
import { Divider } from "./divider";
import Footer from "./footer";

export const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen w-full bg-background flex flex-col relative">
            {/* Left and Right Border Animations */}
            <motion.div
                initial={{ translateY: "-100%" }}
                animate={{ translateY: "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute left-0 top-0 h-full w-px origin-top border-l border-dashed border-gray-400 dark:border-border z-10"
            />
            <motion.div
                initial={{ translateY: "100%" }}
                animate={{ translateY: "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute right-0 top-0 h-full w-px origin-top border-r border-dashed border-gray-400 dark:border-border z-10"
            />
            {/* Content */}
            <Navbar />
            <Divider type="screen" />

            {/* Main Content */}
            {children}

            <Divider type="screen" />
            <Footer />
        </div>
    )
}