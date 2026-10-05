import { Reveal, Tag } from "./ui";

const POINTS = [
  {
    num: "01",
    title: "Quality",
    desc: "Every project deserves attention to detail and professional workmanship.",
  },
  {
    num: "02",
    title: "Reliability",
    desc: "Clear communication and dependable service throughout the project.",
  },
  {
    num: "03",
    title: "Versatility",
    desc: "From concrete and stucco to remodeling and cleanup.",
  },
  {
    num: "04",
    title: "Local Service",
    desc: "Proudly serving Albuquerque and the surrounding New Mexico area.",
  },
];

export default function Why() {
  return (
    <section id="about" className="grain relative bg-ink py-20 text-white md:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Tag light>Why BH Contracting</Tag>
          <h2 className="mt-6 max-w-4xl font-display text-[clamp(2.6rem,6vw,4.75rem)] font-semibold uppercase leading-[1.0]">
            Built on Quality.
            <br />
            <span className="text-white/35">Driven by Results.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2">
          {POINTS.map((p, i) => (
            <Reveal key={p.num} delay={i * 100} className="h-full">
              <div className="group h-full bg-ink p-8 transition-colors duration-300 hover:bg-coal md:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.32em] text-ember">
                    {p.num}
                  </span>
                  <span className="h-px w-10 bg-white/20 transition-colors duration-300 group-hover:bg-ember" />
                </div>
                <h3 className="mt-9 font-display text-2xl font-semibold uppercase tracking-[0.03em] md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3.5 max-w-md text-sm leading-relaxed text-white/55">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
