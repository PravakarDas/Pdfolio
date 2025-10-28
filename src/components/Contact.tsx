'use client';

import emailjs from '@emailjs/browser';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { MessageSquare, Send, UserRound } from 'lucide-react';
import { useState, type ChangeEvent, type FormEvent } from 'react';

const EarthCanvas = dynamic(() => import('./canvas/EarthCanvas'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center">
      <span className="canvas-loader" />
    </div>
  ),
});

const StarsCanvas = dynamic(() => import('./canvas/StarsCanvas'), {
  ssr: false,
  loading: () => null,
});

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const RECEIVER_EMAIL = process.env.NEXT_PUBLIC_EMAILJS_RECEIVER;
const RECEIVER_NAME =
  process.env.NEXT_PUBLIC_EMAILJS_RECEIVER_NAME?.trim() || 'there';

type FormFields = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

type StatusState =
  | { type: 'idle' }
  | { type: 'success'; message: string }
  | { type: 'error'; message: string };

const initialForm: FormFields = {
  name: '',
  email: '',
  message: '',
};

const inputClasses =
  'w-full rounded-xl border border-[#1f1d47] bg-[#0f102b]/80 px-4 py-3 text-base text-slate-100 placeholder:text-slate-400 transition focus:border-[#6e4dff] focus:outline-none focus:ring-2 focus:ring-[#6e4dff]/40 disabled:cursor-not-allowed disabled:border-[#1f1d47]/60 disabled:text-slate-500';

const errorClasses =
  'border-rose-500 focus:border-rose-500 focus:ring-rose-500/30 disabled:border-rose-500/60';

const cardVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.16, 0.84, 0.44, 1] },
  },
};

const earthVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 0.65, 0.4, 0.95], delay: 0.15 },
  },
};

export default function Contact() {
  const [form, setForm] = useState<FormFields>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<StatusState>({ type: 'idle' });
  const [loading, setLoading] = useState(false);

  const validate = (fields: FormFields): FormErrors => {
    const validationErrors: FormErrors = {};

    const name = fields.name.trim();
    if (name.length < 2) {
      validationErrors.name = 'Please share your name (2+ characters).';
    }

    const email = fields.email.trim().toLowerCase();
    if (!email) {
      validationErrors.email = 'Let me know how to reach you back.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        validationErrors.email = 'This email address does not look valid yet.';
      }
    }

    const message = fields.message.trim();
    if (message.length < 5) {
      validationErrors.message = 'Tell me a little more (5+ characters).';
    }

    return validationErrors;
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name as keyof FormFields]: value }));
    setErrors((prev) => ({ ...prev, [name as keyof FormFields]: undefined }));
    if (status.type !== 'idle') {
      setStatus({ type: 'idle' });
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || !RECEIVER_EMAIL) {
      console.error('Missing EmailJS configuration.', {
        hasServiceId: Boolean(SERVICE_ID),
        hasTemplateId: Boolean(TEMPLATE_ID),
        hasPublicKey: Boolean(PUBLIC_KEY),
        hasReceiver: Boolean(RECEIVER_EMAIL),
      });
      setStatus({
        type: 'error',
        message: 'The contact form is not ready yet. Please email me directly instead.',
      });
      return;
    }

    setLoading(true);
    setStatus({ type: 'idle' });

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          reply_to: form.email.trim(),
          message: form.message.trim(),
          to_email: RECEIVER_EMAIL,
          to_name: RECEIVER_NAME,
        },
        { publicKey: PUBLIC_KEY },
      );

      setStatus({
        type: 'success',
        message: "Thanks for reaching out! I&apos;ll get back to you as soon as possible.",
      });
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      console.error('EmailJS contact error', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong while sending your message. Please try again shortly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#050816] py-20 scroll-mt-28 md:scroll-mt-32">
      <StarsCanvas />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(110,77,255,0.15),transparent_55%)]" />
      <div className="pointer-events-none absolute bottom-[-40%] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[140px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-stretch lg:gap-16 lg:px-8">
        <motion.div
          className="relative z-10 flex flex-1 flex-col gap-8 rounded-3xl border border-[#1f1d47] bg-[#0f102b]/90 p-8 shadow-[0_30px_80px_rgba(5,6,22,0.65)] backdrop-blur"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b4a4ff]">
              Get in touch
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Contact.
            </h2>
          </div>

          <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-200">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Jane Doe"
                value={form.name}
                onChange={handleChange}
                disabled={loading}
                className={`${inputClasses} ${errors.name ? errorClasses : ''}`}
              />
              {errors.name ? (
                <p className="text-sm text-rose-400" role="alert">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-200">
                Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@gmail.com"
                value={form.email}
                onChange={handleChange}
                disabled={loading}
                className={`${inputClasses} ${errors.email ? errorClasses : ''}`}
              />
              {errors.email ? (
                <p className="text-sm text-rose-400" role="alert">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-200">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={7}
                placeholder="Hello there!"
                value={form.message}
                onChange={handleChange}
                disabled={loading}
                className={`${inputClasses} ${errors.message ? errorClasses : ''} resize-none leading-relaxed`}
              />
              {errors.message ? (
                <p className="text-sm text-rose-400" role="alert">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-xl bg-[#6e4dff] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#8063ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b4a4ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f102b] disabled:cursor-not-allowed disabled:bg-[#6e4dff]/60"
              >
                <Send className={`h-5 w-5 transition ${loading ? 'animate-pulse' : ''}`} />
                {loading ? 'Sending...' : 'Send message'}
              </button>

              <div className="text-sm text-slate-300" role="status" aria-live="polite">
                {status.type === 'success' ? (
                  <span className="text-emerald-400">{status.message}</span>
                ) : null}
                {status.type === 'error' ? (
                  <span className="text-rose-400">{status.message}</span>
                ) : null}
                {status.type === 'idle' && !loading ? (
                  <span>I&apos;ll reply within 24 hours.</span>
                ) : null}
              </div>
            </div>
          </form>

          <ul className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
            <li className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
              <UserRound className="h-5 w-5 text-sky-300" aria-hidden="true" />
              <span>Messages go straight to my inbox.</span>
            </li>
            <li className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
              <MessageSquare className="h-5 w-5 text-sky-300" aria-hidden="true" />
              <span>Expect a thoughtful reply, never a bot.</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="relative flex flex-1 items-center justify-center"
          variants={earthVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="relative h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]">
            <EarthCanvas />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
