"use client";

import { Divider } from "@/components/app-components/divider";
import Footer from "@/components/app-components/footer";
import LandingPage from "@/components/app-components/landing-page/landing-page";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden px-40 bg-accent">
      <LandingPage />
    </div>
  );
}