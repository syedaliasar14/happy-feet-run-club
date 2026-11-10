import Image from "next/image";
import { AtSign } from "lucide-react";
import { config } from "@/config";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#details", label: "Run Details" },
];

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-secondary bg-foreground text-background">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <a href="#top" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Happy Feet Run Club logo"
              width={40}
              height={40}
              className="size-10"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl tracking-wide">
                HAPPY FEET
              </span>
              <span className="font-mono text-[0.6rem] font-semibold tracking-[0.3em] text-secondary">
                RUN CLUB
              </span>
            </span>
          </a>
          <p className="max-w-xs text-sm text-background/70">
            All paces, all people, always free.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="font-mono text-xs font-semibold tracking-[0.25em] text-accent uppercase">
            Explore
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-background/80 transition-colors hover:text-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-xs font-semibold tracking-[0.25em] text-accent uppercase">
            Follow the club
          </p>
          <a
            href={config.instagramURL || "#"}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-lg border-2 border-background/20 px-3 py-2 text-sm text-background/80 transition-colors hover:border-accent hover:text-accent"
          >
            <AtSign className="size-4" />
            Instagram
          </a>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-background/50 sm:flex-row sm:px-6">
          <p>© 2026 {config.title}. All rights reserved.</p>
          <p className="font-mono tracking-widest uppercase">
            Run happy since 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
