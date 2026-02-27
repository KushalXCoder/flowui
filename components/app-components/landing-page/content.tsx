import { labels } from "@/lib/data";
import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
            {/* <div className="relative flex items-center justify-center">
                <Image
                    src="/peep.svg"
                    alt="Peep Illustration"
                    height={1000}
                    width={1000}
                    draggable={false}
                    priority
                    className="w-70 select-none"
                />

                <Image
                    src="/arrow.svg"
                    alt="Arrow"
                    height={1000}
                    width={1000}
                    draggable={false}
                    priority
                    className="absolute top-10 -right-3 w-20 rotate-6"
                />

                <p className="absolute top-2 -right-25 max-w-40 text-lg text-end text-gray-600 font-caveat leading-snug -rotate-2">
                    It just makes everything easier !
                </p>
            </div> */}
        </motion.div>
    )
}