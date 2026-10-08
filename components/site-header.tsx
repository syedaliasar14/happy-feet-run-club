"use client";

import { useState } from "react";
import { Footprints, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#details", label: "Details" },
  { href: "#season", label: "Season" },
  { href: "#calendar", label: "Calendar" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-brand-brown bg-brand-cream/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-full border-2 border-brand-brown bg-brand-cyan text-brand-ink">
            <Footprints className="size-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-wide text-brand-brown">
              HAPPY FEET
            </span>
            <span className="font-mono text-[0.6rem] font-semibold tracking-[0.3em] text-brand-red">
              RUN CLUB
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold tracking-widest text-brand-brown uppercase transition-colors hover:text-brand-red"
            >
              {link.label}
            </a>
          ))}
          <Button
            render={<a href="#cta" />}
            className="border-2 border-brand-brown bg-brand-cyan font-bold text-brand-ink poster-shadow-sm hover:bg-brand-cyan/90"
          >
            Join a Run
          </Button>
        </nav>

        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-lg border-2 border-brand-brown text-brand-brown md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t-2 border-brand-brown bg-brand-cream px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-bold tracking-widest text-brand-brown uppercase hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <Button
              render={<a href="#cta" onClick={() => setMenuOpen(false)} />}
              className="mt-2 border-2 border-brand-brown bg-brand-cyan font-bold text-brand-ink"
            >
              Join a Run
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
