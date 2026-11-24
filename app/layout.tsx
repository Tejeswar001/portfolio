import type React from "react";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { themes } from "@/lib/themes";
import { Analytics } from "@vercel/analytics/next";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "wdth"],
});
const text = Newsreader({
  subsets: ["latin"],
  variable: "--font-text",
});

export const metadata: Metadata = {
  title: "Tejeswar Naidu S | Machine learning and data projects",
  description:
    "Portfolio of Tejeswar Naidu S, a computer science student building machine-learning models and the web apps around them.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${text.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="data-theme"
          themes={themes.map((t) => t.id)}
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="mx-auto max-w-6xl px-5 sm:px-8 pb-24">
            {children}
          </main>
          <footer className="mx-auto max-w-6xl px-5 sm:px-8 pb-10 text-sm text-muted-foreground">
            <div className="border-t border-border pt-6 flex flex-wrap justify-between gap-2">
              <span>Tejeswar Naidu S</span>
              <a
                href="mailto:tejeswarnaidu9@gmail.com"
                className="hover:text-foreground underline underline-offset-4"
              >
                tejeswarnaidu9@gmail.com
              </a>
            </div>
          </footer>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
