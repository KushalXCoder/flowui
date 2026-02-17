"use client"

import Link from "next/link";
import { Button } from "../../ui/button";
import { Github } from "lucide-react";
import { Sun } from "../animate-ui/icons/sun";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Logo from "../logo";
import NumberTicker from "../number-ticket";

export const Navbar = () => {
  const [showFixed, setShowFixed] = useState<boolean>(false);
  const [delay, setDelay] = useState<number>(2.4);

  const isFirstTime = useRef<boolean>(true);
  const hasNumberAnimated = useRef<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setShowFixed(window.scrollY > 60)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, []);

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      setDelay(0);
      return;
    }
  }, []);

  const NavContent = () => (
    <>
      <motion.div
        initial={{ opacity: 0, y: -12, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: delay }}
        className={`flex justify-between items-center ${showFixed ? `border-x border-dashed border-gray-400 dark:border-gray-800 px-10 py-3` : ``} dark:text-zinc-400`}
      >
        <Logo />
        <ul className="flex items-center gap-4 text-sm font-poppins dark:text-gray-400">
          <Link href="/docs" className="hover:text-black dark:hover:text-white transition-colors">Docs</Link>
          <Link href="/components" className="hover:text-black dark:hover:text-white transition-colors">Components</Link>

          <div className="h-4 w-px border border-dashed border-gray-500 dark:border-zinc-700" />

          <Button className="gap-2 bg-transparent text-black dark:text-gray-400 hover:bg-accent">
            <Github className="size-5" />
            <NumberTicker value={100} hasNumberAnimated={hasNumberAnimated} />
          </Button>

          <Sun animateOnHover className="size-8 p-2 rounded-lg hover:bg-accent" />
        </ul>
      </motion.div>
    </>
  )

  return (
    <>
      <nav className="px-10 py-4">
        <NavContent />
      </nav>
      <AnimatePresence>
        {showFixed && (
          <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 px-30 bg-white dark:bg-black border-b border-dashed border-gray-400 dark:border-gray-800"
          >
            <NavContent />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}