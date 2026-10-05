import { Reveal, Tag, ArrowIcon } from "./ui";
import { IMAGES } from "../data/content";

const COLS = [
  {
    num: "01",
    title: "Residential",
    desc: "Professional construction services designed to improve, maintain, and transform your home.",
    cta: "Residential Services",
    image: IMAGES.residential,
    alt: "Residential home exterior under construction",
  },
  {
    num: "02",
    title: "Commercial",
    desc: "Reliable construction support for businesses, commercial properties, and larger projects.",
    cta: "Commercial Services",
    image: IMAGES.commercial,
    alt: "Modern commercial building exterior",
  },
];

export default function ResComm() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <Tag>Who We Serve</Tag>
            <p className="font-mono text-[10px] tracking-[0.3em] text-smoke sm:text-right">
              TWO MARKETS. ONE STANDARD.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-12">
          {COLS.map((c, i) => (
            <Reveal key={c.num} delay={i * 130}>
              <article className="group">
                <div className="relative overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                  />
                  <span className="absolute left-5 top-5 bg-white/95 px-3.5 py-2 font-mono text-[9px] tracking-[0.32em] text-ink">
                    {c.num}
                  </span>
                </div>
                <div className="border-t-2 border-ink pt-6">
                  <h3 className="font-display text-3xl font-semibold uppercase tracking-[0.03em] text-ink md:text-4xl">
                    {c.title}
                  </h3>
                  <p className="mt-3.5 max-w-md text-sm leading-relaxed text-smoke md:text-[15px]">
                    {c.desc}
                  </p>
                  <a
                    href="#contact"
                    className="group/cta mt-7 inline-flex items-center gap-2.5 font-mono text-[11px] font-medium tracking-[0.28em] text-brand"
                  >
                    {c.cta.toUpperCase()}
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-1.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
