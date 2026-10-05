import { Reveal } from "./ui";

const POINTS = [
  {
    title: "Quality Workmanship",
    desc: "Professional work with attention to detail.",
  },
  {
    title: "Residential & Commercial",
    desc: "Services for homeowners, businesses, and property owners.",
  },
  {
    title: "Local & Reliable",
    desc: "Proudly serving Albuquerque, New Mexico.",
  },
];

export default function Trust() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <span className="block h-[3px] w-12 bg-brand" />
            <h2 className="mt-6 font-display text-[clamp(2.6rem,5.5vw,4.25rem)] font-semibold uppercase leading-[1.0] text-ink">
              Quality Work.
              <br />
              <span className="text-ink/30">Solid Results.</span>
            </h2>
          </Reveal>
          <Reveal delay={140} className="lg:col-span-6 lg:col-start-7">
            <p className="text-[15px] leading-relaxed text-smoke md:text-base">
              BH Contracting provides dependable construction services across
              Albuquerque with a simple focus — quality workmanship,
              professional service, and durable results. Whether the job is new
              concrete, a full stucco finish, a remodel, or a clean site, the
              standard is the same: show up prepared, work cleanly, and finish
              it right.
            </p>
            <a
              href="#services"
              className="group mt-8 inline-flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.28em] text-brand"
            >
              VIEW OUR SERVICES
              <span className="inline-block h-[2px] w-8 bg-brand transition-all duration-300 group-hover:w-14" />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-10 border-t border-ink/15 pt-10 sm:grid-cols-3 md:mt-20">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 bg-brand" />
                <span className="font-mono text-[10px] tracking-[0.32em] text-smoke">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-[0.04em] text-ink">
                {p.title}
              </h3>
              <p className="mt-3 max-w-[17rem] text-sm leading-relaxed text-smoke">
                {p.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
