import { type CSSProperties } from "react";
import { IMAGES } from "../data/content";

const d = (s: string) => ({ "--d": s }) as CSSProperties;

export default function Hero() {
  return (
    <section
      id="home"
      className="grain relative flex min-h-[94svh] flex-col overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="BH Contracting crew smoothing a fresh concrete pour"
          className="kenburns h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/65 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-ink/40" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-14 pt-20 md:px-8 md:pt-24">
        <span className="line-mask" style={d("0.05s")}>
          <span>
            <span className="inline-flex items-center gap-3">
              <span className="h-[2px] w-10 bg-ember" />
              <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.4em] text-white/80">
                Albuquerque, New Mexico
              </span>
            </span>
          </span>
        </span>

        <h1
          className="mt-7 font-display font-semibold uppercase leading-[0.95] text-white"
          style={{ fontSize: "clamp(2.9rem, 9.5vw, 7.75rem)" }}
        >
          <span className="line-mask" style={d("0.2s")}>
            <span>
              Built Strong<span className="text-ember">.</span>
            </span>
          </span>
          <span className="line-mask" style={d("0.35s")}>
            <span>
              Finished Right<span className="text-ember">.</span>
            </span>
          </span>
        </h1>

        <div className="line-mask mt-7" style={d("0.5s")}>
          <span>
            <p className="max-w-xl text-[15px] leading-relaxed text-white/75 md:text-lg">
              Professional concrete and stucco services for residential and
              commercial properties throughout Albuquerque and surrounding
              areas.
            </p>
          </span>
        </div>

        <div className="line-mask mt-10" style={d("0.65s")}>
          <span>
            <span className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-brand px-8 py-4.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-brand-dark"
              >
                Get a Free Estimate
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border border-white/35 px-8 py-4.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                View Our Services
              </a>
            </span>
          </span>
        </div>
      </div>

      {/* Service strip */}
      <div className="relative z-10 border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-1.5 px-5 py-4 font-mono text-[9.5px] tracking-[0.32em] text-white/45 sm:flex-row sm:items-center md:px-8">
          <p>CONCRETE · STUCCO · REMODELING · JUNK REMOVAL</p>
          <p className="hidden md:block">RESIDENTIAL — COMMERCIAL</p>
        </div>
      </div>
    </section>
  );
}
