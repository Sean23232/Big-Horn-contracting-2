import { type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";

/* ---------------- Scroll reveal ---------------- */

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", inView && "in", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/* ---------------- Section tag (eyebrow) ---------------- */

export function Tag({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span className={cn("h-[2px] w-8", light ? "bg-ember" : "bg-brand")} />
      <span
        className={cn(
          "font-mono text-[11px] font-medium uppercase tracking-[0.32em]",
          light ? "text-ember" : "text-brand"
        )}
      >
        {children}
      </span>
    </span>
  );
}

/* ---------------- Icons ---------------- */

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M1.5 8h12.5" />
      <path d="M9.5 3l5 5-5 5" />
    </svg>
  );
}

const iconBase = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Finishing trowel over a slab */
export function IconConcrete({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" {...iconBase} className={className} aria-hidden="true">
      <path d="M5 11.5 L15 7.5 L20.5 14 L10.5 18 Z" />
      <path d="M20.5 14 L27 18" />
      <path d="M5 24.5 H27" />
      <path d="M8.5 28.5 H23.5" />
    </svg>
  );
}

/** Trowel applying finish to a wall */
export function IconStucco({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" {...iconBase} className={className} aria-hidden="true">
      <path d="M8.5 4 V28" />
      <path d="M8.5 9.5 H5" />
      <path d="M8.5 15 H5.5" />
      <path d="M8.5 20.5 H5" />
      <path d="M13.5 12.5 L23.5 8.5 L28 14 L18 18 Z" />
      <path d="M23.5 17.5 L27 21.5" />
    </svg>
  );
}

/** Hammer */
export function IconRemodel({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" {...iconBase} className={className} aria-hidden="true">
      <path d="M15 5 L27 9.5 L25 14.5 L13 10 Z" />
      <path d="M19 14 L9.5 26.5" />
      <path d="M5.5 29 H14" />
    </svg>
  );
}

/** Bin / removal */
export function IconJunk({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" {...iconBase} className={className} aria-hidden="true">
      <path d="M6.5 9.5 H25.5" />
      <path d="M12.5 9.5 V7 H19.5 V9.5" />
      <path d="M8.5 9.5 L10.5 27 H21.5 L23.5 9.5" />
      <path d="M14 15 V21.5" />
      <path d="M18 15 V21.5" />
    </svg>
  );
}
