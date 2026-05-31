"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ModeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <>
            {theme === "light" ?
                <Sun
                    className="size-8 p-2 rounded-lg hover:bg-accent"
                    onClick={() => setTheme("dark")}
                />
                : 
                <Moon
                    className="size-8 p-2 rounded-lg hover:bg-accent"
                    onClick={() => setTheme("light")}
                />
            }
        </>
    )
}