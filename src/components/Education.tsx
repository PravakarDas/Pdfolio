'use client';

import { CalendarCheck2, GraduationCap, MapPin } from 'lucide-react';

type HighlightTone = 'sky' | 'violet' | 'amber';

type Highlight = {
  label: string;
  tone?: HighlightTone;
};

type EducationItem = {
  school: string;
  program: string;
  period: string;
  location: string;
  summary: string;
  highlights: Highlight[];
};

const toneClasses: Record<HighlightTone, string> = {
  sky: 'bg-sky-500/15 text-sky-200 ring-sky-400/30',
  violet: 'bg-violet-500/15 text-violet-200 ring-violet-400/30',
  amber: 'bg-amber-500/15 text-amber-100 ring-amber-400/30',
};

const educationItems: EducationItem[] = [
  {
    school: 'Langara College',
    program: 'Post-Degree Diploma, Applied Science for Cloud and Software Development',
    period: '2023 - 2025 (expected)',
    location: 'Vancouver, Canada',
    summary:
      'Hands-on focus on building resilient cloud native workloads across Google Cloud and AWS with SRE, automation, and DevOps practices baked in.',
    highlights: [
      { label: "Dean's list (Fall 2024)", tone: 'sky' },
      { label: 'Safe Milo capstone winner', tone: 'violet' },
      { label: 'GCP Professional Cloud Architect', tone: 'amber' },
    ],
  },
  {
    school: 'Kalinga University',
    program: 'Bachelor of Technology, Computer Science and Engineering',
    period: '2017 - 2021',
    location: 'Raipur, India',
    summary:
      'Graduated with distinction while specialising in distributed systems, database design, and full stack development. Mentored peer hackathon teams and student developer clubs.',
    highlights: [
      { label: 'CGPA 9.1 / 10', tone: 'sky' },
      { label: 'Smart Exam Proctor final project', tone: 'violet' },
      { label: 'Google DSC lead assistant', tone: 'amber' },
    ],
  },
];

export default function Education() {
  return (
    <article className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#0f102b]/80 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.55)] backdrop-blur">
      <header className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-300/70">Education</p>
          <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">Academic Journey</h2>
        </div>
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/70 text-sky-300 ring-1 ring-sky-500/30">
          <GraduationCap className="h-6 w-6" aria-hidden />
        </span>
      </header>

      <ol className="relative mt-6 space-y-8 border-l border-white/10 pl-6">
        <span className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-sky-400/60 via-white/10 to-transparent" aria-hidden />
        {educationItems.map(item => (
          <li key={item.school} className="relative pl-6">
            <span className="absolute left-[-39px] top-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 ring-2 ring-sky-400/40">
              <GraduationCap className="h-4 w-4 text-sky-300" aria-hidden />
            </span>

            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span className="flex items-center gap-2 font-medium text-white">{item.school}</span>
              <span className="flex items-center gap-1 text-slate-400">
                <CalendarCheck2 className="h-4 w-4 text-sky-300" aria-hidden />
                {item.period}
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="h-4 w-4 text-rose-300/80" aria-hidden />
                {item.location}
              </span>
            </div>

            <p className="mt-3 text-base font-semibold text-white">{item.program}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-200/80">{item.summary}</p>

            <ul className="mt-3 flex flex-wrap gap-2">
              {item.highlights.map(highlight => (
                <li
                  key={highlight.label}
                  className={[
                    'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ring-1 transition-colors',
                    highlight.tone ? toneClasses[highlight.tone] : 'bg-white/10 text-white ring-white/20',
                  ].join(' ')}
                >
                  {highlight.label}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-8 rounded-2xl border border-sky-400/20 bg-sky-500/10 px-5 py-4 text-sm text-sky-100/90 shadow-inner">
        <p>
          Outside the classroom I invest in Google Cloud, Terraform, and container orchestration labs - distilling
          that learning into study groups, brown bag sessions, and clear documentation so teams can move faster.
        </p>
      </div>
    </article>
  );
}
