import Image from "next/image";

interface CtaSectionProps {
  data?: {
    slogan?: string;
    ctaText?: string;
  };
}

export function CtaSection({ data }: CtaSectionProps) {
  const slogan = data?.slogan || "GOOD VIBES\nRUN HAPPY";
  const ctaText = data?.ctaText || "See you there!";

  return (
    <section id="cta" className="relative isolate overflow-hidden bg-primary-texture py-20 text-white">
      <div className="relative z-10 mx-auto flex w-max max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        <Image src="/sun.svg" alt=""
          aria-hidden="true" width={192} height={192}
          className="pointer-events-none absolute size-32 -left-1/4 -translate-y-8"
        />
        <h2 className="mt-4 font-heading whitespace-pre-line -rotate-1 text-6xl leading-[0.9] tracking-wide md:text-7xl whitespace-pre-line">
          {slogan}
        </h2>
        <span className="font-heading text-secondary -rotate-2 relative -right-4 text-right ml-auto text-2xl md:text-3xl">{ctaText}</span>
      </div>
    </section>
  );
}
