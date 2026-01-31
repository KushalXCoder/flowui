import { ArrowRight } from "lucide-react"
import { Navbar } from "./navbar/navbar"
import { Button } from "./ui/button"
import Image from "next/image"

const LandingPage = () => {
    const labels= ["Flow based", "Composable", "Motion ready", "Themeable"];
    return (
        <div className="h-screen w-full flex">
            <div className="flex flex-col flex-1 w-full border-x border-dashed border-gray-400">
                <Navbar />
                <div className="flex-1 w-full pt-4">
                    <div className="h-full flex items-center font-poppins bg-gray-50">
                        <div className="w-full flex justify-center items-center border-y border-dashed border-gray-600 px-0 py-10 bg-white">
                            <div className="flex flex-col gap-4 border-l border-dashed border-gray-400 px-10">
                                <div className="flex flex-col gap-3">
                                    <p className="text-gray-500 text-sm">UI SYSTEM</p>
                                    <h1 className="font-caveat text-6xl font-semibold -mt-2">Flow UI</h1>
                                    <p className="max-w-2xl text-sm text-gray-700">Opinionated, flow first UI components built for modern React applications. Build connected systems — not isolated components.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    {labels.map((label) => (
                                        <span key={label} className="px-4 py-1 rounded-2xl border border-dashed border-gray-300 text-sm">
                                            {label}
                                        </span>
                                    ))}
                                </div>
                                <Button className="w-fit flex items-center gap-2 mt-2 cursor-pointer hover:gap-4">
                                    Explore Components
                                    <ArrowRight className="" />
                                </Button>
                            </div>
                            <div className="relative flex items-center justify-center w-105 h-90">
                                {/* Character */}
                                <Image
                                    src="/peep.svg"
                                    alt="Peep Illustration"
                                    height={1000}
                                    width={1000}
                                    draggable={false}
                                    priority
                                    className="w-80 select-none"
                                />

                                {/* Arrow */}
                                <Image
                                    src="/arrow.svg"
                                    alt="Arrow"
                                    height={1000}
                                    width={1000}
                                    draggable={false}
                                    priority
                                    className="absolute top-10 right-10 w-20 rotate-6"
                                />

                                {/* Thought text */}
                                <p className="absolute top-2 -right-10 max-w-40 text-lg text-end text-gray-600 font-caveat leading-snug -rotate-2">
                                    It just makes everything easier !
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;