import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sagar Neeli - Senior Backend & AI Engineer",
  description: "Building scalable, intelligent systems with ~10 years of experience in backend engineering, distributed architectures, cloud engineering, and cutting-edge AI/ML solutions.",
  metadataBase: new URL("https://sagarneeli.com"),
  authors: [{ name: "Sagar Neeli" }],
  keywords: [
    "Sagar Neeli",
    "Backend Engineer",
    "AI Engineer",
    "Machine Learning",
    "Python",
    "FastAPI",
    "AWS",
    "Distributed Systems",
    "Cloud Engineering",
    "Portfolio"
  ],
  creator: "Sagar Neeli",
  publisher: "Sagar Neeli",
  robots: "index, follow",
  openGraph: {
    title: "Sagar Neeli - Senior Backend & AI Engineer",
    description: "Building scalable, intelligent systems with ~10 years of experience in backend engineering, distributed architectures, cloud engineering, and cutting-edge AI/ML solutions.",
    url: "https://sagarneeli.com",
    siteName: "Sagar Neeli Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sagar Neeli - Senior Backend & AI Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@sagarneeli",
    title: "Sagar Neeli - Senior Backend & AI Engineer",
    description: "Building scalable, intelligent systems with ~10 years of experience in backend engineering, distributed architectures, cloud engineering, and cutting-edge AI/ML solutions.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "16x16" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
