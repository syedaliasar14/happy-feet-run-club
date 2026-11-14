import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url";

interface AboutHeroSectionProps {
  data?: {
    title?: string | null;
    text?: string | null;
    image?: { asset?: { _id: string; url: string | null } | null; alt?: string | null } | null;
  };
}

const FALLBACK_TITLE = "Who Are We?";
const FALLBACK_TEXT = `We're a community of young adults (ages 21+) in Southington, CT who believe running is better together. Our club is a casual, welcoming space for runners of all experience levels — whether you're training for a race or just looking to move and meet new people.

There are no membership fees, no pressure, and no expectations — just good miles and good company. We meet regularly to run, connect, and build friendships beyond the pavement. If you're looking for a relaxed, supportive running group in the Southington area, you've found your people.`;

export function AboutHeroSection({ data }: AboutHeroSectionProps) {
  const title = data?.title || FALLBACK_TITLE;
  const paragraphs = (data?.text || FALLBACK_TEXT).split(/\n\s*\n/);
  const imageUrl = data?.image?.asset
    ? urlFor(data.image as SanityImageSource).url()
    : "/pics/A7401537.jpg";
  const imageAlt = data?.image?.alt || "Happy Feet Run Club members out on a run";

  return (
    <section className="relative overflow-hidden bg-[#f7eee3] py-16 pb-28 sm:py-24 sm:pb-36">
      <div className="absolute inset-0 bg-[url('/textures/scratches.png')] opacity-30" /> 
      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-10 px-4 sm:px-6 md:flex-row md:gap-16">
        <div className="flex w-full min-w-0 flex-1 flex-col gap-6">
          <h1 className="font-heading text-5xl tracking-wide text-primary sm:text-6xl">
            {title}
          </h1>
          {paragraphs.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-balance md:text-xl">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="relative aspect-square w-full min-w-0 flex-1">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 rotate-2 bg-secondary sm:translate-x-4 sm:translate-y-4"
          />
          <div className="relative aspect-square -rotate-1 shadow-xl">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
