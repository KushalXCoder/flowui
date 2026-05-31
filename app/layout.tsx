import type { Metadata } from "next";
import { Caveat, Poppins, Open_Sans, Mona_Sans, Geist_Mono, Red_Hat_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { RootProvider } from 'fumadocs-ui/provider/next';
import { ThemeProvider } from "@/provider/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import metadataContent from "./metadata";
import { TooltipProvider } from "@/components/ui/tooltip";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
});

const code = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-code",
});

const mono = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mono",
});

const sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const secondary = Red_Hat_Mono({
  subsets: ["latin"],
  variable: "--font-secondary",
});

const primary = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-primary",
});

// Kept the metadata in a separate file, to make it look clean
export const metadata: Metadata = metadataContent;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="89816340-f6fa-4b54-9b02-88555cf74cdc"></script>
      </head>
      <body
        className={`${caveat.variable} ${poppins.variable} ${mono.variable} ${sans.variable} ${code.variable} ${primary.variable} ${secondary.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Analytics />
          <RootProvider>
            <TooltipProvider>
              {children}
            </TooltipProvider>
          </RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
