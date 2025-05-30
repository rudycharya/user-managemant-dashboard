"use client";

import { ThemeProvider } from "next-themes";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ThemeProvider attribute="class" enableSystem={true} defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
