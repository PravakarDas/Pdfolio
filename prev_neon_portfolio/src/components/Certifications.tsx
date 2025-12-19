'use client';

import { BadgeCheck, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type BadgeTone = 'amber' | 'emerald' | 'blue';
type Cert = {
  title: string;
  image: string;
  link: string;
  issuer?: string;
  issuerLogo?: string;
  year?: string | number;
  badge?: { label: string; tone: BadgeTone };
};

type IssuerTheme = { issuerChip: string; yearPill: string };
function getIssuerTheme(issuer?: string): IssuerTheme {
  switch ((issuer || '').toLowerCase()) {
    case 'datacamp':
      return {
        issuerChip: 'bg-slate-900/80 text-white ring-white/15',
        yearPill: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white',
      };
    case 'udemy':
      return {
        issuerChip: 'bg-slate-900/80 text-white ring-white/15',
        yearPill: 'bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white',
      };
    default:
      return {
        issuerChip: 'bg-slate-900/80 text-white ring-white/15',
        yearPill: 'bg-gradient-to-r from-sky-500 to-cyan-600 text-white',
      };
  }
}
function toneClasses(tone: BadgeTone | undefined) {
  switch (tone) {
    case 'amber':
      return 'bg-amber-100 text-amber-800 ring-amber-200';
    case 'emerald':
      return 'bg-emerald-100 text-emerald-800 ring-emerald-200';
    case 'blue':
    default:
      return 'bg-blue-100 text-blue-800 ring-blue-200';
  }
}

/* media query hook */
function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia(query);

    type LegacyMql = MediaQueryList & {
      addListener?: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void) => void;
      removeListener?: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void) => void;
    };
    const m = mql as LegacyMql;

    const onChangeEvent = (e: Event) => setMatches((e as MediaQueryListEvent).matches);
    const onChangeLegacy = (e: MediaQueryListEvent) => setMatches(e.matches);

    setMatches(m.matches);
    if ('addEventListener' in m && typeof m.addEventListener === 'function') m.addEventListener('change', onChangeEvent);
    else if (typeof m.addListener === 'function') m.addListener(onChangeLegacy);

    return () => {
      if ('removeEventListener' in m && typeof m.removeEventListener === 'function') m.removeEventListener('change', onChangeEvent);
      else if (typeof m.removeListener === 'function') m.removeListener(onChangeLegacy);
    };
  }, [query]);
  return matches;
}

export default function Certifications() {
  // ⬇️ Now includes your 5 certificates
  const certifications: Cert[] = [
    {
      title: 'Machine Learning Operations (MLOps) Track',
      image: '/certs/ml_op.jpg',
      link: 'https://www.datacamp.com/statement-of-accomplishment/track/c1e908d427b12e2716601388a7fb551166fa1203?raw=1',
      issuer: 'DataCamp',
      badge: { label: 'Track', tone: 'blue' },
    },
    {
      title: 'Machine Learning with Data Loss Prevention (DLP)',
      image: '/certs/ml-dlp.jpg',
      link: 'https://www.udemy.com/certificate/UC-d13b82ed-f82e-4800-93a2-fe464692fcf4/',
      issuer: 'Udemy',
      badge: { label: 'Course', tone: 'emerald' },
    },
    {
      title: 'HTML Certification',
      image: '/certs/html.jpg',
      link: 'https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fude.my%2FUC-d15d07f7-904d-4d59-aafe-96b8a0b2d0b5&urlhash=7zWt',
      issuer: 'Udemy',
    },
    {
      title: 'Office Administration',
      image: '/certs/ofc_admin.jpg',
      link: 'https://www.linkedin.com/redir/redirect/?url=ude.my%2FUC-aaf49160-43a1-4cdb-b3eb-70345cab2ccd&urlhash=bRTV',
      issuer: 'Udemy',
    },
    {
      title: 'CentOS Linux',
      image: '/certs/centos.jpg',
      link: 'https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fude.my%2FUC-9925fc94-d998-4f05-b66b-f5f15b342c75&urlhash=2BtZ',
      issuer: 'Udemy',
    },
  ];

  // layout flags
  const isGridMd = useMediaQuery('(min-width: 768px) and (max-width: 1023.98px)');
  const isGridLgUp = useMediaQuery('(min-width: 1024px)');
  const isHorizontal = !isGridMd && !isGridLgUp;

  const MD_DEFAULT = 4;
  const LG_DEFAULT = 6;

  const [showAllGrid] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const [pageIndex, setPageIndex] = React.useState(0);
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);

  let visibleCerts = certifications;
  if (isGridMd) visibleCerts = showAllGrid ? certifications : certifications.slice(0, MD_DEFAULT);
  else if (isGridLgUp) visibleCerts = showAllGrid ? certifications : certifications.slice(0, LG_DEFAULT);

  const centerItem = React.useCallback((i: number, behavior: ScrollBehavior = 'auto') => {
    const el = scrollerRef.current;
    if (!el) return;
    const items = el.querySelectorAll('li');
    const item = items[i] as HTMLElement | undefined;
    if (!item) return;
    const left = item.offsetLeft;
    const target = Math.max(0, left + item.clientWidth / 2 - el.clientWidth / 2);
    el.scrollTo({ left: target, behavior });
  }, []);

  const nearestCenteredIndex = React.useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return 0;
    const items = Array.from(el.querySelectorAll('li')) as HTMLElement[];
    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0, bestDelta = Infinity;
    items.forEach((it, idx) => {
      const c = it.offsetLeft + it.clientWidth / 2;
      const d = Math.abs(c - center);
      if (d < bestDelta) { bestDelta = d; best = idx; }
    });
    return best;
  }, []);

  const goToPage = (i: number) => centerItem(i, 'smooth');

  React.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;
    const recalc = () => {
      if (isHorizontal) {
        setPageCount(certifications.length);
        setPageIndex(nearestCenteredIndex());
      }
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { recalc(); raf = 0; });
    };
    const ro = new ResizeObserver(() => recalc());
    ro.observe(el);
    el.addEventListener('scroll', onScroll, { passive: true });
    recalc();
    return () => {
      el.removeEventListener('scroll', onScroll);
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isHorizontal, nearestCenteredIndex, certifications.length]);

  return (
    <section id="certifications" className="scroll-mt-24 md:scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative mt-10 rounded-2xl border border-white/10 bg-[#0f102b]/80 p-6 text-slate-100 shadow-[0_20px_45px_rgba(6,10,30,0.45)] backdrop-blur"
      >
        <h3 className="flex items-center gap-2 border-b border-white/10 pb-3 text-2xl font-bold text-white">
          <BadgeCheck className="h-6 w-6 text-sky-300" />
          Certifications
        </h3>

        <div
          ref={scrollerRef}
          className="no-scrollbar mt-4 overflow-x-auto overflow-y-visible md:overflow-visible pb-2 md:pb-0"
        >
          <ul
            className="
              flex w-max snap-x snap-mandatory gap-4 pt-2
              pl-[3.2vw] pr-[2vw]
              sm:pl-3 sm:pr-[calc(50%-180px)]
              md:pl-0 md:pr-0
              md:grid md:w-auto md:grid-cols-2 md:gap-4
              lg:grid-cols-3
            "
          >
            {visibleCerts.map((cert, index) => {
              const theme = getIssuerTheme(cert.issuer);
              return (
                <li key={cert.title} className="snap-center md:snap-none">
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block min-w-[325px] max-w-[325px] sm:min-w-[350px] sm:max-w-[350px]
                      md:min-w-0 md:max-w-none flex-shrink-0 rounded-xl border border-white/10 bg-[#0f102b]/70 p-4
                      text-slate-100 shadow-[0_16px_40px_rgba(6,10,30,0.45)] transition
                      hover:border-sky-400/40 hover:shadow-[0_18px_45px_rgba(45,170,255,0.25)]
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    whileHover={{ y: -4, scale: 1.03 }}
                  >
                    {cert.badge && (
                      <span
                        className={`absolute -top-2 -left-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold shadow-md ring-1 ${toneClasses(cert.badge.tone)}`}
                      >
                        <Award className="h-3.5 w-3.5" />
                        {cert.badge.label}
                      </span>
                    )}

                    <div className="mb-3 rounded-lg border border-white/10 bg-white/5">
                      <div className="relative flex h-[200px] items-center justify-center overflow-hidden rounded-lg sm:h-[220px] md:h-[220px] lg:h-[260px]">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 340px, (max-width: 1024px) 360px, 420px"
                          priority={index < 2}
                        />
                      </div>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      {cert.issuer && (
                        <span className={['inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ring-1', theme.issuerChip].join(' ')}>
                          {cert.issuer}
                        </span>
                      )}
                    </div>
                  </motion.a>
                </li>
              );
            })}
          </ul>
        </div>

        {isHorizontal && pageCount > 1 && (
          <nav className="mt-4 flex justify-center md:hidden">
            <ul className="flex items-center gap-2">
              {Array.from({ length: pageCount }).map((_, i) => (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => goToPage(i)}
                    className={`h-1.5 rounded-full ${i === pageIndex ? 'w-5 bg-blue-600' : 'w-2.5 bg-slate-300'} transition-all duration-200`}
                  />
                </li>
              ))}
            </ul>
          </nav>
        )}
      </motion.div>
    </section>
  );
}
