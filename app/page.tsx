"use client";

import { DashedBox } from "@/components/app-components/dashed-box";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
// import LandingPage from "@/components/app-components/landing-page/landing-page";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { drop001Sound } from "@/lib/drop-001";
import { useSound } from "use-sound";
import { useState } from "react";

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
    <div className="min-h-screen flex flex-col overflow-hidden px-40">
      {/* <LandingPage /> */}
      <div className="flex justify-center items-center text-center gap-20 my-25">
        <div className="max-w-2xl">
          <div className="space-y-6">
            <h1 className="font-primary text-primary text-6xl font-bold tracking-tight">
              UI components that helps you <span className="text-blue-800">everyday</span>
            </h1>
            <p className="font-secondary text-muted text-lg tracking-tight">
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
            <DashedBox>
              npx shadcn@latest add flowui
            </DashedBox>
            <div className="px-4 py-2 flex items-center gap-2 bg-gray-200 group">
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
          </div>
        </div>
      </div>
    </div>
  );
}