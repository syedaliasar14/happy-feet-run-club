import { AtSign, Footprints } from "lucide-react";
import { config } from "@/config";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#details", label: "Run Details" },
  { href: "#season", label: "Season" },
  { href: "#calendar", label: "Calendar" },
  { href: "#faq", label: "FAQ" },
];

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-brand-yellow bg-brand-ink text-brand-cream">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-full bg-brand-cyan text-brand-ink">
              <Footprints className="size-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl tracking-wide">
                HAPPY FEET
              </span>
              <span className="font-mono text-[0.6rem] font-semibold tracking-[0.3em] text-brand-yellow">
                RUN CLUB
              </span>
            </span>
          </a>
          <p className="max-w-xs text-sm text-brand-cream/70">
            A vintage-spirited, modern-running crew. Every Thursday, 6:30 PM —
            all paces, all people, always free.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="font-mono text-xs font-semibold tracking-[0.25em] text-brand-cyan uppercase">
            Explore
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-brand-cream/80 transition-colors hover:text-brand-yellow"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-xs font-semibold tracking-[0.25em] text-brand-cyan uppercase">
            Follow the club
          </p>
          <a
            href={config.instagramURL || "#"}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-lg border-2 border-brand-cream/20 px-3 py-2 text-sm text-brand-cream/80 transition-colors hover:border-brand-cyan hover:text-brand-cyan"
          >
            <AtSign className="size-4" />
            Instagram
          </a>
        </div>
      </div>

      <div className="border-t border-brand-cream/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-brand-cream/50 sm:flex-row sm:px-6">
          <p>© 2026 {config.title}. All rights reserved.</p>
          <p className="font-mono tracking-widest uppercase">
            Run happy since 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
