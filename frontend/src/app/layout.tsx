import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { getContent } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Dynamically generate metadata from content.json
const content = getContent();
export const metadata: Metadata = {
  title: {
    default: content.site.title,
    template: `%s | ${content.site.title}`,
  },
  description: content.site.tagline,
  // TODO: Add more SEO metadata like openGraph, twitter cards, etc.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-gray-50 text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-50`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
