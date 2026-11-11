import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MailIcon } from "lucide-react";
import { navLinks } from "@/lib/nav-links";
import { sanityFetch } from "@/sanity/lib/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/queries/site-settings";

export async function SiteFooter() {
  const { data: settings } = await sanityFetch({
    query: SITE_SETTINGS_QUERY,
    stega: false,
  });

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <Link href="#top" className="self-center mx-auto md:mx-0 md:self-start">
          <Image
            src="/logo-text-white.svg"
            alt="Happy Feet Run Club logo"
            width={160} height={108}
            className="h-auto w-40"
          />
        </Link>

        <nav aria-label="Footer">
          <ul className="mt-3 grid gap-2 text-center md:text-left md:grid-cols-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-background/80 transition-colors hover:text-secondary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-wrap gap-3 mt-3 md:items-start justify-center">
          <Link href={settings?.instagramUrl || "#"} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-secondary transition-colors">
            <FaInstagram className="size-5" />
          </Link>
          <Link href={settings?.facebookUrl || "#"} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-secondary transition-colors">
            <FaFacebook className="size-5" />
          </Link>
          <Link href={settings?.email ? `mailto:${settings.email}` : "#"} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-secondary transition-colors">
            <MailIcon className="size-5" />
          </Link>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto w-full text-center text-xs text-background/50 p-4">
          <p>© {new Date().getFullYear()} Happy Feet Run Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
