"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { themes } from "@/lib/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="mx-auto max-w-6xl px-5 sm:px-8">
      <nav
        aria-label="Main"
        className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-3 min-h-16 border-b border-border"
      >
        <Link href="/" className="font-semibold tracking-tight text-lg">
          Tejeswar Naidu S
        </Link>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-8 text-[0.9375rem]">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`underline-offset-[10px] decoration-2 decoration-primary hover:text-foreground ${
                  active
                    ? "text-foreground underline"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div>
            <label htmlFor="theme" className="sr-only">
              Theme
            </label>
            <select
              id="theme"
              value={mounted ? theme : "light"}
              onChange={(e) => setTheme(e.target.value)}
              className="bg-transparent border border-border rounded-sm py-1 pl-2 pr-1 text-sm text-foreground max-w-[9.5rem] cursor-pointer"
            >
              {themes.map((t) => (
                <option key={t.id} value={t.id} className="bg-background text-foreground">
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
}
