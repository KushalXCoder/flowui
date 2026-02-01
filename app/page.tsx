"use client";

import Footer from "@/components/app-components/footer";
import LandingPage from "@/components/app-components/landing-page/landing-page";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-secondary overflow-hidden px-30">
      <LandingPage />
      {/* <div className="h-screen w-full border-x border-dashed border-gray-400">
        <Divider type="full" />
        <div className="h-full w-full pt-4">

        </div>
      </div> */}
      <Footer />
    </div>
  );
}