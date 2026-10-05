import { Reveal } from "./ui";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-brand text-white">
      <div aria-hidden="true" className="hatch absolute inset-0" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 md:px-8 md:py-24 lg:flex-row lg:items-center lg:justify-between">
        <Reveal>
          <h2 className="font-display text-[clamp(2.7rem,6.5vw,5rem)] font-semibold uppercase leading-[0.98]">
            Ready to
            <br />
            Get Started<span className="text-ink">.</span>
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/80 md:text-base">
            Tell us about your project and let's discuss how BH Contracting can
            help.
          </p>
        </Reveal>

        <Reveal delay={150} className="lg:shrink-0">
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-ink px-9 py-4.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-black"
            >
              Request a Free Estimate
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-white/50 px-9 py-4.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-brand"
            >
              Contact BH Contracting
            </a>
          </div>
        </Reveal>
      </div>

      <div aria-hidden="true" className="relative h-1.5 w-full bg-ink" />
    </section>
  );
}
