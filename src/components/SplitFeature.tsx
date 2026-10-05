import { cn } from "../utils/cn";
import { Reveal, Tag, ArrowIcon } from "./ui";

type Props = {
  id: string;
  tag: string;
  title: string[];
  copy: string;
  bullets: string[];
  image: string;
  alt: string;
  caption: string;
  ctaLabel: string;
  ctaHref: string;
  ctaVariant?: "red" | "ink";
  reverse?: boolean;
  sectionClass?: string;
};

export default function SplitFeature({
  id,
  tag,
  title,
  copy,
  bullets,
  image,
  alt,
  caption,
  ctaLabel,
  ctaHref,
  ctaVariant = "red",
  reverse = false,
  sectionClass,
}: Props) {
  return (
    <section id={id} className={cn("py-20 md:py-28", sectionClass ?? "bg-paper")}>
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className={cn(reverse && "lg:order-2")}>
          <div className="relative">
            <div
              aria-hidden="true"
              className={cn(
                "absolute h-full w-full border-2 border-brand",
                reverse ? "-bottom-4 -left-4" : "-bottom-4 -right-4"
              )}
            />
            <div className="relative z-10 overflow-hidden">
              <img
                src={image}
                alt={alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <span
              className={cn(
                "absolute bottom-5 z-20 bg-ink/85 px-3.5 py-2 font-mono text-[9px] tracking-[0.32em] text-white",
                reverse ? "right-5" : "left-5"
              )}
            >
              {caption}
            </span>
          </div>
        </Reveal>

        <Reveal delay={140} className={cn(reverse && "lg:order-1")}>
          <Tag>{tag}</Tag>
          <h2 className="mt-6 font-display text-[clamp(2.3rem,4.6vw,3.7rem)] font-semibold uppercase leading-[1.03] text-ink">
            {title.map((line, i) => (
              <span key={line} className="block">
                {i === title.length - 1 && title.length > 1 ? (
                  <span className="text-ink/35">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-smoke md:text-base">
            {copy}
          </p>
          <ul className="mt-9 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3 text-sm font-medium text-ink"
              >
                <span className="h-2 w-2 shrink-0 bg-brand" />
                {b}
              </li>
            ))}
          </ul>
          <a
            href={ctaHref}
            className={cn(
              "mt-11 inline-flex items-center gap-3 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300",
              ctaVariant === "red"
                ? "bg-brand text-white hover:bg-brand-dark"
                : "bg-ink text-white hover:bg-black"
            )}
          >
            {ctaLabel}
            <ArrowIcon className="h-3.5 w-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
