import { useState, type FormEvent } from "react";
import { Reveal, Tag } from "./ui";
import { PROJECT_TYPES } from "../data/content";

const fieldClass =
  "w-full border-b border-ink/20 bg-transparent py-3 text-[15px] text-ink outline-none transition-colors duration-300 placeholder:text-ink/30 focus:border-brand";
const labelClass =
  "font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-smoke";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Tag>Contact</Tag>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,5vw,4rem)] font-semibold uppercase leading-[1.02] text-ink">
            Let's Talk About Your Project.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <div className="border border-line bg-white p-7 md:p-10">
              {submitted ? (
                <div className="flex min-h-[460px] flex-col justify-center">
                  <span className="h-3 w-3 bg-brand" />
                  <h3 className="mt-7 font-display text-3xl font-semibold uppercase text-ink md:text-4xl">
                    Message Received.
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-smoke">
                    Thank you for reaching out. BH Contracting will follow up
                    with you shortly to discuss your project.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-9 inline-flex w-fit items-center border border-ink/30 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="grid gap-x-8 gap-y-7 sm:grid-cols-2"
                >
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className={labelClass}>
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        defaultValue=""
                        className={`${fieldClass} appearance-none pr-8`}
                      >
                        <option value="" disabled>
                          Select a project type
                        </option>
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="pointer-events-none absolute right-1 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink/50"
                        aria-hidden="true"
                      >
                        <path d="M3 6l5 5 5-5" />
                      </svg>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className={labelClass}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us a little about your project — scope, location, and timeline."
                      className={`${fieldClass} resize-none`}
                    />
                  </div>
                  <div className="flex flex-col gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center bg-brand px-9 py-4.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-brand-dark"
                    >
                      Request a Free Estimate
                    </button>
                    <p className="font-mono text-[9.5px] leading-relaxed tracking-[0.18em] text-smoke">
                      NO SPAM. NO OBLIGATION. JUST A STRAIGHT ANSWER.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          {/* Info panel */}
          <Reveal delay={140} className="lg:col-span-5">
            <div className="flex h-full flex-col bg-ink p-7 text-white md:p-10">
              <div className="flex items-center gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand font-display text-[15px] font-bold text-white">
                  BH
                </span>
                <div className="leading-none">
                  <p className="font-display text-lg font-semibold uppercase tracking-[0.06em]">
                    BH Contracting
                  </p>
                  <p className="mt-1.5 text-[13px] text-white/55">
                    Albuquerque, New Mexico
                  </p>
                </div>
              </div>

              <div className="my-8 h-px w-full bg-white/10" />

              <div className="space-y-7">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.32em] text-ember">
                    SERVING
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                    Residential &amp; commercial customers across Albuquerque
                    and the surrounding New Mexico area.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.32em] text-ember">
                    PROJECT FOCUS
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                    Concrete · Stucco · Remodeling · Junk Removal
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.32em] text-ember">
                    CONTACT
                  </p>
                  <p className="mt-2.5 font-mono text-[11px] leading-relaxed tracking-[0.08em] text-white/40">
                    Phone &amp; email details to be provided.
                  </p>
                </div>
              </div>

              <div className="mt-auto border-t border-white/10 pt-6">
                <p className="font-mono text-[10px] tracking-[0.28em] text-white/45">
                  FREE ESTIMATES — RESIDENTIAL &amp; COMMERCIAL
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
