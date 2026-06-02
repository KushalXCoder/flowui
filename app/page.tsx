"use client";

import { DashedBox } from "@/components/app-components/dashed-box";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
// import LandingPage from "@/components/app-components/landing-page/landing-page";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { drop001Sound } from "@/lib/drop-001";
import { useSound } from "use-sound";
import { useState } from "react";
import { Navbar } from "@/components/app-components/navbar/navbar";
import Link from "next/link";
import { Showcase } from "@/components/app-components/landing-page/showcase";
import { OpenSourceEffect } from "@/components/app-components/open-source-effect";

function LogoTooltip({
  name,
  src,
}: {
  name: string;
  src: string;
}) {
  const [open, setOpen] = useState(false);
  const [play] = useSound(drop001Sound.dataUri);

  return (
    <Tooltip
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen);
        if (nextOpen) play();
      }}
    >
      <TooltipTrigger asChild>
        <Image
          className="size-12 bg-accent rounded-full p-2 hover:shadow-sm transition-shadow"
          src={src}
          alt={name}
          width={1000}
          height={1000}
          priority
          draggable={false}
        />
      </TooltipTrigger>
      <TooltipContent className="font-secondary">{name}</TooltipContent>
    </Tooltip>
  );
}

export default function Home() {
  const logos = [
    { name: 'shadcn', src: '/shadcn.svg' },
    { name: 'tailwind', src: '/tailwind.svg' },
    { name: 'react', src: '/react.svg' },
    { name: 'typescript', src: '/typescript.svg' }
  ];

  return (
    <div className="relative min-h-screen max-w-360 mx-auto flex flex-col items-center border-muted">
      <div className="h-full absolute top-0 -left-2 w-2 border-x border-dashed border-muted" />
      <div className="h-full absolute top-0 -right-2 w-2 border-x border-dashed border-muted" />
      {/* <LandingPage /> */}
      <div className="w-full">
        <Navbar />
        <div className="flex justify-center items-center text-center gap-20 my-30">
          <div className="max-w-2xl">
            <div className="space-y-6">
              <h1 className="font-primary text-primary text-6xl font-bold tracking-tight">
                UI components that helps you <span className="text-blue-800">everyday</span>
              </h1>
              <p className="font-secondary text-gray-500 text-lg tracking-tight">
                FlowUI is a collection of resuable UI components, that you need to use in
                daily development. Not too much animated, not too much styled, just the component,
                that you need and can customize as your needs.
              </p>
            </div>
            <div className="flex justify-center gap-5 mt-5">
              {logos.map((logo) => (
                <LogoTooltip key={logo.name} name={logo.name} src={logo.src} />
              ))}
            </div>
            <div className="flex justify-center gap-5 font-secondary mt-6">
              <DashedBox className="text-primary">
                npx shadcn@latest add flowui
              </DashedBox>
              <Link href="/docs/introduction">
                <div className="px-4 py-2 flex items-center gap-2 bg-accent text-black group">
                  Docs
                  <span className="relative overflow-hidden size-4 group">
                    <ArrowUpRight
                      className="absolute top-0 left-0 size-4 transition-transform duration-500 group-hover:translate-x-full group-hover:-translate-y-full"
                    />
                    <ArrowUpRight
                      className="absolute top-full left-0 size-4 transition-transform duration-500 group-hover:-translate-y-full"
                    />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-screen h-px border border-dashed border-muted" /> */}
      <div className="w-full py-10 border-t border-dashed border-muted">
        <Showcase />
      </div>
      <div className="relative w-full h-70 overflow-hidden">
        <OpenSourceEffect />
      </div>
    </div>
  );
}