import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoArabic = Noto_Sans_Arabic({ subsets: ["arabic"], variable: "--font-arabic" });

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    authors: [{ name: "Moroccan Organica" }],
    icons: {
        icon: [
            { url: "/assets/favicon/favicon.ico", sizes: "any" },
            { url: "/assets/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/assets/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [
            { url: "/assets/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
        other: [
            { url: "/assets/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
            { url: "/assets/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
        ],
    },
    manifest: "/assets/favicon/site.webmanifest",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta charSet="utf-8" />
            </head>
            <body className={`${inter.variable} ${notoArabic.variable} font-sans antialiased overflow-x-hidden`}>
                <TooltipProvider>
                    {children}
                    <Toaster />
                    <Sonner />
                </TooltipProvider>
            </body>
        </html>
    );
}
