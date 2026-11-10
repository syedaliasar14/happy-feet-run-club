import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-16 text-center sm:px-6">
        <Image
          src="/logo.png"
          alt="Happy Feet Run Club logo"
          width={160} height={160}
          priority
          className="size-28 sm:size-40"
        />

        <h1 className="mt-8 font-hero text-7xl tracking-wide text-primary md:text-8xl">
          HAPPY FEET
          <span className="text-4xl block text-foreground tracking-[0.4em]">RUN CLUB</span>
        </h1>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link href="#details" className="btn-primary">
            Join a Run
          </Link>
          <Link href="/about" className="btn-outline">
            About
          </Link>
        </div>
      </div>
    </section>
  );
}
