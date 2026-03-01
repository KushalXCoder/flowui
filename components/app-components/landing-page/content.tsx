import { labels } from "@/lib/data";
import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SlantedMarquee } from "../marquee";

export const Content = () => {
    return (
        <motion.div className="w-full flex justify-between items-center bg-secondary dark:bg-black">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    <p className="text-gray-500 text-sm">OPEN SOURCE</p>
                    <h1 className="font-caveat text-6xl font-semibold -mt-2">
                        Flow UI
                    </h1>
                    <p className="max-w-xl text-sm text-gray-700">
                        A UI lib consisting of components that you build daily or for every project with the aim to make your development flow easier and faster.
                    </p>
                </div>

                <div className="flex items-start gap-3">
                    {labels.map((label) => (
                        <span
                            key={label}
                            className="px-4 py-1 rounded-2xl border border-dashed border-gray-300 text-sm hover:border-black"
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
            <div className="w-[800px] h-[250px] relative overflow-hidden flex flex-col justify-center gap-8 pe-10">
                <SlantedMarquee duration={18} />
                <SlantedMarquee duration={25} reverse />
                <SlantedMarquee duration={40} />
            </div>
        </motion.div>
    )
}