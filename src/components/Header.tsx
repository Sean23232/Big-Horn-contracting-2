import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { NAV_LINKS } from "../data/content";

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-brand font-display text-[15px] font-bold text-white">
        BH
      </span>
      <span className="leading-none">
        <span className="block font-display text-[19px] font-semibold uppercase tracking-[0.06em] text-ink">
          BH Contracting
        </span>
        <span className="mt-1.5 block font-mono text-[8.5px] tracking-[0.3em] text-smoke">
          CONCRETE &amp; STUCCO — ABQ, NM
        </span>
      </span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Utility strip — scrolls away */}
      <div className="bg-ink">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 md:px-8">
          <p className="flex items-center gap-2.5 font-mono text-[9.5px] tracking-[0.3em] text-white/60">
            <span className="h-1.5 w-1.5 bg-brand" />
            ALBUQUERQUE, NEW MEXICO
          </p>
          <p className="hidden font-mono text-[9.5px] tracking-[0.3em] text-white/35 md:block">
            CONCRETE · STUCCO · REMODELING · JUNK REMOVAL
          </p>
        </div>
      </div>

      {/* Sticky nav */}
      <nav
        className={cn(
          "sticky top-0 z-50 border-b bg-white transition-shadow duration-300",
          scrolled
            ? "border-line shadow-[0_10px_30px_-18px_rgba(18,18,18,0.35)]"
            : "border-line/70"
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
          <Logo />

          <div className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="navlink text-[12px] font-semibold uppercase tracking-[0.18em] text-ink/75 transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center bg-brand px-6 py-3.5 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-brand-dark"
            >
              Get a Free Estimate
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5.5px] border border-line transition-colors hover:border-ink/40 lg:hidden"
          >
            <span
              className={cn(
                "h-[1.5px] w-5 bg-ink transition-all duration-300",
                open && "translate-y-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-[1.5px] w-5 bg-ink transition-opacity duration-300",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-[1.5px] w-5 bg-ink transition-all duration-300",
                open && "-translate-y-[7px] -rotate-45"
              )}
            />
          </button>
        </div>

        {/* Mobile panel */}
        <div
          className={cn(
            "overflow-hidden bg-white transition-[max-height] duration-500 ease-in-out lg:hidden",
            open ? "max-h-[480px] border-t border-line" : "max-h-0"
          )}
        >
          <div className="flex flex-col px-5 pb-6 pt-2 md:px-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/80 py-4 font-display text-xl font-medium uppercase tracking-[0.08em] text-ink transition-colors hover:text-brand"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex items-center justify-center bg-brand px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
