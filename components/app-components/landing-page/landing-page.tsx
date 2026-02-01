import { Navbar } from "../navbar/navbar";
import { motion } from "motion/react";
import { Animations } from "./animations";
import { Content } from "./content";
import { Divider } from "../divider";

const LandingPage = () => {
    return (
        <div className="h-screen w-full flex flex-col relative">
            {/* Animations */}
            <motion.div
                initial={{ translateY: "-100%" }}
                animate={{ translateY: "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute left-0 top-0 h-full w-px origin-top border-l border-dashed border-gray-400"
            />
            <motion.div
                initial={{ translateY: "100%" }}
                animate={{ translateY: "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute right-0 top-0 h-full w-px origin-top border-r border-dashed border-gray-400"
            />
            {/* Content */}
            <Navbar />
            <Divider type="screen" className="top-1/11" />
            <div className="flex flex-col flex-1 w-full">
                <div className="flex-1 w-full pt-4">
                    <div className="h-full flex items-center font-poppins bg-gray-50">
                        <div className="relative w-full bg-white">
                            <Animations />
                            <Content />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;