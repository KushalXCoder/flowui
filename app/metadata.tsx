import { Metadata } from "next";

const metadataContent: Metadata = {
  metadataBase: new URL("https://flowui.vercel.app"),

  title: {
    default: "FlowUI — Copy-Paste UI Components for Next.js & Tailwind",
    template: "%s | FlowUI",
  },

  description:
    "Beautiful UI components built with shadcn/ui, Tailwind CSS, and Framer Motion. Copy, paste, and build faster.",

  alternates: {
    canonical: "https://flowui.vercel.app",
  },

  openGraph: {
    type: "website",
    url: "https://flowui.vercel.app",
    siteName: "FlowUI",
    title: "FlowUI — Copy-Paste UI Components",
    description:
      "Developer-focused UI components built with modern tools to improve your development flow.",
    images: [
      {
        url: "https://flowui.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "FlowUI UI Components Library",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FlowUI — Copy-Paste UI Components",
    description:
      "Developer-focused UI components built with shadcn/ui, Tailwind, and Framer Motion.",
    images: ["https://flowui.vercel.app/og-image.png"],
    creator: "@KushalXCoder",
  },

  icons: {
    icon: "/logo.svg",
  },
};

export default metadataContent;