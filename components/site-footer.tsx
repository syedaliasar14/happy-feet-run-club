import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";
import { AtSign } from "lucide-react";
import { config } from "@/config";
import { sanityFetch } from "@/sanity/lib/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/queries/site-settings";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#details", label: "Run Details" },
];

async function CopyrightYear() {
  await connection();
  return new Date().getFullYear();
}

export async function SiteFooter() {
  const { data: settings } = await sanityFetch({
    query: SITE_SETTINGS_QUERY,
    stega: false,
  });
  const siteTitle = settings?.title || config.title;
  const instagramUrl = settings?.instagramUrl || config.instagramURL || "#";

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <Link href="#top" className="flex items-center gap-2.5">
            <Image
              src="/logo-text-white.svg"
              alt="Happy Feet Run Club logo"
              width={160} height={108}
              className="h-auto w-40"
            />
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
            href={instagramUrl}
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
          <p>© <Suspense fallback={null}><CopyrightYear /> </Suspense>{siteTitle}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
