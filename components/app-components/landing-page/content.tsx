import { labels } from "@/lib/data";
import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SlantedMarquee } from "../marquee";
import { AuthButton } from "@/registry/flowui/components/auth-buttons";

export const Content = () => {
    return (
        <motion.div className="w-full flex justify-between items-center bg-background font-mono">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    {/* <p className="text-gray-500 text-sm font-mono">Making development flow easier and faster</p> */}
                    <div className="border border-border border-dashed w-fit p-1">
                        <div className="h-full w-full border border-border border-dashed px-4 py-1 text-sm">
                            v1.0.0
                        </div>
                    </div>
                    <h1 className="font-caveat text-6xl font-semibold -mt-2 flex items-end gap-3">
                        Flow UI
                    </h1>
                    <p className="max-w-xl text-sm text-gray-700 dark:text-gray-500 font-mono">
                        A UI lib consisting of components that you build daily or for every project with the aim to make your development flow easier and faster.
                    </p>
                </div>

                <div className="flex items-start gap-3">
                    {labels.map((label) => (
                        <span
                            key={label}
                            className="px-4 py-1 rounded-2xl border border-dashed border-border text-sm hover:border-gray-500 transition-all duration-200"
                        >
                            {label}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-5">
                    <Link href="/docs/introduction">
                        <Button className="w-fit flex items-center gap-2 mt-2 hover:gap-4 cursor-pointer">
                            Explore Components
                            <ArrowRight />
                        </Button>
                    </Link>
                </div>
            </div>
            {/* 3 Carousel Code */}
            <div className="w-150 h-62.5 relative overflow-hidden flex flex-col justify-center gap-8">
                <SlantedMarquee duration={40} reverse />
                <SlantedMarquee duration={40} />
                <SlantedMarquee duration={40} reverse />
            </div>
        </motion.div>
    )
}