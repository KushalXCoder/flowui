"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun } from "./animate-ui/icons/sun";
import { Moon } from "../animate-ui/icons/moon";

export const ModeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <>
            {theme === "light" ?
                <Sun
                    animateOnHover
                    className="size-8 p-2 rounded-lg hover:bg-accent"
                    onClick={() => setTheme("dark")}
                />
                : 
                <Moon
                    animateOnHover
                    className="size-8 p-2 rounded-lg hover:bg-accent"
                    onClick={() => setTheme("light")}
                />
            }
        </>
    )
}