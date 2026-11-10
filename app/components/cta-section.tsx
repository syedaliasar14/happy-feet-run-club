export function CtaSection() {
  return (
    <section id="cta" className="bg-primary py-20 text-white">
      <div className="mx-auto flex w-max max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        <h2 className="mt-4 font-heading -rotate-1 text-6xl leading-[0.9] tracking-wide md:text-7xl">
          GOOD VIBES
          <span className="block">RUN HAPPY</span>
        </h2>
        <span className="font-heading text-secondary -rotate-2 relative -right-4 text-right ml-auto text-2xl md:text-3xl">See you there!</span>
      </div>
    </section>
  );
}
