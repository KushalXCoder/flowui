import { Navbar } from "../navbar/navbar";
import { motion } from "motion/react";
import { Divider } from "../divider";
import Footer from "../footer";
import { Animations } from "./animations";
import { Content } from "./content";
import { Tweets } from "../tweets";
import { Showcase } from "./showcase";

const LandingPage = () => {
    return (
        <div className="min-h-screen w-full bg-background flex flex-col relative">
            {/* Left and Right Border Animations */}
            <motion.div
                initial={{ translateY: "-100%" }}
                animate={{ translateY: "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute left-0 top-0 h-full w-px origin-top border-l border-dashed border-gray-400 z-10"
            />
            <motion.div
                initial={{ translateY: "100%" }}
                animate={{ translateY: "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute right-0 top-0 h-full w-px origin-top border-r border-dashed border-gray-400 z-10"
            />
            {/* Content */}
            <Navbar />
            <Divider type="screen" />

            {/* Content */}

            {/* This height cause, I want the center container to be minimum of entire screen - navbar */}
            <div className="min-h-[calc(100vh-76px)] flex flex-col gap-10 font-poppins pt-10 px-10">
                <Content />
                <Showcase />
            </div>

            <Divider type="screen" />

            <div className="px-10 py-15">
                <Tweets />
            </div>

            <Divider type="screen" />
            <Footer />
        </div>
    )
}

export default LandingPage;