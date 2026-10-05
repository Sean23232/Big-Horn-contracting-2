import { Reveal, Tag } from "./ui";
import { IMAGES } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Tag>Our Work</Tag>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,3.9rem)] font-semibold uppercase leading-[1.02] text-ink">
              Quality You Can See.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-xs text-sm leading-relaxed text-smoke md:pb-1.5 md:text-right">
              Concrete, stucco, residential, and commercial — the range of work
              we deliver.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {IMAGES.gallery.map((g, i) => (
            <Reveal key={g.label} delay={i * 90}>
              <figure className="group relative overflow-hidden bg-ink">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute right-4 top-4 font-mono text-[10px] tracking-[0.3em] text-white/70">
                  0{i + 1}
                </span>
                <figcaption className="absolute bottom-0 left-0 right-0 flex items-center gap-2.5 p-4 font-mono text-[9.5px] tracking-[0.28em] text-white">
                  <span className="h-2 w-2 shrink-0 bg-brand" />
                  {g.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex items-start gap-4 border border-line bg-paper p-5">
            <span className="mt-0.5 h-2 w-2 shrink-0 bg-brand" />
            <p className="font-mono text-[11px] leading-relaxed tracking-[0.06em] text-smoke">
              CONCEPT NOTE — The photography above is representative placeholder
              imagery for this design concept. Actual project photos from BH
              Contracting will replace these in the final website.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
