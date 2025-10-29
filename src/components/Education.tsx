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
  summary?: string;
  highlights?: Highlight[];
};

const toneClasses: Record<HighlightTone, string> = {
  sky: 'bg-sky-500/15 text-sky-200 ring-sky-400/30',
  violet: 'bg-violet-500/15 text-violet-200 ring-violet-400/30',
  amber: 'bg-amber-500/15 text-amber-100 ring-amber-400/30',
};

// ⬇️ Updated to match your academic journey
const educationItems: EducationItem[] = [
  {
    school: 'Brac University',
    program: 'Bachelor of Science in Computer Science',
    period: '2021 – 2025',
    location: 'Dhaka, Bangladesh',
    summary:
      'Concentration in Machine Learning and Software Engineering with a strong focus on applied computer science principles.',
    highlights: [
      { label: 'Machine Learning', tone: 'sky' },
      { label: 'Software Engineering', tone: 'violet' },
    ],
  },
  {
    school: 'Islamia Degree College',
    program: 'Higher Secondary Certificate (Science)',
    period: '2019 – 2020',
    location: 'Chattogram, Bangladesh',
    // No extra summary shown on the screenshot; keeping this concise.
    highlights: [{ label: 'Science Stream', tone: 'amber' }],
  },
  {
    school: 'Hazi Mohammad Mohsin Government High School',
    program: 'Secondary School Certificate',
    period: '2012 – 2018',
    location: 'Chattogram, Bangladesh',
  },
];

export default function Education() {
  return (
    <article className="scroll-mt-24 space-y-6 rounded-2xl border border-white/10 bg-[#0f102b]/80 p-6 shadow-[0_20px_45px_rgba(6,10,30,0.45)] backdrop-blur">
      <header className="flex items-center gap-2 border-b border-white/10 pb-3 text-2xl font-bold text-white">
        <GraduationCap className="h-6 w-6 text-sky-300" />
        Education
      </header>

      <ol className="relative space-y-8 border-l border-white/10 pl-6">
        {/* timeline glow */}
        <span
          className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-sky-400/60 via-white/10 to-transparent"
          aria-hidden
        />
        {educationItems.map((item) => (
          <li key={`${item.school}-${item.period}`} className="relative pl-6">
            {/* marker */}
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

            {item.summary ? (
              <p className="mt-2 text-sm leading-relaxed text-slate-200/80">{item.summary}</p>
            ) : null}

            {item.highlights && item.highlights.length > 0 ? (
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
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
            ) : null}
          </li>
        ))}
      </ol>
    </article>
  );
}
