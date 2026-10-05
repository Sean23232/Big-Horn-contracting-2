import { NAV_LINKS } from "../data/content";

const SERVICES = ["Concrete", "Stucco", "Remodeling", "Junk Removal"];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 md:px-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center bg-brand font-display text-[15px] font-bold text-white">
                BH
              </span>
              <span className="font-display text-lg font-semibold uppercase tracking-[0.06em]">
                BH Contracting
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
              Professional construction services in Albuquerque, New Mexico.
            </p>
            <p className="mt-8 flex items-center gap-2.5 font-mono text-[10px] tracking-[0.3em] text-white/40">
              <span className="h-1.5 w-1.5 bg-brand" />
              ALBUQUERQUE, NEW MEXICO
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h3 className="font-mono text-[10px] tracking-[0.32em] text-ember">
              NAVIGATION
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-mono text-[10px] tracking-[0.32em] text-ember">
              SERVICES
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-mono text-[10px] tracking-[0.32em] text-ember">
              SERVING
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li>Residential</li>
              <li>Commercial</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 font-mono text-[10px] tracking-[0.22em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 BH CONTRACTING. ALL RIGHTS RESERVED.</p>
          <p>CONCRETE · STUCCO · REMODELING · JUNK REMOVAL</p>
        </div>
      </div>
    </footer>
  );
}
