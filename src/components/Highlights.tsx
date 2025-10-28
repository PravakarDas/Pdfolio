'use client';

import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

import Education from './Education';

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="relative overflow-hidden py-20 text-white scroll-mt-28 md:scroll-mt-32"
      aria-labelledby="highlights-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-12 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl -z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-16 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl -z-10"
      />

      <div className="container relative z-10 mx-auto flex flex-col gap-12 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium uppercase tracking-[0.35em] text-slate-200 ring-1 ring-white/10">
            <Sparkles className="h-4 w-4 text-sky-300" aria-hidden />
            Highlights
          </span>
          <h2 id="highlights-heading" className="mt-6 text-3xl font-extrabold tracking-tight md:text-4xl">
            Recent wins & proud moments
          </h2>
          <p className="mt-4 text-base text-white/80">
            A snapshot of the achievements and milestones that keep me curious and focused on impact-driven software.
          </p>
        </motion.div>

        <Education />
      </div>
    </section>
  );
}

