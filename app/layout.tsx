import "./globals.css";
import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Rani Singh | Frontend Developer",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white overflow-x-hidden">

        <ThemeProvider>

          {/* NAVBAR */}
          <Navbar />

          {/* MAIN CONTENT (IMPORTANT FIX) */}
          <main className="w-full">
            {children}
          </main>

          {/* FOOTER */}
          <Footer />

        </ThemeProvider>

      </body>
    </html>
  );
}