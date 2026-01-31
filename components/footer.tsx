import { Divider } from "./divider";
import { motion, Variants } from "motion/react";

const Footer = () => {
    const footerAnimation : Variants = {
        hidden: {
            opacity: 0,
            filter: "blur(4px)",
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: "easeOut",
            }
        },
    };
    return (
        <footer className="border-x border-dashed border-gray-400 font-poppins relative">
            <Divider type="screen" className="top-0" />
            <motion.div
                variants={footerAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
                className="pt-14 pb-10 px-10 flex justify-between items-start"
            >
                <div>
                    <h1 className="text-7xl font-semibold font-caveat">FLOWUI</h1>
                    <p className="text-gray-500 text-[12px] mt-1">© 2026 FlowUI. All rights reserved.</p>
                </div>
                <div>
                    <p className="mb-4"></p>
                </div>
            </motion.div>
        </footer>
    )
}

export default Footer;