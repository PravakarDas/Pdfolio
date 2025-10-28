'use client';

import { useReducedMotion, motion, type Variants } from 'framer-motion';
import { CalendarCheck2 } from 'lucide-react';
import React from 'react';

type Role = {
  companyStyled: React.ReactNode;
  title: string;
  period: string;
  side: 'left' | 'right';
  bullets: string[];
};

const roles: Role[] = [
  {
    companyStyled: (
      <div className="text-lg font-semibold flex flex-wrap items-center text-white">
        <span style={{ color: '#4285F4' }}>G</span>
        <span style={{ color: '#DB4437' }}>o</span>
        <span style={{ color: '#F4B400' }}>o</span>
        <span style={{ color: '#4285F4' }}>g</span>
        <span style={{ color: '#0F9D58' }}>l</span>
        <span style={{ color: '#DB4437' }}>e</span>
        <span className="ml-2">
          <span className="text-indigo-600">O</span>
          <span className="">perations</span>{' '}
          <span className="text-orange-500">C</span>
          <span className="">enter</span>
        </span>
      </div>
    ),
    title: 'Cloud Support Analyst',
    period: 'Dec 2022 -" Aug 2023',
    side: 'left',
    bullets: [
      'Provided real-time support across Compute Engine, Cloud Run, Cloud Storage, Cloud SQL, IAM/IAP, and networking.',
      'Automated routine runbooks with Cloud Scheduler/Functions to reduce manual toil and speed incident response.',
      'Implemented backup/retention with Nearline/Coldline/Archive; hardened workloads with Shielded VMs + least-privilege IAM.',
      'Built actionable monitoring/alerting that improved visibility and lowered MTTR for customer incidents.',
    ],
  },
  {
    companyStyled: (
      <div className="text-lg font-semibold text-white">
        <span className="text-orange-500">X</span>
        <span>pheno Pvt Limited</span>
      </div>
    ),
    title: 'Talent Acquisition Specialist',
    period: 'Jan 2022 -" Nov 2022',
    side: 'right',
    bullets: [
      'Owned full-cycle recruiting for technical roles; partnered with hiring managers to refine role profiles.',
      'Sourced/assessed candidates, coordinated interviews, and maintained a high-quality pipeline.',
      'Improved candidate experience via clear communication, timely feedback, and structured processes.',
    ],
  },
];

/* ---- Motion ---- */
const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050816] text-white"
      aria-label="Experience"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(110,77,255,0.15),transparent_55%)]" />
      <div className="pointer-events-none absolute bottom-[-40%] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[140px]" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="container relative z-10 mx-auto px-6 py-20 md:py-28"
      >
        <h3 className="text-2xl font-bold border-b border-white/20 pb-3 flex items-center gap-2">
          <CalendarCheck2 className="w-6 h-6 text-white" />
          Experience
        </h3>

        <p className="text-white/90 mt-5 mb-10 max-w-3xl">
          I bring over 2 years of IT experience, beginning in Talent Acquisition before transitioning into a
          technical role as a Cloud Support Analyst at Google Operations Center. This shift helped me uncover my
          passion-"designing and building digital products that solve real-world problems.
        </p>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Center line */}
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-white/25" aria-hidden />

          <ol className="space-y-12">
            {roles.map((r, i) => {
              const isLeft = r.side === 'left';

              return (
                <li key={i} className="relative">
                  {/* Dot */}
                  <motion.span
                    className="absolute left-1/2 top-4 -translate-x-1/2 z-10 block h-4 w-4 rounded-full border-2 border-white/70 bg-white shadow"
                    aria-hidden
                    animate={
                      reduceMotion
                        ? {}
                        : {
                            scale: [1, 1.15, 1],
                            boxShadow: [
                              '0 0 0 0 rgba(255,255,255,0.45)',
                              '0 0 0 10px rgba(255,255,255,0)',
                              '0 0 0 0 rgba(255,255,255,0)',
                            ],
                          }
                    }
                    transition={reduceMotion ? {} : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  <div className="flex flex-col md:flex-row md:items-start">
                    {/* Left column or spacer */}
                    <div className={`md:w-1/2 ${isLeft ? 'md:pr-8 order-2 md:order-1' : 'md:pr-8 order-2'}`}>
                      {isLeft && (
                        <motion.div
                          variants={card}
                          className="rounded-2xl border border-white/10 bg-[#0f102b]/80 p-6 text-slate-100 shadow-[0_20px_45px_rgba(6,10,30,0.45)] backdrop-blur"
                        >
                          {r.companyStyled}
                          <p className="text-sm text-slate-200">{r.title}</p>
                          <div className="mt-2 flex justify-end text-sm text-slate-300 md:justify-end">
                            <span className="inline-flex items-center gap-1">
                              <CalendarCheck2 className="h-4 w-4 text-sky-300" /> {r.period}
                            </span>
                          </div>
                          <ul className="mt-3 space-y-1 list-disc text-sm text-slate-200 md:list-inside">
                            {r.bullets.map((b, idx) => (
                              <li key={idx}>{b}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </div>

                    {/* Spacer for dot on mobile */}
                    <div className="h-8 md:h-0 md:w-0" />

                    {/* Right column */}
                    <div className={`md:w-1/2 ${isLeft ? 'md:pl-8 order-3' : 'md:pl-8 order-3 md:order-2'}`}>
                      {!isLeft && (
                        <motion.div
                          variants={card}
                          className="rounded-2xl border border-white/10 bg-[#0f102b]/80 p-6 text-slate-100 shadow-[0_20px_45px_rgba(6,10,30,0.45)] backdrop-blur"
                        >
                          {r.companyStyled}
                          <p className="text-sm text-slate-200">{r.title}</p>
                          <div className="mt-2 text-sm text-slate-300">
                            <span className="inline-flex items-center gap-1">
                              <CalendarCheck2 className="h-4 w-4 text-sky-300" /> {r.period}
                            </span>
                          </div>
                          <ul className="mt-3 space-y-1 list-disc text-sm text-slate-200 list-inside">
                            {r.bullets.map((b, idx) => (
                              <li key={idx}>{b}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <p className="text-white/90 mt-10 max-w-3xl">
          Today, I work as a Full Stack Developer, specializing in Next.js, React.js, MongoDB, TypeScript, Python,
          and Tailwind CSS-"delivering modern, responsive, and scalable web and mobile applications with a seamless UX.
        </p>
      </motion.div>
    </section>
  );
}

