import type { Metadata } from "next";
import { Caveat, Poppins, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import { RootProvider } from 'fumadocs-ui/provider/next';
import { ThemeProvider } from "@/provider/theme-provider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "FlowUI",
  description: "A modern UI component library to build the entire flow of the component.",
};

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
        className={`${caveat.variable} ${poppins.variable} ${mono.variable} ${sans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <RootProvider>
            {children}
          </RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
