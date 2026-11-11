import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface AboutSectionProps {
  data?: {
    image?: any;
    text?: string;
  };
}

export function AboutSection({ data }: AboutSectionProps) {
  const imageUrl = data?.image ? urlFor(data.image).url() : null;
  const text = data?.text || "All paces welcome! Whether you're a complete beginner, training for your next marathon, or just want to meet new people, come join the crew and find out what makes our feet so happy.";

  return (
    <section id="about" className="overflow-hidden bg-primary-texture py-24 text-white sm:py-24">
      <div className="mx-auto flex flex-col md:flex-row w-full max-w-6xl items-center gap-10 md:gap-16 px-4 sm:px-6">
        <div className="relative aspect-[3/4] w-full min-w-0 flex-1 md:w-auto px-4 pr-12 md:pr-4">
          <div className="relative aspect-[3/4] shadow-xl">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="A group of runners enjoying an outdoor run"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            ) : (
              <Image
                src="/pics/A7401537.jpg"
                alt="A group of runners enjoying an outdoor run"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            )}

            <Image
              src="/sun-white.svg"
              alt=""
              aria-hidden="true"
              width={160} height={160}
              className="absolute bottom-0 left-0 z-10 size-24 -translate-x-1/2 translate-y-1/4 sm:size-32 lg:size-40"
            />
            <Image
              src="/run-jog-walk.svg"
              alt=""
              aria-hidden="true"
              width={160} height={168}
              className="absolute top-0 right-0 z-10 h-28 w-28 translate-x-1/3 md:translate-x-1/2 translate-y-1/2 -rotate-2 sm:h-36 sm:w-36"
            />
          </div>
        </div>

        <div className="flex w-full min-w-0 flex-1 flex-col items-center self-end  md:mb-12 text-center">
          <p className="leading-relaxed text-lg md:text-xl text-balance">
            {text}
          </p>
          <Link href="#details" className="btn-secondary mt-8">
            Join a Run
          </Link>
        </div>
      </div>
    </section>
  );
}
