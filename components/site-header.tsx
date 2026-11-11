"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AlignJustify } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/#details", label: "Join a Run" },
  { href: "/calendar", label: "Calendar" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur opacity-90 bg-foreground text-white flex w-full items-center justify-between py-2 px-4">
      <Link href="/" className="mt-1 font-hero text-xl tracking-widest flex items-start gap-2">
        HAPPY
        <Image src="/sun-white.svg" alt="" width={16} height={16} className="mt-0.5" />
        FEET
      </Link>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetTrigger className="flex size-10 items-center justify-center rounded-lg text-white" aria-label="Open navigation menu">
          <AlignJustify className="size-5" />
        </SheetTrigger>

        <SheetContent side="right" className="border-background/20 bg-background text-foreground">
          <SheetHeader>
            <SheetTitle className="font-hero text-2xl mt-12 self-center tracking-wide text-primary">
              <Image
                src="/logo-text.svg"
                alt="Happy Feet Run Club Logo"
                width={128}
                height={32}
              />
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 mt-2 px-4 font-sans">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 text-sm hover:text-secondary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <SheetFooter>
            <div className="mx-auto w-full text-center text-xs text-foreground/50 p-4">
              <p>© {new Date().getFullYear()} Happy Feet Run Club. All rights reserved.</p>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </header>
  );
}
