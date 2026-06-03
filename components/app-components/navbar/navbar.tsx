"use client"

import Link from "next/link";
import { Button } from "../../ui/button";
import { Github } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../logo";
import NumberTicker from "../number-ticker";
import { ModeToggle } from "../mode-toggle";
import { fetchStars } from "@/lib/helper/getStars";

export const Navbar = () => {
  const navLinks = [
    { name: "Docs", href: "/docs/introduction" },
    { name: "Components", href: "/docs/installation" },
    { name: "Blocks", href: "/blocks" },
  ];

  const [stars, setStars] = useState<number>(0);

  // Fetch GitHub stars
  useEffect(() => {
    const getStarsData = async () => {
      const result = await fetchStars();
      if (result > 0) {
        setStars(result);
      }
    };
    getStarsData();
  }, []);

  return (
    <nav className="sticky top-0 px-10 py-5 flex justify-between items-center bg-background border-b border-dashed border-muted z-10">
      <Logo />
      <ul className="flex items-center gap-2 text-sm font-poppins">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:bg-accent p-2 rounded-md"
          >
            {link.name}
          </Link>
        ))}
        <div className="h-4 w-px border border-dashed border-gray-500 dark:border-zinc-700" />
        <div className="flex items-center gap-2">
          <Link href="https://github.com/KushalXCoder/flowui">
            <Button className="flex items-center gap-4 bg-transparent text-black hover:bg-accent dark:text-white cursor-pointer">
              <Github />
              <NumberTicker key={stars} value={stars} />
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </ul>
    </nav>
  );
};