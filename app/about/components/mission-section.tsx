import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url";

interface MissionSectionProps {
  data?: {
    title?: string | null;
    text?: string | null;
    image?: { asset?: { _id: string; url: string | null } | null; alt?: string | null } | null;
  };
}

const FALLBACK_TITLE = "Our Shared Mission";
const FALLBACK_TEXT = `Our mission is to build a strong running community for young adults in Southington, CT. We aim to make running accessible, enjoyable, and social — removing pressure, competition, and cost from the equation. We provide an inviting space where runners of all levels — from beginners taking their first steps to seasoned marathoners — can find the professional support and encouragement they need to stay active.

Our purpose is simple: to foster health, positivity, and camaraderie within our local community. We believe that running is more than just a sport; it is a way to connect with neighbors, explore the beauty of Southington, and build a lasting culture of wellness that is accessible to everyone.`;

export function MissionSection({ data }: MissionSectionProps) {
  const title = data?.title || FALLBACK_TITLE;
  const paragraphs = (data?.text || FALLBACK_TEXT).split(/\n\s*\n/);
  const imageUrl = data?.image?.asset
    ? urlFor(data.image as SanityImageSource).url()
    : "/pics/A7401537.jpg";
  const imageAlt = data?.image?.alt || "Runners sharing the road together";

  return (
    <section className="relative overflow-hidden bg-primary-texture pt-28 pb-16 text-white sm:pt-40 sm:pb-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-10 px-4 sm:px-6 md:flex-row-reverse md:gap-16">
        <div className="flex w-full min-w-0 flex-1 flex-col gap-6">
          <h2 className="font-heading text-5xl tracking-wide sm:text-6xl">
            {title}
          </h2>
          {paragraphs.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-balance md:text-xl">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="relative aspect-square w-full min-w-0 flex-1">
          <div
            aria-hidden="true"
            className="absolute inset-0 -translate-x-3 translate-y-3 -rotate-2 bg-secondary sm:-translate-x-4 sm:translate-y-4"
          />
          <div className="relative aspect-square rotate-1 shadow-xl">
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
