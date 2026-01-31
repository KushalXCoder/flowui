"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { Github } from "lucide-react"
import { Sun } from "../animate-ui/icons/sun"
import NumberTicker from "../number-ticket"
import { Divider } from "../divider"
import { motion, AnimatePresence } from "motion/react"
import { useEffect, useRef, useState } from "react"

export const Navbar = () => {
  const [showFixed, setShowFixed] = useState<boolean>(false);
  const hasNumberAnimated = useRef<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setShowFixed(window.scrollY > 60)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, []);

  const NavContent = () => (
    <>
      <div className={`flex justify-between items-center ${showFixed ? `border-x border-dashed border-gray-400 px-10 py-3` : ``}`}>
        <Image src="/logo.svg" alt="Logo" width={32} height={32} />

        <ul className="flex items-center gap-4 text-sm font-poppins">
          <Link href="/docs">Docs</Link>
          <Link href="/components">Components</Link>

          <div className="h-4 w-px border border-dashed border-gray-500" />

          <Button className="gap-2 bg-transparent text-black hover:bg-accent">
            <Github />
            <NumberTicker value={100} hasNumberAnimated={hasNumberAnimated} />
          </Button>

          <Sun animateOnHover className="size-8 p-2 rounded-lg hover:bg-accent" />
        </ul>
      </div>

      {!showFixed && <Divider type="full" className="mt-4" />}
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
            className="fixed top-0 left-0 w-full z-50 px-30 bg-white border-b border-dashed border-gray-400"
          >
            <NavContent />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}