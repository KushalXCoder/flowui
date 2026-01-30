import type { Metadata } from "next";
import { Caveat, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
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
    <html lang="en">
      <body
        className={`${caveat.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
