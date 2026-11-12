import { AlertCircleIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection({ alertUpdate }: { alertUpdate?: string }) {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-8 pb-16 text-center sm:px-6">
        <Image
          src="/logo.png"
          alt="Happy Feet Run Club logo"
          width={300} height={300}
          priority
          className="size-60"
        />

        <h1 className="hidden md:block mt-8 font-hero text-7xl tracking-wide text-primary md:text-8xl">
          HAPPY
          <Image
            src="/sun.svg"
            alt=""
            aria-hidden="true"
            width={64} height={64}
            className="inline-block size-10 sm:size-20 mx-4 -mt-2"
          />
          FEET
          <span className="text-4xl block text-foreground tracking-[0.3em]">RUN CLUB</span>
        </h1>

        <Image src="/logo-text.svg"
          alt="Happy Feet Run Club text logo"
          width={320} height={64}
          priority
          className="size-65 block md:hidden"
        />

        {alertUpdate && (
          <div className="mt-10 mb-4 bg-primary shadow-md shadow-primary/50 flex items-center w-full text-center justify-center p-4 text-white font-medium">
            <AlertCircleIcon className="inline-block mr-2" />
            {alertUpdate}
          </div>
        )}

        <div className="mt-8 flex gap-4">
          <Link href="#details" className="btn-primary">
            Join a Run
          </Link>
          <Link href="/about" className="btn-outline">
            About Us
          </Link>
        </div>

        <div className="mt-16 flex flex-col gap-2 text-3xl font-display">
          <span>Free to Join</span>
          <span>No Sign-ups</span>
          <span
            className="inline-block bg-center bg-no-repeat px-12 -mt-2 py-3 text-4xl"
            style={{
              backgroundImage: "url('/brush-stroke.png')",
              backgroundSize: '100% 100%',
            }}
          >
            Just Show Up!
          </span>

          <Link href="#details-where" className="mt-4 inline-flex items-center justify-center gap-2 text-xl">
            <MapPinIcon className="size-6 fill-primary stroke-none" aria-hidden="true" />
            Southington, CT
          </Link>
        </div>
      </div>
    </section>
  );
}
