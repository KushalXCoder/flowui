import { Metadata } from "next";

const metadataContent: Metadata = {
    title: {
        default: "FlowUI - Beautifully designed components for your next project",
        template: "%s | FlowUI",
    },
    description:
        "FlowUI is a developer-focused UI component collection built with shadcn/ui, Framer Motion, and Tailwind CSS — designed to accelerate your development flow with copy-paste components.",
    keywords: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Shadcn UI",
        "UI Components",
        "Developer Flow",
        "FlowUI",
        "Design System",
        "Component Library",
        "Copy-Paste Components",
    ],
    authors: [
        {
            name: "KushalXCoder",
            url: "https://github.com/KushalXCoder",
        },
    ],
    creator: "KushalXCoder",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://flowui.vercel.app",
        title: "FlowUI - Beautifully designed components for your next project",
        description:
            "A developer-focused UI component collection built with modern tools to improve your development flow.",
        siteName: "FlowUI",
        images: [
            {
                url: "/logo.svg",
                width: 1200,
                height: 630,
                alt: "FlowUI",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "FlowUI - Beautifully designed components for your next project",
        description:
            "A developer-focused UI component collection built with modern tools to improve your development flow.",
        images: ["/logo.svg"],
        creator: "@KushalXCoder",
    },
    icons: {
        icon: "/logo.svg",
        shortcut: "/logo.svg",
        apple: "/logo.svg",
    },
    metadataBase: new URL("https://flowui.vercel.app"),
}

export default metadataContent;