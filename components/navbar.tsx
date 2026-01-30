import Image from "next/image"
import { Button } from "./ui/button";
import { Github, Star } from "lucide-react";
import { Sun } from "./animate-ui/icons/sun";

export const Navbar = () => {
    const navItems = [
        { name: "Docs", href: "/docs" },
        { name: "Components", href: "/components" },
    ];
    return (
        <nav className="px-10 py-5">
            <div className="flex justify-between items-center">
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    height={1000}
                    width={1000}
                    priority
                    draggable={false}
                    className="size-8"
                />
                <ul className="flex items-center gap-4 font-poppins text-sm">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a href={item.href}>{item.name}</a>
                        </li>
                    ))}
                    <div className="h-4 w-px rounded-lg border border-dashed border-gray-500" />
                    <div className="flex items-center gap-2">
                        <Button className="bg-transparent text-black hover:bg-accent transition-colors cursor-pointer gap-2">
                            <Github className="mb-0.5" />
                            100K
                        </Button>
                        <Sun animateOnHover className="size-8 p-2 rounded-lg hover:bg-accent" />
                    </div>
                </ul>
            </div>
        </nav>
    )
}