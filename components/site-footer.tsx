import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";
import { AtSign } from "lucide-react";
import { config } from "@/config";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#details", label: "Run Details" },
];

async function CopyrightYear() {
  await connection();
  return new Date().getFullYear();
}

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <Link href="#top" className="flex items-center gap-2.5">
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
          </Link>
        </div>

        <nav aria-label="Footer">
          <ul className="mt-3 flex flex-col gap-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-background/80 transition-colors hover:text-secondary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <Link
            href={config.instagramURL || "#"}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-lg border-2 border-background/20 px-3 py-2 text-sm text-background/80 transition-colors hover:border-accent hover:text-accent"
          >
            <AtSign className="size-4" />
            Instagram
          </Link>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto w-full text-center text-xs text-background/50 p-4">
          <p>© <Suspense fallback={null}><CopyrightYear /> </Suspense>{config.title}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
