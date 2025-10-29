'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Briefcase, CalendarCheck2 } from 'lucide-react';
import React from 'react';

type Role = {
  companyStyled: React.ReactNode;
  title: string;
  period: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    companyStyled: (
      <div className="text-lg font-semibold text-white">
        <span className="text-sky-300">Undergraduate Thesis</span>
        <span className="mx-2 text-slate-400">—</span>
        <span>Brac University</span>
      </div>
    ),
    title: 'Researcher (Machine Learning / Software Engineering)',
    period: 'Oct 2024 – Oct 2025',
    bullets: [
      'Designing and executing an applied research project from proposal to evaluation and reporting.',
      'Collecting/curating datasets; building reproducible preprocessing and training pipelines.',
      'Developing and iterating on ML models; comparing baselines with clear metrics and ablations.',
      'Documenting methodology and results; preparing artifacts for thesis defense/publication.',
    ],
  },
  {
    companyStyled: (
      <div className="text-lg font-semibold text-white">
        <span className="text-fuchsia-400">Render</span>
        <span className="text-white">Lab</span>
        <span className="ml-2 rounded bg-white/10 px-2 py-0.5 text-xs font-medium text-white/90 ring-1 ring-white/20">
          Remote
        </span>
      </div>
    ),
    title: 'Backend / Full-Stack Developer',
    period: 'Sep 2025 – Present',
    bullets: [
      'Building and maintaining backend services and REST APIs; integrating databases and auth.',
      'Collaborating on Next.js/React frontends and shared component patterns where needed.',
      'Adding tests and CI/CD workflows to improve reliability and speed up deployments.',
      'Participating in code reviews, grooming, and incremental delivery of features.',
    ],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="relative scroll-mt-28 md:scroll-mt-32" aria-label="Experience">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-6 py-20 md:py-28"
      >
        {/* overflow-hidden prevents any horizontal scroll from timeline glow/markers */}
        <article className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#0f102b]/80 px-6 py-10 text-white shadow-[0_32px_90px_rgba(5,8,22,0.6)] backdrop-blur md:px-10">
          <div className="relative z-10">
            <header className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-300/70">Experience</p>
                <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">Experiments & Work</h2>
              </div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/70 text-sky-300 ring-1 ring-sky-500/30">
                <Briefcase className="h-6 w-6" aria-hidden />
              </span>
            </header>

            <div className="relative mt-10 md:mt-12">
              {/* timeline axis (centered on md+) */}
              <span
                className="pointer-events-none absolute left-3 top-0 h-full w-px bg-gradient-to-b from-sky-400/60 via-white/10 to-transparent md:left-1/2"
                aria-hidden
              />

              <ol className="space-y-10">
                {roles.map((role, index) => {
                  const alignRight = index % 2 === 1;

                  return (
                    <li
                      key={`${role.title}-${index}`}
                      className={`relative flex flex-col md:flex-row ${alignRight ? 'md:justify-end' : 'md:justify-start'}`}
                    >
                      {/* marker */}
                      <motion.span
                        aria-hidden
                        className="absolute left-1.5 top-4 z-10 block h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white/70 bg-white shadow-md md:left-1/2"
                        animate={
                          reduceMotion
                            ? {}
                            : {
                                scale: [1, 1.15, 1],
                                boxShadow: [
                                  '0 0 0 0 rgba(96,165,250,0.55)',
                                  '0 0 0 12px rgba(96,165,250,0)',
                                  '0 0 0 0 rgba(96,165,250,0)',
                                ],
                              }
                        }
                        transition={reduceMotion ? {} : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                      />

                      <motion.div
                        variants={cardVariants}
                        className={`relative w-full rounded-2xl border border-white/15 bg-[#050816]/80 p-6 text-slate-100 shadow-[0_20px_55px_rgba(5,8,22,0.5)] backdrop-blur-md md:w-[calc(50%-1.5rem)] ${
                          alignRight ? 'md:ml-auto md:pl-10' : 'md:mr-auto md:pr-10'
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                          {role.companyStyled}
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-300">
                            <CalendarCheck2 className="h-4 w-4 text-sky-300" aria-hidden />
                            {role.period}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-slate-200/90">{role.title}</p>

                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-200/85">
                          {role.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex} className="flex gap-2">
                              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400/80" aria-hidden />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </article>
      </motion.div>
    </section>
  );
}
