import {
  Reveal,
  Tag,
  ArrowIcon,
  IconConcrete,
  IconStucco,
  IconRemodel,
  IconJunk,
} from "./ui";

const PRIMARY = [
  {
    num: "01",
    title: "Concrete",
    desc: "Professional concrete solutions for residential and commercial projects, including new concrete work, repairs, surfaces, and property improvements.",
    href: "#concrete",
    Icon: IconConcrete,
  },
  {
    num: "02",
    title: "Stucco",
    desc: "Professional stucco work designed to improve the appearance, durability, and exterior finish of your property.",
    href: "#stucco",
    Icon: IconStucco,
  },
];

const SECONDARY = [
  {
    num: "03",
    title: "Remodeling",
    desc: "Construction and remodeling services for property improvements and updates.",
    Icon: IconRemodel,
  },
  {
    num: "04",
    title: "Junk Removal",
    desc: "Reliable removal and cleanup services to help keep residential and commercial properties clean and ready for their next project.",
    Icon: IconJunk,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Tag>What We Do</Tag>
            <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.4rem,5vw,3.9rem)] font-semibold uppercase leading-[1.02] text-ink">
              Construction Services Built Around Your Needs.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-xs text-sm leading-relaxed text-smoke md:pb-1.5 md:text-right">
              Two core trades, full service coverage. One standard — work done
              right the first time.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {PRIMARY.map((s, i) => (
            <Reveal key={s.num} delay={i * 130} className="h-full">
              <article className="group relative flex h-full flex-col justify-between overflow-hidden border border-ink bg-ink p-8 transition-colors duration-300 hover:border-ember md:p-10">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-[3px] w-full bg-brand"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-5 right-2 select-none font-display text-[7rem] font-bold leading-none text-white/[0.05]"
                >
                  {s.num}
                </span>
                <div className="flex items-start justify-between">
                  <s.Icon className="h-10 w-10 text-white/60 transition-colors duration-300 group-hover:text-ember" />
                  <span className="font-mono text-[11px] tracking-[0.32em] text-ember">
                    {s.num}
                  </span>
                </div>
                <div className="mt-16">
                  <h3 className="font-display text-3xl font-semibold uppercase tracking-[0.03em] text-white md:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
                    {s.desc}
                  </p>
                  <a
                    href={s.href}
                    className="mt-8 inline-flex items-center gap-2.5 font-mono text-[11px] font-medium tracking-[0.28em] text-white/85 transition-colors duration-300 hover:text-ember"
                  >
                    LEARN MORE
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}

          {SECONDARY.map((s, i) => (
            <Reveal key={s.num} delay={i * 130} className="h-full">
              <article className="group relative flex h-full flex-col justify-between border border-line bg-paper/60 p-7 transition-colors duration-300 hover:border-ink/40 md:p-8">
                <div className="flex items-start justify-between">
                  <s.Icon className="h-9 w-9 text-ink/50 transition-colors duration-300 group-hover:text-brand" />
                  <span className="font-mono text-[11px] tracking-[0.32em] text-ink/35">
                    {s.num}
                  </span>
                </div>
                <div className="mt-12">
                  <h3 className="font-display text-2xl font-semibold uppercase tracking-[0.03em] text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-smoke">
                    {s.desc}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2.5 font-mono text-[11px] font-medium tracking-[0.28em] text-brand"
                  >
                    LEARN MORE
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
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
