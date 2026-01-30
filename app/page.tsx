"use client";

import { Divider } from "@/components/divider";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col bg-secondary overflow-hidden px-30">
      <div className="h-full w-full border-x border-dashed border-gray-400 relative">
        <Navbar />
        <Divider />
        <div className="h-full w-full flex justify-center items-center pt-4">
          <div className="flex flex-col gap-3 font-poppins">
            <p className="text-gray-500 text-sm">UI SYSTEM</p>
            <h1 className="font-caveat text-6xl font-semibold -mt-2">Flow UI</h1>
            <p className="max-w-2xl text-sm text-gray-700">Opinionated, flow first UI components built for modern React applications. Build connected system and not isolated.</p>
          </div>
        </div>
      </div>
    </div>
  );
}