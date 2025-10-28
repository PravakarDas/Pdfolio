import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./ThemeProvider";
import InitialSplash from "@/components/InitialSplash";
import StarsCanvas from "@/components/canvas/StarsCanvas";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hemant Kumar",
  description: "Portfolio website of Hemant Kumar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <Providers>
          <div className="relative bg-[#050816] text-slate-100">
            <StarsCanvas />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(110,77,255,0.12),transparent_55%)]" />
            <div className="pointer-events-none absolute bottom-[-38%] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-500/15 blur-[160px]" />

            {/* Splash on first visit */}
            <InitialSplash minDuration={1100} oncePerSession message="Launching portfolio..." />

            {/* Site content */}
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
